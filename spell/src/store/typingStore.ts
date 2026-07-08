import { create } from 'zustand'
import { TypingState, Difficulty, TypingRecord, TypingText, Theme, ImportThemeData } from '@/types'
import { getRandomText, getTextById, getTextsByDifficulty, importTheme, deleteTheme, getAllThemes, getDefaultThemeId } from '@/data/texts'

interface TypingStore extends TypingState {
  startTyping: () => void
  resetTyping: () => void
  updateInput: (input: string) => void
  completeTyping: () => void
  setDifficulty: (difficulty: Difficulty) => void
  selectText: (textId: string) => void
  getStats: () => {
    wpm: number
    accuracy: number
    time: number
    characters: number
    correctCharacters: number
  }
  saveRecord: () => void
  getRecords: () => TypingRecord[]
  themeId: string
  setTheme: (themeId: string) => void
  importTheme: (data: ImportThemeData) => Theme
  deleteTheme: (themeId: string) => boolean
  getAllThemes: () => Theme[]
}

const STORAGE_KEY = 'typing_records'

const loadRecords = (): TypingRecord[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

const saveRecords = (records: TypingRecord[]): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(records))
}

export const useTypingStore = create<TypingStore>((set, get) => ({
  currentText: null,
  userInput: '',
  startTime: null,
  endTime: null,
  status: 'idle',
  difficulty: 'medium',
  selectedTextId: null,
  themeId: getDefaultThemeId(),

  startTyping: () => {
    const { selectedTextId, difficulty, themeId } = get()
    let text: TypingText
    if (selectedTextId) {
      const found = getTextById(selectedTextId)
      text = found || getRandomText(difficulty, themeId)
    } else {
      text = getRandomText(difficulty, themeId)
    }
    set({
      currentText: text,
      userInput: '',
      startTime: Date.now(),
      endTime: null,
      status: 'typing'
    })
  },

  resetTyping: () => {
    set({
      currentText: null,
      userInput: '',
      startTime: null,
      endTime: null,
      status: 'idle'
    })
  },

  updateInput: (input: string) => {
    const { currentText, status } = get()
    if (status !== 'typing' || !currentText) return
    
    if (input.length > currentText.content.length) {
      return
    }
    
    set({ userInput: input })
    
    if (input === currentText.content) {
      get().completeTyping()
    }
  },

  completeTyping: () => {
    set({
      endTime: Date.now(),
      status: 'completed'
    })
    get().saveRecord()
  },

  setDifficulty: (difficulty: Difficulty) => {
    set({ 
      difficulty,
      selectedTextId: null,
      currentText: null
    })
  },

  selectText: (textId: string) => {
    set({ selectedTextId: textId })
  },

  getStats: () => {
    const { currentText, userInput, startTime, endTime } = get()
    if (!currentText || !startTime) {
      return { wpm: 0, accuracy: 0, time: 0, characters: 0, correctCharacters: 0 }
    }
    
    const elapsedTime = endTime ? (endTime - startTime) / 1000 : (Date.now() - startTime) / 1000
    const minutes = Math.max(elapsedTime / 60, 0.01)
    
    let correctCount = 0
    for (let i = 0; i < userInput.length; i++) {
      if (userInput[i] === currentText.content[i]) {
        correctCount++
      }
    }
    
    const wordsTyped = correctCount / 5
    const wpm = Math.round(wordsTyped / minutes)
    const accuracy = userInput.length > 0 ? Math.round((correctCount / userInput.length) * 100) : 100
    
    return {
      wpm,
      accuracy,
      time: Math.round(elapsedTime),
      characters: userInput.length,
      correctCharacters: correctCount
    }
  },

  saveRecord: () => {
    const { currentText, difficulty, getStats } = get()
    if (!currentText) return
    
    const stats = getStats()
    const record: TypingRecord = {
      id: Date.now().toString(),
      wpm: stats.wpm,
      accuracy: stats.accuracy,
      time: stats.time,
      textId: currentText.id,
      difficulty,
      timestamp: new Date()
    }
    
    const records = loadRecords()
    records.push(record)
    saveRecords(records)
  },

  getRecords: () => {
    return loadRecords()
  },

  setTheme: (themeId: string) => {
    set({ 
      themeId,
      selectedTextId: null,
      currentText: null
    })
  },

  importTheme: (data: ImportThemeData) => {
    const newTheme = importTheme(data)
    return newTheme
  },

  deleteTheme: (themeId: string) => {
    const result = deleteTheme(themeId)
    if (result && get().themeId === themeId) {
      set({ themeId: getDefaultThemeId() })
    }
    return result
  },

  getAllThemes: () => {
    return getAllThemes()
  }
}))

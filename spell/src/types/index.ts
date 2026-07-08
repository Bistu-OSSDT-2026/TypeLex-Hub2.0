export type Difficulty = 'easy' | 'medium' | 'hard'

export type TypingStatus = 'idle' | 'typing' | 'completed'

export interface TypingText {
  id: string
  title: string
  content: string
  difficulty: Difficulty
}

export interface Theme {
  id: string
  name: string
  description?: string
  texts: TypingText[]
}

export interface ImportThemeData {
  name: string
  description?: string
  texts: {
    title: string
    content: string
    difficulty: Difficulty
  }[]
}

export interface TypingState {
  currentText: TypingText | null
  userInput: string
  startTime: number | null
  endTime: number | null
  status: TypingStatus
  difficulty: Difficulty
  selectedTextId: string | null
}

export interface TypingRecord {
  id: string
  wpm: number
  accuracy: number
  time: number
  textId: string
  difficulty: Difficulty
  timestamp: Date
}

export interface TypingStats {
  wpm: number
  accuracy: number
  time: number
  characters: number
  correctCharacters: number
}

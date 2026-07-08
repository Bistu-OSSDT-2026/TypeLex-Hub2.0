import { TypingText, Theme, ImportThemeData, Difficulty } from '@/types'

const defaultTheme: Theme = {
  id: 'default',
  name: '默认主题',
  description: '内置的基础练习文本',
  texts: [
    {
      id: 'easy-1',
      title: '猫咪',
      content: 'The quick brown fox jumps over the lazy dog.',
      difficulty: 'easy'
    },
    {
      id: 'easy-2',
      title: '早晨',
      content: 'A beautiful morning with bright sunshine and birds singing.',
      difficulty: 'easy'
    },
    {
      id: 'easy-3',
      title: '咖啡',
      content: 'A warm cup of coffee helps start the day right.',
      difficulty: 'easy'
    },
    {
      id: 'easy-4',
      title: '书籍',
      content: 'Reading good books opens up new worlds and ideas.',
      difficulty: 'easy'
    },
    {
      id: 'easy-5',
      title: '音乐',
      content: 'Listening to music relaxes the mind and lifts the spirit.',
      difficulty: 'easy'
    },
    {
      id: 'medium-1',
      title: '编程',
      content: 'Programming is the art of telling a computer what to do. It requires logic, creativity, and attention to detail.',
      difficulty: 'medium'
    },
    {
      id: 'medium-2',
      title: '自然',
      content: 'Nature provides us with everything we need. From the air we breathe to the food we eat, it sustains all life.',
      difficulty: 'medium'
    },
    {
      id: 'medium-3',
      title: '学习',
      content: 'Continuous learning is essential in today fast-paced world. It keeps our minds sharp and our skills up to date.',
      difficulty: 'medium'
    },
    {
      id: 'medium-4',
      title: '科技',
      content: 'Technology has transformed every aspect of modern life. It connects people across the globe and makes tasks easier.',
      difficulty: 'medium'
    },
    {
      id: 'medium-5',
      title: '友谊',
      content: 'True friendship is a precious gift. It brings joy, support, and meaning to our lives through all seasons.',
      difficulty: 'medium'
    },
    {
      id: 'hard-1',
      title: '人工智能',
      content: 'Artificial intelligence is revolutionizing industries from healthcare to finance. Machine learning algorithms analyze vast amounts of data to make predictions and decisions that were once thought impossible for computers.',
      difficulty: 'hard'
    },
    {
      id: 'hard-2',
      title: '太空探索',
      content: 'Space exploration pushes the boundaries of human knowledge and capability. From landing on the moon to exploring distant planets, each mission brings us closer to understanding our place in the universe.',
      difficulty: 'hard'
    },
    {
      id: 'hard-3',
      title: '气候变化',
      content: 'Climate change is one of the most pressing challenges of our time. It requires global cooperation, innovative solutions, and sustainable practices to protect our planet for future generations.',
      difficulty: 'hard'
    },
    {
      id: 'hard-4',
      title: '数字转型',
      content: 'Digital transformation is reshaping businesses and societies. Cloud computing, big data analytics, and the Internet of Things are creating new opportunities and challenges for organizations worldwide.',
      difficulty: 'hard'
    },
    {
      id: 'hard-5',
      title: '人类潜能',
      content: 'The potential of the human mind is limitless. With curiosity, perseverance, and passion, we can achieve extraordinary things. Every great discovery and invention started with a single idea and the courage to pursue it.',
      difficulty: 'hard'
    }
  ]
}

const STORAGE_KEY = 'typing_themes'

const loadCustomThemes = (): Theme[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

const saveCustomThemes = (themes: Theme[]): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(themes))
}

let customThemes = loadCustomThemes()

export const getAllThemes = (): Theme[] => {
  return [defaultTheme, ...customThemes]
}

export const getThemeById = (themeId: string): Theme | undefined => {
  return getAllThemes().find(theme => theme.id === themeId)
}

export const getTextsByDifficulty = (difficulty: string, themeId?: string): TypingText[] => {
  let texts: TypingText[] = []
  
  if (themeId) {
    const theme = getThemeById(themeId)
    if (theme) {
      texts = theme.texts
    }
  } else {
    texts = getAllThemes().flatMap(theme => theme.texts)
  }
  
  return texts.filter(text => text.difficulty === difficulty)
}

export const getRandomText = (difficulty: string, themeId?: string): TypingText => {
  const texts = getTextsByDifficulty(difficulty, themeId)
  return texts[Math.floor(Math.random() * texts.length)]
}

export const getTextById = (id: string): TypingText | undefined => {
  return getAllThemes().flatMap(theme => theme.texts).find(text => text.id === id)
}

export const importTheme = (data: ImportThemeData): Theme => {
  const newTheme: Theme = {
    id: `custom-${Date.now()}`,
    name: data.name,
    description: data.description,
    texts: data.texts.map((text, index) => ({
      id: `${Date.now()}-${index}`,
      title: text.title,
      content: text.content,
      difficulty: text.difficulty
    }))
  }
  
  customThemes.push(newTheme)
  saveCustomThemes(customThemes)
  
  return newTheme
}

export const deleteTheme = (themeId: string): boolean => {
  if (themeId === 'default') return false
  
  const initialLength = customThemes.length
  customThemes = customThemes.filter(theme => theme.id !== themeId)
  saveCustomThemes(customThemes)
  
  return customThemes.length < initialLength
}

export const getDefaultThemeId = (): string => {
  return defaultTheme.id
}

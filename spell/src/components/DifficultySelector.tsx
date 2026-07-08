import { useTypingStore } from '@/store/typingStore'
import { getTextsByDifficulty } from '@/data/texts'
import { Difficulty } from '@/types'
import { ChevronDown, Trash2 } from 'lucide-react'

const difficultyConfig = {
  easy: {
    label: '简单',
    color: 'bg-green-500/20 text-green-400 hover:bg-green-500/30',
    activeColor: 'bg-green-500 text-white',
    description: '短句'
  },
  medium: {
    label: '中等',
    color: 'bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30',
    activeColor: 'bg-yellow-500 text-white',
    description: '中等段落'
  },
  hard: {
    label: '困难',
    color: 'bg-red-500/20 text-red-400 hover:bg-red-500/30',
    activeColor: 'bg-red-500 text-white',
    description: '长文章'
  }
}

export const DifficultySelector = () => {
  const { difficulty, setDifficulty, status, selectText, selectedTextId, themeId, setTheme, getAllThemes, deleteTheme } = useTypingStore()

  if (status !== 'idle') return null

  const themes = getAllThemes()
  const currentTheme = themes.find(t => t.id === themeId)
  const texts = getTextsByDifficulty(difficulty, themeId)

  const handleDeleteTheme = (e: React.MouseEvent, themeIdToDelete: string) => {
    e.stopPropagation()
    deleteTheme(themeIdToDelete)
  }

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
        <h3 className="text-lg font-semibold text-primary-200">选择难度</h3>
        <div className="relative">
          <select
            value={themeId}
            onChange={(e) => setTheme(e.target.value)}
            className="appearance-none bg-primary-900/80 text-white px-4 py-2 pr-10 rounded-lg text-sm font-medium hover:bg-primary-800/80 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 cursor-pointer border border-white/10"
          >
            {themes.map((theme) => (
              <option key={theme.id} value={theme.id} className="bg-primary-900 text-white">
                {theme.name}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>
      </div>

      {currentTheme?.description && (
        <p className="text-sm text-gray-400 mb-4">{currentTheme.description}</p>
      )}

      <div className="flex flex-wrap gap-2 mb-6">
        {(Object.keys(difficultyConfig) as Difficulty[]).map((diff) => (
          <button
            key={diff}
            onClick={() => setDifficulty(diff)}
            className={`
              px-4 py-2 rounded-lg font-medium transition-all duration-300
              ${difficulty === diff ? difficultyConfig[diff].activeColor : difficultyConfig[diff].color}
            `}
          >
            {difficultyConfig[diff].label}
          </button>
        ))}
      </div>

      <div>
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm text-gray-400">选择要练习的文本：</p>
          {themeId !== 'default' && (
            <button
              onClick={(e) => handleDeleteTheme(e, themeId)}
              className="flex items-center gap-1 px-2 py-1 text-xs text-red-400 hover:bg-red-500/20 rounded transition-colors"
            >
              <Trash2 className="w-3 h-3" />
              删除主题
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {texts.map((text) => (
            <button
              key={text.id}
              onClick={() => selectText(text.id)}
              className={`
                px-4 py-2 rounded-lg text-sm transition-all duration-300
                ${selectedTextId === text.id 
                  ? 'bg-primary-500 text-white' 
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }
              `}
            >
              {text.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

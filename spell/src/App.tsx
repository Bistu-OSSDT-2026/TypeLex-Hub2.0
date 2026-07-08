import { useState, useEffect } from 'react'
import { Keyboard, Upload, Settings } from 'lucide-react'
import { TextDisplay } from '@/components/TextDisplay'
import { Statistics } from '@/components/Statistics'
import { Controls } from '@/components/Controls'
import { DifficultySelector } from '@/components/DifficultySelector'
import { ImportModal } from '@/components/ImportModal'
import { BackgroundSettings } from '@/components/BackgroundSettings'
import { useTyping } from '@/hooks/useTyping'

interface BackgroundConfig {
  type: 'gradient' | 'color' | 'image'
  gradient: {
    from: string
    to: string
    direction: string
  }
  color: string
  image: string
  imageMode: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center'
}

const defaultConfig: BackgroundConfig = {
  type: 'gradient',
  gradient: {
    from: '#1e1b4b',
    to: '#312e81',
    direction: 'to-br'
  },
  color: '#1e1b4b',
  image: '',
  imageMode: 'cover'
}

const STORAGE_KEY = 'typing_background'

const loadConfig = (): BackgroundConfig => {
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : { ...defaultConfig }
  } catch {
    return { ...defaultConfig }
  }
}

function App() {
  const { startTyping, resetTyping, inputRef, status } = useTyping()
  const [isImportModalOpen, setIsImportModalOpen] = useState(false)
  const [isBackgroundModalOpen, setIsBackgroundModalOpen] = useState(false)

  useEffect(() => {
    const config = loadConfig()
    const appRoot = document.getElementById('app-root')
    const patternOverlay = document.getElementById('pattern-overlay')
    
    if (!appRoot) return
    
    const applyBg = (cfg: BackgroundConfig) => {
      appRoot.style.background = ''
      appRoot.style.backgroundColor = ''
      appRoot.style.backgroundImage = ''
      appRoot.style.backgroundSize = ''
      appRoot.style.backgroundRepeat = ''
      appRoot.style.backgroundPosition = ''

      if (cfg.type === 'gradient') {
        appRoot.style.background = `linear-gradient(${cfg.gradient.direction}, ${cfg.gradient.from}, ${cfg.gradient.to})`
        if (patternOverlay) patternOverlay.style.display = 'block'
      } else if (cfg.type === 'color') {
        appRoot.style.backgroundColor = cfg.color
        if (patternOverlay) patternOverlay.style.display = 'block'
      } else if (cfg.type === 'image') {
        appRoot.style.backgroundImage = `url(${cfg.image})`
        appRoot.style.backgroundSize = getBgSize(cfg.imageMode)
        appRoot.style.backgroundRepeat = cfg.imageMode === 'repeat' ? 'repeat' : 'no-repeat'
        appRoot.style.backgroundPosition = 'center'
        if (patternOverlay) patternOverlay.style.display = 'none'
      }
    }

    applyBg(config)
  }, [])

  const getBgSize = (mode: string): string => {
    switch (mode) {
      case 'cover': return 'cover'
      case 'contain': return 'contain'
      case 'stretch': return '100% 100%'
      case 'repeat': return 'auto'
      case 'center': return 'auto'
      default: return 'cover'
    }
  }

  const handleComplete = () => {
    resetTyping()
  }

  return (
    <div className="min-h-screen" id="app-root">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50 pointer-events-none" id="pattern-overlay" />
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <header className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-400 to-purple-500 rounded-2xl mb-4 shadow-lg">
            <Keyboard className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">打字大师</h1>
          <p className="text-primary-200 text-lg mb-4">通过实时反馈练习打字速度</p>
          <div className="flex justify-center gap-3">
            <button
              onClick={() => setIsImportModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-xl text-sm font-medium hover:bg-white/20 transition-all duration-300"
            >
              <Upload className="w-4 h-4" />
              导入主题
            </button>
            <button
              onClick={() => setIsBackgroundModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-xl text-sm font-medium hover:bg-white/20 transition-all duration-300"
            >
              <Settings className="w-4 h-4" />
              背景设置
            </button>
          </div>
        </header>

        <div className="space-y-6">
          <Statistics />

          <DifficultySelector />

          <TextDisplay onComplete={handleComplete} />

          <Controls onStart={startTyping} onReset={resetTyping} />

          {status === 'typing' && (
            <div className="text-center text-primary-200">
              <p className="text-sm">开始打字即可开始练习。使用退格键纠正错误。</p>
              <input
                ref={inputRef}
                type="text"
                className="opacity-0 absolute -z-10"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck={false}
              />
            </div>
          )}
        </div>

        <footer className="mt-16 text-center text-gray-500 text-sm">
          <p>© 2026 打字大师。今天就提升你的打字技能。</p>
        </footer>
      </div>

      <ImportModal isOpen={isImportModalOpen} onClose={() => setIsImportModalOpen(false)} />
      <BackgroundSettings isOpen={isBackgroundModalOpen} onClose={() => setIsBackgroundModalOpen(false)} />
    </div>
  )
}

export default App

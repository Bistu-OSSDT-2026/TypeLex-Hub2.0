import { useState, useEffect } from 'react'
import { X, Palette, Image, RotateCcw, Check } from 'lucide-react'

interface BackgroundSettingsProps {
  isOpen: boolean
  onClose: () => void
}

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

const presetGradients = [
  { name: '深蓝紫', from: '#1e1b4b', to: '#312e81', direction: 'to-br' },
  { name: '极光', from: '#0f0c29', to: '#302b63', direction: 'to-r' },
  { name: '日落', from: '#f093fb', to: '#f5576c', direction: 'to-br' },
  { name: '海洋', from: '#2193b0', to: '#6dd5ed', direction: 'to-r' },
  { name: '森林', from: '#134e5e', to: '#71b280', direction: 'to-br' },
  { name: '暖橙', from: '#ff9a9e', to: '#fecfef', direction: 'to-r' },
  { name: '星空', from: '#0c0c0c', to: '#1a1a2e', direction: 'to-b' },
  { name: '薄荷', from: '#a8edea', to: '#fed6e3', direction: 'to-br' }
]

const imageModes = [
  { value: 'cover', label: '自适应' },
  { value: 'contain', label: '等比适配' },
  { value: 'stretch', label: '拉伸' },
  { value: 'repeat', label: '平铺' },
  { value: 'center', label: '居中' }
]

const STORAGE_KEY = 'typing_background'

const loadConfig = (): BackgroundConfig => {
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : { ...defaultConfig }
  } catch {
    return { ...defaultConfig }
  }
}

const saveConfig = (config: BackgroundConfig): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(config))
}

export const BackgroundSettings = ({ isOpen, onClose }: BackgroundSettingsProps) => {
  const [config, setConfig] = useState<BackgroundConfig>(loadConfig)
  const [error, setError] = useState('')
  const [previewUrl, setPreviewUrl] = useState('')

  useEffect(() => {
    if (config.image) {
      setPreviewUrl(config.image)
    } else {
      setPreviewUrl('')
    }
  }, [config.image])

  useEffect(() => {
    saveConfig(config)
    applyBackground(config)
  }, [config])

  const applyBackground = (cfg: BackgroundConfig) => {
    const appRoot = document.getElementById('app-root')
    const patternOverlay = document.getElementById('pattern-overlay')
    
    if (!appRoot) return
    
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

  const handlePresetSelect = (preset: typeof presetGradients[0]) => {
    setConfig({
      ...config,
      type: 'gradient',
      gradient: {
        from: preset.from,
        to: preset.to,
        direction: preset.direction
      }
    })
    setError('')
  }

  const handleColorChange = (key: 'from' | 'to', value: string) => {
    setConfig({
      ...config,
      type: 'gradient',
      gradient: {
        ...config.gradient,
        [key]: value
      }
    })
  }

  const handleSolidColorChange = (value: string) => {
    setConfig({
      ...config,
      type: 'color',
      color: value
    })
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith('image/')) {
      setError('请上传图片文件')
      return
    }

    if (file.size > 5 * 1024 * 1024) {
      setError('图片大小不能超过 5MB')
      return
    }

    const reader = new FileReader()
    reader.onload = (event) => {
      const result = event.target?.result as string
      setConfig({
        ...config,
        type: 'image',
        image: result
      })
      setError('')
    }
    reader.readAsDataURL(file)
  }

  const handleImageModeChange = (value: string) => {
    setConfig({
      ...config,
      imageMode: value as BackgroundConfig['imageMode']
    })
  }

  const handleReset = () => {
    setConfig({ ...defaultConfig })
    setError('')
  }

  const handleClearImage = () => {
    setConfig({
      ...config,
      type: 'gradient',
      image: ''
    })
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-primary-900 rounded-2xl w-full max-w-lg shadow-2xl border border-white/10">
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center">
              <Palette className="w-5 h-5 text-primary-400" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">背景设置</h2>
              <p className="text-sm text-gray-400">自定义您的打字练习背景</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <h3 className="text-sm font-medium text-gray-300 mb-3">预设渐变</h3>
            <div className="grid grid-cols-4 gap-2">
              {presetGradients.map((preset, index) => (
                <button
                  key={index}
                  onClick={() => handlePresetSelect(preset)}
                  className={`w-full aspect-square rounded-lg transition-transform hover:scale-105 ${
                    config.type === 'gradient' && 
                    config.gradient.from === preset.from && 
                    config.gradient.to === preset.to 
                      ? 'ring-2 ring-primary-500 ring-offset-2 ring-offset-primary-900' 
                      : ''
                  }`}
                  style={{
                    background: `linear-gradient(${preset.direction}, ${preset.from}, ${preset.to})`
                  }}
                  title={preset.name}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-300 mb-3">自定义渐变</h3>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="text-xs text-gray-400 mb-1 block">起始颜色</label>
                <div className="relative">
                  <input
                    type="color"
                    value={config.gradient.from}
                    onChange={(e) => handleColorChange('from', e.target.value)}
                    className="w-full h-10 rounded-lg cursor-pointer bg-transparent"
                  />
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-400">
                    {config.gradient.from}
                  </span>
                </div>
              </div>
              <div className="flex-1">
                <label className="text-xs text-gray-400 mb-1 block">结束颜色</label>
                <div className="relative">
                  <input
                    type="color"
                    value={config.gradient.to}
                    onChange={(e) => handleColorChange('to', e.target.value)}
                    className="w-full h-10 rounded-lg cursor-pointer bg-transparent"
                  />
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-400">
                    {config.gradient.to}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-300 mb-3">纯色背景</h3>
            <div className="relative">
              <input
                type="color"
                value={config.color}
                onChange={(e) => handleSolidColorChange(e.target.value)}
                className="w-full h-12 rounded-lg cursor-pointer"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-300">
                {config.color}
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-300 mb-3">图片背景</h3>
            <div className="space-y-3">
              {!config.image ? (
                <label className="flex flex-col items-center justify-center w-full h-24 border-2 border-dashed border-gray-600 rounded-xl cursor-pointer hover:border-primary-500 transition-colors">
                  <Image className="w-8 h-8 text-gray-400 mb-2" />
                  <span className="text-sm text-gray-400">点击上传图片</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              ) : (
                <div className="relative">
                  <img
                    src={config.image}
                    alt="背景预览"
                    className="w-full h-32 object-cover rounded-xl"
                  />
                  <button
                    onClick={handleClearImage}
                    className="absolute top-2 right-2 p-1 bg-black/50 rounded-lg text-white hover:bg-black/70"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}

              {config.image && (
                <div>
                  <label className="text-xs text-gray-400 mb-1 block">显示模式</label>
                  <div className="flex flex-wrap gap-2">
                    {imageModes.map((mode) => (
                      <button
                        key={mode.value}
                        onClick={() => handleImageModeChange(mode.value)}
                        className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
                          config.imageMode === mode.value
                            ? 'bg-primary-500 text-white'
                            : 'bg-white/10 text-gray-300 hover:bg-white/20'
                        }`}
                      >
                        {mode.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {error && (
            <div className="bg-red-500/20 text-red-400 rounded-xl p-4 text-sm">
              ❌ {error}
            </div>
          )}

          <div className="flex gap-3">
            <button
              onClick={handleReset}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white/10 text-white rounded-xl font-medium hover:bg-white/20 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              重置
            </button>
            <button
              onClick={onClose}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl font-medium hover:from-primary-600 hover:to-primary-700 transition-all"
            >
              <Check className="w-4 h-4" />
              完成
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

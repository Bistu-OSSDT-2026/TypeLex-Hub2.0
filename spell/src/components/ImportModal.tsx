import { useState } from 'react'
import { X, Upload, FileJson, Info } from 'lucide-react'
import { useTypingStore } from '@/store/typingStore'
import { ImportThemeData, Difficulty } from '@/types'

interface ImportModalProps {
  isOpen: boolean
  onClose: () => void
}

const sampleJson = `{
  "name": "我的主题",
  "description": "自定义练习文本",
  "texts": [
    {
      "title": "示例文本1",
      "content": "This is a sample typing text.",
      "difficulty": "easy"
    },
    {
      "title": "示例文本2",
      "content": "Practice makes perfect. Keep typing every day.",
      "difficulty": "medium"
    }
  ]
}`

export const ImportModal = ({ isOpen, onClose }: ImportModalProps) => {
  const { importTheme } = useTypingStore()
  const [jsonInput, setJsonInput] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleImport = () => {
    setError('')
    setSuccess('')

    if (!jsonInput.trim()) {
      setError('请输入 JSON 数据')
      return
    }

    try {
      const data = JSON.parse(jsonInput) as ImportThemeData

      if (!data.name) {
        setError('主题名称不能为空')
        return
      }

      if (!Array.isArray(data.texts) || data.texts.length === 0) {
        setError('请至少添加一个文本')
        return
      }

      for (const text of data.texts) {
        if (!text.title || !text.content) {
          setError('每个文本必须包含 title 和 content')
          return
        }

        const validDifficulties: Difficulty[] = ['easy', 'medium', 'hard']
        if (!validDifficulties.includes(text.difficulty)) {
          setError('难度只能是 easy、medium 或 hard')
          return
        }
      }

      const newTheme = importTheme(data)
      setSuccess(`主题「${newTheme.name}」导入成功！包含 ${newTheme.texts.length} 个文本。`)
      setJsonInput('')
    } catch (e) {
      setError('JSON 格式错误，请检查输入')
    }
  }

  const handleSampleClick = () => {
    setJsonInput(sampleJson)
    setError('')
    setSuccess('')
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-primary-900 rounded-2xl w-full max-w-lg shadow-2xl border border-white/10">
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center">
              <Upload className="w-5 h-5 text-primary-400" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">导入主题</h2>
              <p className="text-sm text-gray-400">通过 JSON 格式导入自定义主题和文本</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div className="bg-white/5 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <FileJson className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium text-yellow-400">JSON 数据</span>
            </div>
            <textarea
              value={jsonInput}
              onChange={(e) => setJsonInput(e.target.value)}
              placeholder='{"name": "主题名称", "texts": [...]}'
              className="w-full h-48 bg-black/30 rounded-lg p-4 text-sm text-white placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>

          <div className="bg-blue-500/10 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-blue-300 mb-2">格式说明：</p>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li>• <code className="text-white">name</code> - 主题名称（必填）</li>
                  <li>• <code className="text-white">description</code> - 主题描述（可选）</li>
                  <li>• <code className="text-white">texts</code> - 文本列表（必填，至少一个）</li>
                  <li>• 每个文本包含 <code className="text-white">title</code>、<code className="text-white">content</code> 和 <code className="text-white">difficulty</code></li>
                  <li>• difficulty 只能是 <code className="text-white">easy</code>、<code className="text-white">medium</code> 或 <code className="text-white">hard</code></li>
                </ul>
              </div>
            </div>
          </div>

          {error && (
            <div className="bg-red-500/20 text-red-400 rounded-xl p-4 text-sm">
              ❌ {error}
            </div>
          )}

          {success && (
            <div className="bg-green-500/20 text-green-400 rounded-xl p-4 text-sm">
              ✅ {success}
            </div>
          )}

          <div className="flex gap-3">
            <button
              onClick={handleSampleClick}
              className="flex-1 px-4 py-3 bg-white/10 text-white rounded-xl font-medium hover:bg-white/20 transition-colors"
            >
              加载示例
            </button>
            <button
              onClick={handleImport}
              className="flex-1 px-4 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl font-medium hover:from-primary-600 hover:to-primary-700 transition-all"
            >
              导入主题
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

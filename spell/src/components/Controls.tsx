import { Play, RotateCcw } from 'lucide-react'
import { useTypingStore } from '@/store/typingStore'

interface ControlsProps {
  onStart: () => void
  onReset: () => void
}

export const Controls = ({ onStart, onReset }: ControlsProps) => {
  const { status } = useTypingStore()

  return (
    <div className="flex items-center justify-center gap-4">
      {status === 'idle' ? (
        <button
          onClick={onStart}
          className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl font-semibold text-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
        >
          <Play className="w-6 h-6" />
          开始打字
        </button>
      ) : (
        <button
          onClick={onReset}
          className="flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300"
        >
          <RotateCcw className="w-6 h-6" />
          {status === 'completed' ? '新练习' : '重置'}
        </button>
      )}
    </div>
  )
}

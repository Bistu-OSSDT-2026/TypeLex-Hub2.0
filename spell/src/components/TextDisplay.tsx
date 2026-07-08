import { useTypingStore } from '@/store/typingStore'

interface TextDisplayProps {
  onComplete?: () => void
}

export const TextDisplay = ({ onComplete }: TextDisplayProps) => {
  const { currentText, userInput, status } = useTypingStore()

  if (!currentText) {
    return (
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 min-h-[200px] flex items-center justify-center">
        <p className="text-gray-400 text-lg">选择难度并点击开始按钮开始打字。</p>
      </div>
    )
  }

  const renderCharacter = (char: string, index: number) => {
    if (index < userInput.length) {
      const isCorrect = userInput[index] === char
      return (
        <span
          key={index}
          className={`
            inline-block
            ${isCorrect 
              ? 'text-accent-correct bg-accent-correct/20' 
              : 'text-accent-wrong bg-accent-wrong/20 underline decoration-accent-wrong'
            }
            rounded px-0.5
          `}
        >
          {char === ' ' ? '·' : char}
        </span>
      )
    } else if (index === userInput.length) {
      return (
        <span
          key={index}
          className="inline-block bg-primary-500 text-white rounded px-0.5 animate-pulse"
        >
          {char === ' ' ? '·' : char}
        </span>
      )
    } else {
      return (
        <span key={index} className="text-gray-300">
          {char === ' ' ? '·' : char}
        </span>
      )
    }
  }

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-primary-200">{currentText.title}</h3>
        {status === 'completed' && (
          <span className="px-3 py-1 bg-accent-correct/20 text-accent-correct rounded-full text-sm font-medium">
            ✅ 已完成
          </span>
        )}
      </div>
      <div className="font-mono text-xl md:text-2xl lg:text-3xl leading-relaxed tracking-wide">
        {currentText.content.split('').map((char, index) => renderCharacter(char, index))}
      </div>
      {status === 'completed' && onComplete && (
        <div className="mt-6 text-center">
          <button
            onClick={onComplete}
            className="px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            再试一次
          </button>
        </div>
      )}
    </div>
  )
}

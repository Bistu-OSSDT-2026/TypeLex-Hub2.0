import { useEffect, useCallback, useRef } from 'react'
import { useTypingStore } from '@/store/typingStore'

export const useTyping = () => {
  const { status, userInput, updateInput, startTyping, resetTyping, currentText } = useTypingStore()
  const inputRef = useRef<HTMLInputElement>(null)

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (status !== 'typing') return
    
    if (e.key === 'Backspace') {
      e.preventDefault()
      updateInput(userInput.slice(0, -1))
      return
    }
    
    if (e.key.length === 1 || e.key === ' ') {
      e.preventDefault()
      updateInput(userInput + e.key)
    }
  }, [status, userInput, updateInput])

  const focusInput = useCallback(() => {
    inputRef.current?.focus()
  }, [])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  useEffect(() => {
    if (status === 'typing') {
      focusInput()
    }
  }, [status, focusInput])

  return {
    inputRef,
    focusInput,
    startTyping,
    resetTyping,
    status,
    userInput,
    currentText
  }
}

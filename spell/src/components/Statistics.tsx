import { Clock, Zap, Target, Type } from 'lucide-react'
import { useTypingStore } from '@/store/typingStore'

interface StatCardProps {
  icon: React.ReactNode
  label: string
  value: string | number
  color: string
}

const StatCard = ({ icon, label, value, color }: StatCardProps) => (
  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/15 transition-all duration-300">
    <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full ${color} mb-2`}>
      {icon}
    </div>
    <div className="text-2xl font-bold text-white">{value}</div>
    <div className="text-sm text-gray-400">{label}</div>
  </div>
)

export const Statistics = () => {
  const { getStats, status, currentText } = useTypingStore()
  const stats = getStats()

  const isActive = status === 'typing' || status === 'completed'

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <StatCard
        icon={<Clock className="w-5 h-5" />}
        label="时间 (秒)"
        value={isActive ? stats.time : '--'}
        color="bg-blue-500/20 text-blue-400"
      />
      <StatCard
        icon={<Zap className="w-5 h-5" />}
        label="每分钟字数"
        value={isActive ? stats.wpm : '--'}
        color="bg-yellow-500/20 text-yellow-400"
      />
      <StatCard
        icon={<Target className="w-5 h-5" />}
        label="准确率"
        value={isActive ? `${stats.accuracy}%` : '--'}
        color="bg-green-500/20 text-green-400"
      />
      <StatCard
        icon={<Type className="w-5 h-5" />}
        label="字符数"
        value={isActive ? `${stats.characters}/${currentText?.content.length || 0}` : '--'}
        color="bg-purple-500/20 text-purple-400"
      />
    </div>
  )
}

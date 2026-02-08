import { Leaf, Zap } from 'lucide-react'

export default function EcoToggle({ ecoMode, toggleEcoMode }) {
  return (
    <div className="flex items-center gap-3 p-4 glass accent rounded-xl">
      <div className="flex items-center gap-2">
        <Zap size={18} className={ecoMode ? 'text-deep-space-500' : 'text-bio-green'} />
        <span className="text-xs font-mono">Normal</span>
      </div>

      <button
        onClick={toggleEcoMode}
        className={`relative w-12 h-6 rounded-full transition-all duration-300 ${
          ecoMode ? 'bg-green-600/30' : 'bg-bio-green/20'
        }`}
      >
        <div
          className={`absolute top-1 w-5 h-4 rounded-full transition-all duration-300 ${
            ecoMode ? 'right-1 bg-green-400' : 'left-1 bg-bio-green'
          }`}
        />
      </button>

      <div className="flex items-center gap-2">
        <span className="text-xs font-mono">Eco</span>
        <Leaf size={18} className={ecoMode ? 'text-green-400' : 'text-deep-space-500'} />
      </div>
    </div>
  )
}

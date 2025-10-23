import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(true) // Start playing by default
  const [isMuted, setIsMuted] = useState(false) // Start unmuted by default
  const audioRef = useRef<HTMLAudioElement>(null)

  // Your romantic song - replace with your music file
  const audioSrc = "/music/birthday-song-md.mp3" // Put your music file in public/music/ folder

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.loop = true
      audioRef.current.volume = 0.3 // Lower volume for background music
      // Auto-play the music when component loads
      audioRef.current.play().catch(error => {
        console.log('Auto-play was prevented:', error)
        setIsPlaying(false) // If auto-play fails, set to not playing
      })
    }
  }, [])

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <div className="flex flex-col gap-2">
        {/* Play/Pause Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={togglePlay}
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
            isPlaying ? 'bg-gold text-ink' : 'bg-white/20 text-white'
          }`}
        >
          {isPlaying ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          )}
        </motion.button>

        {/* Mute Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleMute}
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
            isMuted ? 'bg-red-500 text-white' : 'bg-green-500 text-white'
          }`}
        >
          {isMuted ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.793L5.707 14H3a1 1 0 01-1-1V7a1 1 0 011-1h2.707l2.676-2.793a1 1 0 011-.13zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.793L5.707 14H3a1 1 0 01-1-1V7a1 1 0 011-1h2.707l2.676-2.793a1 1 0 011-.13zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          )}
        </motion.button>
      </div>

      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        src={audioSrc}
        preload="metadata"
      />
    </div>
  )
}

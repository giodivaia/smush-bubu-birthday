import { useState } from "react"
import BirthdayCountdown from "./components/BirthdayCountdown"
import Hero from "./components/Hero"
import TapHouse from "./components/TapHouse"
import PhotoGallery from "./components/PhotoGallery"
import Timeline from "./components/Timeline"
import Future from "./components/Future"
import BackgroundMusic from "./components/BackgroundMusic"
import RosePetals from "./components/RosePetals"

export default function App() {
  const [isUnlocked, setIsUnlocked] = useState(false)

  return (
    <>
      <BirthdayCountdown />
      <main>
        <Hero onUnlock={() => setIsUnlocked(true)} />
        {isUnlocked && (
          <>
            <TapHouse />
            <PhotoGallery />
            <Timeline />
            <Future />
          </>
        )}
        <footer className="py-10 text-center text-white/60">
          Built with love for Smush Bubu. 💕
        </footer>
      </main>
      <BackgroundMusic />
      <RosePetals />
    </>
  )
}
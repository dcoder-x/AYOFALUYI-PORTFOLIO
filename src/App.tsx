import React, { Dispatch, SetStateAction, createContext, useContext, useEffect, useRef, useState } from 'react'
import './App.css'
import LandingPage from './pages/LandingPage'
import bg_audio from './assets/audio/bg-audio.mp3'
import { motion } from 'framer-motion'
import AOS from 'aos';
import 'aos/dist/aos.css';



export type ContextType = {
  sound: boolean|null,
  setSound: Dispatch<SetStateAction<boolean>>
};


export const AppContext = createContext<ContextType | null>(null);

function App() {

  const [sound, setSound] = useState<boolean>(true);
  const audioRef = useRef<HTMLAudioElement|null>(null)


  // AOS init
  useEffect(()=>{
    AOS.init()
  },[])

  useEffect(()=>{
    console.log(sound)
    if (sound) {
      try {
        audioRef.current?.play()
      } catch (error) {
        console.log(error)
        audioRef.current?.play()
      }
    } else {
      audioRef.current?.pause()
    }


    
    
  },[sound])

  

  function forcePlay():void {
    console.log(`error forcePlaying`)
    audioRef.current?.play()
  }

  return (
    <
      
    >
      <AppContext.Provider value={{ sound, setSound }}>
        <LandingPage />
        <audio muted={!sound} src={bg_audio} loop autoPlay={true} ref={audioRef} onLoad={e=>forcePlay()} onError={e=>forcePlay() } ></audio>
      </AppContext.Provider>
    </
    >
  );
}
export default App

import { useState, useEffect } from 'react'
import Player from './components/Player.tsx'
import Featured from './components/Featured.tsx'
import Veto from './components/Veto.tsx'
import './App.css'

function App() {

    const { SCREENHEIGHT, SCREENWIDTH } = useWindowDimensions();



  return (

    <>
        <Player
            SCREENWIDTH={SCREENWIDTH}
            SCREENHEIGHT={SCREENHEIGHT}
        />

        <Featured />
        <Veto />

    </>
  )
}

export default App


function getWindowDimensions() {
    const { innerWidth: SCREENWIDTH, innerHeight: SCREENHEIGHT } = window;
    return {
        SCREENWIDTH,
        SCREENHEIGHT
    };
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}


/*
        <Player
            SCREENWIDTH={SCREENWIDTH}
            SCREENHEIGHT={SCREENHEIGHT}
            />
 */
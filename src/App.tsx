
import Featured from './components/Featured.tsx'
import Veto from './components/Veto.tsx'
import './App.css'
import TeamUtil from './components/TeamUtil.tsx'
import Sponsor from './components/Sponsor.tsx'
import Scoreboard from './components/Scoreboard.tsx'
import Player2 from './components/Player2.tsx'
import VideoTest from './components/VideoTest.tsx'
import BombProgress from "./components/BombProgress.tsx";

function App() {



  return (

    <>

        <Featured side={'t'}/>
        <Veto />
        <TeamUtil side={'ct'}/>
        <TeamUtil side={'t'}/>
        <Sponsor />
        <Scoreboard />
        <Player2 position={'l'} side={'ct'} offset={2} top={32.8} alive={true} />
        <Player2 position={'r'}  side={'t'} offset={2} top={32.8} alive={true} observed={true}/>
        <Player2 position={'l'} side={'ct'} offset={2} top={38} alive={true} />
        <Player2 position={'l'} side={'ct'} offset={2} top={43.2} alive={false} />
        <Player2 position={'l'} side={'ct'} offset={2} top={48.4} alive={false} />
        <Player2 position={'l'} side={'ct'} offset={2} top={53.6} alive={true} />
        <Player2 position={'r'} side={'t'} offset={2} top={38} alive={true} />
        <Player2 position={'r'}  side={'t'} offset={2} top={43.2} alive={false} />
        <Player2 position={'r'}  side={'t'} offset={2} top={48.4} alive={false} />
        <Player2 position={'r'}  side={'t'} offset={2} top={53.6} alive={true} />
      <VideoTest />
        <BombProgress />




    </>
  )
}

export default App


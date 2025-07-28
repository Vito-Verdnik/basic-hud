
import Featured from './components/Featured.tsx'
import Veto from './components/Veto.tsx'
import './App.css'
import TeamUtil from './components/TeamUtil.tsx'
import Sponsor from './components/Sponsor.tsx'
import Scoreboard from './components/Scoreboard.tsx'
import Player2 from './components/Player2.tsx'
function App() {

//TODO: use vw instead of percentages for positioning
    //TODO: rewrite t-ct variation in players so it makes sense positioning wise


  return (

    <>

        <Featured side={'t'}/>
        <Veto />
        <TeamUtil side={'ct'}/>
        <TeamUtil side={'t'}/>
        <Sponsor />
        <Scoreboard />
        <Player2 side={'ct'} left={12} top={58.5} alive={true} />
        <Player2 side={'t'} left={88.2} top={58.5} alive={true} observed={true}/>
        <Player2 side={'ct'} left={12} top={94.5} alive={true} />
        <Player2 side={'ct'} left={12} top={85.5} alive={false} />
        <Player2 side={'ct'} left={12} top={76.5} alive={false} />
        <Player2 side={'ct'} left={12} top={67.5} alive={true} />
        <Player2 side={'t'} left={88.2} top={94.5} alive={true} />
        <Player2 side={'t'} left={88.2} top={85.5} alive={false} />
        <Player2 side={'t'} left={88.2} top={76.5} alive={false} />
        <Player2 side={'t'} left={88.2} top={67.5} alive={true} />





    </>
  )
}

export default App


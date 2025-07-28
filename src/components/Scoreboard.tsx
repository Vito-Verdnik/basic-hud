import './Scoreboard.css'
import SF_LOGO from '../assets/images/SF_Logo.png'
import TS_LOGO from '../assets/images/TS_Logo.png'
import SDP_LOGO from '../assets/images/SDP_Logo.png'
import BesfOfScore from "./BesfOfScore.tsx";



export default function Scoreboard(props: any) {
    let scoreLeft = 12;
    let scoreRight = 12;
    let boLeft = 1;
    let boRight = 0;
    let time = '1:22'
    let round = 13;
    let stage = 'GRAND FINALE'
    let nameLeft = 'SF'
    let nameRight = 'TS'
    let sideLeft = 'ct'
    let sideRight = 't'

    return (
        <div className='scoreboard-div'>
            <div className='scoreboard-div-main'>

                    <span className='scoreboard-name-left'>{nameLeft}</span>
                    <span className='scoreboard-name-right'>{nameRight}</span>


                    <img src={SF_LOGO} className='scoreboard-logo-left'/>
                    <img src={TS_LOGO} className='scoreboard-logo-right'/>



                    <div className='scoreboard-bo-left'>
                        <BesfOfScore side={sideLeft}/>
                    </div>

                    <div className='scoreboard-bo-right'>
                        <BesfOfScore side={sideRight}/>
                    </div>



                    <span className='scoreboard-score-left'>{scoreLeft}</span>
                    <span className='scoreboard-score-right'>{scoreRight}</span>





                <span className='scoreboard-time'>{time}</span>
                <span className='scoreboard-round'>Round {round}/24</span>


            </div>

            <img className='tournament-logo' src={SDP_LOGO} />

            <div className='scoreboard-stage-div'>
                <span className='scoreboard-stage-text'>{stage}</span>
            </div>
            <div className={`scoreboard-side left ${sideLeft}`}> </div>
            <div className={`scoreboard-side right ${sideRight}`}> </div>


        </div>
    )
}
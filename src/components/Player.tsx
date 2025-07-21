import './Player.css'
import {Ak47, Awp, Deagle} from './../assets/Weapons'
import { Armor , Flashbang, Molotov, HeGrenade, SmokeGrenade, IncGrenade} from './../assets/Equipment'
import {KirIcon, DeathIcon, CrosshairIcon} from './../assets/Stats'
export default function Player(props){
    const actualWidth = Math.round(props.SCREENWIDTH * 0.1927)
    const actualHeight = Math.round(props.SCREENHEIGHT * 0.0833)
    const topHeight = Math.round(actualHeight*0.35556);
    const hpHeight = Math.round(actualHeight*0.27778);






    return (
        <div className="player-main-div" style={{ height: `${actualHeight}px`, width: `${actualWidth}px`, borderRadius: '4.33% 4.33% 2.16% 2.16% / 17.83% 17.83% 8.91% 8.91%'}}>

            <div className="player-top-div" style={{ height: `${topHeight}px`, width: `${actualWidth}px`, borderRadius: '3.5% 3.5% 2.16% 2.16% / 45% 45% 26.67% 26.67%'}}>
                <span className="player-top-name" style={{maxWidth: `calc(-6vw + ${actualWidth}px)`}}>Kscerato0000000</span>
                <div className='player-top-weapon-div' style={{ height: `calc(${topHeight}px)` }}>
                    <Awp className="player-top-weapon"  />
                </div>

            </div>
            <div className="player-middle-div" style={{ height: `${actualHeight-topHeight-hpHeight}px`, width: `${actualWidth}px`}}>
                <div className="player-middle-armor-div" style={{height: `${actualHeight-topHeight-hpHeight}px`}}>
                    <Armor className="player-middle-armor" />
                </div>
            </div>

            <div className='player-hp-div' style={{height:`${hpHeight}px`, width: `${actualWidth}px`, borderRadius: '0 0 2.16% 2.16% / 0 0 32% 32%'}}>
                <p>{hpHeight}</p>
            </div>


        </div>
    )
}
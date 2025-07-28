import './Player2.css'
import {Awp, Ak47, Deagle} from '../assets/Weapons.tsx'
import {HealthIcon, DeathIcon, CrosshairIcon, PlayerNumberIcon, ObservedIcon} from '../assets/Stats.tsx'
import {Armor} from '../assets/Equipment.tsx'
import FeaturedKIR from "./FeaturedKIR.tsx"
import BetterEquipment from "./BetterEquipment.tsx"

export default function Player2(props) {
    let alive:boolean = props.alive;
    let observed:boolean = props.observed;
    let side = ['ct', 't'].includes(props.side?.toLowerCase()) ? props.side.toLowerCase() : 'ct';
    // ... rest of the variables ...
    let killsInRound = 5;
    let hp = 70;
    let kills = 3;
    let deaths = 3;
    let name = 'Mlady Swagalot';
    let money = '1000';
    let playerNumber = 2;
    let dmg = 421;
    let left = props.left;
    let top = props.top;

    return (
        <div className="player-div" style={{left: `${left}%`, top: `${top}%`}}>
            <div className={`player-main-div ${side} ${!alive ? 'dead' : ''} ${observed ? 'observed' : ''}`}>
                <div className={`player-top-div ${side} ${!alive ? 'dead' : ''}`}>
                    <span className={`player-top-name ${side} ${!alive ? 'dead' : ''}`}>{name}</span>
                    {alive && (<Ak47 className={`player-top-primary ${side}`}/>)}
                </div>

                <div className={`player-middle-div ${side}`}>
                    {alive && (<Armor className={`player-middle-armor-icon ${side}`}/>)}
                    <div className={`player-middle-kills ${side} ${!alive ? 'dead' : ''}`}>
                        <CrosshairIcon className={`player-middle-kills-icon ${side} ${!alive ? 'dead' : ''}`}/>
                        <span className={`player-middle-kills-count ${side} ${!alive ? 'dead' : ''}`}>{kills}</span>
                    </div>
                    <div className={`player-middle-deaths ${side} ${!alive ? 'dead' : ''}`}>
                        <DeathIcon className={`player-middle-deaths-icon ${side} ${!alive ? 'dead' : ''}`}/>
                        <span className={`player-middle-deaths-count ${side} ${!alive ? 'dead' : ''}`}>{deaths}</span>
                    </div>
                    <div className={`player-middle-kir-container ${side} ${!alive ? 'dead' : ''}`}>
                        <FeaturedKIR alive={alive} count={killsInRound}/>
                    </div>

                    {alive && (<div className={`player-middle-equipment-container ${side}`}>
                        <BetterEquipment secondary={true}/>
                    </div>)}
                </div>

                <div className={`player-bottom-div ${side} ${!alive ? 'dead' : ''}`}>
                    {alive && (<div className={`player-bottom-bar ${side}`} style={{width: `${hp}%`}}/>)}
                    {alive && (<div className={`player-bottom-hp ${side}`}>
                        <HealthIcon className='player-bottom-hp-icon'/>
                        <span className={`player-bottom-hp-text ${side}`}>{hp}</span>
                    </div>)}

                    <div className={`player-bottom-money ${side} ${!alive ? 'dead' : ''}`}>
                        <span className={`player-bottom-money-text ${side} ${!alive ? 'dead' : ''}`}>${money}</span>
                    </div>
                    {!alive && (<div className={`player-bottom-dmg-container ${side}`}>
                        <span className={'player-bottom-dmg'}>DMG:</span>
                        <span className={`player-bottom-dmg-text ${side}`}>{dmg}</span>
                    </div>)}
                </div>
            </div>

            {alive && (<PlayerNumberIcon className={`player-number-icon ${side}`}/>)}
            {alive && (<span className={`player-number-text ${side}`}>{playerNumber}</span>)}

            {observed && (<div className={`player-observed-div ${side}`}>
                <ObservedIcon className='player-observed-icon'/>
            </div>)}
        </div>
    )
}
import './Player.css'
import {Awp} from './../assets/Weapons'
import {Armor} from './../assets/Equipment'
import {DeathIcon, CrosshairIcon, HealthIcon, PlayerNumberIcon, DefuserIcon, ObservedIcon} from './../assets/Stats'
import KillsInRound from './KillsInRound.tsx'
import PlayerEquipment from './PlayerEquipment.tsx'

export default function Player(props) {
    const actualWidth = Math.round(props.SCREENWIDTH * 0.1927)
    const actualHeight = Math.round(props.SCREENHEIGHT * 0.0833)
    const topHeight = Math.round(actualHeight * 0.35556);
    const hpHeight = Math.round(actualHeight * 0.27778);
    const middleHeight = actualHeight - topHeight - hpHeight


    return (
        <div className='player-div' style={{height: `${actualHeight}px`, width: `calc(${actualWidth}px + 2.6vw)`}}>
            <DefuserIcon className='player-defuser-icon'/>
            <ObservedIcon className='player-observed-icon'/>
            <div className='player-master-div'>
                <div className='player-number-div'>
                    <PlayerNumberIcon className='player-number-icon'/>
                    <span className='player-number-text'>1</span>
                </div>


                <div className="player-main-div" style={{
                    height: `${actualHeight}px`,
                    width: `${actualWidth}px`,
                    borderRadius: '4.33% 4.33% 2.16% 2.16% / 17.83% 17.83% 8.91% 8.91%'
                }}>

                    <div className="player-top-div" style={{
                        height: `${topHeight}px`,
                        width: `${actualWidth}px`,
                        borderRadius: '3.5% 3.5% 2.16% 2.16% / 45% 45% 26.67% 26.67%'
                    }}>
                <span className="player-top-name"
                      style={{maxWidth: `calc(-6vw + ${actualWidth}px)`}}>Kscerato0000000</span>
                        <div className='player-top-weapon-div' style={{height: `calc(${topHeight}px)`}}>
                            <Awp className="player-top-weapon"/>
                        </div>

                    </div>
                    <div className="player-middle-div" style={{height: `${middleHeight}px`, width: `${actualWidth}px`}}>
                        <div className="player-middle-armor-div" style={{height: `${middleHeight}px`}}>
                            <Armor className="player-middle-armor"/>

                        </div>
                        <div className="player-middle-kills-div" style={{height: `${middleHeight}px`}}>
                            <CrosshairIcon
                                className="player-middle-kills-icon"
                                style={{
                                    height: `${middleHeight * 0.50}px`, // reduced to 80% of middleHeight
                                    width: `${middleHeight * 0.50}px`,
                                    margin: 'auto' // to keep it centered
                                }}
                            />
                            <span className="player-middle-kills-count">2</span>

                        </div>
                        <div className="player-middle-kir-div" style={{height: `${middleHeight}px`}}>
                            <KillsInRound killsInRound={5} height={middleHeight}/>
                        </div>

                        <div className="player-middle-equipment-div" style={{height: `${middleHeight}px`}}>
                            <PlayerEquipment
                                height={middleHeight}/></div>

                        <div className="player-middle-deaths-div" style={{height: `${middleHeight}px`}}>
                            <DeathIcon
                                className="player-middle-deaths-icon"
                                style={{
                                    height: `${middleHeight * 0.50}px`, // reduced to 80% of middleHeight
                                    width: `${middleHeight * 0.50}px`,
                                    margin: 'auto' // to keep it centered
                                }}
                            />
                            <span className="player-middle-deaths-count">2</span>

                        </div>

                    </div>

                    <div className='player-hp-div' style={{
                        height: `${hpHeight}px`,
                        width: `${actualWidth}px`,
                        borderRadius: '0 0 2.16% 2.16% / 0 0 32% 32%'
                    }}>
                        <div className='player-hp-bar' style={{height: `${hpHeight}px`, width: `${30}%`}}/>
                        <div className='player-hp-info' style={{height: `${hpHeight}px`}}>
                            <div className='player-hp-indicator' style={{height: `${hpHeight}px`}}>
                                <HealthIcon className='player-hp-indicator-icon'
                                            style={{height: `${hpHeight * 0.7}px`}}/>
                                <span className='player-hp-indicator-text'>30</span>
                            </div>
                            <div className='player-hp-money' style={{height: `${hpHeight}px`, width: `${100}%`}}>
                                <span className='player-hp-money-icon'>$</span>
                                <span className='player-hp-money-text'>11000</span>

                            </div>


                        </div>


                    </div>


                </div>
            </div>
        </div>
    )
}
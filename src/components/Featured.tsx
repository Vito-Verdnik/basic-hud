import FeaturedKIR from './FeaturedKIR.tsx'
import FeaturedEquipment from './FeaturedEquipment.tsx'
import './Featured.css';
import {HealthIcon, BulletIcon} from './../assets/Stats.tsx'
import {Armor} from './../assets/Equipment.tsx'



export default function Featured(props:any) {
let killsInRound = 5;
let hp = 70;
let armor = 80;
let bulletsMain = 14;
let bulletsReserve = 80;
let kills=3;
let deaths=3;
let adr=60;
let name = 'Mlady Swagalot';

    return(
        <div className='featured-div' style={{}}>
            <div className='featured-div-main'>
                <div className='featured-main-healthbar'>
                    <div className='featured-main-healthbar-bar' style={{width: `${hp}%`}}>

                    </div>
                    {[25, 50, 75].map((percent) => (
                        <div
                            key={percent}
                            className="progress-marker"
                            style={{ left: `${percent}%` }}
                        />
                    ))}

                </div>

                <div className='featured-main-hp-div'>
                    <HealthIcon className='featured-main-hp-icon'/>
                    <span className='featured-main-hp-text'>{hp}</span>
                </div>

                <div className='featured-main-armor-div'>
                    <Armor className='featured-main-armor-icon'/>
                    <span className='featured-main-armor-text'>{armor}</span>
                </div>

                <div className='featured-main-bullets-div'>
                    <BulletIcon className='featured-main-bullets-icon'/>
                    <span className='featured-main-bullets-text'>{bulletsMain}</span>
                    <span className='featured-main-bullets-text-slash'>/</span>
                    <span className='featured-main-bullets-text-reserve'>{bulletsReserve}</span>

                </div>

                <div className='featured-main-kills-div'>
                    <span className='featured-main-kills-text'>K</span>
                    <span className='featured-main-kills-count'>{kills}</span>
                </div>
                <div className='featured-main-deaths-div'>
                    <span className='featured-main-deaths-text'>D</span>
                    <span className='featured-main-deaths-count'>{deaths}</span>
                </div>
                <div className='featured-main-adr-div'>
                    <span className='featured-main-adr-text'>ADR</span>
                    <span className='featured-main-adr-count'>{adr}</span>

                </div>

                <div className='featured-main-util-div'>
                    <FeaturedEquipment
                        numbers = {false}
                    />
                </div>
            </div>

            <div className='featured-div-name'>
                <span className='featured-name-text'>{name}</span>

            </div>

            <div className='featured-div-kir'>
                <FeaturedKIR count = {killsInRound} />
            </div>
        </div>
    )
}
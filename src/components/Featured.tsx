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
    let side = ['ct', 't'].includes(props.side?.toLowerCase()) ? props.side.toLowerCase() : 'ct';

    return(
        <div className='featured-div'>
            <div className={`featured-div-main ${side}`}>
                <div className={`featured-main-healthbar ${side}`}>
                    <div className={`featured-main-healthbar-bar ${side}`} style={{width: `${hp}%`}}>
                    </div>
                    {[25, 50, 75].map((percent) => (
                        <div
                            key={percent}
                            className={`progress-marker ${side}`}
                            style={{ left: `${percent}%` }}
                        />
                    ))}
                </div>

                <div className='featured-main-hp-div'>
                    <HealthIcon className={`featured-main-hp-icon ${side}`}/>
                    <span className='featured-main-hp-text'>{hp}</span>
                </div>

                <div className='featured-main-armor-div'>
                    <Armor className={`featured-main-armor-icon ${side}`}/>
                    <span className='featured-main-armor-text'>{armor}</span>
                </div>

                <div className='featured-main-bullets-div'>
                    <BulletIcon className='featured-main-bullets-icon'/>
                    <span className='featured-main-bullets-text'>{bulletsMain}</span>
                    <span className={`featured-main-bullets-text-slash ${side}`}>/</span>
                    <span className={`featured-main-bullets-text-reserve ${side}`}>{bulletsReserve}</span>
                </div>

                <div className='featured-main-kills-div'>
                    <span className={`featured-main-kills-text ${side}`}>K</span>
                    <span className='featured-main-kills-count'>{kills}</span>
                </div>
                <div className='featured-main-deaths-div'>
                    <span className={`featured-main-deaths-text ${side}`}>D</span>
                    <span className='featured-main-deaths-count'>{deaths}</span>
                </div>
                <div className='featured-main-adr-div'>
                    <span className={`featured-main-adr-text ${side}`}>ADR</span>
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
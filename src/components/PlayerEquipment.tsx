import './Player.css';
import {Deagle} from './../assets/Weapons'
import './PlayerEquipment.css';
import { Flashbang, Molotov, HeGrenade, SmokeGrenade, IncGrenade } from './../assets/Equipment'
export default function PlayerEquipment(props: any) {










    return (
        <div className='equipment_div_main' style={{height: `${props.height}px`}}>
          <Deagle className='sidearm' style={{height: `${props.height* 0.90}px`}}/>
            <IncGrenade className='incgrenade' style={{height: `${props.height * 0.95}px`}}/>
          <SmokeGrenade className='smokegrenade' style={{height: `${props.height * 0.90}px`}}/>
          <HeGrenade className='hegrenade' style={{height: `${props.height * 0.87}px`}}/>
            <Flashbang className='flashbang' style={{height: `${props.height * 0.89}px`}}/>
        </div>
    )
}
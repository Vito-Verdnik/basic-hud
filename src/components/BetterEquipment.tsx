import './BetterEquipment.css'
import {Flashbang, IncGrenade, HeGrenade, SmokeGrenade} from '../assets/Equipment.tsx'
import {Deagle} from "../assets/Weapons.tsx";

// First, define the props interface
interface FeaturedEquipmentProps {
    numbers?: boolean;
    fillColor?: string;
}

export default function BetterEquipment(props) {



    return (
        <div className="better-equipment">
            {props.secondary && <Deagle className='better-equipment-deagle' />}
            <Flashbang className='better-equipment-flashbang'/>
            <IncGrenade className='better-equipment-incgrenade'/>
            <HeGrenade className='better-equipment-hegrenade'/>
            <SmokeGrenade className='better-equipment-smokegrenade' />
        </div>
    );
}
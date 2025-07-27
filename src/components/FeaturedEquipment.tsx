import './FeaturedEquipment.css'
import {Flashbang, IncGrenade, HeGrenade, SmokeGrenade} from '../assets/Equipment.tsx'



export default function FeaturedEquipment() {
    return (
        <div className="featured-equipment">
            <Flashbang className='featured-equipment-flashbang'/>
            <IncGrenade className='featured-equipment-incgrenade'/>
            <HeGrenade className='featured-equipment-hegrenade'/>
            <SmokeGrenade className='featured-equipment-smokegrenade'/>
        </div>
    )
}
import './FeaturedEquipment.css'
import {Flashbang, IncGrenade, HeGrenade, SmokeGrenade} from '../assets/Equipment.tsx'
import {Deagle} from "../assets/Weapons.tsx";

// First, define the props interface
interface FeaturedEquipmentProps {
    numbers?: boolean;
    fillColor?: string;
}

export default function FeaturedEquipment({ numbers = false, fillColor }: FeaturedEquipmentProps) {
    // Create a style object that will be applied to SVG components
    const svgStyle = fillColor ? { fill: fillColor } : undefined;
    
    return (
        <div className="featured-equipment">
            <div className='featured-equipment-flashbang-div'>
                <Flashbang className='featured-equipment-flashbang' style={svgStyle} />
                {numbers && <span className='number-flashbang'>1</span>}
            </div>

            <div className='featured-equipment-incgrenade-div'>
                <IncGrenade className='featured-equipment-incgrenade' style={svgStyle} />
                {numbers && <span className='number-incgrenade'>2</span>}
            </div>

            <div className='featured-equipment-hegrenade-div'>
                <HeGrenade className='featured-equipment-hegrenade' style={svgStyle} />
                {numbers && <span className='number-hegrenade'>3</span>}
            </div>

            <div className='featured-equipment-smokegrenade-div'>
                <SmokeGrenade className='featured-equipment-smokegrenade' style={svgStyle} />
                {numbers && <span className='number-smokegrenade'>4</span>}
            </div>
        </div>
    );
}
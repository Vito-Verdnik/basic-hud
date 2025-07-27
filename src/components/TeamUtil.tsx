import './TeamUtil.css';
import FeaturedEquipment from "./FeaturedEquipment.tsx";



export default function TeamUtil(props) {


    return (
        <div className='team-util-div'>
            <FeaturedEquipment numbers={true} fillColor='white' />
        </div>
    )
}
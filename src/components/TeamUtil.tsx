import './TeamUtil.css';
import FeaturedEquipment from "./FeaturedEquipment.tsx";



export default function TeamUtil(props) {
let side = ['ct', 't'].includes(props.side?.toLowerCase()) ? props.side.toLowerCase() : 'ct';

    return (
        <div className={`team-util-div ${side}`}>
        <FeaturedEquipment numbers={true} fillColor='white' />
        </div>
    )
}

import {KirIcon} from './../assets/Stats';
import './FeaturedKIR.css';


export default function FeaturedKIR(props) {
    return (
        <div className='featured-kir-div'>
            <div className='featured-kir-icon-container'>
                <KirIcon className='featured-kir-icon' />
            </div>

            <div className='featured-kir-count-container'>
                <span className='featured-kir-count'>{props.count}</span>
            </div>


        </div>
    )
}
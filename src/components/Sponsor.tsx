import './Sponsor.css'
import BET_LOGO from '../assets/images/1xbetlogo.png';


export default function Sponsor(props) {
    return (
        <div className='sponsor-div'>
            <img src={BET_LOGO} alt="nah" className="sponsor-image"/>
        </div>
    )
}
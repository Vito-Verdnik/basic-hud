import './Veto.css';
import AncientLogo from '../assets/images/Ancient_LOGO.png'
import NukeLogo from '../assets/images/Nuke_LOGO.png'
import DustLogo from '../assets/images/Dust_LOGO.png'
export default function Veto() {
    return (
        <div className="veto-main-div">


            <div className="veto-div">
                    <img src={AncientLogo} alt="nah" className="veto-image"/>
                <div className="veto-text">
            <span className="veto-picked-by">
                Picked by:
            </span>
                    <span className="veto-team">
                Vitality
            </span>

                    <div className="veto-score">
                <span className="veto-score-left">
                    13
                </span>
                        <span className="veto-score-center">
                    :
                </span>

                        <span className="veto-score-right">
                    7
                </span>
                    </div>
                </div>
            </div>


            <div className="veto-div">
                <img src={NukeLogo} alt="nah" className="veto-image"/>
                <div className="veto-text">
            <span className="veto-picked-by">
                Picked by:
            </span>
                    <span className="veto-team">
                Faze
            </span>

                    <div className="veto-score">
                <span className="veto-score-left">

                </span>
                        <span className="veto-score-center" style={{color: 'white'}}>
                    Now
                </span>

                        <span className="veto-score-right">

                </span>
                    </div>
                </div>
            </div>

            <div className="veto-div">
                <img src={DustLogo} alt="nah" className="veto-image"/>
                <div className="veto-text-decider">
            <span className="veto-picked-by-decider">
                Decider
            </span>
                    <span className="veto-team">
            </span>

                    <div className="veto-score">
                <span className="veto-score-left">

                </span>
                        <span className="veto-score-center">
                    Next
                </span>

                        <span className="veto-score-right">

                </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
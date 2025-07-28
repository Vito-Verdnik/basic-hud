import './Player2.css';
import {KirIcon} from './../assets/Stats';
import './KiR.css';

export default function KillsInRound(props: any) {










    return (
        <div className='kir_div_main' style={{height: `${props.height}px`, width: `${props.height}px`}}>
            <KirIcon className='kir_icon'    />
            <p className='kir_count'>{props.killsInRound}</p>


        </div>
    )
}
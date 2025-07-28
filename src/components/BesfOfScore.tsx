import './Scoreboard.css'

export default function BesfOfScore(props) {
    return (
        <div className='best-of-score-div'>
            <div className={`best-of-score-shape ${props.side.toLowerCase()}`} />
            <div className='best-of-score-shape' />
        </div>
    )
}
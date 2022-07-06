
const Score = (props) => {
  return (
    <>
    <div className="score-card">
      <h4>Score: {props.score.score}</h4>
      <h4>Earned on: {props.score.date}</h4>
    </div>
    </>
  )
}

export default Score
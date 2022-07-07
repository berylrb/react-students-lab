import Score from "./Score"


const Student = (props) => {
  return (
    <>
    <div className="centered-flex student-info">
      <div className="student-name">
        <h2>{props.student.name}</h2>
      </div>
      <div className="centered-flex bio-score">
        <h3 className="student-bio">{props.student.bio}</h3>
        <div className="centered-flex score-els">
          <div className="score-h3">
            <h3>Scores earned:</h3>
          </div>
          <div className="centered-flex all-scores">
            {props.student.scores.map(score => 
              <Score key={score.score} score={score}/>
            )}
          </div>
        </div>
      </div>
      <p>Bio generated with AI by <a href="https://rytr.me/"> Rytr.me</a></p>
    </div>
    </>
  )
}

export default Student
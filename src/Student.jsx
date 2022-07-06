import Score from "./Score"


const Student = (props) => {
  return (
    <>
    <div className="student-info">
      <h2>{props.student.name}</h2>
      <h3>{props.student.bio}</h3>
      <h3>Scores earned:</h3>
      {props.student.scores.map(score => 
      <Score key={props.index} score={score}/>
      )}
    </div>
    </>
  )
}

export default Student
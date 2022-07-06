import Score from "./Score"


const Student = (props) => {
  return (
    <>
    <div className="student-info centered-flex">
      <h2>{props.student.name}</h2>
      <h3 className="student-bio">{props.student.bio}</h3>
      <h3>Scores earned:</h3>
      {props.student.scores.map(score => 
      <Score key={score} score={score}/>
      )}
    </div>
    </>
  )
}

export default Student
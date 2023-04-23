import "./scoreCard.css";

export default function ScoreCard({ score, name }) {
  return (
    <div className="score">
      <h4>Name:{name}</h4>
      <h6>Score:</h6>
      <p>{score}</p>
    </div>
  );
}

import "./scoreCard.css";

export default function ScoreCard({ score, name, count }) {
  let position = "regular";
  if (count === 1) {
    position = "winner";
  } else if (count === 2) {
    count = "🥈";
    position = "second";
  } else if (count === 3) {
    position = "third";
    count = "🥉";
  }
  return (
    <div id="score" className={position}>
      <h3>
        Leaderboard Position:{count}
        {count === 1 ? "st 👑 " : null}
        {count > 3 ? "th" : null}
      </h3>
      <h4>{name}</h4>
      <h4>
        {score.toLocaleString("en-US", {
          style: "decimal",
          maximumFractionDigits: 0,
        })}{" "}
        pounds CO2 per year!
      </h4>
    </div>
  );
}

import axios from "axios";
import "./ScoresList.css";
import { useEffect, useState } from "react";
import ScoreCard from "./ScoreCard";

const API = process.env.REACT_APP_BASE_URL;

export default function ScoresList() {
  const [Scores, setScores] = useState([]);

  function handleScore(input) {
    let accumulator = 0;
    accumulator +=
      input.electric * 105 +
      input.gas * 105 +
      input.oil * 113 +
      input.car_mileage * 0.79 +
      input.short_flights * 1100 +
      input.long_flights * 4400;
    if (!input.recycle_newspaper) {
      accumulator += 184;
    }
    if (!input.recycle_aluminium) {
      accumulator += 166;
    }

    return accumulator;
  }

  useEffect(() => {
    axios.get(`${API}greenscores`).then((res) => {
      res.data.sort((a, b) => {
        a = handleScore(a);
        b = handleScore(b);
        return a - b;
      });
      setScores(res.data);
    });
  }, []);

  return (
    <div className="score-list">
      {Scores.map((score, index) => {
        return (
          <ScoreCard
            score={handleScore(score)}
            key={score.id}
            name={score.name}
            count={index + 1}
          />
        );
      })}
    </div>
  );
}

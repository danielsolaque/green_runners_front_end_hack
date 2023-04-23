import { useNavigate } from "react-router-dom";
import "./New.css";
import axios from "axios";
import { useState } from "react";
const API = process.env.REACT_APP_BASE_URL;

export default function New() {
  const [totalScore, setTotalScore] = useState(0);
  const [newScore, setNewScore] = useState({
    name: "",
    city: "",
    electric: 0,
    gas: 0,
    oil: 0,
    car_mileage: 0,
    short_flights: 0,
    long_flights: 0,
    recycle_newspaper: false,
    recycle_aluminium: false,
  });

  const navigate = useNavigate();

  function handleInputChange(event) {
    setNewScore({
      ...newScore,
      [event.target.id]: event.target.value,
    });
  }

  function handleCheckboxChange(event) {
    event.preventDefault();
    setNewScore({
      ...newScore,
      [event.target.id]: event.target.checked,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let total = 0;

    total +=
      newScore.electric * 105 +
      newScore.gas * 105 +
      newScore.oil * 113 +
      newScore.car_mileage * 0.79 +
      newScore.short_flights * 1100 +
      newScore.long_flights * 4400;

    if (!newScore.recycle_newspaper) {
      total += 184;
    }

    if (!newScore.recycle_aluminium) {
      total += 166;
    }

    setTotalScore(total);
  }

  function handleShareScore() {
    console.log("Sending data to backend");
    console.log(newScore);
    axios.post(`${API}greenscores`, newScore).then(() => navigate("/scores"));
  }
  return (
    <div>
      <header className="upsert-form-header">
        <h2>Please introduce:</h2>
      </header>
      <form className="upsert-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={newScore.name}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            value={newScore.city}
            onChange={handleInputChange}
          />
        </div>

        <h2>Please answer the following questions:</h2>
        <div className="form-field">
          <label htmlFor="electric">
            How much was your electric bill this month?:
          </label>
          <input
            type="number"
            id="electric"
            value={newScore.electric}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="gas">How much was your gas bill this month?</label>
          <input
            type="number"
            id="gas"
            value={newScore.gas}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="oil">How much was your oil bill this month?</label>
          <input
            type="number"
            id="oil"
            value={newScore.oil}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="car_mileage">
            How many total miles did you drive this year?
          </label>
          <input
            type="number"
            id="car_mileage"
            value={newScore.car_mileage}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="short_flights">
            How many flights have you taken in the past year that are less than 4 hours?
          </label>
          <input
            type="number"
            id="short_flights"
            value={newScore.short_flights}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="long_flights">
          How many flights have you taken in the past year that are more than 4 hours?
          </label>
          <input
            type="number"
            id="long_flights"
            value={newScore.long_flights}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="recycle_newspaper">Do you recycle newspaper?</label>
          
          <input
            type="checkbox"
            id="recycle_newspaper"
            value={newScore.recycle_newspaper}
            onChange={handleCheckboxChange}
          />
          <span className="yes">Yes I Do!</span> 
        </div>
        <div className="form-field">
          <label htmlFor="recycle_aluminium">
            Do you recycle aluminium or tin?
          </label>
          <input
            type="checkbox"
            id="recycle_aluminium"
            value={newScore.recycle_aluminium}
            onChange={handleCheckboxChange}
          />
          <span className="yes">Yes I Do!</span> 
        </div>

        <button type="submit">Calculate my footprint</button>
      </form>

      <br />

      <div className="upsert-form">
        <h2>Your footprint score is: {totalScore}</h2>
        <p>
          *Keep in mind that an “ideal” carbon footprint (or a “low” footprint)
          is anywhere from 6,000 to 15,999 pounds per year. 16,000-22,000 is
          considered average. Under 6,000 is considered very low. Over 22,000?
          You may want to take some “living green” practices into consideration.
        </p>
        <p>
          **This score is based on the "Environmental Equation" formula
          developed by ecologist Alexandra Shimo-Barry.
        </p>
        <h4>
          Invite your friends and join the competition for the care of the
          planet, click here:
        </h4>
        <br />
        <button onClick={handleShareScore}>Compete Now</button>
      </div>
    </div>
  );
}

// Multiply your monthly electric bill by 105

// Multiply your monthly gas bill by 105

// Multiply your monthly oil bill by 113

// Multiply your total yearly mileage on your car by .79

// Multiply the number of flights you’ve taken in the past year (4 hours or less) by 1,100

// Multiply the number of flights you’ve taken in the past year (4 hours or more) by 4,400

// Add 184 if you do NOT recycle newspaper

// Add 166 if you do NOT recycle aluminum and tin

// Add 1-8 together for your total carbon footprint

// GOALS : 1. powerPoint PResentation (slides), 2.CSS CSS CSS 3. About 4. tips/form css
          
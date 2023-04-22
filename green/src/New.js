import "./New.css";

import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// id SERIAL PRIMARY KEY,
//     name TEXT NOT NULL,
//     electric INT,
//     gas INT,
//     oil INT,
//     car_mileage INT,
//     flights INT,
//     recycle_newspaper BOOLEAN,
//     recycle_aluminum BOOLEAN
export default function New() {
  // const navigate = useNavigate();
  const [totalScore, setTotalScore] = useState(0);
  const [newScore, setNewScore] = useState({
    name: "",
    electric: "",
    gas: "",
    oil: "",
    car_mileage: "",
    short_flights: "",
    long_flights: "",
    recycle_newspaper: "",
    recycle_aluminum: "",
    city: "",
  });

  // {
  //   name: ,
  //   city: ,
  //   total: ,
  // }

  function handleInputChange(event) {
    setNewScore({
      ...newScore,
      [event.target.id]: event.target.value,
    });
  }

  function handleCheckboxChange(event) {
    setNewScore({
      ...newScore,
      [event.target.id]: event.target.checked,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let total = 0;

    const computedElectric = Number(newScore.electric) * 105;
    const computedGas = Number(newScore.gas) * 105;
    const computedOil = Number(newScore.oil) * 113;
    const computedCarMileage = Number(newScore.car_mileage) * 79;
    const computedShortFlights = Number(newScore.short_flights) * 1100;
    const computedLongFlights = Number(newScore.long_flights) * 4400;

    if (!newScore.recycle_newspaper) {
      total += 184;
    }

    if (!newScore.recycle_aluminum) {
      total += 166;
    }

    total +=
      computedElectric +
      computedGas +
      computedOil +
      computedCarMileage +
      computedLongFlights +
      computedShortFlights;

    setTotalScore(total);
    // const acumulatedScore = {
    //   ...newScore,
    //   newScore,
    // };

    // createNewScore(newScore).then((newScoreEnd) => {
    //   navigate("/scores");
    // });
  }

  function handleShareScore() {
    console.log("Sending data to backend");
    // Implement backend communication
    // POST data from newScore to backend

    // fetch(myserver, {
    //   method: "POST",
    //   body: JSON.stringify()
    // })
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

        {/* <div className="form-field">
          <label htmlFor="category">Today's Date:</label>
          <input
            type="text"
            id="category"
            value={newScore.category}
            onChange={handleInputChange}
          />
        </div> */}

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
          <label htmlFor="carMileage">
            How much was your car mileage this year?
          </label>
          <input
            type="number"
            id="carMileage"
            value={newScore.carMileage}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="short_flights">
            How many the number of short flights you’ve taken in the past year?
            (4 hours or less)
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
            How many the number of long flights you’ve taken in the past year?
            (4 hours or more)
          </label>
          <input
            type="number"
            id="long_flights"
            value={newScore.long_flights}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="recycle_newspaper">Have you recycle newspaper?</label>
          <input
            type="checkbox"
            id="recycle_newspaper"
            value={newScore.recycle_newspaper}
            onChange={handleCheckboxChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="recycle_aluminium">
            Have you recycle aluminum and tin?
          </label>
          <input
            type="checkbox"
            id="recycle_aluminium"
            value={newScore.recycle_aluminum}
            onChange={handleCheckboxChange}
          />
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

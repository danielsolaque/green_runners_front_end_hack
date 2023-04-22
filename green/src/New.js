import "./New.css";

import { useState } from "react";
// import { useNavigate } from "react-router-dom";

export default function New() {
// const navigate = useNavigate();    
const [newScore, setNewScore] = useState({
  author: "",
  city: "",
  created_at: "",
  electric: "",
  gas: "",
  oil: "",
  car_mileage: "",
  flights: "",
  recycle_newspaper: "",
  recycle_aluminum: "",
});

  function handleInputChange(event) {
    setNewScore({
      ...newScore,
      [event.target.id]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    // const acumulatedScore = {
    //   ...newScore,
    //   newScore,
    // };

    // createNewScore(newScore).then((newScoreEnd) => {
    //   navigate("/scores");
    // });
  }
  return (
    <div>
      <header className="upsert-form-header">
        <h2>Please introduce:</h2>
      </header>
      <form className="upsert-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="title">Name:</label>
          <input
            type="text"
            id="title"
            value={newScore.title}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="author">City:</label>
          <input
            type="text"
            id="author"
            value={newScore.name}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="category">Today's Date:</label>
          <input
            type="text"
            id="category"
            value={newScore.category}
            onChange={handleInputChange}
          />
        </div>
        <h2>Please answer the following questions:</h2>
        <div className="form-field">
          <label htmlFor="brand">
            How much was your electric bill this month?:
          </label>
          <input
            type="text"
            id="brand"
            value={newScore.brand}
            onChange={handleInputChange}
          />
        </div>

        {/* <div className="form-field">
          <label htmlFor="model">Model</label>
          <input
            type="text"
            id="model"
            value={newScore.model}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            value={newScore.description}
            onChange={handleInputChange}
          />
        </div> */}

        <br />
        <input className="submit-button" type="submit" />
      </form>
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
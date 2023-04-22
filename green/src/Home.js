import "./Home.css";
import hackathonPhoto from "./hackathonPhoto.jpeg";

export default function Home() {
  return (
    <div className="home">
      <h1>Welcome to Green Runners</h1>
      <img
        src={hackathonPhoto}
        alt="hackathonPhoto"
        style={{
          display: "block",
          width: "50%",
          height: "auto",
          marginTop: "20px",
          maxWidth: "400px",
          borderRadius: "10%",
        }}
      />
    </div>
  );
}

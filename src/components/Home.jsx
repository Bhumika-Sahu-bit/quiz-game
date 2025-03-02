import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to the Quiz</h1>
      <Link to="/quiz">
        <button className="start-btn">Start Quiz</button>
      </Link>
    </div>
  )
}

export default Home
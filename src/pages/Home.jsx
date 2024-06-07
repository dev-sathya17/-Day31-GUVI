import Navbar from "../components/navbar/Navbar";
import { FaCircleArrowRight } from "react-icons/fa6";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="section-container">
        <section>
          <h1>Our Authors</h1>
          <FaCircleArrowRight />
        </section>
        <section>
          <h1>Our Books</h1>
          <FaCircleArrowRight />
        </section>
      </div>
    </div>
  );
};

export default Home;

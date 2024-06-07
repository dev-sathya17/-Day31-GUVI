import Navbar from "../components/navbar/Navbar";
import { FaCircleArrowRight } from "react-icons/fa6";
import { authors } from "../data/authorData";
import "./Home.css";
import Grid from "../components/grid/Grid";
import { books } from "../data/bookData";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const nav = useNavigate();
  const navigate = (page) => {
    nav(`/${page}`);
  };

  return (
    <div>
      <Navbar />
      <div className="section-container">
        <section>
          <p className="section-title">Our Authors</p>
          <div className="grid-container">
            {authors.map((author, index) => (
              <Grid key={index} image={author.image} title={author.name} />
            ))}
            <FaCircleArrowRight
              className="arrow"
              onClick={() => navigate("authors")}
            />
          </div>
        </section>
        <section>
          <p className="section-title">Our Books</p>
          <div className="grid-container">
            {books.map((book, index) => (
              <Grid key={index} image={book.image} title={book.title} />
            ))}
            <FaCircleArrowRight
              className="arrow"
              onClick={() => navigate("books")}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;

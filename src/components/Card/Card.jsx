import { AiFillEdit } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import "./Card.css";
const Card = ({ data, type, handleDelete, setIsUpdate, handleUpdate }) => {
  return (
    <div className="my-card">
      <div>
        <img
          className={type === "author" ? "card-img" : "book-img"}
          src={data.image}
          alt={type === "author" ? data.name : data.title}
        />
      </div>

      <div className="text-contents">
        <div className="icons">
          <AiFillEdit
            className="edit-icon"
            onClick={() => handleUpdate(data)}
          />
          <FaTrashAlt
            className="delete-icon"
            onClick={() => handleDelete(data.id)}
          />
        </div>
        <p className="text title">
          {type === "author" ? data.name : data.title}
        </p>
        <p className="text dob">{type === "author" ? data.dob : data.author}</p>
        {type === "books" ? (
          <p className="text isbn">ISBN: {data.ISBN}</p>
        ) : (
          <></>
        )}
        <p className="text">
          {type === "author" ? data.bio : data.publicationDate}
        </p>
      </div>
    </div>
  );
};

export default Card;

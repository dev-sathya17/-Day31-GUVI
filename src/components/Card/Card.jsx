import "./Card.css";
const Card = ({ data, type }) => {
  console.log(data);
  return (
    <div className="my-card">
      <div>
        <img
          className="card-img"
          src={data.image}
          alt={type === "author" ? data.name : data.title}
        />
      </div>
      <div className="text-contents">
        <p className="text title">
          {type === "author" ? data.name : data.title}
        </p>
        <p className="text dob">{type === "author" ? data.dob : data.author}</p>
        {type === "book" ? <p className="text">{data.ISBN}</p> : <></>}
        <p className="text">
          {type === "author" ? data.bio : data.publicationDate}
        </p>
      </div>
    </div>
  );
};

export default Card;

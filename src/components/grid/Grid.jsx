import "./Grid.css";
const Grid = ({ image, title }) => {
  return (
    <div className="box-container">
      <img src={image} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default Grid;

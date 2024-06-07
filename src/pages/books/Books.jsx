import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { useFormik } from "formik";
import Card from "../../components/Card/Card";
import "./Books.css";
import { books } from "../../data/bookData";

const validate = (values) => {
  const errors = {};
  if (!values.title) {
    errors.title = "Title is required";
  }
  if (!values.publicationDate) {
    errors.publicationDate = "Date of Birth is required";
  }
  if (!values.ISBN) {
    errors.ISBN = "ISBN Id is required";
  }
  if (!values.image) {
    errors.image = "Image is required";
  }
  if (!values.author) {
    errors.author = "Author name is required";
  }
  const currentDate = new Date();
  const dob = new Date(values.publicationDate);
  if (dob > currentDate) {
    errors.dob = "Date of Birth cannot be in the future";
  }
  return errors;
};

const Books = () => {
  const [data, setData] = useState(books);
  const [isUpdate, setIsUpdate] = useState(false);
  const formik = useFormik({
    initialValues: {
      id: data.length + 1,
      title: "",
      author: "",
      ISBN: "",
      publicationDate: "",
      image: "",
    },
    validate,
    onSubmit: (values) => {
      if (isUpdate) {
        setData(
          data.map((author) => (author.id === values.id ? values : author))
        );
        setIsUpdate(false);
      } else {
        console.log("here");
        setData([...data, values]);
      }
      formik.resetForm();
    },
  });

  const handleDelete = (id) => {
    setData(data.filter((author) => author.id !== id));
  };

  const handleUpdate = (data) => {
    setIsUpdate(true);
    formik.setValues(data);
  };

  return (
    <div>
      <Navbar />
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          id="title"
          name="title"
          value={formik.values.title}
          onChange={formik.handleChange}
          placeholder="Book Title:"
        />
        <div className="error">
          <p>{formik.errors.title}</p>
        </div>
        <input
          type="text"
          id="author"
          name="author"
          value={formik.values.author}
          onChange={formik.handleChange}
          placeholder="Author:"
        />
        <div className="error">
          <p>{formik.errors.author}</p>
        </div>
        <input
          type="date"
          id="publicationDate"
          name="publicationDate"
          value={formik.values.publicationDate}
          onChange={formik.handleChange}
          placeholder="Publication Date:"
        />
        <div className="error">
          <p>{formik.errors.publicationDate}</p>
        </div>
        <input
          type="text"
          id="ISBN"
          name="ISBN"
          value={formik.values.ISBN}
          onChange={formik.handleChange}
          placeholder="ISBN:"
        />
        <div className="error">
          <p>{formik.errors.ISBN}</p>
        </div>
        <input
          type="text"
          id="image"
          name="image"
          value={formik.values.image}
          onChange={formik.handleChange}
          placeholder="Image URL:"
        />
        <div className="error">
          <p>{formik.errors.image}</p>
        </div>
        <button className="btn btn-outline-dark" type="submit">
          SUBMIT
        </button>
      </form>
      <div className="card-container">
        {data.map((book, index) => {
          return (
            <Card
              key={index}
              data={book}
              type="books"
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Books;

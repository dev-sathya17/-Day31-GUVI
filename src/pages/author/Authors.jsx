import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { authors } from "../../data/authorData";
import { useFormik } from "formik";
import Card from "../../components/Card/Card";
import "./Author.css";
const validate = (values) => {
  console.log(values);
  const errors = {};
  if (!values.name) {
    errors.name = "Name is required";
  }
  if (!values.dob) {
    errors.dob = "Date of Birth is required";
  }
  if (!values.bio) {
    errors.bio = "Biography is required";
  }
  if (!values.image) {
    errors.image = "Image is required";
  }
  const currentDate = new Date();
  const dob = new Date(values.dob);
  if (dob > currentDate) {
    errors.dob = "Date of Birth cannot be in the future";
  }
  return errors;
};

const Authors = () => {
  const [data, setData] = useState(authors);
  const [isUpdate, setIsUpdate] = useState(false);
  const formik = useFormik({
    initialValues: {
      id: data.length + 1,
      name: "",
      dob: "",
      bio: "",
      image: "",
    },
    validate,
    onSubmit: (values) => {
      if (isUpdate) {
        setData(
          data.map((author) => (author.id === values.id ? values : author))
        );
      } else {
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
          id="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          placeholder="Name:"
        />
        <div className="error">
          <p>{formik.errors.name}</p>
        </div>
        <input
          type="date"
          id="dob"
          name="dob"
          value={formik.values.dob}
          onChange={formik.handleChange}
          placeholder="Date of Birth:"
        />
        <div className="error">
          <p>{formik.errors.dob}</p>
        </div>
        <textarea
          type="text"
          id="bio"
          name="bio"
          value={formik.values.bio}
          onChange={formik.handleChange}
          placeholder="Biography:"
        />
        <div className="error">
          <p>{formik.errors.bio}</p>
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
        {data.map((author, index) => {
          return (
            <Card
              key={index}
              data={author}
              type="author"
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Authors;

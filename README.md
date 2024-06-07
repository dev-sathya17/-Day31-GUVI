# GUVI - DAY 30

## React Axios Task

### How to run the project on your machine:

1. Pull the repository to your local machine.

```
git pull
```

2. To install all the dependencies:

```
npm install
```

3. Once everything is installed successfully, now it's time to run the server.

```
npm run dev
```

### Dependencies used

1. React Router Dom

```
npm install react-router-dom
```

2. React Icons

```
npm install react-icons
```

3. Formik

```
npm install formik
```

### About the Task

> - The project is a depiction of using the `formik` library to handle forms and validating values in ReactJS.
> - We perform all the basic CRUD Operations on internal data.
> - CRUD stands for Create, Read, Update and Delete.
> - `Formik` library helps easy handling and validation of forms and form values.

### Code Flow and Explanation

> - We initialise the project with routes.
> - Routes are the URLs or Endpoints which are associated with independent components that are rendered when the respective routes are hit on the browser.
> - We use `react-router-dom` to work with routes in our react application.
> - We use `createBrowserRouter` function to create routes in our react application and map them to components which act like webpages. These pages are located in the _pages_ folder.
> - The createBrowserRouter function accepts an array of objects where each object has a route and a component associated with it.
> - This is our Home page. [Source Directory](./src/pages/home/Home.jsx)
> - This Home page contains a simple UI with 2 sections, one for authors and another for books. It has a Navbar and 2 sections to navigate while providing a gist about the data we have in our _Book Club_.
> - Datas for authors and books are located seperately in the data folder. [Source Directory](./src/data/)
> - We use different components with their own css file located in the components folder. [Source Directory](./src/components/)
> - We fetch the data from the exported data in our local directory and assign it to a state variable for it to be re-rendered whenever the state is updated.
> - We use the `useState` hook to achieve this.
> - Different handler are declared in the home page such as `handleUpdate` and `handleDelete`.
> - This handlers are invoked whenever the associated event is triggered.
> - We validate the data in the form, using the `validate` function and add this function to our formik object.
> - This validate function is called everytime the value of an input field is changed, and the value is validated.
> - We set errors in an `errors` object and return it.
> - The errors are shown below the field in the UI.
> - We submit the form using formik's internal handleSubmit function, which is overridden with out custom logic. We add this user object to our users state using the `rest operator`.
> - The `handleUpdate` and `handleDelete` handlers are used to perform `update` and `delete` operations respectively over the authors or books data.
> - CSS for respective components is handled separately for it to be cleaner and easier to understand.
> - The UI is made responsive using `media queries` in CSS.

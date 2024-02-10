import "./Form.css";

export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    // console.log(data);

    const isForGoodWeather = data.isForGoodWeather === "on" ? true : false;

    const newActivity = {
      name: data.activity,
      isForGoodWeather: isForGoodWeather,
    };
    // console.log(newActivity);
    onAddActivity(newActivity);

    event.target.reset();
    event.target.elements.activity.focus();
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Add a new activity</h2>

      <div className="formField">
        <div>
          <label htmlFor="activity">Name:</label>
          <input name="activity" className="activity" required />
        </div>
        <div>
          <label htmlFor="weather">Good-weather activity? </label>
          <input name="isForGoodWeather" className="weather" type="checkbox" />
        </div>
        <button className="submitButton" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}

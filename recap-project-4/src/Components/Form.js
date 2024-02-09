import "./Form.css";

export default function Form() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);

    const isForGoodWeather = data.isForGoodWeather === "on" ? true : false;

    const newActivity = {
      name: data.activity,
      isForGoodWeather: isForGoodWeather,
    };
    console.log(newActivity);

    event.target.reset();
    event.target.elements.activity.focus();
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>Add a new activity</h1>
      <div className="formField">
        <label htmlFor="activity">Activity</label>
        <input name="activity" className="activity" required />
        <label htmlFor="weather">Good-weather activity?</label>
        <input name="isForGoodWeather" className="weather" type="checkbox" />
        <button>Submit</button>
      </div>
    </form>
  );
}

//onClick={onAddActivity}
//data.isForGoodWeather === "on"? true : false;

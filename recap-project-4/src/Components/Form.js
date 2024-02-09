import "./Form.css";

export default function Form() {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    event.target.reset();

    function onAddActivity() {}
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>Add a new activity</h1>
      <div className="formField">
        <label htmlFor="activity">Activity</label>
        <input name="activity" className="activity" required />
        <label htmlFor="weather">Good-weather activity</label>
        <input name="isGoodWeather" className="weather" type="checkbox" />
        <button>Submit</button>
      </div>
    </form>
  );
}

//onClick={onAddActivity}

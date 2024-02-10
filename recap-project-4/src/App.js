//import logo from "./logo.svg";
import { uid } from "uid";
import "./App.css";
import Form from "./Components/Form/Form";
import { useEffect, useState } from "react";
import List from "./Components/List/List";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const [currentWeather, setCurrentWeather] = useState();
  const [temperature, setTemperature] = useState();
  const [isGoodWeather, setisGoodWeather] = useState();

  function handleAddActivity(newActivity) {
    // console.log(newActivity);

    setActivities([{ ...newActivity, id: uid() }, ...activities]);
  }

  /*   function handleAddActivity(newActivity) {
    setActivities([{...newActivity, id: uid()}, ...activities])
 } */

  const activitiesForGoodWeather = activities.filter(
    (activity) => activity.isForGoodWeather === true
  );

  const activitiesForBadWeather = activities.filter(
    (activity) => activity.isForGoodWeather === false
  );

  const emoji = isGoodWeather ? "☀️" : "🌧️";
  //const currentTemperature = data.temperature;

  console.log(activities);

  useEffect(() => {
    async function startFetching() {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather"
      );
      const data = await response.json();
      console.log(data);

      setCurrentWeather(data.isGoodWeather);
      setTemperature(data.temperature);
    }
    startFetching();
  }, []);

  return (
    <div className="App">
      <h1 className="headline">Show me the weather!</h1>
      <p className="display">
        {emoji}
        {} °C
      </p>
      <List
        activitiesForGoodWeather={activitiesForGoodWeather}
        activitiesForBadWeather={activitiesForBadWeather}
        temperature={temperature}
        isForGoodWeather={isGoodWeather}
      />
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;

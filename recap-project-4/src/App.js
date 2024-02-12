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

  const activitiesForGoodWeather = activities.filter(
    (activity) => activity.isForGoodWeather === true
  );

  const activitiesForBadWeather = activities.filter(
    (activity) => activity.isForGoodWeather === false
  );

  const emoji = isGoodWeather ? "☀️" : "🌧️";
  const currentTemperature = temperature;

  function handleDelete(id) {
    setActivities(activities.filter((activity) => activity.id !== id));
  }

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
    const interval = setInterval(startFetching, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <h1 className="headline">Show me the weather!</h1>
      <p className="display">
        {emoji}
        {temperature} °C
      </p>
      <List
        activitiesForGoodWeather={activitiesForGoodWeather}
        activitiesForBadWeather={activitiesForBadWeather}
        temperature={temperature}
        isForGoodWeather={isGoodWeather}
        activities={activities}
        onAddActivity={handleAddActivity}
        onDelete={handleDelete}
      />
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;

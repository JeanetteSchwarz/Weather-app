//import logo from "./logo.svg";
import { uid } from "uid";
import "./App.css";
import Form from "./Components/Form/Form";
//import { useState } from "react";
import List from "./Components/List/List";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  function handleAddActivity(newActivity) {
    // console.log(newActivity);

    setActivities([{ ...newActivity, id: uid }, ...activities]);
  }

  const activitiesForGoodWeather = activities.filter(
    (activity) => activity.isForGoodWeather === true
  );

  const activitiesForBadWeather = activities.filter(
    (activity) => activity.isForGoodWeather === false
  );

  console.log(activities);

  return (
    <div className="App">
      <h1 className="headline">Show me the weather!</h1>
      <List
        activitiesForGoodWeather={activitiesForGoodWeather}
        activitiesForBadWeather={activitiesForBadWeather}
      />
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;

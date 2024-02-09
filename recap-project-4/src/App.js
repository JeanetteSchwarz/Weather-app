//import logo from "./logo.svg";
import { uid } from "uid";
import "./App.css";
import Form from "./Components/Form";
import { useState } from "react";
import List from "./Components/List";

function App() {
  const [activities, setActivities] = useState([]);

  function handleAddActivity(newActivity) {
    // console.log(newActivity);

    setActivities([{ newActivity, id: uid }, ...activities]);
  }

  console.log(activities);

  return (
    <div className="App">
      <h1 className="headline">Show me the weather!</h1>
      <List activities={activities} />
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;

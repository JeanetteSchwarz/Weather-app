//import logo from "./logo.svg";
import "./App.css";
import Form from "./Components/Form";
import { useState } from "react";
import { uid } from "uid";

function App() {
  const [activities, setActivities] = useState("");

  function handleAddActivity(newActivity) {
    setActivities([...activities], { id: uid }, ...newActivity);
  }

  handleAddActivity();

  return (
    <div className="App">
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;

import "./List.css";

export default function List(activities) {
  console.log(activities);
  return (
    <>
      <div>
        <h2>Some Weather? Maybe you are up to this:</h2>
        <ul className="list">
          {activities.map(({ activity }) => (
            <li className="listItem" key={activity.id}>
              {activity.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

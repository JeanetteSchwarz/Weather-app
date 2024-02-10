import "./List.css";

export default function List(
  activitiesForGoodWeather,
  activitiesForBadWeather,
  temperature,
  isGoodWeather,
  activities
) {
  console.log(activitiesForBadWeather, activitiesForGoodWeather);

  /* const activities = isGoodWeather
    ? activitiesForGoodWeather
    : activitiesForBadWeather; */

  const whichWeather = activitiesForGoodWeather
    ? "Weather is fine, let's go outside and eat cake"
    : "Weather is poor, let's stay inside and eat cake";

  return (
    <>
      <div>
        <h2>{whichWeather}</h2>
        <ul className="list">
          {activities.map((activity) => (
            <li key={activity.id}>
              <p className="activity-list">{activity.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

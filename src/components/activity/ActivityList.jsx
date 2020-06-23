import React, { useState } from 'react';
import Activity from './Activity';
import './ActivityList.css';

const activities = [
  { id: '1', title: 'cardio', description: 'Lorem Lorem' },
  { id: '2', title: 'echo', description: 'Lorem Lorem' },
  { id: '3', title: 'ostéo', description: 'Lorem Lorem' },
  { id: '4', title: 'radio', description: 'Lorem Lorem' },
];

function ActivityList() {
  const [purchasedActivities, setPurchasedActivities] = useState([]);

  return (
    <div className="backActivities">
      <div className="allMeActivity">
        <section className="MeActivity">
          <header>
            <h1>Mes Activités</h1>
            <p>veuillez cocher les Activités de votre établisment (max 20)</p>
          </header>
          <button type="button" className="ValButMeActivity" onClick={() => console.log(purchasedActivities)}>
            Valider
        </button>
        </section>
        {activities.map((activity) => (
          <Activity
            activity={activity}
            toggle={() => {
              const purchasedIndex = purchasedActivities.findIndex((purchasedActivity) => purchasedActivity.id === activity.id);
              const isPurchased = (purchasedIndex !== -1);
              if (isPurchased) {
                setPurchasedActivities(
                  purchasedActivities.filter((purchasedActivity) => purchasedActivity.id !== activity.id),
                );
              }
              else {
                setPurchasedActivities(
                  [...purchasedActivities, activity],
                );
              }
            }}
            initialChecked={purchasedActivities.findIndex((purchasedActivity) => purchasedActivity.id === activity.id) !== -1}
          />
        ))}
      </div>
    </div>
  );
}
export default ActivityList;

import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Activity from './Activity';
import './ActivityList.css';

function ActivityList() {
  const [purchasedActivities, setPurchasedActivities] = useState([]);
  const [allActivities, setAllActivities] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:8000/activities')
      .then((res) => res.data)
      .then((data) => {
        setAllActivities(data);
        console.log(data);
      });
  });

  return (
    <div className="backActivityList">
      <div className="allActivityList">
        <section className="TitleActivityList">
          <header>
            <h1>Mes Activités</h1>
            <p>Veuillez cocher les Activités de votre établisment (20 activités maximum)</p>
          </header>
          <button type="button" className="ValButActivityList" onClick={() => console.log(purchasedActivities)}>
            Valider
          </button>
        </section>
        {allActivities.map((activity) => (
          <Activity
            activity={activity}
            toggle={() => {
              const purchasedIndex = purchasedActivities.findIndex((purchasedActivity) => purchasedActivity.id === activity.id);
              const isPurchased = (purchasedIndex !== -1);
              if (isPurchased) {
                setPurchasedActivities(
                  purchasedActivities.filter((purchasedActivity) => purchasedActivity.id !== activity.id),
                );
              } else {
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

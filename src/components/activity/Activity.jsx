import React, { useState } from 'react';
import './Activity.css';


function Activity({ activities }) {
  const [purchasedActivities, setPurchasedActivities] = useState([]);

  return (
    activities.map((activity) => (
      <section className="unActivity">
        <div className="TitleAndDecri">
          <h1 className="TitleActivity">{activity.title}</h1>
          <details className="DetailActivity">
            <summary />
            <p>{activity.description}</p>
          </details>
        </div>
        <div className="Toogle">
          <label className="switch">

            <input
              type="checkbox"
              onChange={() => {
                const purchasedIndex = purchasedActivities.findIndex((purchasedActivity) => purchasedActivity.id === activity.id);
                const isPurchased = (purchasedIndex !== -1);
                if (isPurchased) {
                  setPurchasedActivities(
                    purchasedActivities.filter((purchasedActivity) => purchasedActivity.id !== activity.id)
                  );
                }
                else {
                  setPurchasedActivities(
                    [...purchasedActivities, activity]
                  );
                }
              }}
            />
            <span className="slider round" />
          </label>
        </div>
      </section>
    )));
}
export default Activity;

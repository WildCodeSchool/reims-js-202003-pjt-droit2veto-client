import React, { useState } from 'react';
import './Activity.css';


function Activity({ activity, toggle, initialChecked }) {
  const [checked, setChecked] = useState(initialChecked);

  return (
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
              toggle();
              setChecked((previousChecked) => !previousChecked);
            }}
            checked={checked}
          />
          <span className="slider round" />
        </label>
      </div>
    </section>
  );
}
export default Activity;

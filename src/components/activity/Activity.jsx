import React from 'react';
import './Activity.css';


function Activity({ activities }) {
  return (
    activities.map((act) => (
      <section className="unActivity">
        <div className="TitleAndDecri">
          <h1 className="TitleActivity">{act.title}</h1>
          <details className="DetailActivity">
            <summary />
            <p>{act.décrition}</p>
          </details>
        </div>
        <div className="Toogle">
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round" />
          </label>
        </div>
      </section>
    )));
}
export default Activity;

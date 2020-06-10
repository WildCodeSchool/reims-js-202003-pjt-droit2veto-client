import React from 'react';
import Activity from './Activity';
import './ActivityList.css';

function ActivityList() {
  return (
    <div className="allMeActivity">
      <section className="MeActivity">
        <div>
          <h1>Mes Activités</h1>
          <p>veuillez cocher les Activités de votre établisment (max 20)</p>
        </div>
        <button className="ValButMeActivity" onClick={() => console.log('je suis un boutton!')}>
          Valider
      </button>
      </section>
      <div>
        <Activity title="échocardiographie" descritions="sqijdkqd,lqkxajdgsjql<xjjfgs" />
        <Activity title="échographie" descritions="sqijdkqd,lqkxajdgsjql<xjjfgs" />
        <Activity title="médecine générale" descritions="sqijdkqd,lqkxajdgsjql<xjjfgs" />
        <Activity title="médecine interne" descritions="sqijdkqd,lqkxajdgsjql<xjjfgs" />
        <Activity title="ostéopathie" descritions="sqijdkqd,lqkxajdgsjql<xjjfgs" />
        <Activity title="pneumologie" descritions="sqijdkqd,lqkxajdgsjql<xjjfgs" />
      </div>
    </div>
  );
}
export default ActivityList;
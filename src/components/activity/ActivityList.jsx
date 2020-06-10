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
        <Activity title="échocardiographie" descrition="sqijdkqd,lqkxajdgsjql<xjjfgs" />
        <Activity title="échographie" descrition="sqijdkqd,lqkxajdgsjql<xjjfgs" />
        <Activity title="médecine générale" descrition="sqijdkqd,lqkxajdgsjql<xjjfgs" />
        <Activity title="médecine interne" descrition="sqijdkqd,lqkxajdgsjql<xjjfgs" />
        <Activity title="ostéopathie" descrition="sqijdkqd,lqkxajdgsjql<xjjfgs" />
        <Activity title="pneumologie" descrition="sqijdkqd,lqkxajdgsjql<xjjfgs" />
      </div>
    </div>
  );
}
export default ActivityList;

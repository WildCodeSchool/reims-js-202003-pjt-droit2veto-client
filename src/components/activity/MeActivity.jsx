import React from 'react';
import Activity from './Activity';
import './MeActivity.css';

function MeActivity() {
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
        <Activity title="échocardiographie" decritions="sqijdkqd,lqkxajdgsjql<xjjfgs" />
        <Activity title="échographie" decritions="sqijdkqd,lqkxajdgsjql<xjjfgs" />
        <Activity title="médecine générale" decritions="sqijdkqd,lqkxajdgsjql<xjjfgs" />
        <Activity title="médecine interne" decritions="sqijdkqd,lqkxajdgsjql<xjjfgs" />
        <Activity title="ostéopathie" decritions="sqijdkqd,lqkxajdgsjql<xjjfgs" />
        <Activity title="pneumologie" decritions="sqijdkqd,lqkxajdgsjql<xjjfgs" />
      </div>
    </div>
  );
}
export default MeActivity;
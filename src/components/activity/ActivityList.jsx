import React from 'react';
import Activity from './Activity';
import './ActivityList.css';

function ActivityList() {
  const tableauActivity = [
    { id: '1', title: 'orstéo', décrition: 'ifjzojso' },
    { id: '2', title: 'orstéo', décrition: 'ifjzojso' },
    { id: '3', title: 'orstéo', décrition: 'ifjzojso' },
    { id: '4', title: 'orstéo', décrition: 'ifjzojso' },
  ];
  return (
    <div className="allMeActivity">
      <section className="MeActivity">
        <div>
          <h1>Mes Activités</h1>
          <p>veuillez cocher les Activités de votre établisment (max 20)</p>
        </div>
      </section>
      <div>
        <Activity activities={tableauActivity} />
      </div>
    </div>
  );
}
export default ActivityList;

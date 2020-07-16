import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Activity from './Activity';
import {
  BrowserRouter as
    Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import './ActivityList.css';
import { connect } from 'react-redux';
import { saveAs } from 'file-saver';

const mapStateToProps = (state) => ({
  id: state.id,
  admin: state.admin,
});

function ActivityList({ id, admin, history }) {
  const [purchasedActivities, setPurchasedActivities] = useState([]);
  const [allActivities, setAllActivities] = useState([]);
  const [color, setColor] = useState('#003366');

  useEffect(() => {
    Axios.get(`http://localhost:8000/users/${id}/activities`)
      .then((res) => res.data)
      .then((data) => {
        setPurchasedActivities(data);
        Axios.get('http://localhost:8000/activities')
          .then((res) => res.data)
          .then((data) => {
            setAllActivities(data);
          });
      });
  }, []);

  const generatePdf = () => {
    Axios.post(`http://localhost:8000/generatePdf/${id}/activities`, purchasedActivities)
      .then(() => Axios.get(`http://localhost:8000/generatePdf/${id}/pdf`, { responseType: 'blob' }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
        saveAs(pdfBlob, 'newPdf.pdf');
      });
  };

  return (
    <div className="backActivityList">
      <div className="allActivityList">
        <section>
          <header className="TitleActivityList">
            <h1>Mes Activités</h1>
            <p>Veuillez cocher les activités de votre établissement (20 activités maximum)</p>
          </header>
          <div className="buttonActivityDiv">
            {admin === 1
              && <Link to="/manageactivities" className="buttonAdmin">Admin</Link>}
            <button type="button" className="ValButActivityList" onClick={() => generatePdf()}>
              PDF
            </button>
          </div>
        </section>
        {allActivities.map((activity) => (
          <div className="activityListAll">
            <img src={`http://localhost:8000/${activity.logo}`} alt="" className="logoActivity" />
            <Activity
              activity={activity}
              userId={id}
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
              initialChecked={purchasedActivities.findIndex((purchasedActivity) => purchasedActivity.Activities_id === activity.id) !== -1}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
export default connect(mapStateToProps)(ActivityList);

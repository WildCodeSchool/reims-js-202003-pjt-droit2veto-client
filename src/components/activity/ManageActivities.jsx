import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import './ManageActivities.css';

const mapStateToProps = (state) => ({
  admin: state.admin,
});


const ManageActivities = ({ admin, history }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [allActivities, setAllActivities] = useState([]);


  function post() {
    Axios.post('http://localhost:8000/activities', { title, description }).then(
      (res) => alert('enregistrement reussi'),
    );
  }

  function deleteActivity(activityId) {
    Axios.delete(`http://localhost:8000/activities/${activityId}`);
  }
  function getAllActivities() {
    Axios.get('http://localhost:8000/activities')
      .then((res) => res.data)
      .then((data) => {
        setAllActivities(data);
      });
  }

  useEffect(() => {
    getAllActivities();
  }, []);


  return (
    <form onSubmit={(event) => {
      post();
      getAllActivities();
      event.preventDefault();
    }}
    >
      <>
        <h1 className="titreManageAdmin">Zone Adminitration :</h1>
        <div className="AdminLabel">
          <div>
            <label htmlFor="Title" />
            <p>Titre de l'activité :</p>
            <input className="logPageFormInput" type="title" name="title" id="title" placeholder="" onChange={(event) => setTitle(event.target.value)} required />
          </div>
          <div>
            <label htmlFor="description" />
            <p>Description de l'activité :</p>
            <input className="logPageFormInput" type="text" name="text" id="text" placeholder="" onChange={(event) => setDescription(event.target.value)} required />
          </div>
          <button type="submit" className="AdminValidationLabelButton">valider</button>
        </div>
        {allActivities.map((activity) => (
          <section className="ListeActivitiesAdmin">
            <div className="AdminTitleAndDiscription">
              <h1 className="AdminTitle">
                {activity.title}
                :
              </h1>
              <p className="AdminDiscription">{activity.description}</p>
            </div>
            <button
              type="button"
              onClick={
                () => {
                  deleteActivity(activity.id);
                  getAllActivities();
                }
              }
              className="ButtonSupManageadmin"
            >
              X
            </button>
          </section>
        ))}
      </>
    </form>


  );
};

export default connect(mapStateToProps)(ManageActivities);

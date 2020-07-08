import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  admin: state.admin,
});

const ManageActivities = () => {
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
      <button type="submit">valider</button>
      {allActivities.map((activity) => (
        <>
          <p>{activity.title}</p>
          <button
            type="button"
            onClick={
              () => {
                deleteActivity(activity.id);
                getAllActivities();
              }
            }
          >
            supprimer
          </button>
        </>
      ))}
    </form>


  );
};

export default connect(mapStateToProps)(ManageActivities);

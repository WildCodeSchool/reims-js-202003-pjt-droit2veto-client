import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  admin: state.admin,
});

const Admin = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  function post() {
    Axios.post('http://localhost:8000/activities', { title, description }).then(
      (res) => alert('enregistrement reussi'),
    );
  }

  return (
    <form onSubmit={(event) => {
      post();
      event.preventDefault();
    }}
    >
      <div>
        <label htmlFor="Title" />
        <p>Titre de activité :</p>
        <input className="logPageFormInput" type="title" name="title" id="title" placeholder="" onChange={(event) => setTitle(event.target.value)} required />
      </div>
      <div>
        <label htmlFor="description" />
        <p>Description de activité :</p>
        <input className="logPageFormInput" type="text" name="text" id="text" placeholder="" onChange={(event) => setDescription(event.target.value)} required />
      </div>
      <button type="submit">validé</button>
    </form>
  );
};

export default connect(mapStateToProps)(Admin);

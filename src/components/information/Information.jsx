import React, { useState, useEffect } from 'react';
import './Information.css';
import Axios from 'axios';
import { connect } from 'react-redux';


const mapStateToProps = (state) => ({
  id: state.id,
});

function Information({ id }) {
  const [user, setUser] = useState(null);


  useEffect(() => {
    Axios.get(`http://localhost:8000/users/${id}`)
      .then((res) => {
        setUser(res.data);
      });
  }, []);

  return (
    user && (
      <>
        <div className="backInfo">
          <form
            className="formInfo"
            onSubmit={(event) => {
              Axios.put(`http://localhost:8000/users/${id}`, { ...user })
                .then(() => alert('enregistrement reussi'));
              event.preventDefault();
            }}
            name="formulaire"
          >
            <h1 className="titleInfo">Mes informations</h1>
            <label htmlFor="nom" className="labelInfo">
              Nom
            </label>
            <input
              type="text"
              name="nom"
              id="nom"
              className="inputInfo"
              onChange={(event) => setUser({ ...user, lastname: event.target.value })}
              value={user.lastname}
            />
            <label htmlFor="prenom" className="labelInfo">
              Prénom
            </label>
            <input type="text" name="prénom" id="prénom" className="inputInfo" onChange={(event) => setUser({ ...user, firstname: event.target.value })}
              value={user.firstname} />
            <label htmlFor="email" className="labelInfo">
              Email
            </label>
            <input type="email" name="mail" id="email" className="inputInfo" value={user.email} />
            <label htmlFor="ordinal" className="labelInfo">
              Numéro ordinal
            </label>
            <input type="text" name="ordinal" id="ordinal" className="inputInfo" value={user.ordinal_number} />
            <label htmlFor="etablissement" className="labelInfo">
              Nom de l'établissement
            </label>
            <input type="text" name="etablissement" id="etablissement" className="inputInfo" onChange={(event) => setUser({ ...user, establishment_name: event.target.value })} value={user.establishment_name} />
            <label htmlFor="adresse" className="labelInfo">
              Adresse de l'établissement 1
            </label>
            <input type="text" name="adresse" id="adresse" className="inputInfo" onChange={(event) => setUser({ ...user, address_of_establishment_1: event.target.value })} value={user.address_of_establishment_1} />
            <label className="labelInfo">
              Adresse de l'établissement 2
            </label>
            <input type="text" className="inputInfo" onChange={(event) => setUser({ ...user, address_of_establishment_2: event.target.value })} value={user.address_of_establishment_2} />
            <div className="villeInfo">
              <div>
                <label htmlFor="ville" className="labelInfo">
                  Ville
                </label>
                <input type="text" name="ville" id="ville" className="inputInfo" onChange={(event) => setUser({ ...user, city: event.target.value })} value={user.city} />
              </div>
              <div className="codeInfo">
                <label htmlFor="code" className="labelInfo">
                  Code postal
                </label>
                <input type="text" name="code" id="code" className="inputInfo" onChange={(event) => setUser({ ...user, postal_code: event.target.value })} value={user.postal_code} />
              </div>
            </div>
            <label htmlFor="pays" className="labelInfo">
              Pays
            </label>
            <input type="text" name="pays" id="pays" className="inputInfo" value={"France"} />
            <label htmlFor="tel" className="labelInfo">
              Téléphone fixe de l'établissement
            </label>
            <input type="text" name="tel" id="tel" className="inputInfo" onChange={(event) => setUser({ ...user, telephone_of_the_establishment: event.target.value })} value={user.telephone_of_the_establishment} />
            <label htmlFor="telPerso" className="labelInfo">
              Téléphone personnel
            </label>
            <input type="text" name="telPerso" id="telPerso" className="inputInfo" onChange={(event) => setUser({ ...user, personal_phone: event.target.value })} value={user.personal_phone} />
            <label className="labelInfo">
              Logo
            </label>
            <input type="file" className="inputInfo" />
            <div className="buttonInfo">
              <button type="submit" className="buttonValider">Valider</button>
            </div>
          </form>
        </div>
      </>
    )
  );
}

export default connect(mapStateToProps)(Information);

import React from 'react';
import './Information.css';
import Valider from './ValiderInfo';

function Information() {
    return(
        <>
        <div className="backInfo">
        <form className="formInfo"  onSubmit={(event) => {
          Valider()
          event.preventDefault();
        }} name="formulaire">
            <h1 className="titleInfo">Mes informations</h1>
            <label htmlFor="nom"className="labelInfo">
              Nom
            </label>
            <input type="text" name="nom" id="nom" className="inputInfo"/>
            <label for="prenom" className="labelInfo">
              Prénom
            </label>
            <input type="text" name="prenom" id="prenom" className="inputInfo"/>
            <label for="ordinal"className="labelInfo">
              Numéro ordinal
            </label>
            <input type="text" name="ordinal" id="ordinal" className="inputInfo"/>
            <label for="etablissement"className="labelInfo">
              Nom de l'établissement
            </label>
            <input type="text" name="etablissement" id="etablissement" className="inputInfo"/>
            <label for="adresse"className="labelInfo">
              Adresse de l'établissement 1
            </label>
            <input type="text" name="adresse" id="adresse" className="inputInfo"/>
            <label className="labelInfo">
              Adresse de l'établissement 2
            </label>
            <input type="text" className="inputInfo"/>
            <div className="villeInfo">
              <div>
                <label for="ville" className="labelInfo">
                  Ville
                </label>
                <input type="text" name="ville" id="ville" className="inputInfo"/>
              </div>
              <div className="codeInfo">
                <label for="code"className="labelInfo">
                  Code postal
                </label>
                <input type="text" name="code" id="code" className="inputInfo"/>
              </div>
            </div>
            <label for="pays"className="labelInfo">
              Pays
            </label>
            <input type="text" name="pays" id="pays" className="inputInfo"/>
            <label for="tel"className="labelInfo">
              Téléphone fixe de l'établissement
            </label>
            <input type="text" name="tel" id="tel" className="inputInfo"/>
            <label for="telPerso" className="labelInfo">
              Téléphone personnel
            </label>
            <input type="text" name="telPerso" id="telPerso" className="inputInfo"/>
            <label className="labelInfo">
              Logo
            </label>
              <input type="file" className="inputInfo"/>
            <div className="buttonInfo">
              <button type="submit" className="buttonValider">Valider</button>
            </div>
        </form>
        </div>
        </>
    );
}

export default Information;
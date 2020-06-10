import React from 'react';
import './Information.css';

function Information() {
    return(
        <>
        <form className="formInfo">
            <h1 className="titleInfo">Mes informations</h1>
            <label className="labelInfo">
              Nom
            </label>
            <textarea rows="1"></textarea>
            <label className="labelInfo">
              Prénom
            </label>
            <textarea rows="1"></textarea>
            <label className="labelInfo">
              Numéro ordinal
            </label>
            <textarea rows="1"></textarea>
            <label className="labelInfo">
              Nom de l'établissement
            </label>
            <textarea rows="1"></textarea>
            <label className="labelInfo">
              Adresse de l'établissement 1
            </label>
            <textarea rows="1"></textarea>
            <label className="labelInfo">
              Adresse de l'établissement 2
            </label>
            <textarea rows="1"></textarea>
            <div className="villeInfo">
              <div>
                <label className="labelInfo">
                  Ville
                </label>
                <textarea rows="1"></textarea>
              </div>
              <div className="codeInfo">
                <label className="labelInfo">
                  Code postal
                </label>
                <textarea rows="1"></textarea>
              </div>
            </div>
            <label className="labelInfo">
              Pays
            </label>
            <textarea rows="1"></textarea>
            <label className="labelInfo">
              Téléphone fixe de l'établissement
            </label>
            <textarea rows="1"></textarea>
            <label className="labelInfo">
              Téléphone personnel
            </label>
            <textarea rows="1"></textarea>
            <label className="labelInfo">
              Logo
            </label>
              <input type="file"/>
            <div className="buttonInfo">
              <button type="button">Modifier</button>
            </div>
        </form>
        </>
    );
}

export default Information;
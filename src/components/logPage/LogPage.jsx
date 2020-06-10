import React from 'react';

const LogPage = () => {
  return (
    <div className="">
      <section className="">
        <h1 className="">Droit2Veto</h1>
        <p className="">Lorem ipsum dolor sit amet <span>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></p>
      </section>
      <section className="">
        <form className="">
          <p className="">Créer votre compte</p>
          <div className="">
            <label className="" for="email">Adresse mail</label>
            <input className="" type="email" name="mail" id='mail'></input>
          </div>
          <div className="">
            <label className="" for="name">Nom</label>
            <input className="" type="text" name="name" id='name'></input>
          </div>
          <div className="">
            <label className="" for="ordinal_number">Numéro ordinal</label>
            <input className="" type="text" name="ordinal_number" id='ordinal_number'></input>
          </div>
          <p>Déjà membre ? Connectez-vous ici</p>
            <button type="submit">Me connecter</button>
        </form>
      </section>
    </div>
  );
};

export default LogPage;
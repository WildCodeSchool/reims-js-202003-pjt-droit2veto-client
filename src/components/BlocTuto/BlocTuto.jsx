import React from 'react';
import './BlocTuto.css'

class BlocTuto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="choixPage">

        <div className="flexButtonLigne1">

          <div>
            <button className="tutoButton" type="button"> Mes informations</button>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptates officia esse neque ex asperiores?</p>
          </div>

          <div>
            <button className="tutoButton" type="button"> Mes activités</button>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptates officia esse neque ex asperiores?</p>
          </div>

        </div>

        <div className="flexButtonLigne2">

          <div>
            <button className="tutoButton" type="button"> Plaquette d'anesthésie</button>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptates officia esse neque ex asperiores?</p>
          </div>
          <div>
            <button className="tutoButton" type="button"> Ma commande</button>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptates officia esse neque ex asperiores?</p>
          </div>

        </div>

      </div>
    );
  }
};

export default BlocTuto;
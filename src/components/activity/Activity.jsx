import React, { useState } from 'react';
import './Activity.css';

function Activity(props) {
    const [toogle, setToogle] = useState(false);

    return (
        <section className="unActivity">
            <div className="TitleAndDecri">
                <h1 className='TitleActivity'>{props.title}</h1>
                <details className="DetailActivity">
                    <summary></summary>
                    <p>{props.decritions}</p>
                </details>
            </div>
            <div className="Toogle">
                <label className="switch">
                    <input type="checkbox" onClick={() => setToogle(!toogle)} />
                    <span className="slider round"></span>
                </label>
            </div>
        </section>
    );
}
export default Activity;
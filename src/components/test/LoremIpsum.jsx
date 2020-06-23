import React from 'react';
import Axios from 'axios';

const getUser = () => {
  const url = `http://localhost:8000/users/1`;
  Axios.get(url)
    .then((response) => response.data)
    .then((data) => console.log(data[0]))
};

function LoremIpsum() {
  return (
    <div>
      <button type="button" onClick={() => getUser()}>Clic to show</button>
      <p>coucou</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ab culpa odit iste iure inventore ut soluta libero, sunt quos nesciunt! Quidem dolorum quaerat sint, odit quo debitis nemo quasi.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ab culpa odit iste iure inventore ut soluta libero, sunt quos nesciunt! Quidem dolorum quaerat sint, odit quo debitis nemo quasi.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ab culpa odit iste iure inventore ut soluta libero, sunt quos nesciunt! Quidem dolorum quaerat sint, odit quo debitis nemo quasi.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ab culpa odit iste iure inventore ut soluta libero, sunt quos nesciunt! Quidem dolorum quaerat sint, odit quo debitis nemo quasi.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ab culpa odit iste iure inventore ut soluta libero, sunt quos nesciunt! Quidem dolorum quaerat sint, odit quo debitis nemo quasi.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ab culpa odit iste iure inventore ut soluta libero, sunt quos nesciunt! Quidem dolorum quaerat sint, odit quo debitis nemo quasi.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ab culpa odit iste iure inventore ut soluta libero, sunt quos nesciunt! Quidem dolorum quaerat sint, odit quo debitis nemo quasi.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ab culpa odit iste iure inventore ut soluta libero, sunt quos nesciunt! Quidem dolorum quaerat sint, odit quo debitis nemo quasi.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ab culpa odit iste iure inventore ut soluta libero, sunt quos nesciunt! Quidem dolorum quaerat sint, odit quo debitis nemo quasi.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ab culpa odit iste iure inventore ut soluta libero, sunt quos nesciunt! Quidem dolorum quaerat sint, odit quo debitis nemo quasi.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ab culpa odit iste iure inventore ut soluta libero, sunt quos nesciunt! Quidem dolorum quaerat sint, odit quo debitis nemo quasi.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ab culpa odit iste iure inventore ut soluta libero, sunt quos nesciunt! Quidem dolorum quaerat sint, odit quo debitis nemo quasi.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ab culpa odit iste iure inventore ut soluta libero, sunt quos nesciunt! Quidem dolorum quaerat sint, odit quo debitis nemo quasi.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ab culpa odit iste iure inventore ut soluta libero, sunt quos nesciunt! Quidem dolorum quaerat sint, odit quo debitis nemo quasi.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ab culpa odit iste iure inventore ut soluta libero, sunt quos nesciunt! Quidem dolorum quaerat sint, odit quo debitis nemo quasi.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ab culpa odit iste iure inventore ut soluta libero, sunt quos nesciunt! Quidem dolorum quaerat sint, odit quo debitis nemo quasi.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ab culpa odit iste iure inventore ut soluta libero, sunt quos nesciunt! Quidem dolorum quaerat sint, odit quo debitis nemo quasi.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ab culpa odit iste iure inventore ut soluta libero, sunt quos nesciunt! Quidem dolorum quaerat sint, odit quo debitis nemo quasi.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ab culpa odit iste iure inventore ut soluta libero, sunt quos nesciunt! Quidem dolorum quaerat sint, odit quo debitis nemo quasi.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ab culpa odit iste iure inventore ut soluta libero, sunt quos nesciunt! Quidem dolorum quaerat sint, odit quo debitis nemo quasi.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ab culpa odit iste iure inventore ut soluta libero, sunt quos nesciunt! Quidem dolorum quaerat sint, odit quo debitis nemo quasi.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ab culpa odit iste iure inventore ut soluta libero, sunt quos nesciunt! Quidem dolorum quaerat sint, odit quo debitis nemo quasi.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ab culpa odit iste iure inventore ut soluta libero, sunt quos nesciunt! Quidem dolorum quaerat sint, odit quo debitis nemo quasi.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ab culpa odit iste iure inventore ut soluta libero, sunt quos nesciunt! Quidem dolorum quaerat sint, odit quo debitis nemo quasi.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ab culpa odit iste iure inventore ut soluta libero, sunt quos nesciunt! Quidem dolorum quaerat sint, odit quo debitis nemo quasi.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ab culpa odit iste iure inventore ut soluta libero, sunt quos nesciunt! Quidem dolorum quaerat sint, odit quo debitis nemo quasi.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ab culpa odit iste iure inventore ut soluta libero, sunt quos nesciunt! Quidem dolorum quaerat sint, odit quo debitis nemo quasi.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ab culpa odit iste iure inventore ut soluta libero, sunt quos nesciunt! Quidem dolorum quaerat sint, odit quo debitis nemo quasi.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ab culpa odit iste iure inventore ut soluta libero, sunt quos nesciunt! Quidem dolorum quaerat sint, odit quo debitis nemo quasi.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ab culpa odit iste iure inventore ut soluta libero, sunt quos nesciunt! Quidem dolorum quaerat sint, odit quo debitis nemo quasi.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ab culpa odit iste iure inventore ut soluta libero, sunt quos nesciunt! Quidem dolorum quaerat sint, odit quo debitis nemo quasi.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ab culpa odit iste iure inventore ut soluta libero, sunt quos nesciunt! Quidem dolorum quaerat sint, odit quo debitis nemo quasi.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ab culpa odit iste iure inventore ut soluta libero, sunt quos nesciunt! Quidem dolorum quaerat sint, odit quo debitis nemo quasi.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ab culpa odit iste iure inventore ut soluta libero, sunt quos nesciunt! Quidem dolorum quaerat sint, odit quo debitis nemo quasi.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ab culpa odit iste iure inventore ut soluta libero, sunt quos nesciunt! Quidem dolorum quaerat sint, odit quo debitis nemo quasi.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ab culpa odit iste iure inventore ut soluta libero, sunt quos nesciunt! Quidem dolorum quaerat sint, odit quo debitis nemo quasi.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ab culpa odit iste iure inventore ut soluta libero, sunt quos nesciunt! Quidem dolorum quaerat sint, odit quo debitis nemo quasi.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ab culpa odit iste iure inventore ut soluta libero, sunt quos nesciunt! Quidem dolorum quaerat sint, odit quo debitis nemo quasi.</p>
    </div>
  );
}

export default LoremIpsum;

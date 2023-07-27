'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
///////////////////////////////////////
// 1. Classes
// 2. Application Architecture
// 3. Managing Workout Data: Creating Classes
// 4. Creating a New Workout
// 5. Rendering Workouts
// 6. Move to Marker on Click
// 7. Working with localStorage
// 8. Project Planning and Architecture
// 9. Managing Workout Data: Creating Classes

const displayMap = function () {
  const map = L.map('map').setView([51.505, -0.09], 13);
  console.log(map);

  L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
  }).addTo(map);

  map.on('click', function (mapEvent) {
    console.log(mapEvent);
    const { lat, lng } = mapEvent.latlng;

    L.marker([lat, lng])
      .addTo(map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          // className: 'running-popup',
        })
      )
      .setPopupContent('Workout')
      .openPopup();
  });
};

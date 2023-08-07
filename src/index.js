// import './style.css';
import {Truck, PassangerCar} from './modules/car.js';
import {Station} from './modules/station.js';

const open = document.querySelector('.open');
const car = document.querySelector('.car');

const testArray = {
  passangerCar: [
    ['Opel', 'Crossland', 45],
    ['Opel', 'Grandland X', 53, 'gaz'],
    ['Mazda', 'cx-5', 55],
    ['BMW', 'M5', 68, 'gaz'],
    ['BMW', 'X5', 80],
    ['BMW', 'X5d', 80, 'diesel'],
    ['BMW', 'X3', 65],
    ['BMW', '5', 66, 'gaz'],
  ],
  truck: [
    ['MAN', 'TGS', 400],
    ['MAN', 'TGX', 300],
    ['Mercedes-Benz', 'Actros', 450],
    ['Mercedes-Benz', 'Actros L', 650],
    ['Volvo', 'FH16', 700],
    ['Volvo', 'FM', 700],
    ['Volvo', 'FMX', 540],
  ],
};

const getTestCar = () => {
  const typeBool = Math.random() < 0.6;
  const listCar = typeBool ? testArray.passangerCar : testArray.truck;
  const randomCar = listCar[(Math.floor(Math.random() * listCar.length))];
  return typeBool ? new PassangerCar(...randomCar) : new Truck(...randomCar);
};

const station = new Station([
  {
    type: 'petrol',
    // count: 1,
    // speed: 5,
  },
  {
    type: 'diesel',
    // count: 2,
    speed: 20,
  },
  {
    type: 'gaz',
    // count: 2,
    // speed: 10,
  },
], '.app');

console.log(station.filling);

open.addEventListener('click', () => {
  station.init();
  console.log(station);
  open.remove();
  car.style.display = 'block';
  car.addEventListener('click', () => {
    station.addCarQueue(getTestCar());
  });
});


// export const opel = new PassangerCar('Opel', 'Crossland', 45);
// export const volvo = new Truck('Volvo', 'FH16', 700);
// console.log(volvo);
// console.log(opel.setModel('CrossLand S').getTitle());
// console.log(opel);
// console.log(opel.setModel('CrossLand Lux').fillUp().getTitle());
// // console.log(opel.needPetrol());
// console.log(opel.maxTanks);
// // opel.maxTank = 55
// console.log(opel);


// Write your solution here!


const drivers = [ 'Milo', 'Otis', 'Garfield' ];

function destructivelyAppendDriver(driver) {
  drivers.push(driver);
}

function destructivelyPrependDriver(driver) {
  drivers.unshift(driver);
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(driver) {
  return drivers.concat(driver);
}

function prependDriver(driver) {
  let driversCopy = drivers.slice();
  driversCopy.unshift(driver);
  return driversCopy;
}

function removeLastDriver() {
  let driversCopy = drivers.slice();
  driversCopy.pop();
  return driversCopy;
}

function removeFirstDriver() {
  let driversCopy = drivers.slice();
  driversCopy.shift();
  return driversCopy;
}


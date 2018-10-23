// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]; 

function destructivelyAppendDriver(name) {
  drivers.push(name);
  return drivers; 
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
  return drivers; 
}

function destructivelyRemoveLastDriver() {
  drivers.pop(); 
}

function destructivelyRemoveFirstDriver() {
  drivers.shift(); 
}

function appendDriver(name) {
  const newA = [...drivers, name];
  return newA; 
}

function prependDriver(name) {
  const newA = [name,...drivers];
  return newA; 
}

function removeLastDriver() {
  const newA = drivers.slice(0,drivers.length - 1);
  return newA; 
}

function removeFirstDriver() {
  const newA = drivers.slice(1);
  return newA; 
}
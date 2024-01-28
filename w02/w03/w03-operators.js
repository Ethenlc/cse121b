// operators.js
let shipHealth = 3;
let shipAmmo = 3;
let targetHealth = 3;

function fireShip() {
  if (shipCanFire()) {
    shipAmmo--;
    if (isHit()) {
      targetHealth--;
      console.log("hit - targetHealth:", targetHealth);
    } else {
      console.log("miss");
    }
  } else {
    reloadShip();
    console.log("reloading, shipHealth:", shipHealth);
  }
}


function isHit() {
    // should return true if a randomly generated number is greater than .5, false if it is less than .5
    let random = Math.random();
    if (random > .5) {
        return true;
    }
    else if (random <= .5) {
        return false;
    }
  }
  
  function shipCanFire() {
    // return true if the ships health is above 0 AND ammo is above 0 false otherwise
    if (shipHealth > 0 && shipAmmo > 0) {
        return true;
    }
    else {
        return false;
    }
  }
  function isDestroyed(health) {
    // return true if health is zero or less
    if (shipHealth <= 0) {
        return true;
    }
    else {
        return false;
    }
  }
  function reloadShip() {
    // reduce ship health by 1 and increase ammo by 3
    shipHealth -= 1;
    shipAmmo += 3;
  }


function encounter() {
  console.log("You see a target");
  if (!isDestroyed(targetHealth) && !isDestroyed(shipHealth)) {
    fireShip();
    if (isDestroyed(targetHealth)) {
      console.log("Target eliminated");
    }
    if (isDestroyed(shipHealth)) {
      console.log("ship destroyed");
    }
  }
}

function add(number1, number2) {
  return number1 + number2;
}

function addNumbers(add1, add2) {
  let addNumber1 = Number(document.querySelector('#add1').value);
  let addNumber2 = Number(document.querySelector('#add2').value);
  document.querySelector('#sum').value = add(addNumber1, addNumber2)
}
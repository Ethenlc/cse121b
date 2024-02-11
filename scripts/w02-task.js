/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let currentTime = new Date();
let fullName = 'Ethen Campbell';
let currentYear = currentTime.getFullYear();
let profilePicture = 'images/EthenIntroPicture.jpg';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.getElementById('picture');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);




/* Step 5 - Array */
let favFood = ['Pie', 'Sushi', 'Pizza'];
let singleFood = 'Hamburger';

foodElement.innerHTML += `<br>${favFood}`;

favFood.push(singleFood);

foodElement.innerHTML += `<br>${favFood}`;

favFood.shift();

foodElement.innerHTML += `<br>${favFood}`;

favFood.pop();

foodElement.innerHTML += `<br>${favFood}`;
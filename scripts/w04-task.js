/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: 'Ethen Campbell',
    photo: 'images/EthenIntroPicture.jpg',
    favoriteFoods: ['Pie', 'Sushi', 'Pizza', 'Hamburger'],
    hobbies: ['Carpentry', 'Coding', 'Guitar', 'Fishing'],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Hurricane, UT',
        length: '18 years'
    },
    {
        place: 'Tucson, AZ',
        length: '2 years'
    },
    {
        place: 'Rexburg, ID',
        length: '2 years'
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li)
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li)
});

/* Places Lived DataList */
myProfile.placesLived.forEach(function(item) {
    var dtElement = document.createElement('dt');
    dtElement.textContent = item.place;

    var ddElement = document.createElement('dd');
    ddElement.textContent = item.length;

    var dlElement = document.getElementById('places-lived');
    dlElement.appendChild(dtElement);
    dlElement.appendChild(ddElement);
});


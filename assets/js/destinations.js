var destinations = data.destinations || [];
console.log(destinations);
var requestedDestination = 'Moon'
var img = document.querySelector('#destinationImg');

var allDestinationNames = destinations.map((el) => {
    return el.name;
})
console.log(allDestinationNames);
var allDestinationNavigation = document.querySelector('#destinations>ul');
allDestinationNames.forEach((el) => {
    let li = document.createElement('li')
    li.classList.add('h5')
    li.innerText = el;
    li.id = el;
    li.addEventListener('click',function() {
        displayDestination(el);
    })
    allDestinationNavigation.append(li);
} );

function displayDestination (requestedDestination) {
    // console.log(this.destinations);
    var currentDestination = destinations.find(function(el) {
        return el.name == requestedDestination;
    });
    // console.log(currentDestination);
    let li = document.querySelectorAll(`#destinations > ul > li`);
    li.forEach(function(el) {
        el.classList.remove('active');
    })
    li = document.querySelector(`#${requestedDestination}`);
    li.classList.add('active');
    img.setAttribute('src',currentDestination.images.png);
    let currentDestinationName = document.querySelector('#currentDestinationName');
    currentDestinationName.innerText = currentDestination.name;
    let description = document.querySelector('#description');
    description.innerText = currentDestination.description;
    let avgDistance = document.querySelector('#avgDistance > .data');
    avgDistance.innerText = currentDestination.distance;
    let estTravelTime = document.querySelector('#estTravelTime > .data');
    estTravelTime.innerText = currentDestination.travel;
    // console.log(currentDestination.images.png);

}
displayDestination(requestedDestination);
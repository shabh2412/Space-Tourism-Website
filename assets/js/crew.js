var crewArr = data['crew'];
console.log('crewArr:', crewArr)

var crewMembersUl = document.querySelector('#crewMembers > ul');

var requestedMemberName = 'Douglas';

crewArr.forEach(function(el) {
    var li = document.createElement('li');
    li.id = el.name.split(' ')[0];
    // if(el.name == requestedMemberName) {
    //     li.classList.add('active');
    // }
    li.addEventListener('click',function(){
        displayCrewMember(el.name);
    })
    crewMembersUl.append(li);
});

// function changeCrew() {

// }

function displayCrewMember(requestedMemberName) {
    var requestedMember = crewArr.find(function(el) {
        return el.name.split(' ')[0] == requestedMemberName;
    });
    console.log(requestedMember);
    var crewMembersLi = crewMembersUl.querySelectorAll('li');
    crewMembersLi.forEach(function(el) {
        el.classList.remove('active');
    })
    var selectedLi = document.querySelector(`#${requestedMemberName}`);
    selectedLi.classList.add('active');
    console.log(`#${requestedMemberName}`);
    console.log(selectedLi)
    var crewMemberRole = document.querySelector('#crewMemberRole');
    crewMemberRole.innerText = requestedMember.role;
}

displayCrewMember(requestedMemberName);
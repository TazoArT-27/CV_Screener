const data = [
    {
        name: 'Rohan Das',
        age: 18,
        city: 'kolkata',
        language: 'python',
        framework: 'django',
        image: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
        name: 'Shafayat Tazoar',
        age: 22,
        city: 'mymensingh',
        language: 'javascript',
        framework: 'angular',
        image: 'https://randomuser.me/api/portraits/men/76.jpg'
    },
    {
        name: 'Rohan Sharma',
        age: 19,
        city: 'venis',
        language: 'c',
        framework: 'vue',
        image: 'https://randomuser.me/api/portraits/men/77.jpg'
    },
    {
        name: 'Rohan Ali',
        age: 28,
        city: 'barishal',
        language: 'c#',
        framework: 'bootstrap',
        image: 'https://randomuser.me/api/portraits/men/78.jpg'
    },
    {
        name: 'Rohan Malik',
        age: 35,
        city: 'Sao Paulo',
        language: 'c++',
        framework: 'blueberry',
        image: 'https://randomuser.me/api/portraits/men/79.jpg'
    }
]

function cvIterator(profiles){
    let nextIndex = 0;
    return{
        next: function(){
            return nextIndex<profiles.length ?
            {value: profiles[nextIndex++], done: false} :
            {done: true}
        }
    };
}

const candidates = cvIterator(data);
nextCV();
const next = document.getElementById("next");
next.addEventListener("click", nextCV);


function nextCV(){
    const currentCandidate = candidates.next().value;
    let image = document.getElementById("image");
    let profile = document.getElementById("profile");
    if(currentCandidate != undefined){
        image.innerHTML = `<img src='${currentCandidate.image}'>`;
        profile.innerHTML = `<ul class="list-group">
        <li class="list-group-item">Name: ${currentCandidate.name}</li>
        <li class="list-group-item">${currentCandidate.age} years old</li>
        <li class="list-group-item">Lives in ${currentCandidate.city}</li>
        <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
        <li class="list-group-item">Uses ${currentCandidate.framework} framework</li>
      </ul>`;
        }
        else{
            alert('End of candidate applications');
            window.location.reload();
        }
}
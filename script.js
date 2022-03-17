$secList = document.getElementById('list');
$header = document.querySelector('header');
$secNote = document.getElementById('note')

headerBtn = document.getElementById('btn-js');
addBtn = document.getElementById('add_btn');
saveBtn = document.getElementById('save_btn');
backBnt = document.getElementById('back__arrow')

a = document.getElementsByClassName('note__title');
b = document.getElementsByClassName('note__description');
c = document.getElementsByClassName('IntroductionField');
v = document.getElementsByClassName('text__button');
noteTitle = a[0];
noteDesc = b[0];
noteField = c[0];
capsUp = v[0];
capsDown = v[1];


var savedInformation = [];

headerBtn.onclick = function() {
    nextSection($header,$secList);
};
addBtn.addEventListener('click', () => {
    nextSection($secList,$secNote);
    clearZone();
});
saveBtn.addEventListener('click',() => {
    save();
});
capsUp.addEventListener('click', () => {
    noteField.value = noteField.value.toUpperCase();
});
capsDown.addEventListener('click', () => {
    noteField.value = noteField.value.toLowerCase();
});
backBnt. addEventListener('click', () => {
    nextSection($secNote, $secList);
})




function nextSection(hide, show) {
    hide = hide.classList.add('hide');
    show = show.classList.remove('hide');
};
function save() {
    if(noteTitle.value.trim().length === 0 && noteDesc.value.trim().length === 0 && noteField.value.trim().length === 0){
        alert('You have not filled any fields.')
    }
    else {
        savedInfo();
        nextSection($secNote,$secList);
        addCard();
    }
};
function savedInfo() {
    let temp = {};
    temp.title = noteTitle.value;
    temp.description = noteDesc.value;
    temp.text = noteField.value;
    let i = savedInformation.length;
    savedInformation[i] = temp;
    localStorage.setItem('todo', JSON.stringify(savedInformation))
};
function addCard(){
    let d = document.getElementsByClassName('list__box-content');
    let fatherCard = d[0];

    let card = document.createElement('div');
    let cardTitle = document.createElement('h3');
    let cardDesc = document.createElement('p');

    card.classList.add('card');
    cardTitle.classList.add('card__title')
    cardDesc.classList.add('card__description')

    fatherCard.insertBefore(card, fatherCard.firstChild);
    card.insertBefore(cardTitle, card.firstChild);
    card.appendChild(cardDesc);

    function out() {
        for(let key in savedInformation){
            let out = '';
            out += savedInformation[key].title;
            cardTitle.innerHTML = out;
        }
        for(let key in savedInformation){
            let out = '';
            if(savedInformation[key].description.trim().length === 0 && savedInformation[key].text.trim().length !== 0){
                out += savedInformation[key].text;
                cardDesc.innerHTML = out;
            }
            else {
                out += savedInformation[key].description;
                cardDesc.innerHTML = out;
            }
        }
    }
    out();
}   
function clearZone(){
    noteTitle .value = '';
    noteDesc.value = '';
    noteField.value = '';
}
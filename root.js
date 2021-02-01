// getting link from pokeapi.co
const url = "https://pokeapi.co/api/v2/pokemon";
// getting all items in HTML
const ul = document.getElementById("pokelist");
const next = document.getElementById('next');
const previous = document.getElementById('previous');
const content = document.getElementById('content');

// creating function
function fetchPoke(url){
    console.log(url);

};

// creating another function
function fetchData(url){
    fetch(url)
    .then((data)=>data.json())
    .then((data)=>{
        console.log(data);
        const list = data.results;

        // condition for using the onclick attriute
        // creating an if-else statement to set or remove attribute if previous results
        data.previous?previous.setAttribute('onclick',`fetchData('${data.previous}')`):previous.removeAttribute('onclick');
        data.previous?next.setAttribute('onclick',`fetchData('${data.next}')`):next.removeAttribute('onclick');

        list.map((element) => { 
            let btn = document.createElement('button');
            btn.innerHTML = element.name;
            btn.classList.add('pokemon-list-element');
            btn.setAttribute('onclick',`fetchPoke('${element.url}')`);
            ul.appendChild(btn);
        })
    });

    ///.catch
};

fetchData(url);




const url = "https://pokeapi.co/api/v2/pokemon";
const ul = document.getElementById("pokelist");


function fetchPokemon(url){
    console.log(url);

};


function fetchData(url){
    fetch(url)
    .then((data)=>data.json())
    .then((data)=>{
        console.log(data);
        const list = data.results;
        list.map((element) => { 
            let btn = document.createElement('button');
            btn.innerHTML = element.name;
            btn.classList.add('pokemon-list-element');
            btn.setAttribute('onclick',`fetchPokemon('${element.url}')`);
            ul.appendChild(btn);
        })
    });

    ///.catch
};

fetchData(url);




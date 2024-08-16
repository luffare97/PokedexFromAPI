window.onload = function () {
    GetMons();
}
let allPokemon = []

function GetMons() {
    try {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
            .then(response => response.json())
            .then(function (fetchedPokemon) {
                allPokemon = fetchedPokemon.results;
                console.log(allPokemon)

            })

    }
    catch (error) {
        console.error(error);
    }
}


async function Search() {

    const searchName = document.getElementById("searchName").value.toLowerCase();


    allPokemon.forEach(element => {
        if (element.name.includes(searchName)) {
            fetchData(element.url);
        }
    })

}



async function fetchData(link) {

    ClearMons("flex-box");

    console.log(link)


    try {

        const response = await fetch(link);

        const data = await response.json();
        console.log(data);

        createPokeDiv(data);

    }
    catch (error) {
        console.error(error);
    }

}

function TypeColor(type) {
    switch (type) {
        case "normal":
            return "#A8A77A"
        case "fire":
            return "#EE8130"
        case "water":
            return "#6390F0"
        case "electric":
            return "#F7D02C"
        case "grass":
            return "#7AC74C"
        case "ice":
            return "#96D9D6"
        case "fighting":
            return "#C22E28"
        case "poison":
            return "#A33EA1"
        case "ground":
            return "#E2BF65"
        case "flying":
            return "#A98FF3"
        case "psychic":
            return "#F95587"
        case "bug":
            return "#A6B91A"
        case "rock":
            return "#B6A136"
        case "ghost":
            return "#735797"
        case "dragon":
            return "#6F35FC"
        case "dark":
            return "#705746"
        case "steel":
            return "#B7B7CE"
        case "fairy":
            return "#D685AD"
    }
}

function ClearMons(elementID) {
    document.getElementById(elementID).innerHTML = "";
}


function createPokeDiv(data) {
    const container = document.createElement("div");
    container.classList.add("pokemonContainer");


    const nametext = document.createElement("h2");
    nametext.classList.add("foundName");
    container.appendChild(nametext);
    let Name = data.name.charAt(0).toUpperCase() + data.name.slice(1);
    Name = Name.replace(/-/g, " ");
    nametext.appendChild(document.createTextNode(Name));

    const sprite = document.createElement("img");
    sprite.src = data.sprites.front_default;
    sprite.classList.add("pokemonSprite");
    container.appendChild(sprite);

    if (data.types.length == 2) {

        let typeName = data.types[0].type.name.charAt(0).toUpperCase() + data.types[0].type.name.slice(1);
        const type1 = document.createElement("p")
        type1.appendChild(document.createTextNode(typeName))
        type1.classList.add("type1")
        container.appendChild(type1);

        type1.style.backgroundColor = TypeColor(data.types[0].type.name);

        typeName = data.types[1].type.name.charAt(0).toUpperCase() + data.types[1].type.name.slice(1);
        const type2 = document.createElement("p")
        type2.appendChild(document.createTextNode(typeName))
        type2.classList.add("type2")
        container.appendChild(type2);

        type2.style.backgroundColor = TypeColor(data.types[1].type.name);



    }
    else {

        let typeName = data.types[0].type.name.charAt(0).toUpperCase() + data.types[0].type.name.slice(1);
        const type1 = document.createElement("p")
        type1.appendChild(document.createTextNode(typeName))
        type1.classList.add("monoType")
        container.appendChild(type1);

        type1.style.backgroundColor = TypeColor(data.types[0].type.name);

    }




    const flexbox = document.getElementById("flex-box");

    flexbox.appendChild(container);
}


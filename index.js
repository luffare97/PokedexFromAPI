window.onload = function () {
    GetMons();
};

function GetMons() {
    try {
        const response = fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
        console.log(response);
    }
    catch (error) {
        console.error(error);
    }

};




async function fetchData() {
    const searchName = document.getElementById("searchName").value.toLowerCase();
    if (searchName == "") {
        
    }
    else {

        try {

            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchName}`);

            const Notfound = document.getElementById("Notfound");
            const pokemonContainer = document.getElementById("pokemonContainer");
            const foundName = document.getElementById("foundName");
            const imgElement = document.getElementById("pokemonSprite");
            const type1 = document.getElementById("type1");
            const type2 = document.getElementById("type2");


            if (!response.ok) {
                pokemonContainer.style.display = "none";
                Notfound.style.display = "grid";
                throw new Error("Could not fetch resource");

            }


            Notfound.style.display = "none";
            pokemonContainer.style.display = "grid";
            const data = await response.json();
            console.log(data);
            Name = data.name;
            foundName.innerHTML = Name.charAt(0).toUpperCase() + Name.slice(1);
            const pokemonSprite = data.sprites.front_default;
            imgElement.src = pokemonSprite;

            if (data.types.length == 2) {
                type1.innerHTML = data.types[0].type.name;
                type1.style.backgroundColor = TypeColor(type1.innerHTML);
                type1.style.gridColumn = "1";


                type2.innerHTML = data.types[1].type.name;
                type2.style.backgroundColor = TypeColor(type2.innerHTML);
                type2.style.gridColumn = "2";
                type2.style.display = "grid";


            }
            else {
                type1.style.gridColumn = "1/3";
                type1.innerHTML = data.types[0].type.name;
                type1.style.backgroundColor = TypeColor(type1.innerHTML);
                type2.style.display = "none";
            }

        }
        catch (error) {
            console.error(error);
        }
    }
};

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
};




function createPokeDiv(data) {

};


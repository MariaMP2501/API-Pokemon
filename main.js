var container = document.querySelector(".grand")


function Pokecherche(){

    const colors = {
        fire: '#FF0000',
        grass: '#1BCE11',
        electric: '#F4FF00',
        water: '#0086FF',
        ground: '#FFBD41',
        rock: '#DA9A21',
        fairy: '#FF88CE',
        poison: '#B6508C',
        bug: '#4DFD87',
        dragon: '#C5C5C5',
        psychic: '#D719D3',
        flying: '#F2F7C4',
        fighting: '#F7DAC4',
        normal: '#E0CDBF'
    };


    var txtb = document.querySelector(".txtb").value
    fetch('https://pokeapi.co/api/v2/pokemon/'+txtb+'')
    .then(response => response.json())
    .then(data => {
            const search = data.types[0].type.name
            const color =  colors[search]
            container.innerHTML = `<div class="carre" style="background:${color}"><h3>${data.name}</h3><img src="${data.sprites.front_default}"><h3>${data.id}</h3></div>`           
    })
}

function chercher(){
    const colors = {
        fire: '#FF0000',
        grass: '#1BCE11',
        electric: '#F4FF00',
        water: '#0086FF',
        ground: '#FFBD41',
        rock: '#DA9A21',
        fairy: '#FF88CE',
        poison: '#B6508C',
        bug: '#4DFD87',
        dragon: '#C5C5C5',
        psychic: '#D719D3',
        flying: '#F2F7C4',
        fighting: '#F7DAC4',
        normal: '#E0CDBF'
    };
    var i = 1;
    while (i<150){   
        fetch("https://pokeapi.co/api/v2/pokemon/"+i+"")
    .then(response => response.json())
    .then(data => {
            const search = data.types[0].type.name
            const color =  colors[search]

            container.innerHTML += `<div class="carre" style="background:${color}"><h3>${data.name}</h3>
            <img src="${data.sprites.front_default}">
            <h3>${data.id}</h3>
            
            </div>`                
    })
    i++;
    }
    sleep("500")
}
function effacer(){
    container.innerHTML =""
    chercher();
}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }



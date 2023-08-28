const personajes = document.getElementById('personajes')


// const personas = async () => {
//     const res = await fetch("https://swapi.dev/api/people/");
//     const data = await res.json()

//     console.log(data.results);
    
// };
//     personas();





    fetch('https://swapi.dev/api/people/')
    .then(res => res.json())
    .then(data => {
        console.log(data.results['0'])
        console.log(data.results['1'])
        console.log(data.results['2']);
        personajes.innerHTML= `
        
        <div class="card-body">
            <h5 class="card-title">Personajes más Populares</h5>
            <p class="card-text"><p>Nombre:${data.results['0'].name} <br> Altura(CM): ${data.results['0'].height}<br> Peso(Kg): ${data.results['0'].mass}</p>
            <p>Nombre: ${data.results['1'].name} <br> Altura(CM): ${data.results['1'].height}<br> Peso(Kg): ${data.results['1'].mass}</p>
            <p>Nombre: ${data.results['2'].name} <br> Altura(CM): ${data.results['2'].height}<br> Peso(Kg): ${data.results['2'].mass}</p>
            <p>Nombre: ${data.results['3'].name} <br> Altura(CM): ${data.results['3'].height}<br> Peso(Kg): ${data.results['3'].mass}</p>
            <p>Nombre: ${data.results['4'].name} <br> Altura(CM): ${data.results['4'].height}<br> Peso(Kg): ${data.results['4'].mass}</p></p>
            
        </div>
        ` 
    });


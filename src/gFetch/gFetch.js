let pokemones = [
{name: 'bulbasaur',  imagen: 'https://img.pokemondb.net/sprites/x-y/normal/bulbasaur.png',                          precio:2000, categoria: 'pokemon', decrpcion:" Este pequeño Pokemon es de tipo Planta/Veneno. Tiene una semilla en su espalda que crece a medida que él también lo hace. Tiene una gran resistencia y puede dormir durante días para recuperarse."},
{name: 'ivysaur',    imagen: 'https://img.pokemondb.net/sprites/black-white/normal/ivysaur.png',                    precio:2000, categoria: 'pokemon', decrpcion:"La evolución de Bulbasaur, también de tipo Planta/Veneno. Es un poco más grande y fuerte que su predecesor. Tiene cuatro patas y dos hojas grandes que brotan de su espalda."},
{name: 'venusaur',   imagen: 'https://img.pokemondb.net/sprites/black-white/normal/venusaur-f.png',                 precio:2000, categoria: 'pokemon', decrpcion:"La última evolución de la línea de Bulbasaur, también de tipo Planta/Veneno. Es mucho más grande que sus predecesores y tiene una flor grande y hermosa en su espalda. Puede lanzar polvo venenoso para protegerse."},
{name: 'charmander', imagen: 'https://img.pokemondb.net/sprites/black-white/normal/charmander.png',                 precio:2000, categoria: 'pokemon', decrpcion:"Este Pokemon de tipo Fuego es un pequeño reptil con una llama en su cola. Es conocido por ser un poco terco, pero es muy leal a su entrenador."},
{name: 'charmeleon', imagen: 'https://img.pokemondb.net/sprites/black-white/normal/charmeleon.png',                 precio:2000, categoria: 'pokemon', decrpcion:"La evolución de Charmander, también de tipo Fuego. Es un poco más grande y feroz que su predecesor. Puede respirar fuego y puede ser difícil de controlar a veces."},
{name: 'charizard',  imagen: 'https://img.pokemondb.net/sprites/black-white/normal/charizard.png',                  precio:2000, categoria: 'pokemon', decrpcion:"La última evolución de la línea de Charmander, también de tipo Fuego/Volador. Es mucho más grande que sus predecesores y tiene grandes alas que le permiten volar. Es un luchador formidable y puede lanzar llamaradas de fuego con facilidad."},
{name: 'squirtle',   imagen: 'https://img.pokemondb.net/sprites/black-white/normal/squirtle.png',                   precio:2000, categoria: 'pokemon', decrpcion:"Este Pokemon de tipo Agua es una pequeña tortuga con un caparazón duro. Es conocido por ser un poco tímido, pero muy leal a su entrenador."},
{name: 'wartortle',  imagen: 'https://img.pokemondb.net/sprites/black-white/normal/wartortle.png',                  precio:2000, categoria: 'pokemon', decrpcion:"La evolución de Squirtle, también de tipo Agua. Es un poco más grande y fuerte que su predecesor. Tiene patas más largas y un caparazón más grande que lo protege de los ataques."},
{name: 'blastoise',  imagen: 'https://img.pokemondb.net/sprites/black-white/normal/blastoise.png',                  precio:2000, categoria: 'pokemon', decrpcion:"La última evolución de la línea de Squirtle, también de tipo Agua. Es mucho más grande que sus predecesores y tiene dos grandes cañones de agua en su caparazón. Puede disparar agua a alta presión para protegerse."},
{name: 'pokeball',   imagen: 'https://cdn.icon-icons.com/icons2/851/PNG/512/Pokeball_icon-icons.com_67533.png',     precio:2000, categoria: 'pokeballs', decrpcion:"Es un objeto que se utiliza para capturar Pokémon salvajes. La probabilidad de capturar un Pokémon varía según el tipo de pokeball utilizado y la salud restante del Pokémon salvaje."},
{name: 'superball',  imagen: 'https://cdn.icon-icons.com/icons2/851/PNG/512/Great_Ball_icon-icons.com_67552.png',   precio:2000, categoria: 'pokeballs', decrpcion:"Es una pokeball más efectiva que la pokeball estándar. Tiene una mayor probabilidad de capturar Pokémon que la pokeball estándar."},
{name: 'ultraball',  imagen: 'https://cdn.icon-icons.com/icons2/851/PNG/512/Ultra_Ball_icon-icons.com_67500.png',   precio:2000, categoria: 'pokeballs', decrpcion:"Es una pokeball más efectiva que la superball. Tiene una mayor probabilidad de capturar Pokémon que la superball."},
{name: 'masterball', imagen: 'https://cdn.icon-icons.com/icons2/851/PNG/512/Master_Ball_icon-icons.com_67545.png',  precio:2000, categoria: 'pokeballs', decrpcion:"Es una pokeball extremadamente rara y efectiva que tiene una tasa de éxito del 100% al intentar capturar un Pokémon. Se suele obtener una sola vez por juego y se utiliza generalmente para capturar los Pokémon más raros y difíciles."},
{name: 'pocion',     imagen: 'https://cdn.icon-icons.com/icons2/851/PNG/512/Poison_Heal_icon-icons.com_67534.png',  precio:2000, categoria: 'pociones', decrpcion:"Es un objeto que se utiliza para restaurar la salud de un Pokémon. Al usar una poción, la salud de un Pokémon se restaura en 20 puntos"},
{name: 'superpocion',imagen: 'https://cdn.icon-icons.com/icons2/851/PNG/512/Potion_icon-icons.com_67510.png',       precio:2000, categoria: 'pociones', decrpcion:"Es un objeto que se utiliza para restaurar la salud de un Pokémon de manera más efectiva que la poción estándar. Al usar una superpoción, la salud de un Pokémon se restaura en 50 puntos."},
{name: 'ultrapocion',imagen: 'https://cdn.icon-icons.com/icons2/851/PNG/512/Paralyz_Heal_icon-icons.com_67537.png', precio:2000, categoria: 'pociones', decrpcion:"Es un objeto que se utiliza para restaurar la salud de un Pokémon de manera más efectiva que la superpoción. Al usar una ultraposión, la salud de un Pokémon se restaura en 200 puntos."},


]
export const gFetch = (name) => new Promise( (res, rej)=>{
    //acciones - asincrónicas o no
    let condition = true
    if (condition) {
        setTimeout(()=>{
            res(name   ? pokemones.find(prod => name === prod.name)  : pokemones)    
        }, 2000)
    } else {
        rej('Todo mal ')
        
    }
})


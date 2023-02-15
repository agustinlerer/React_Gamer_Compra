let pokemones = [
{name: 'bulbasaur',  imagen: 'https://img.pokemondb.net/sprites/x-y/normal/bulbasaur.png',                          precio:2000, categoria: 'pokemon'},
{name: 'ivysaur',    imagen: 'https://img.pokemondb.net/sprites/black-white/normal/ivysaur.png',                    precio:2000, categoria: 'pokemon'},
{name: 'venusaur',   imagen: 'https://img.pokemondb.net/sprites/black-white/normal/venusaur-f.png',                 precio:2000, categoria: 'pokemon'},
{name: 'charmander', imagen: 'https://img.pokemondb.net/sprites/black-white/normal/charmander.png',                 precio:2000, categoria: 'pokemon'},
{name: 'charmeleon', imagen: 'https://img.pokemondb.net/sprites/black-white/normal/charmeleon.png',                 precio:2000, categoria: 'pokemon'},
{name: 'charizard',  imagen: 'https://img.pokemondb.net/sprites/black-white/normal/charizard.png',                  precio:2000, categoria: 'pokemon'},
{name: 'squirtle',   imagen: 'https://img.pokemondb.net/sprites/black-white/normal/squirtle.png',                   precio:2000, categoria: 'pokemon'},
{name: 'wartortle',  imagen: 'https://img.pokemondb.net/sprites/black-white/normal/wartortle.png',                  precio:2000, categoria: 'pokemon'},
{name: 'blastoise',  imagen: 'https://img.pokemondb.net/sprites/black-white/normal/blastoise.png',                  precio:2000, categoria: 'pokemon'},
{name: 'pokeball',   imagen: 'https://cdn.icon-icons.com/icons2/851/PNG/512/Pokeball_icon-icons.com_67533.png',     precio:2000, categoria: 'pokeballs'},
{name: 'superball',  imagen: 'https://cdn.icon-icons.com/icons2/851/PNG/512/Great_Ball_icon-icons.com_67552.png',   precio:2000, categoria: 'pokeballs'},
{name: 'ultraball',  imagen: 'https://cdn.icon-icons.com/icons2/851/PNG/512/Ultra_Ball_icon-icons.com_67500.png',   precio:2000, categoria: 'pokeballs'},
{name: 'masterball', imagen: 'https://cdn.icon-icons.com/icons2/851/PNG/512/Master_Ball_icon-icons.com_67545.png',  precio:2000, categoria: 'pokeballs'},
{name: 'pocion',     imagen: 'https://cdn.icon-icons.com/icons2/851/PNG/512/Poison_Heal_icon-icons.com_67534.png',  precio:2000, categoria: 'pociones'},
{name: 'superpocion',imagen: 'https://cdn.icon-icons.com/icons2/851/PNG/512/Potion_icon-icons.com_67510.png',       precio:2000, categoria: 'pociones'},
{name: 'ultrapocion',imagen: 'https://cdn.icon-icons.com/icons2/851/PNG/512/Paralyz_Heal_icon-icons.com_67537.png', precio:2000, categoria: 'pociones'},


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


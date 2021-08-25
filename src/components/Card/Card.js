import React from 'react';
import './style.css';
import pokemonTypes from '../../bantuan/pokemonTypes';

function Card({ pokemon }) {
    return (
        <div className="Card">
            <div className="Card_img">
                <img src={pokemon.sprites.front_default} alt="" />
            </div>
            <div className="Card_name">
                {pokemon.name}
            </div>
            <div className="Card_types">
                {pokemon.types.map(type => {
                   return (
                    <div className="Card_type" 
                    style={{ backgroundColor: pokemonTypes[type.type.name] }}>

                        {type.type.name}
                    </div> 
                   ) 
                })}
            </div>
            <div className="Card_info">
                <div className="Card_data data_lebar">
                    <p className="title">Lebar : {pokemon.weight}</p>
                </div>
                <div className="Card_data data_tinggi">
                    <p className="title">Tinggi : {pokemon.height}</p>
                </div>
                <div className="Card_data data_ability">
                    <p className="title">Kemampuan : {pokemon.abilities[0].ability.name}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;

import './Selected.css'
// import React from 'react';

// eslint-disable-next-line react/prop-types
const Selected = ({selectedPlayers, hendleDelete}) => {
    return (
        <div>
            <div>
                {
                    // eslint-disable-next-line react/prop-types
                    selectedPlayers.map((players) => (
                        <div key={players.playerId}>
                            <div className='grid grid-cols-3 my-2 '>
                                <img className='w-50 h-16 rounded-md ' src={players.image} alt="" />
                                <div>
                                    <h2>{players.name}</h2>
                                    <h3>{players.battingType}</h3>
                                </div>
                                <div className="btn" onClick={()=>hendleDelete(players.playerId)}><i className="fa-solid fa-trash"></i></div>
                                
                            </div><br />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Selected;
/* eslint-disable react/prop-types */
// import React from 'react';
// import Available from '../Available/Available';
import './Players.css'

import { useEffect, useState } from "react";




const Players = ({handleIsActive, isActive, hendleSelectedPlayer, selectedPlayers}) => {
    const [players, setPlayers] = useState([])
    // console.log(hendleSelectedPlayer)
    useEffect(() => {
        fetch('./Players.json')
            .then(res => res.json())
            .then(data => setPlayers(data.players))
    }, [])
    // console.log(players);
    // console.log(isActive)



    return (
        <div>
            {/* {players.length} */}
            {/* {players.length} */}
            {/* {players.map(players =>(<p>{players.playerId}</p>))} */}


            {/* <div className='flex justify-between mx-5 my-10'>
                <h2 className='text-xl font-bold'>{playersHandle ? "Available Players": `Selected Players (${addPlayers.length}/6)`}  </h2>
                <div className="join">
                    <button onClick={() => playersHandleBtn(true)} className='btn join-item bg-[#E7FE29]'>Available</button>
                    <button onClick={() => playersHandleBtn(false)} className="btn join-item"> Selected  ({addPlayers.length}) </button>
                </div> 
            </div> */}



            <div>
                <div className="flex justify-between pt-5">
                    <div className="font-bold text-left  text-xl">
                        {/* <h2>Available Players</h2> */}
                    </div>
                    <div className="added">
                        <div onClick={()=>handleIsActive("available")} className={`${isActive.available?"btn mr-2 btn-warning":"btn"}`}>Available</div>
                        <div onClick={()=>handleIsActive("selected")} className={`${isActive.available?"btn":"btn-warning btn ml-2"}`}>Selected {selectedPlayers}</div>



                        {/* <div onClick={()=>handleIsActive("available")} className={`${isActive.available?"btn mr-2 btn-warning {players.map((p)=><Available key={p.Id} player={p}></Available>)}":"btn"}`}>Available</div>
                        <div onClick={()=>handleIsActive("selected")} className={`${isActive.available?"btn":"btn-warning btn ml-2 {players.map((p)=><Available key={p.Id} player={p}></Available>)}"}`}>Selected</div> */}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-40">
                    {players.map(players => (
                        <div key={players.playerId} className="card bg-base-100  shadow-xl">
                            <figure className=" py-3">
                                <img className="w-full md: h-48 lg:h-52 rounded-xl"
                                    src={players.image}
                                    alt="player" />
                            </figure>
                            <div className="card-body p-0">
                                <h2 className="card-title pb-3 font-medium"><i className="fa-solid fa-user"></i>{players.name}</h2>
                                <div className="flex justify-between">
                                    <h3 className="font-light"><i className="fa-solid fa-flag pr-1"></i>{players.country}</h3>
                                    <h3 className="btn">{players.role}</h3>
                                </div> <hr></hr>
                                <h2 className="text-start font-medium">Rating</h2>
                                <div className="flex justify-between">
                                    <h2>{players.battingType}</h2>
                                    <h2 className="font-light">{players.bowlingType}</h2>
                                </div>
                               
                                <div className="card-actions flex justify-between">
                                    <h2 className="font-medium">Price:{players.biddingPrice}</h2>
                                    <button onClick={()=>hendleSelectedPlayer(players)} className="btn font-light">Choose Player</button>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>


              {/* {players.map((p)=><Available key={p.playerId} player={p}></Available>)} */}

            </div>


        </div>
    );
};

export default Players;

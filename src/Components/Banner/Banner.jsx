// import React from 'react';
import './Banner.css'

// eslint-disable-next-line react/prop-types
const Banner = ({handleState}) => {
    return (
        <div>
            <div className="Herro mx-auto py-10">
                <img className='mx-auto' src="https://i.ibb.co/7Vdmjzs/banner-main.png" alt="" />
                <h2 className='Cricket'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
                <h4 className='py-2'>Beyond Boundaries Beyond Limits</h4>
                <button onClick={()=>handleState()} className='btn btn-warning'>Claim Free Credit</button>
            </div>
        </div>
    );
};

export default Banner;
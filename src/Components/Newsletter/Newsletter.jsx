// import React from 'react';
import './Newsletter.css'

const Newsletter = () => {
    return (
        <div className='parent'>
            <div className='Newsletter w-5/6 mx-auto py-14'>
                <h2 className='text-4xl font-bold '>Subscribe to our Newsletter</h2>
                <p className='py-4'>Get the latest updates and news right in your inbox!</p>
                <label className=" flex justify-center items-center gap-2">
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" className="grow" placeholder="Enter Your Email" />
                    </label>
                    <button className="btn btn-warning join-item">Subscribe</button>
                </label>
            </div>
        </div>
    );
};

export default Newsletter;
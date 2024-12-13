// import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div>
            <div className='footerAll'>
                <div>
                    <img className='mx-auto pt-40' src="https://i.ibb.co/1mc747R/logo-footer.png" alt="" />
                </div>
                <div>

                    <footer className="footer p-10">
                        {/* <nav>
                            <h6 className="footer-title">Services</h6>
                            <a className="link link-hover">Branding</a>
                            <a className="link link-hover">Design</a>
                            <a className="link link-hover">Marketing</a>
                            <a className="link link-hover">Advertisement</a>
                        </nav> */}
                        <nav>
                            <h6 className="footer-title">About Us</h6>
                            {/* <a className="link link-hover">About us</a>
                            <a className="link link-hover">Contact</a>
                            <a className="link link-hover">Jobs</a>
                            <a className="link link-hover">Press kit</a> */}
                            <h6 className='text-left'>We are a passionate team <br />
                                 dedicated to providing the best <br />
                                 services to our customers.</h6>
                        </nav>
                        <nav>
                            <h6 className="footer-title">Quick Links</h6>
                            {/* <a className="link link-hover">Terms of use</a>
                            <a className="link link-hover">Privacy policy</a>
                            <a className="link link-hover">Cookie policy</a> */}
                            <ul className='text-left list-disc'>
                                <li>Home</li>
                                <li>Services </li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                        </nav>
                        <form>
                            <h6 className="footer-title">Subscribe</h6>
                            <p>Subscribe to our newsletter for the latest updates.</p>
                            <fieldset className="form-control w-80">
                                {/* <label className="label">
                                    <span className="label-text">Enter your email address</span>
                                </label> */}
                                <div className="join">
                                    <input
                                        type="text"
                                        placeholder="Enter Your Email"
                                        className="input input-bordered join-item" />
                                    <button className="btn btn-warning join-item">Subscribe</button>
                                </div>
                            </fieldset>
                        </form>
                    </footer>

                 <hr />

                 <div>
                    <h5 className='pt-5'>@2024 Your Company All Rights Reserved.</h5>
                 </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
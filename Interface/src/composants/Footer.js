import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "bootstrap/dist/css/bootstrap.min.css";
import '../css/Footer.css';
export default function Footer(){
    
    return (
        <footer className="footer py-5">
        <div className="container ">
            <div className="row">
                <div className="col-md-4">
                    <h4>Contact</h4>
                    <p>
                        Adress: II J 161 R Ambodivoanjo Ivandry Antananarivo, 101 <br/>
                        Call: +261 34 94 041 16 <br/>
                        Email: <a href="contact@hei.school"> contact@hei.school </a>
                    </p>
                    </div>
                    <div className="col-md-3">
                    <h4>Social presense</h4>
                    <ul className="list-unstyled">
                        <li><a href="https://web.facebook.com/hei.school/?_rdc=1&_rdr"><i className="bi bi-facebook"></i></a> Facebook</li>
                        <li><a href="https://github.com/Anjaraniaina/Toky-Trans/"><i className="bi bi-github"></i></a> Github</li>
                        
                        <li><a href="https://www.linkedin.com/company/hei-school/?originalSubdomain=mg"><i className="bi bi-linkedin"></i></a> Linkedin</li>
                    </ul>
                    </div>
                    <div className="col-md-5">
                    <p>© 2022 All rights reserved.<br/>
                        Made with <i className="bi bi-heart-fill"></i> by <a href="https://github.com/Anjaraniaina/Toky-Trans/">a group of student</a></p>
                    </div>
            </div>
        </div>
    </footer>

    ) 

}
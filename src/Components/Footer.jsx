import {FaLinkedin, FaTwitter, FaInstagram, FaFacebookF} from "react-icons/fa";
// import {FaInstagram} from "react-icons/fa";
// import {FaFacebookF} from "react-icons/fa";
import Down from "./Image/icon-arrow-down.svg";

const Footer = () => {
    return(
        <section className="foote">
            <h1 className="text-center mb-5 pt-5">Sunnysine</h1>
            <div className="row mt-5 justify-content-center">
                <div className="col-lg-1 col-2">
                    <a href="#" className="text-dark foot">About</a>
                </div>
                <div className="col-lg-1 col-2">
                <a href="#" className="text-dark foot">Services</a>
                </div>
                <div className="col-lg-1 col-2">
                <a href="#" className="text-dark foot">Projects</a>
                </div>
            </div>
             <div className="row mt-5 justify-content-center">
                <div className="col-1">
                    <a href="#" className="text-dark">
                       < FaFacebookF />
                    </a>
                 </div>
                 <div className="col-1">
                    <a href="#" className="text-dark">
                       < FaInstagram />
                    </a>
                 </div>
                 <div className="col-1">
                    <a href="#" className="text-dark">
                       < FaTwitter />
                    </a>
                 </div>
                 <div className="col-1">
                    <a href="#" className="text-dark">
                    < FaLinkedin />
                    </a>
                 </div>
         </div>
 </section>
    )
}
export default Footer
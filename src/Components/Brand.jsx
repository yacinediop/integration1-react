import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Transform from "./Image/image-transform.jpg";

const Brand = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return(
        <section className="row m-0 g-0 brand">
            <div className="col-lg-6 col-sm-12 col-md-12 p-5">
                <h1 className="pt-5 mb-5 titlebrand m-0 p-0 pb-5">Transform your brand</h1>
                <p className="parabrand pb-5">We are a full-service ceative agency specializing in helping brands grow fast
                    Engage your clients through compelling visuals that do most of the marketing for you.
                </p>
                <a href="#" className="mt-5 mb-5 more text-dark">LEARN MORE</a>
            </div>
            <div className="col-lg-6 col-sm-12 col-md-12">
            <div data-aos="flip-left">
                    <img src={Transform} className="img-fluid brd" />
                </div>
            </div>
        </section>
    )
}


export default Brand;

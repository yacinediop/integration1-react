// import graphic from "./Image/image-graphic-design.jpg"
// import photo from "./Image/image-photography.jpg"
import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Collection = () => {  
    useEffect(() => {
        AOS.init();
      }, []) 
    return(
        <div className="row m-0 p-0">
            <div data-aos="zoom-in-down" className="col-lg-6 col-sm-12 col-md-12 graph text-center">
                <h2 className="">Graphic Design</h2>
                <p className="mb-5 px-5 mx-5 great">Great design makes you memorables. We deliver artwork that underscores your brand message and captures potential clients' attention</p>
            </div>
            <div data-aos="zoom-in-down" className="col-lg-6 col-sm-12 col-md-12 graphy text-center">
                <h2>Photography</h2>
                <p className="mx-5 px-5">Increase your credibility by getting the most stunning high-quality photos that improve your business image.</p>
            </div>
        </div>
    )
}

export default Collection;
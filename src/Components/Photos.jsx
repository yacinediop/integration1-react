import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import milk from "./Image/image-gallery-milkbottles.jpg"
import Orange from "./Image/image-gallery-orange.jpg"
import cone from "./Image/image-gallery-cone.jpg"
import cube from "./Image/image-gallery-sugarcubes.jpg"

  
const Photos= () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return(
            <div className="row g-0">
            <div className="col-lg-3 col-sm-6 col-md-12">
               <div data-aos="flip-left"
                   data-aos-easing="ease-out-cubic"
                   data-aos-duration="2000">
                      <img src={milk} className="img-fluid tof" />
                </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-12">
                <div data-aos="flip-left"
                   data-aos-easing="ease-out-cubic"
                   data-aos-duration="2000">
                      <img src={Orange} className="img-fluid tof" />
                </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-12">
                <div data-aos="flip-left"
                   data-aos-easing="ease-out-cubic"
                   data-aos-duration="2000">
                     <img src={cone} className="img-fluid tof" />
                </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-12">
                <div data-aos="flip-left"
                   data-aos-easing="ease-out-cubic"
                   data-aos-duration="2000">
                     <img src={cube} className="img-fluid tof" />
                </div>
            </div>
            </div>
    )
}

export default Photos;


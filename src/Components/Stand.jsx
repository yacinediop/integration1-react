import Stander from "./Image/image-stand-out.jpg"

const Stand = () => {
    return(
        <div className="row g-0">
            <div className="col-lg-6 col-sm-12 col-md-12">
            <div data-aos="flip-left">
               <img src={Stander} className="img-fluid brd" />
            </div>
            </div>
            <div className="col-lg-6 col-sm-12 col-md-12 p-5 ">
                <h1 className=' titlebrande pb-5'>Stand out to the rigth audience</h1>
                <p className="parabrand pb-5">Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extends your brand in digital places. </p>
                <a href="#" className=" mb-5 more text-dark">LEARN MORE</a>
            </div>
        </div>
    ) 
}

export default Stand;
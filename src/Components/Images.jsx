import emili from "./Image/image-emily.jpg"
import jeny from "./Image/image-jennie.jpg"
import thomas from "./Image/image-thomas.jpg"
  
const Images = () => {
    return(
        <section>
            <div className="row text-center">
            <h1 className="my-5 testi">Clients testimonials</h1>
            <div className="col-lg-4 col-sm-12 col-md-12 ">
                <img src={emili} alt="jh" className="img-fluid radi mb-5" />
                <p className="mb-5 px-5 mx-5">We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit. </p>
                <h1 className="">Emily R.</h1>
                <p className="mb-5">Marketing Director</p>
            </div>
            <div className="col-lg-4 col-sm-12 col-md-12">
                <img src={jeny} alt="de" className="img-fluid radi mb-5" />
                <p className="mb-5 px-5 mx-5">Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience</p>
                <h1>Thomas S.</h1>
                <p className="mb-5">Chief Operating Officer</p>
            </div>
            <div className="col-lg-4 col-sm-12 col-md-12">
               <img src={thomas} alt="qb" className="img-fluid radi mb-5" />
               <p className="mb-5 px-5 mx-5">Incredible end result! Our sales increased over 400% when we worked with Sunnyside.Highly recommended!</p>
               <h1>Jennie F.</h1>
               <p className="mb-5">Business Owner</p>
            </div>
            </div>
        </section>
    )
}

export default Images
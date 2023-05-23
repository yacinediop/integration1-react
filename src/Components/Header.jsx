import imgHeader from "./Image/image-header.jpg";

const Header = () =>{
    return(
        <div className="header">
           <img src={imgHeader} alt="TYR" className="img-fluid" />
        </div>
    )
}

export default Header;
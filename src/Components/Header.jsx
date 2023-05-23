import imgHeader from "./Image/image-header.jpg";

const Header = () =>{
    return(
        <div className="header">
           <img src={imgHeader} className="img-fluid" />
        </div>
    )
}

export default Header;
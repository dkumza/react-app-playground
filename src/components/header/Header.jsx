import "./header.css";
import logo from "../images/logo.svg";

const Header = () => {
   return (
      <div className="head-container">
         <div className="head-left-side">
            <img src={logo} />
         </div>
         <div className="head-right-side">
            <ul className="menu">
               <li>
                  <a href="#">Home</a>
               </li>
               <li>
                  <a href="#">Pricing</a>
               </li>
               <li>
                  <a href="#">Resources</a>
               </li>
               <li>
                  <a href="#">About</a>
               </li>
               <li>
                  <a href="#">Constact US</a>
               </li>
            </ul>
         </div>
      </div>
   );
};

export default Header;

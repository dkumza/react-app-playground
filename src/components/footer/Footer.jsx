import "./footer.css";
import logo from "../images/logo.svg";

const Footer = () => {
   return (
      <div className="footer-container">
         <div className="footer-left">
            <ul className="menu-2">
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
         <div className="footer-right">
            <img src={logo} />
         </div>
      </div>
   );
};

export default Footer;

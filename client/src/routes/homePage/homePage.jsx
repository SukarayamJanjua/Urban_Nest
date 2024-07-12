import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";


function HomePage() {
  const { currentUser } = useContext(AuthContext)
  console.log(currentUser);

  return (
    <div className="homePage">
      
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Urban Nest &#8734; Find Your Dream home</h1>
          <p>
            Welcome to our premier real estate platform, where your dream home is just a few clicks away. Whether you’re searching for a chic urban apartment, a spacious suburban house, or a tranquil countryside retreat, we offer a diverse array of properties to suit every lifestyle and budget. Our user-friendly website is designed to streamline your property search, providing detailed listings, high-quality images, and virtual tours that bring each property to life. Our dedicated team of real estate professionals is committed to guiding you through every step of the buying process, ensuring a seamless and stress-free experience. Discover your dream place with us today and take the first step towards a brighter, more comfortable future.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>Student @ NIT Jalandhar</h1>
              <h2>B.Tech Final year</h2>
            </div>
            {/* <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Property Ready</h2>
            </div> */}
          </div>
          <div className="footer">
            <p>Connect with me on Social Media</p>
            <div className="logos-block">
              <div className="logos">
                <a href="https://www.linkedin.com/in/sukarayam-janjua/" target="_blank">
                  <img src="/icons8-linkedin-48.png" alt="" />
                </a>
              </div>
              <div className="logos">
                <a href="https://twitter.com/itsukarayamj" target="_blank">
                <img src="/icons8-x-50.png" alt="" />
                </a>
              </div>
              <div className="logos">
                <a href="https://www.instagram.com/j_sukarayam_/" target="_blank">
                  <img src="/icons8-instagram-48.png" alt="" />
                </a>
              </div>
              <div className="logos">
                <a href="https://github.com/SukarayamJanjua" target="_blank">
                  <img src="/icons8-github-48.png" alt="" />
                </a>
              </div>
            </div>
            <div className="email">
                Feedback Appreciated <a href="mailto: agam.sukarayam@gmail.com" target="_blank">Email</a>
                {/* <img src="/icons8-gmail-48.png" alt="" /> */}
              
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/canva_sidebarAnimated.gif" alt="" />
      </div>
    </div>
  );
}

export default HomePage;

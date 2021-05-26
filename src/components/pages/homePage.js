import Carousel from "react-bootstrap/Carousel";
import Assam from "../../images/Assam.jpg";
import Kerela from "../../images/Kerela.jpg";
import Rajashthan from "../../images/Rajasthan.jpg";
import { Button } from "../button";
import { Link } from "react-router-dom";
import "./homePage.css";

function Home() {
  return (
    <div>
      <div className="slider">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={Assam} alt="First slide" />
            <div className="header">
              <h1>Assam</h1>
              <p>The land of Tea.</p>
              <button className="exploreBtn">Explore </button>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="header">
              <h1>Kerela</h1>
              <p>The land of God.</p>
              <button className="exploreBtn">Explore </button>
            </div>
            <img className="d-block w-100" src={Kerela} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Rajashthan} alt="Third slide" />
            <div className="header">
              <h1>Rajasthan</h1>
              <p>The land of kings.</p>
              <Link to="/Destination/Rajasthan">
                <button className="exploreBtn">Explore</button>
              </Link>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
export default Home;

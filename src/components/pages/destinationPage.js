import RajasthanDes from "../../images/RajasthanDes.jpg";
import halfMoon from "../../images/Halfmoon.gif";
import "../dropdown.css";
import { Row, Col } from "react-bootstrap";
import data, { finalPromise } from "./data";
import React, { Component } from "react";
import ReactCardCarousel from "react-card-carousel";

const stylObj = {
  position: "relative",
  height: "100vh",
  width: "100%",
  display: "flex",
  flex: 1,
  justifyContent: "center",
  alignItems: "middle",
};
export default class MyCarousel extends Component {
  state = {
    isLoaded: false,
    backgroundImage: "null",
    content: {
      title: "null",
      desrciption: "null",
    },
  };
  constructor() {
    super();
    let self = this;
    finalPromise.then(() =>
      self.setState({ isLoaded: true }, () => console.log("state changes"))
    );
  }
  componentDidMount() {
    this.setState({
      ...{
        backgroundImage: data.cities[0].backgroundImage,
        content: {
          title: data.cities[0].header,
          description: data.cities[0].info,
        },
      },
    });
  }
  afterChange = (idx) => {
    console.log("index", idx);
    if (idx === undefined) {
      console.log("reached");
      this.setState({
        ...{
          backgroundImage: data.cities[0].backgroundImage,
          content: {
            title: data.cities[0].header,
            description: data.cities[0].info,
          },
        },
      });
    } else {
      this.setState({
        ...{
          backgroundImage: data.cities[idx].backgroundImage,
          content: {
            title: data.cities[idx].header,
            description: data.cities[idx].info,
          },
        },
      });
    }
  };
  render() {
    return (
      <>
        <img
          src={halfMoon}
          className={this.state.isLoaded ? "loading loader" : "loaded loader"}
          alt="loader"
        ></img>
        <div className={this.state.isLoaded ? "loaded" : "loading"}>
          <div>
            <div className="DestImage">{this.state.backgroundImage}</div>
          </div>
          <Row className="no-gutters">
            <Col xs={12} md={6} className="destLeftSection pl-5">
              {this.state.content.title}
              <Row className="no-gutters about p-2 ">
                {this.state.content.description}
              </Row>
            </Col>

            <Col xs={12} md={6} className=" carousel">
              <div style={stylObj}>
                <ReactCardCarousel
                  spread="wide"
                  autoplay={true}
                  autoplay_speed={3500}
                  afterChange={this.afterChange}
                >
                  {data.cities.map((city, index) => {
                    return (
                      <div className="carousel-card">
                        <Row style={{ height: "100%" }} className="no-gutters">
                          <div className="dest-card">
                            {city.image}
                            <Row className="textPart no-gutters pl-3">
                              <Row className="no-gutters cardHeader">
                                {city.header}
                              </Row>
                              <Row className="no-gutters cardInfo">
                                <p>{city.info}</p>
                                <button className="cardBtn">Book now!</button>
                              </Row>
                            </Row>
                          </div>
                        </Row>
                      </div>
                    );
                  })}
                </ReactCardCarousel>
              </div>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

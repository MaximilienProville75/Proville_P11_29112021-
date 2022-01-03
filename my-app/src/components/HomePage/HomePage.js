import React from "react";
import "./HomePage.css";

import { Header } from "../Header/Header";
import { LocationList } from "./LocationList/LocationList.js";
import { Footer } from "../Footer/Footer.js";

import bannerImg from "../../bannerhero.svg";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch("/location.json")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (!isLoaded) return null;

    if (isLoaded) {
      return (
        <>
          <Header />
          <div className="BannerHero">
            <img
              className="BannerHeroImg"
              src={bannerImg}
              alt="CliffsSeaside"
            />
          </div>

          <LocationList items={items} />
          <Footer />
        </>
      );
    }
  }
}

export default HomePage;

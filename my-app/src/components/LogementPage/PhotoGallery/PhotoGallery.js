import React from "react";
import "/Users/maximilienproville/Desktop/FORMATION Openclassrooms/Projet_11_Kasa/my-app/src/components/LogementPage/PhotoGallery/PhotoGallery.css";

import { LeftController } from "./PhotoGalleryControler/LeftController/LeftController";
import { RightController } from "./PhotoGalleryControler/RightController/RightController";

export class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 1,
      disabledNext: false,
      disabledPrev: false,
    };
  }

  togglePrev(e) {
    let index = this.state.index - 1;
    let disabledPrev = index === 0;

    this.setState({
      index: index,
      disabledPrev: disabledPrev,
      disabledNext: false,
    });
  }

  toggleNext(e) {
    const arrayOfPicturesLink = this.props.locations.pictures;
    console.log(arrayOfPicturesLink);
    let index = this.state.index + 1;
    let disabledNext = index === arrayOfPicturesLink.length - 1;

    this.setState({
      index: index,
      disabledNext: disabledNext,
      disabledPrev: false,
    });
  }

  render() {
    const arrayOfPicturesLink = this.props.locations.pictures;
    const { index, disabledNext, disabledPrev } = this.state;
    const profile = arrayOfPicturesLink ? arrayOfPicturesLink[index] : null;

    console.log(profile);
    return (
      <div className="pictureImg">
        <div className="controllerS">
          <LeftController
            toggle={(e) => this.togglePrev(e)}
            active={disabledPrev}
          />
          <RightController
            toggle={(e) => this.toggleNext(e)}
            active={disabledNext}
          />
        </div>
        <img src={profile} alt="blblbl" />
      </div>
    );
  }
}

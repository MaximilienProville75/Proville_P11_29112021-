import React from "react";
import "./PhotoGallery.css";

import { Controller } from "./PhotoGalleryControler/LeftController/Controller";

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
    const arrayOfPicturesLink = this.props.items.pictures;
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
    const arrayOfPicturesLink = this.props.items.pictures;
    const { index, disabledNext, disabledPrev } = this.state;
    const profile = arrayOfPicturesLink ? arrayOfPicturesLink[index] : null;

    return (
      <div className="pictureImg">
        <div className="controllerS">
          <Controller
            toggle={(e) => this.togglePrev(e)}
            active={disabledPrev}
          />
          <div className="rotateArrow">
            <Controller
              toggle={(e) => this.toggleNext(e)}
              active={disabledNext}
              className="rotateArrow"
            />
          </div>
        </div>
        <img src={profile} alt="Gallery" />
      </div>
    );
  }
}

import React from "react";
import "/Users/maximilienproville/Desktop/FORMATION Openclassrooms/Projet_11_Kasa/my-app/src/components/LogementPage/PhotoGallery/PhotoGalleryControler/RightController/RightController.css";

export default class RightController extends React.Component {
  next(e, incrementedIndex) {
    e.preventDefault();
    this.isVisible = false;
    const gallery = this.retrieveGallery();

    while (incrementedIndex != gallery.length) {
      this.loadMedia(incrementedIndex);
      break;
    }
    if (incrementedIndex === gallery.length) {
      this.close(e);
    }
  }

  render() {
    return;
  }
}

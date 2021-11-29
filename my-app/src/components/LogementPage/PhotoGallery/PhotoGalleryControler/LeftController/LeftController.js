import React from "react";
import "/Users/maximilienproville/Desktop/FORMATION Openclassrooms/Projet_11_Kasa/my-app/src/components/LogementPage/PhotoGallery/PhotoGalleryControler/LeftController/LeftController.css";

export default class LeftController extends React.Component {
  prev(e, decrementedIndex) {
    e.preventDefault();
    const gallery = this.retrieveGallery();
    this.isVisible = false;

    while (decrementedIndex !== gallery.length - gallery.length - 1) {
      this.loadMedia(decrementedIndex);
      break;
    }
    if (decrementedIndex < 0) {
      this.close(e);
    }
  }

  render() {
    return;
  }
}

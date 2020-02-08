import React from "react";
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

class Addwaste extends React.Component {
  constructor(props) {
    super(props)
    this.handleTakePhoto = this.handleTakePhoto.bind(this);
  }
  setRef = webcam => {
    this.webcam = webcam;
  };

  handleTakePhoto(dataUri) {
    return dataUri

  }
  render() {
    return (
      <div>

        <Camera
          onTakePhoto={(dataUri) => { this.handleTakePhoto(dataUri); }}
        />
      </div>
    );
  }
}
export default Addwaste;
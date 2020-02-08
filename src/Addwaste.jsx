import React from "react";
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

class Addwaste extends React.Component {


  // };
  constructor(props) {
    super(props)
    this.handleTakePhoto = this.handleTakePhoto.bind(this);
  }
  setRef = webcam => {
    this.webcam = webcam;
  };

  // capture = () => {
  //   this.screenshotFormat = "image/jpeg";
  //   const imageSrc = this.webcam.getScreenshot();

  //   this.screenshotFormat = "image/jpeg";
  //   console.log(imageSrc);

  handleTakePhoto(dataUri) {
    return dataUri

  }




  // render() {
  //   const videoConstraints = {
  //     width: 1280,
  //     height: 720,
  //     facingMode: "user"
  //   };
  render() {
    return (
      <div>
        {/* <Webcam
          audio={false}
          height={350}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={350}
          videoConstraints={videoConstraints}
        /><br />

        <button onClick={this.capture}>Capture</button> */}

        <Camera
          onTakePhoto={(dataUri) => { this.handleTakePhoto(dataUri); }}
        />
      </div>
    );
  }
}
export default Addwaste;
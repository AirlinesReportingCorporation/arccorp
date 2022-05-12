import React, { Component } from "react";
import moment from "moment";

class Jumbovideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoClick: false,
    };
  }

  playVideo() {
    this.setState({ VideoClick: true });
  }

  render() {
    return (
      <div>
        {this.state.VideoClick ? (
          <div className="arc-jumbo-video">
            <div className="usa-embed-container mb-4 ">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/JjJPBV7N2fU?autoplay=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        ) : (
          <div
            onClick={() => this.playVideo()}
            className="arc-jumbo-video-cover"
          >
            <img
              className="img-fluid mb-4"
              src="https://www2.arccorp.com/globalassets/homepage/redesign/march-update/jumbotron_retina_datavideo2.jpg"
              alt="March Data Update 2022"
            />
          </div>
        )}
      </div>
    );
  }
}

export default Jumbovideo;

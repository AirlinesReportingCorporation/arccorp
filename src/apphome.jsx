import React, { Component, lazy, Suspense } from "react";

import "youtube-background";

import LazyLoad from "vanilla-lazyload";

if (!document.lazyLoadInstance) {
  document.lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy",
  });
}

const HomepageSlider = lazy(() => import("./components/HomepageSlider"));
const HomepageSection = lazy(() => import("./components/HomepageSection"));



class Apphome extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.lazyLoadInstance.update();
    new VideoBackgrounds("[data-vbg]");
  }

  // Update lazyLoad after rerendering of every image
  componentDidUpdate() {
    document.lazyLoadInstance.update();
  }

  render() {
    return (
      <div className="arc-homepage">
        <div style={{ maxWidth: "100%", overflow: "hidden" }}>
          <Suspense
            fallback={
              <div className="loading-container">
                <div className="loading">
                  <div className="loading-icon">
                    <i className="fas fa-circle-notch fa-spin"></i>
                  </div>
                </div>
              </div>
            }
          >
            <HomepageSlider />
          </Suspense>
        </div>

        <Suspense
          fallback={
            <div className="loading-container">
              <div className="loading">
                <div className="loading-icon">
                  <i className="fas fa-circle-notch fa-spin"></i>
                </div>
              </div>
            </div>
          }
        >
          <HomepageSection />
        </Suspense>
      </div>
    );
  }
}

export default Apphome;

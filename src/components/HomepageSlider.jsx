import React, { Component } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import "youtube-background";
import LazyLoad from "vanilla-lazyload";

if (!document.lazyLoadInstance) {
  document.lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy",
  });
}

function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

class HomepageSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoClick: false,
      index: "0",
    };
  }

  componentDidMount() {
    document.lazyLoadInstance.update();
    new VideoBackgrounds("[data-vbg]");
  }

  // Update lazyLoad after rerendering of every image
  componentDidUpdate() {
    document.lazyLoadInstance.update();
  }

  playVideo() {
    this.setState({ VideoClick: true });
  }

  updateVideoIndex(i) {
    this.setState({ index: i });
  }

  render() {
    var slides = [
      <SwiperSlide className="swiper-no-swiping">
        <div
          className="arc-jumbo arc-youtube-jumbo fog"
          style={{ alignItems: "flex-end" }}
        >
          <video
            className="youtube-background-poster lazy"
            width="620"
            loop="true"
            autoPlay
            muted
            data-src="https://www2.arccorp.com/globalassets/homepage/february-homepage-2x.mp4"
          >
            <source
              type="https://www2.arccorp.com/globalassets/homepage/february-homepage-2x.mp4"
              data-src="lazy.mp4"
            />
          </video>

          <div className="arc-jumbo-inner align-items-baseline text-center">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                {/* Comment out jumbovideo when video is ready */}
                {/*<Jumbovideo />*/}
                {/* This section is for when the video is not ready */}
                {}
                <h2
                  className="arc-jumbo-inner-title mb-1"
                  style={{ maxWidth: "720px", margin: "0 auto" }}
                >
                  Monthly U.S. Travel Agency Air Ticket Sales Set January Record
                </h2>
                <div
                  className="arc-jumbo-inner-body"
                  style={{ marginBottom: "60px" }}
                >
                  Total Agency Sales Topped $8.9 Billion on Strong Domestic and International Demand
                  <span className="arc-homepage-cta-link arc-jumbo-cta-link d-inline-flex p-0 pl-2">
                    <a href="https://www2.arccorp.com/about-us/newsroom/2024-news-releases/january-2024-ticket-sales/">
                      Read More
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>,
      <SwiperSlide>
        <div
          className="arc-jumbo jumbo-image lazy"
          data-bg={
            "https://www2.arccorp.com/globalassets/homepage/ETC-RegOpen-jumbotron.jpg"
          }
        >
          <div
            className="arc-jumbo-inner white"
            style={{ alignItems: "flex-end" }}
          >
            <a
              href="https://elevate-travelconnect.com/?utm_source=Jumbo_Carousel"
              className=""
              style={{
                color: "#000000 !important",
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
              }}
              alt="Learn More"
              title="learn more"
            >
              &nbsp;
            </a>
          </div>
        </div>
      </SwiperSlide>,
      <SwiperSlide>
        <div
          className="arc-jumbo lazy"
          data-bg={
            "https://www2.arccorp.com/globalassets/homepage/redesign/march-update/fraudalert-jumbotron.jpg"
          }
        >
          <div className="arc-jumbo-inner white">
            <div className="row">
              <div className="col-lg-7 col-md-12">
                <img
                  src="https://www2.arccorp.com/globalassets/arc-logos/corporate-logos/arc-logo-l-gray.png"
                  style={{
                    maxWidth: "60px",
                    marginBottom: "15px",
                  }}
                />
                <h2 className="arc-jumbo-inner-title white">Fraud Alert</h2>
                <div className="arc-jumbo-inner-body">
                  Stay vigilant against the latest fraud schemes.
                </div>
                <a
                  className="ctaBtn ctaBtn--white p-0 tarmac"
                  target="_blank"
                  href="https://www2.arccorp.com/support-training/fraud-prevention/schemes/?utm_source=Jumbo_Carousel"
                >
                  Take Action
                </a>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>,
      <SwiperSlide>
        <div
          className="arc-jumbo lazy"
          data-bg={
            "https://www2.arccorp.com/globalassets/homepage/redesign/jumbotron_retina_ARCPay.jpg"
          }
        >
          <div className="arc-jumbo-inner white">
            <div className="row">
              <div className="col-lg-7 col-md-12">
                <img
                  src="https://www2.arccorp.com/globalassets/homepage/redesign/slides/arcpay_logo.png"
                  style={{
                    maxWidth: "100px",
                    marginBottom: "15px",
                    filter: "invert(1)",
                  }}
                />
                <h2
                  className="arc-jumbo-inner-title white"
                  style={{ maxWidth: "500px" }}
                >
                  Payment processing built by and for travel professionals
                </h2>
                <a
                  className="ctaBtn ctaBtn--tarmac p-0 mt-0"
                  href="https://www2.arccorp.com/products-participation/products/arc-pay/?utm_source=Jumbo_Carousel"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>,
      <SwiperSlide>
        <div
          className="arc-jumbo lazy"
          data-bg={
            "https://www2.arccorp.com/globalassets/products--participation/ndc/dc-ndc-tapportugal-jumbotron.jpg"
          }
        >
          <div
            className="arc-jumbo-inner white"
            style={{ alignItems: "flex-end" }}
          >
            <a
              href="https://www2.arccorp.com/products-participation/distribution/arcdirectconnect/?utm_source=Jumbo_Carousel"
              className=""
              style={{
                color: "#000000 !important",
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
              }}
              alt="Learn More"
              title="learn more"
            >
              &nbsp;
            </a>
          </div>
        </div>
      </SwiperSlide>,
    ];

    return (
      <Swiper
        navigation={true}
        centeredSlides={true}
        slidesPerView={"1.3"}
        loop={true}
        pagination={{
          clickable: true,
        }}
        spaceBetween={30}
        watchSlidesVisibility="true"
        modules={[Navigation, Pagination]}
        className="arc-jumbo-swiper"
      >
        {shuffleArray(slides).map((data, i) => {
          return <div key={i}>{data}</div>;
        })}
      </Swiper>
    );
  }
}

export default HomepageSlider;

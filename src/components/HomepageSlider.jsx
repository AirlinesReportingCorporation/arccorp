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

  render() {
    var slides = [
      <SwiperSlide>
        <div
          className="youtube-background-2"
          data-vbg="https://www2.arccorp.com/globalassets/homepage/redesign/may-homepage-2x.mp4"
        >
          <div
            className="arc-jumbo transparent"
            style={{ alignItems: "flex-end" }}
          >
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
                    April U.S. Travel Agency Air Ticket Sales Total $8.7 Billion
                  </h2>
                  <div
                    className="arc-jumbo-inner-body"
                    style={{ marginBottom: "60px" }}
                  >
                    Average Monthly Ticket Price Falls Below Year-Over-Year
                    Levels for the First Time Since 2021{" "}
                    <a className="arc-homepage-cta-link arc-jumbo-cta-link d-inline-flex p-0 pl-2">
                      <a href="https://www2.arccorp.com/about-us/newsroom/2023-news-releases/april-2023-ticket-sales/?utm_source=Jumbo_Carousel">
                        Read More
                      </a>
                    </a>
                  </div>
                </div>
                <a
                  target="_blank"
                  href="https://www.youtube.com/channel/UCWHZsoCDNhjorop892EVETw?sub_confirmation=1"
                  className="arc-jumbo-subscribe"
                >
                  <img
                    src="https://www2.arccorp.com/globalassets/homepage/redesign/march-update/subscribe_jumbo.jpg"
                    alt="subscribe_jumbo.jpg"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>,
      <SwiperSlide>
        <div className="arc-jumbo black lazy" style={{ background: "#000000" }}>
          <div className="arc-jumbo-inner white">
            <div className="row text-center">
              <div className="col-lg-12">
                <img
                  src="https://www2.arccorp.com/globalassets/homepage/redesign/tc24.png"
                  alt=""
                  className="img-fluid"
                />
                <a
                  href="https://www2.arccorp.com/about-us/newsroom/2023-news-releases/elevate-travelconnect-dates-location/?utm_source=Jumbo_Carousel"
                  className="ctaBtn ctaBtn--white tarmac p-0 mt-4"
                  style={{ color: "#000000 !important" }}
                >
                  Learn More
                </a>
                <a
                  href="https://youtu.be/_5wZ8LvruKE?utm_source=Jumbo_Carousel"
                  className="ctaBtn ctaBtn--white-outline p-0 teal mt-4"
                >
                  Watch Video
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
            "https://www2.arccorp.com/globalassets/homepage/redesign/march-update/our_story_background_jumbo.jpg"
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
                <h2 className="arc-jumbo-inner-title white">
                  Accelerating the Growth of Global Air Travel
                </h2>
                <div className="arc-jumbo-inner-body">
                  See how ARC supports the travel ecosystem.
                </div>
                <a
                  className="ctaBtn ctaBtn--white p-0 tarmac"
                  target="_blank"
                  href="https://www2.arccorp.com/about-us/our-story?utm_source=Jumbo_Carousel"
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
            "https://www2.arccorp.com/globalassets/homepage/redesign/march-update/jumbotron_retina_DG.jpg"
          }
        >
          <div className="arc-jumbo-inner white">
            <div className="row">
              <div className="col-lg-7 col-md-12">
                <img
                  src="https://www2.arccorp.com/globalassets/homepage/redesign/march-update/arcfk.png"
                  style={{
                    maxWidth: "250px",
                    marginBottom: "15px",
                  }}
                />
                <div className="arc-jumbo-new">NEW</div>
                <h2 className="arc-jumbo-inner-title white">
                  Destination Gateway
                </h2>
                <div className="arc-jumbo-inner-body">
                  Gain Global Airline Insights to Grow your Destination
                  Marketing
                </div>
                <a
                  className="ctaBtn ctaBtn--white p-0 tarmac"
                  href="https://www2.arccorp.com/products-participation/products/destination-gateway/?utm_source=Jumbo_Carousel"
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
            "https://www2.arccorp.com/globalassets/homepage/redesign/slides/data_analytics_jumbotron_retina.jpg"
          }
        >
          <div className="arc-jumbo-inner white">
            <div className="row">
              <div className="col-lg-7 col-md-12">
                <div className="arc-jumbo-new">NEW</div>
                <h2 className="arc-jumbo-inner-title white">
                  Advanced Data Analytics
                </h2>
                <div className="arc-jumbo-inner-body">
                  Advanced data analytic solutions using Artificial Intelligence
                </div>
                <a
                  className="ctaBtn ctaBtn--white p-0 tarmac"
                  href="https://www2.arccorp.com/products-participation/products/advanced-data-analytics/?utm_source=Jumbo_Carousel"
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
            "https://www2.arccorp.com/globalassets/products--participation/arc-pay/uplift-arc.jpg?1"
          }
        >
          <div className="arc-jumbo-inner white">
            <div className="row">
              <div className="col-lg-7 col-md-12">
                <img
                  style={{
                    maxWidth: "170px",
                    marginBottom: "15px",
                  }}
                  src="https://www2.arccorp.com/globalassets/products--participation/arc-pay/logos2x.png"
                  alt="ARC Logo and uplift logo"
                />
                <h2 className="arc-jumbo-inner-title white">
                  Empower Your <br></br> Customers to Book Now and Pay Later.
                </h2>
                <div className="arc-jumbo-inner-body">
                  Give travelers the flexibility to spread the cost of their{" "}
                  <br></br> trip over low monthly payments.
                </div>
                <a
                  className="ctaBtn ctaBtn--white p-0 tarmac"
                  target="_blank"
                  href="https://www2.arccorp.com/products-participation/products/arc-pay/arc-pay-uplift/?utm_source=Jumbo_Carousel"
                >
                  Learn More
                </a>
              </div>
            </div>
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
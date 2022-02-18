import React, { Component } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

var homeData = {
  recentBlogTitle:
    "Top Corporate Equity Index Score Reflects ARC’s Commitment to Diversity, Inclusion",
  recentBlogLink:
    "https://www2.arccorp.com/articles-trends/the-latest/arc-receives-top-corporate-equity-index-score-2022",
  popularArticles: [
    {
      date: "Feb 21",
      title:
        "Top Corporate Equity Index Score Reflects ARC’s Commitment to Diversity, Inclusion",
      link:
        "https://www2.arccorp.com/articles-trends/the-latest/arc-receives-top-corporate-equity-index-score-2022",
    },
    {
      date: "Feb 21",
      title: "ARC’s Top Insights from 2021",
      link:
        "https://www2.arccorp.com/articles-trends/the-latest/arc-receives-top-corporate-equity-index-score-2022",
    },
    {
      date: "Feb 21",
      title: "GBTA 2021 Recap: Looking Toward the Future",
      link:
        "https://www2.arccorp.com/articles-trends/the-latest/arc-receives-top-corporate-equity-index-score-2022",
    },
    {
      date: "Feb 21",
      title: "Celebrating ARC Employees Who Served in the Military",
      link:
        "https://www2.arccorp.com/articles-trends/the-latest/arc-receives-top-corporate-equity-index-score-2022",
    },
  ],
};

class Apphome extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="arc-homepage">
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
          <SwiperSlide>
            <div
              className="arc-jumbo"
              style={{
                background:
                  "url(https://www2.arccorp.com/globalassets/homepage/redesign/slides/homepage-slide-test.png) center center / cover no-repeat",
              }}
            >
              <div className="arc-jumbo-inner">asdf</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="arc-jumbo">Slide 2</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="arc-jumbo">Slide 3</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="arc-jumbo">Slide 4</div>
          </SwiperSlide>
        </Swiper>

        <div className="arc-homepage-section">
          <div className="row">
            <div className="col-lg-6">
              <div className="arc-homepage-card">
                <div className="row align-items-center no-gutters">
                  <div className="col-lg-6" style={{ postion: "relative" }}>
                    <div className="arc-homepage-blog-left d-flex flex-column flex-md-row flex-lg-column flex-xl-column">
                      <div className="arc-homepage-blog-img">
                        <img
                          src="https://www2.arccorp.com/globalassets/homepage/redesign/slides/homepage-blog-image-test.png"
                          className="img-fluid"
                        />
                      </div>
                      <div className="arc-homepage-blog-meta">
                        <div className="arc-homepage-blog-title">
                          {homeData.recentBlogTitle}
                        </div>
                        <div className="arc-homepage-cta-link">
                          <a href={homeData.recentBlogLink}>Read More</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="arc-homepage-blog-right d-flex flex-column">
                      <div>
                        <div className="arc-homepage-blog-title">
                          Most Popular Aritcles
                        </div>
                        {homeData.popularArticles.map((data, i) => {
                          return (
                            <div key={i}>
                              <div className="arc-homepage-blog-date">
                                {data.date}
                              </div>
                              <a
                                href={data.link}
                                className="arc-homepage-blog-popular-title"
                              >
                                {data.title}
                              </a>
                            </div>
                          );
                        })}
                      </div>
                      <div className="arc-homepage-blog-link">
                        <a href={homeData.recentBlogLink}>All Articles</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="arc-homepage-card d-flex align-items-center"
                style={{
                  background:
                    "url(https://www2.arccorp.com/globalassets/homepage/redesign/slides/homepage-sales-variance.png) center center / cover no-repeat",
                }}
              >
                <div className="row align-items-center text-center type-color-white">
                  <div className="col-lg-12">
                    <div className="arc-homepage-blog-inner">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Distinctio magni quod corporis accusantium, beatae sit
                      amet a soluta iste alias, iusto sunt, eius eveniet natus
                      facilis laboriosam incidunt architecto! Accusantium!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div
                className="arc-homepage-card"
                style={{
                  background:
                    "url(https://www2.arccorp.com/globalassets/homepage/redesign/slides/homepage-arc-stats.png) center center / cover no-repeat",
                }}
              >
                <div className="row align-items-center no-gutters">
                  <div className="col-lg-12">
                    <div className="arc-homepage-stats">
                      <div className="arc-homepage-stats-title">
                        <span>Explore</span> ARC’s Monthly and Annual Airline{" "}
                        <span>Sales Statistics</span>
                      </div>
                      <div className="arc-homepage-cta-link yellow">
                        <a href="/">Get Access</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="arc-homepage-card d-flex align-items-center bg-color-teal">
                <div className="row no-gutters align-items-center text-center type-color-white">
                  <div className="col-lg-12">
                    <div className="arc-homepage-card-inner d-flex flex-column text-left">
                      <div>
                        <img
                          src="https://www2.arccorp.com/globalassets/homepage/redesign/slides/homepage-refund-icon.png"
                          alt=""
                          style={{ width: "auto" }}
                        />
                      </div>

                      <div className="arc-homepage-refund-title">
                        Airline Refund and Exchange Information
                      </div>

                      <div className="arc-homepage-refund-copy">
                        View the latest information regarding airline refunds
                        and ticket validity extenstions.
                      </div>

                      <div
                        className="arc-homepage-cta-link arc-homepage-cta-refund-link white"
                        style={{ marginBottom: "20px" }}
                      >
                        <a href="/">Get Access</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="arc-homepage-card align-items-center bg-color-black">
                <div className="row align-items-center type-color-white">
                  <div className="col-lg-12">
                    <div className="arc-homepage-card-inner d-flex flex-column">
                      <div className="text-left arc-homepage-mb">
                        <img
                          src="https://www2.arccorp.com/globalassets/homepage/redesign/slides/homepage-tcvs.png"
                          className="img-width-auto"
                        />
                      </div>
                      <div className="text-left arc-homepage-mb">
                        <img src="https://www2.arccorp.com/globalassets/homepage/redesign/slides/homepage-tc-ep.png" />
                      </div>
                      <div
                        className="arc-homepage-cta-link  border-top-white yellow"
                        style={{ marginBottom: "20px" }}
                      >
                        <a href="/">Get Access</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div
                className="arc-homepage-card arc-homepage-card-small"
                style={{
                  background:
                    "url(https://www2.arccorp.com/globalassets/homepage/redesign/slides/homepage-atd.png) center center / cover no-repeat",
                }}
              >
                <div className="row align-items-center no-gutters">
                  <div className="col-lg-3 height-auto">
                    <img src="https://www2.arccorp.com/globalassets/homepage/redesign/slides/homepage-atd-logo.png" />
                  </div>
                  <div className="col-lg-6 text-center height-auto">
                    <div className="arc-homepage-small-title">
                      Gain <span>full visibility</span> into air travel
                      activity.
                    </div>
                  </div>
                  <div className="col-lg-3 height-auto text-right">
                    <div className="arc-homepage-cta-link yellow" style={{marginRight: "60px"}}>
                      <a href="#">Learn More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div
                className="arc-homepage-card"
                style={{
                  background:
                    "url(https://www2.arccorp.com/globalassets/homepage/redesign/slides/homepage-arc-stats.png) center center / cover no-repeat",
                }}
              >
                <div className="row align-items-center no-gutters">
                  <div
                    className="col-lg-12"
                    style={{ minHeight: "auto", height: "auto" }}
                  >
                    <div className="arc-homepage-data d-flex flex-column">
                      <div className="arc-homepage-data-title">Our Data</div>
                      <p className="arc-homepage-data-copy">
                        ARC provides the most comprehensive air transaction data
                        and reporting, which can be leveraged to identify travel
                        trends and opportunities that accelerate business
                        growth.
                      </p>
                      <div className="arc-homepage-cta-link yellow">
                        <a className="ctaBtn ctaBtn--white-outline" href="/">
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="arc-footer">
            <div className="row">
              <div className="col-lg-12">
                asdf
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Apphome;

import React, { Component } from "react";

import "youtube-background";

import LazyLoad from "vanilla-lazyload";

if (!document.lazyLoadInstance) {
  document.lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy",
  });
}

import { Swiper, SwiperSlide } from "swiper/react";
import { PodcastWidget } from "podcast-widget";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

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

var statData = {
  modifier: "+",
  number: "57.0",
  type: "YoY Total Air Travel Sales Variance",
  week: "December 11, 2022",
};

var homeData = {
  recentBlogTitle: "ARC Moves Direct Connect and NDC Forward",
  recentBlogLink:
    "https://www2.arccorp.com/articles-trends/the-latest/ARC-Moves-Direct-Connect-NDC-Forward//?utm_source=homepage-card",
  recentBlogImage:
    "https://www2.arccorp.com/globalassets/homepage/redesign/latest/ARC-Moves-Direct-Connect-NDC-Forward.jpg/",
  popularArticles: [
    {
      date: "Updated Every Monday",
      title: "ARC Data Shows Weekly Air Travel Recovery      ",
      link: "https://www2.arccorp.com/articles-trends/the-latest/coronavirus/",
    },
    {
      date: "Dec 22, 2022",
      title: "ARC's Top 10 Blog Posts of 2022",
      link:
        "https://www2.arccorp.com/articles-trends/the-latest/top-10-blogs-2022/",
    },
    {
      date: "Mar 03, 2022",
      title: "A Deep Dive into Omnichannel Retailing",
      link:
        "https://www2.arccorp.com/articles-trends/the-latest/omnichannel-series-recap/",
    },
    {
      date: "Sep 08, 2022",
      title:
        "Unauthorized Ticketing: How to Avoid Devastating Financial Losses",
      link:
        "https://www2.arccorp.com/articles-trends/the-latest/unauthorized-ticketing-fraud/",
    },
  ],
};

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
    var slides = [
      <SwiperSlide>
        <div
          className="youtube-background-2"
          data-vbg="https://www2.arccorp.com/globalassets/homepage/redesign/feb-homepage-2x-2.mp4"
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
                    January Passenger Trips <br/>Increase 46% YoY
                  </h2>
                  <div
                    className="arc-jumbo-inner-body"
                    style={{ marginBottom: "60px" }}
                  >
                    International Passenger Trips Increased 70% vs. January 2022{" "}
                    <a className="arc-homepage-cta-link arc-jumbo-cta-link d-inline-flex p-0 pl-2">
                      <a href="https://www2.arccorp.com/about-us/newsroom/2023-news-releases/january-passenger-trips-increase-46-percent-yoy/?utm_source=Jumbo_Carousel">
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
      // <SwiperSlide>
      //   <div className="arc-jumbo black lazy" style={{ background: "#000000" }}>
      //     <div className="arc-jumbo-inner white">
      //       <div className="row text-center">
      //         <div className="col-lg-12">
      //           <img
      //             src="https://www2.arccorp.com/globalassets/homepage/redesign/tc24.png"
      //             alt=""
      //             className="img-fluid"
      //           />
      //           <a
      //             href="https://atpcodigital.co1.qualtrics.com/jfe/form/SV_cLQ4SgQDZfRd21E?utm_source=Jumbo_Carousel"
      //             className="ctaBtn ctaBtn--white tarmac p-0 mt-4"
      //             style={{ color: "#000000 !important" }}
      //           >
      //             Learn More
      //           </a>
      //           <a
      //             href="https://youtu.be/_5wZ8LvruKE?utm_source=Jumbo_Carousel"
      //             className="ctaBtn ctaBtn--white-outline p-0 teal mt-4"
      //           >
      //             Watch Video
      //           </a>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </SwiperSlide>,
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
            "https://www2.arccorp.com/globalassets/homepage/redesign/march-update/jumbotron_retina_DG.jpeg"
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
      <div className="arc-homepage">
        <div style={{ maxWidth: "100%", overflow: "hidden" }}>
          {/* <div
            className="arc-jumbo arc-jumbo-holidays lazy"
            style={{ marginTop: "30px" }}
            data-bg={
              "https://www2.arccorp.com/globalassets/homepage/redesign/slides/archoliday-jumbotron.jpg"
            }
          >
            <img
              className="img-fluid mobile-only"
              src="https://www2.arccorp.com/globalassets/homepage/redesign/slides/archoliday-jumbotron.jpg"
              alt=""
            />
          </div> */}

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
        </div>

        <div className="arc-homepage-section">
          <div className="row">
            <div className="col-lg-6">
              <div className="arc-homepage-card">
                <div className="row align-items-center no-gutters">
                  <div className="col-lg-6" style={{ postion: "relative" }}>
                    <div className="arc-homepage-blog-left d-flex flex-column flex-md-row flex-lg-column flex-xl-column">
                      <div className="arc-homepage-blog-img">
                        <a href={homeData.recentBlogLink}>
                          <img
                            src={homeData.recentBlogImage}
                            className="img-fluid"
                          />
                        </a>
                      </div>
                      <div className="arc-homepage-blog-meta">
                        <a
                          href={homeData.recentBlogLink}
                          className="arc-homepage-blog-title"
                          style={{ marginBottom: "10px" }}
                        >
                          {homeData.recentBlogTitle}
                        </a>
                        <a
                          href={homeData.recentBlogLink}
                          className="arc-homepage-cta-link"
                        >
                          <span>Read More</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="arc-homepage-blog-right d-flex flex-column">
                      <div>
                        <div
                          className="arc-homepage-blog-title"
                          style={{ lineHeight: "1" }}
                        >
                          Most Popular Articles
                        </div>
                        {homeData.popularArticles.map((data, i) => {
                          return (
                            <div key={i}>
                              <div className="arc-homepage-blog-date">
                                {data.date}
                              </div>
                              <a
                                href={data.link}
                                className={
                                  homeData.popularArticles.length == i + 1
                                    ? "arc-homepage-blog-popular-title border-bottom-none"
                                    : "arc-homepage-blog-popular-title"
                                }
                              >
                                {data.title}
                              </a>
                            </div>
                          );
                        })}
                      </div>
                      <a
                        href="https://www2.arccorp.com/articles-trends/blog?utm_source=homepage-card"
                        className="arc-homepage-cta-link"
                      >
                        <span>All Articles</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <a
                href="https://www2.arccorp.com/articles-trends/sales-statistics?utm_source=homepage-card"
                className="arc-homepage-card d-block lazy"
                data-bg={
                  "https://www2.arccorp.com/globalassets/homepage/redesign/march-update/monthly_sales_stats.jpg"
                }
              >
                <div className="row align-items-center no-gutters">
                  <div className="col-lg-12">
                    <div className="arc-homepage-stats">
                      <div className="arc-homepage-stats-title">
                        <span>Explore</span> ARC’s Monthly and Annual Airline{" "}
                        <span>Sales Statistics</span>
                      </div>
                      <div className="arc-homepage-cta-link yellow">
                        <span href="https://www2.arccorp.com/articles-trends/sales-statistics?utm_source=homepage-card">
                          Learn More
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div style={{ marginBottom: "60px" }}>
                <PodcastWidget />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <a
                href="https://www2.arccorp.com/about-us/our-story/?utm_source=homepage-card"
                className="arc-homepage-card d-block lazy"
                data-bg={
                  "https://www2.arccorp.com/globalassets/homepage/redesign/march-update/double_box_jumbo.jpg"
                }
              >
                <div className="row align-items-center no-gutters">
                  <div className="col-lg-12">
                    <div className="arc-homepage-stats-container">
                      <div
                        className="arc-homepage-stats d-flex"
                        style={{ flexDirection: "column", flexGrow: "1" }}
                      >
                        <div
                          className="logo-link icon-arc-logo"
                          style={{ color: "#aaaaaa", marginBottom: "15px" }}
                        ></div>
                        <div
                          className="arc-homepage-stats-title"
                          style={{ width: "300px" }}
                        >
                          <span>
                            Accelerate The Growth of Global Air Travel
                          </span>
                        </div>
                        <div
                          className="arc-homepage-card-subtitle"
                          style={{ width: "200px" }}
                        >
                          See how ARC supports the travel ecosystem.
                        </div>
                        <div className="arc-homepage-cta-link yellow">
                          <span href="https://www2.arccorp.com/articles-trends/sales-statistics?utm_source=homepage-card">
                            Learn More
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <a
                href="https://www2.arccorp.com/support-training/travel-agencies/participating-airline-information?utm_source=homepage-card"
                className="arc-homepage-card d-flex align-items-center bg-color-teal"
              >
                <div className="row no-gutters align-items-center text-center type-color-white">
                  <div className="col-lg-12">
                    <div className="arc-homepage-card-inner d-flex flex-column text-left">
                      <div>
                        <img
                          src="https://www2.arccorp.com/globalassets/homepage/redesign/march-update/refund_icon.png"
                          alt=""
                          className="img-fluid"
                          style={{ maxWidth: "67px" }}
                        />
                      </div>

                      <div className="arc-homepage-refund-title">
                        ARC’s Airline Participation Tool
                      </div>

                      <div className="arc-homepage-refund-copy">
                        View ARC-participating airlines and their settlement
                        details.
                      </div>

                      <div className="arc-homepage-cta-link arc-homepage-cta-refund-link white">
                        <span href="https://www2.arccorp.com/support-training/travel-agencies/participating-airline-information?utm_source=homepage-card">
                          View Info
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <a
                href="https://atpcodigital.co1.qualtrics.com/jfe/form/SV_cLQ4SgQDZfRd21E?utm_source=homepage-card"
                className="arc-homepage-card d-block arc-homepage-card-long align-items-center"
                style={{ backgroundSize: "contain", background: "#000000" }}
              >
                <div className="row no-gutters align-items-center type-color-white">
                  <div className="col-lg-12">
                    <div
                      className="arc-homepage-card-inner d-flex flex-column lazy"
                      data-bg={
                        "https://www2.arccorp.com/globalassets/homepage/redesign/TC24_single_box.jpg"
                      }
                      style={{
                        backgroundColor: "#000000",
                        backgroundSize: "contain",
                        backgroundPositionX: 0,
                      }}
                    >
                      <div
                        className="arc-homepage-cta-link text-center"
                        style={{ paddingLeft: "20px" }}
                      >
                        <span>Learn More</span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <a
                href="https://www2.arccorp.com/products-participation/products/destination-gateway/?utm_source=homepage-card-long"
                className="d-block arc-homepage-card arc-homepage-card-small lazy"
                data-bg={
                  "https://www2.arccorp.com/globalassets/homepage/redesign/march-update/DG_product_highlight-bg.jpg"
                }
              >
                <div className="row align-items-center no-gutters">
                  <div className="col-lg-3 height-auto">
                    <div style={{ paddingLeft: "60px" }}>
                      <div
                        style={{
                          color: "#888888",
                          fontFamily:
                            "SourceSansPro-SemiBold, Arial, Helvetica, sans-serif",
                          fontSize: "14px",
                          lineHeight: "1",
                        }}
                      >
                        Product Highlight
                      </div>
                      <div
                        style={{
                          color: "#ffffff",
                          fontFamily:
                            "SourceSansPro-Regular, Arial, Helvetica, sans-serif",
                          fontSize: "24px",
                        }}
                      >
                        Destination Gateway
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 text-center height-auto">
                    <div className="arc-homepage-small-title">
                      Insights to <span>Grow Destinations</span>
                    </div>
                  </div>
                  <div className="col-lg-3 height-auto text-right">
                    <div
                      className="arc-homepage-cta-link yellow mb-0"
                      style={{ marginRight: "40px" }}
                    >
                      <span>Learn More</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div
                className="arc-homepage-card lazy"
                data-bg={
                  "https://www2.arccorp.com/globalassets/homepage/redesign/march-update/our_data.jpg"
                }
                style={{ marginBottom: "90px" }}
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
                      <div>
                        <a
                          className="ctaBtn ctaBtn--white-outline"
                          href="https://www2.arccorp.com/about-us/arc-data?utm_source=homepage-card"
                        >
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Apphome;

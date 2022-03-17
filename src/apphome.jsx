import React, { Component } from "react";

import LazyLoad from "vanilla-lazyload";

if (!document.lazyLoadInstance) {
  document.lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy",
  });
}

import { Swiper, SwiperSlide } from "swiper/react";
import { PodcastWidget } from "podcast-widget";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import Jumbovideo from "./components/Jumbovideo";

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
  number: "195.8",
  type: "Sales Variance",
  week: "March 13, 2021",
};

var homeData = {
  recentBlogTitle: "A Deep Dive into Omnichannel Retailing",
  recentBlogLink:
    "https://www2.arccorp.com/articles-trends/the-latest/omnichannel-series-recap/",
  recentBlogImage:
    "https://www2.arccorp.com/globalassets/homepage/redesign/latest/omnichannel-series-recap.jpg",
  popularArticles: [
    {
      date: "Updated Every Monday",
      title: "ARC Provides Updated Air Travel Data During COVID-19",
      link: "https://www2.arccorp.com/articles-trends/the-latest/coronavirus/",
    },
    {
      date: "Jan 12, 2022",
      title: "ARC’s Top Insights from 2021",
      link:
        "https://www2.arccorp.com/articles-trends/the-latest/arc-top-insights-2021/",
    },
    {
      date: "May 1, 2020",
      title: "ARC’s COVID-19 Resources for Airlines and Travel Agencies",
      link:
        "https://www2.arccorp.com/articles-trends/the-latest/arcs-covid-19-resources-for-airlines-and-travel-agencies/",
    },
    {
      date: "Jan 27, 2022",
      title:
        "Top Corporate Equity Index Score Reflects ARC’s Commitment to Diversity, Inclusion",
      link:
        "https://www2.arccorp.com/articles-trends/the-latest/arc-receives-top-corporate-equity-index-score-2022/",
    },
  ],
};

class Apphome extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.lazyLoadInstance.update();
  }

  // Update lazyLoad after rerendering of every image
  componentDidUpdate() {
    document.lazyLoadInstance.update();
  }

  render() {
    var slides = [
      <SwiperSlide>
        <div
          className="arc-jumbo lazy"
          data-bg={
            "https://www2.arccorp.com/globalassets/homepage/redesign/march-update/data_video_background_jumbo.jpg"
          }
        >
          <div className="arc-jumbo-inner white text-center">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                {/* Comment out jumbovideo when video is ready */}

                {<Jumbovideo />}

                {/* This section is for when the video is not ready */}
                {
                  // <div className="arc-jumbo-video">
                  //   <div className="usa-embed-container mb-4 ">
                  //     <a href="https://www2.arccorp.com/about-us/newsroom/2022-news-releases/monthly-u.s.-travel-agency-sales-reach-highest-total-since-february-2020?utm_source=Jumbo_Carousel">
                  //       <img
                  //         className="img-fluid"
                  //         src="https://www2.arccorp.com/globalassets/homepage/redesign/march-update/data_no_video_jumbo.png"
                  //         alt="Monthly U.S. Travel Agency Sales Reach Highest Total Since
                  //         February 2020"
                  //       />
                  //     </a>
                  //   </div>
                  // </div>
                }

                <h2 className="arc-jumbo-inner-title white mb-1">
                  Monthly U.S. Travel Agency Sales Reach Highest Total Since
                  February 2020
                </h2>
                <div className="arc-jumbo-inner-body">
                  February Sales Eclipse $5 Billion, Growing 48% Month over
                  Month{" "}
                  <a className="arc-homepage-cta-link arc-jumbo-cta-link d-inline-flex p-0 pl-2">
                    <a href="https://www2.arccorp.com/about-us/newsroom/2022-news-releases/monthly-u.s.-travel-agency-sales-reach-highest-total-since-february-2020?utm_source=Jumbo_Carousel">
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
      </SwiperSlide>,
      <SwiperSlide>
        <div
          className="arc-jumbo lazy"
          data-bg={
            "https://www2.arccorp.com/globalassets/homepage/redesign/march-update/arc_pay_jumbo.jpg"
          }
        >
          <div className="arc-jumbo-inner white">
            <div className="row">
              <div className="col-lg-7 col-md-12">
                <img
                  src="https://www2.arccorp.com/globalassets/homepage/redesign/march-update/arcpay_logo.png"
                  style={{ maxWidth: "100px", marginBottom: "15px" }}
                />
                <h2 className="arc-jumbo-inner-title white">
                  The Top 5 Payment-Processing Myths
                </h2>
                <div className="arc-jumbo-inner-body">
                  ARC Pay is the popular payment-processing service from ARC,
                  but there are still some myths out there.
                </div>
                <a
                  className="ctaBtn ctaBtn--main p-0"
                  target="_blank"
                  href="https://www2.arccorp.com/products-participation/products/arc-pay/the-top-5-payment-processing-myths?utm_source=Jumbo_Carousel&amp;utm_campaign=Myth_Busters_5"
                >
                  See the list
                </a>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>,
      <SwiperSlide>
        <div
          className="arc-jumbo teal lazy"
          data-bg={
            "https://www2.arccorp.com/globalassets/homepage/redesign/march-update/podcast_jumbo.jpg"
          }
        >
          <div className="arc-jumbo-inner white">
            <div className="row">
              <div className="offset-lg-6 col-lg-5">
                <img
                  src="https://www2.arccorp.com/globalassets/homepage/redesign/march-update/podcast2_jumbo.png"
                  alt=""
                  className="img-fluid"
                  style={{
                    "margin-bottom": "25px",
                  }}
                />
                <a
                  href="https://www2.arccorp.com/arc-talk-podcast/omnichannel-chatter-with-cornerstone/?utm_source=Jumbo_Carousel"
                  className="ctaBtn ctaBtn--white p-0"
                >
                  Listen Now
                </a>
                <a
                  href="https://www2.arccorp.com/arc-talk-podcast?utm_source=Jumbo_Carousel"
                  className="ctaBtn ctaBtn--white-outline p-0"
                >
                  More Episodes
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
                    marginBottom: "15px"
                  }}
                />
                <h2 className="arc-jumbo-inner-title white">
                  Accelerating the Growth of Global Air Travel
                </h2>
                <div className="arc-jumbo-inner-body">
                  See how ARC supports the travel ecosystem.
                </div>
                <a
                  className="ctaBtn ctaBtn--white p-0"
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
    ];

    return (
      <div className="arc-homepage">
        <div style={{ maxWidth: "100%", overflow: "hidden" }}>
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
                href="https://www2.arccorp.com/articles-trends/the-latest/coronavirus?utm_source=homepage-card"
                className="arc-homepage-card d-flex flex-column align-items-center type-color-white text-center lazy"
                data-bg={
                  "https://www2.arccorp.com/globalassets/homepage/redesign/slides/homepage-sales-variance.png"
                }
              >
                <div className="arc-homepage-numbers d-flex flex-column align-items-center">
                  <div className="arc-homepage-numbers-caption">
                    ARC's Weekly Airline Sales Data
                  </div>
                  <div className="arc-homepage-numbers-eyebrow">
                    {statData.type}
                  </div>
                  <div className="arc-homepage-numbers-eyebrow-2">
                    vs. the week ending {statData.week}
                  </div>
                  <div className="arc-homepage-numbers-main">
                    <span className="arc-homepage-numbers-mod">
                      {statData.modifier}
                    </span>
                    {statData.number}
                    <span>%</span>
                  </div>

                  <div className="arc-homepage-numbers-body">
                    Stay up to date on the latest{" "}
                    <span>airline sales trends during COVID-19</span>.
                  </div>
                  <div className="">
                    <div className="arc-homepage-cta-link arc-homepage-cta-link-center yellow">
                      <a href="https://www2.arccorp.com/articles-trends/the-latest/coronavirus?utm_source=homepage-card">
                        See the Data
                      </a>
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
                        Airline Refund and Exchange Information
                      </div>

                      <div className="arc-homepage-refund-copy">
                        View the latest information regarding airline refunds
                        and ticket validity extenstions.
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
                href="https://arctravelconnect.com/episodes/using-consumer-spending-to-track-travel-trends?utm_source=homepage-card"
                className="arc-homepage-card d-block arc-homepage-card-long align-items-center"
                style={{ backgroundSize: "contain", background: "#060a0b" }}
              >
                <div className="row no-gutters align-items-center type-color-white">
                  <div className="col-lg-12">
                    <div
                      className="arc-homepage-card-inner d-flex flex-column lazy"
                      data-bg={
                        "https://www2.arccorp.com/globalassets/homepage/redesign/march-update/TC_single_box.jpg"
                      }
                      style={{
                        backgroundColor: "#060a0b",
                        backgroundSize: "contain",
                        backgroundPositionX: 0,
                      }}
                    >
                      <div className="arc-homepage-cta-link border-top-white yellow">
                        <span>Watch Now</span>
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
                href="https://www2.arccorp.com/products-participation/products/arc-travel-demand/?utm_source=homepage-card-long"
                className="d-block arc-homepage-card arc-homepage-card-small lazy"
                data-bg={
                  "https://www2.arccorp.com/globalassets/homepage/redesign/march-update/product_highlight.jpg"
                }
              >
                <div className="row align-items-center no-gutters">
                  <div className="col-lg-3 height-auto">
                    <img src="https://www2.arccorp.com/globalassets/homepage/redesign/slides/homepage-atd-logo.png" />
                  </div>
                  <div className="col-lg-6 text-center height-auto">
                    <div
                      className="arc-homepage-small-title"
                      style={{ marginLeft: "25px" }}
                    >
                      Gain <span>full visibility</span> into air travel
                      activity.
                    </div>
                  </div>
                  <div className="col-lg-3 height-auto text-right">
                    <div
                      className="arc-homepage-cta-link yellow mb-0"
                      style={{ marginRight: "60px" }}
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

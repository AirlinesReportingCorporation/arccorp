import React, { Component } from "react";

import "youtube-background";
import LazyLoad from "vanilla-lazyload";

if (!document.lazyLoadInstance) {
  document.lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy",
  });
}

var statData = {
  modifier: "+",
  number: "57.0",
  type: "YoY Total Air Travel Sales Variance",
  week: "December 11, 2022",
};

var homeData = {
  recentBlogTitle: "2024 Air Travel Hacks Report",
  recentBlogLink:
    "https://www2.arccorp.com/articles-trends/the-latest/2024-air-travel-hacks-report/?utm_source=homepage-card",
  recentBlogImage:
    "https://www2.arccorp.com/globalassets/homepage/redesign/latest/2024-air-travel-hacks-report.jpg/",
  popularArticles: [
    {
      date: "Updated Every Monday",
      title: "ARC Data Shows Weekly Air Travel Recovery      ",
      link: "https://www2.arccorp.com/articles-trends/the-latest/coronavirus/",
    },
    {
      date: "Mar 31, 2023",
      title: "Travel Tales and Tips from the Women of ARC",
      link: "https://www2.arccorp.com/articles-trends/the-latest/travel-tales-and-tips/",
    },
    {
      date: "Mar 03, 2022",
      title: "A Deep Dive into Omnichannel Retailing",
      link: "https://www2.arccorp.com/articles-trends/the-latest/omnichannel-series-recap/",
    },
    {
      date: "APRIL 27, 2023",
      title: "Travel Industry Fraud & Scams Webinar Recap",
      link: "https://www2.arccorp.com/articles-trends/the-latest/travel-industry-fraud-scams-webinar-recap/",
    },
  ],
};

class HomepageSection extends Component {
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
    return (
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
                          loading="lazy"
                          data-src={homeData.recentBlogImage}
                          className="img-fluid lazy"
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
                      href="https://www2.arccorp.com/articles-trends/articles/?utm_source=homepage-card"
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
                        <span>Accelerate The Growth of Global Air Travel</span>
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
              href="https://elevate-travelconnect.com/?utm_source=homepage-card"
              className="arc-homepage-card d-block arc-homepage-card-long align-items-center"
              style={{ backgroundSize: "contain", background: "#000000" }}
            >
              <div className="row no-gutters align-items-center type-color-white">
                <div className="col-lg-12">
                  <div
                    className="arc-homepage-card-inner d-flex flex-column lazy"
                    data-bg={
                      "https://www2.arccorp.com/globalassets/homepage/ETC_singlebox-RegOpen.jpg"
                    }
                    style={{
                      backgroundColor: "#f7f6f5",
                      backgroundSize: "contain",
                    }}
                  >
                    {/* <div
                      className="arc-homepage-cta-link text-center"
                      style={{ paddingLeft: "20px" }}
                    >
                      <span>Learn More</span>
                    </div> */}
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <a
              href="https://www2.arccorp.com/products-participation/distribution/arcdirectconnect?utm_source=homepage-card-long"
              className="d-block arc-homepage-card arc-homepage-card-small lazy"
              data-bg={
                "https://www2.arccorp.com/globalassets/homepage/redesign/march-update/arc-direct-connect-ad.png"
              }
            >
              <div className="row align-items-center no-gutters">
                <div className="col-lg-3 height-auto">
                  <div className="arc-homepage-card-small-product-title">
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
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src="https://www2.arccorp.com/globalassets/arc-logos/corporate-logos/arc-logo-s-white.png"
                        alt="ARC Logo"
                        style={{ height: "20px", marginRight: "5px" }}
                      />
                      Direct Connect
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 text-right height-auto">
                  <div className="arc-homepage-small-title">
                    <span>ARC is NDC Ready</span>
                  </div>
                </div>
                <div className="col-lg-2 height-auto text-right">
                  <div
                    className="arc-homepage-cta-link yellow mb-0"
                    style={{ marginRight: "20px" }}
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
                      trends and opportunities that accelerate business growth.
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
    );
  }
}

export default HomepageSection;

import React, { Component } from "react";

import LazyLoad from "vanilla-lazyload";

if (!document.lazyLoadInstance) {
  document.lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy",
  });
}

import { Swiper, SwiperSlide } from "swiper/react";

import { PodcastWidget } from "podcast-widget";

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

  componentDidMount() {
    document.lazyLoadInstance.update();
  }

  // Update lazyLoad after rerendering of every image
  componentDidUpdate() {
    document.lazyLoadInstance.update();
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
              className="arc-jumbo lazy"
              data-bg={
                "https://www2.arccorp.com/globalassets/homepage/redesign/slides/homepage-slide-test.png"
              }
            >
              <div className="arc-jumbo-inner white">
                <div className="row">
                  <div className="col-md col-sm-12">
                    <h2 className="arc-jumbo-inner-title white">
                      U.S. Travel Agency Sales Recover in 2021
                    </h2>
                    <div className="arc-jumbo-inner-body">
                      Learn of a rich history routed in air travel intelligence,
                      distribution and settlement.
                    </div>
                    <div>
                      <a className="ctaBtn ctaBtn--white-outline" href="/">
                        Learn More
                      </a>

                      <a
                        href="https://www.youtube.com/channel/UCWHZsoCDNhjorop892EVETw?sub_confirmation=1"
                        className="ctaBtn ctaBtn--white"
                      >
                        <img
                          src="https://www2.arccorp.com/globalassets/homepage/redesign/slides/subscribe.png"
                          alt="Subcribe to our YouTube Channel"
                          style={{ maxWidth: "100px", maxHeight: "55px" }}
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-md col-sm-12">
                    <img
                      className="img-fluid"
                      src="https://www2.arccorp.com/globalassets/homepage/redesign/arc-jumbo-video-hover.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="arc-jumbo lazy"
              data-bg={
                "https://www2.arccorp.com/globalassets/homepage/redesign/slides/ARCPay-Jumbo5.jpg"
              }
            >
              <div className="arc-jumbo-inner white">
                <div className="row">
                  <div className="col-lg-7 col-md-12">
                    <img
                      src="https://www2.arccorp.com/globalassets/homepage/redesign/slides/ARCPay_White_Medium.png"
                      style={{ maxWidth: "100px", marginBottom: "15px" }}
                    />
                    <h2 className="arc-jumbo-inner-title white">
                      Payment <br />
                      Myth Busters #5
                    </h2>
                    <div className="arc-jumbo-inner-body">
                      <strong>Myth:</strong> You need to get and maintain
                      separate merchant accounts for different types of charges.{" "}
                      <br />
                      <br />
                      <strong>Reality:</strong> ARC Pay, an ARC-exclusive
                      benefit, consolidates travel transactions, fees, and
                      settlement to simplify your agency business.
                    </div>
                    <a
                      className="ctaBtn ctaBtn--main"
                      target="_blank"
                      href="https://www2.arccorp.com/payment-myth-busters-5/?utm_source=Jumbo_Carousel&amp;utm_campaign=Myth_Busters_5"
                    >
                      What makes ARC Pay unique{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="arc-jumbo lazy"
              data-bg={
                "https://www2.arccorp.com/globalassets/homepage/redesign/slides/ARCTalk_Omni_jumbotron.jpg"
              }
            >
              <div className="arc-jumbo-inner white">
                <div className="row">
                  <div className="col-lg-5">
                    <img
                      src="https://www2.arccorp.com/globalassets/homepage/redesign/slides/jumbotron-title-ep6.png"
                      alt=""
                      style={{
                        "margin-bottom": "25px",
                        "max-width": "100%",
                        "margin-left": "auto",
                        "margin-right": "auto",
                      }}
                    />
                    <a
                      href="https://www2.arccorp.com/arc-talk-podcast/omnichannel-chatter-with-cornerstone/?utm_source=Jumbo_Carousel"
                      className="ctaBtn ctaBtn--white"
                    >
                      Listen Now
                    </a>
                    <a
                      href="https://www2.arccorp.com/arc-talk-podcast?utm_source=Jumbo_Carousel"
                      className="ctaBtn ctaBtn--white"
                    >
                      More Episodes
                    </a>
                  </div>
                </div>
              </div>
            </div>
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
                        <div
                          className="arc-homepage-blog-title"
                          style={{ marginBottom: "10px" }}
                        >
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
                      <div className="arc-homepage-cta-link">
                        <a href={homeData.recentBlogLink}>All Articles</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
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
                    Sales Variance
                  </div>
                  <div className="arc-homepage-numbers-eyebrow-2">
                    vs. the week ending Janurary 9, 2021
                  </div>
                  <div className="arc-homepage-numbers-main">
                    +140.6<span>%</span>
                  </div>

                  <div className="arc-homepage-numbers-body">
                    Stay up to date on the latest{" "}
                    <span>airline sales trends during COVID-19</span>.
                  </div>
                  <div className="">
                    <div className="arc-homepage-cta-link arc-homepage-cta-link-center yellow">
                      <a href="/">See the Data</a>
                    </div>
                  </div>
                </div>
              </div>
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
              <div
                className="arc-homepage-card lazy"
                data-bg={
                  "https://www2.arccorp.com/globalassets/homepage/redesign/slides/homepage-arc-stats.png"
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
                className="arc-homepage-card arc-homepage-card-small lazy"
                data-bg={
                  "https://www2.arccorp.com/globalassets/homepage/redesign/slides/homepage-atd.png"
                }
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
                    <div
                      className="arc-homepage-cta-link yellow mb-0"
                      style={{ marginRight: "60px" }}
                    >
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
                className="arc-homepage-card lazy"
                data-bg={
                  "https://www2.arccorp.com/globalassets/homepage/redesign/slides/homepage-arc-stats.png"
                }
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
        </div>

        <div className="arc-footer">
          <div className="arc-footer-sub text-center">
            <div className="row">
              <div className="col-lg-12">
                <img
                  src="https://www2.arccorp.com/globalassets/homepage/redesign/arc-footer-sub.png"
                  alt="The Intelligence Behind Air Travel"
                />
              </div>
            </div>
          </div>
          <div className="arc-footer-container">
            <div className="row">
              <div className="col">
                <div className="arc-footer-section">
                  <div className="arc-footer-title">Participation</div>
                  <a href="#" className="arc-footer-link">
                    ARC Participating Airlines
                  </a>
                  <a href="#" className="arc-footer-link">
                    ARC Check
                  </a>
                  <a href="#" className="arc-footer-link">
                    ARC Agency Accreditation
                  </a>
                  <a href="#" className="arc-footer-link">
                    Become an ARC-Accredited Agency
                  </a>
                  <a href="#" className="arc-footer-link">
                    Become an ARC Vertified Travel Consultant
                  </a>
                </div>
              </div>
              <div className="col-auto">
                <div className="arc-footer-section">
                  <div className="arc-footer-title">
                    Distribution & Financial Solutions
                  </div>
                  <a href="#" className="arc-footer-link">
                    ARC Participating Airlines
                  </a>
                  <a href="#" className="arc-footer-link">
                    ARC Check
                  </a>
                  <a href="#" className="arc-footer-link">
                    ARC Agency Accreditation
                  </a>
                  <a href="#" className="arc-footer-link">
                    Become an ARC-Accredited Agency
                  </a>
                  <a href="#" className="arc-footer-link">
                    Become an ARC Vertified Travel Consultant
                  </a>
                </div>
              </div>
              <div className="col">
                <div className="arc-footer-section">
                  <div className="arc-footer-title">Data Solutions</div>
                  <a href="#" className="arc-footer-link">
                    Our Data
                  </a>
                  <a href="#" className="arc-footer-link">
                    ARC Data Connect
                  </a>
                  <a href="#" className="arc-footer-link">
                    ARC Travel Demand
                  </a>
                  <a href="#" className="arc-footer-link">
                    Direct Data Solutions
                  </a>
                </div>
              </div>
              <div className="col">
                <div className="arc-footer-section">
                  <div className="arc-footer-title">Communications</div>
                  <a href="#" className="arc-footer-link">
                    Newsroom
                  </a>
                  <a href="#" className="arc-footer-link">
                    ARC Talk Podcast
                  </a>
                  <a href="#" className="arc-footer-link">
                    Blog
                  </a>
                  <a href="#" className="arc-footer-link">
                    Travel Agent Communications
                  </a>
                  <a href="#" className="arc-footer-link">
                    TravelConnect
                  </a>
                </div>
              </div>
              <div className="col">
                <div className="arc-footer-section">
                  <div className="arc-footer-title">About Us</div>
                  <a href="#" className="arc-footer-link">
                    Our Story
                  </a>
                  <a href="#" className="arc-footer-link">
                    Careers
                  </a>
                  <a href="#" className="arc-footer-link">
                    Leadership & Governance
                  </a>
                  <a href="#" className="arc-footer-link">
                    Media Kit
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="arc-footer-bottom">
            <div className="row">
              <div className="col-lg-6">
                &copy; 2022 Airlines Reporting Corporation (ARC). All rights
                reserved.
              </div>
              <div className="col-lg-6 text-right">
                <ul className="arc-footer-links-social d-inline-block">
                  <li>
                    <a
                      href="https://www.schellman.com/certificate-directory?certificateNumber=1427462-10"
                      target="_blank"
                      className="icon-iso_logo"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/ARCtalk"
                      title="twitter"
                      target="_blank"
                      className="icon-twitter"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/ARCtalk"
                      title="facebook"
                      target="_blank"
                      className="icon-facebook"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/arc"
                      title="LinkedIn"
                      target="_blank"
                      className="icon-linkedin"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/channel/UCWHZsoCDNhjorop892EVETw"
                      target="_blank"
                      className="icon-youtube"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-color-tarmac">
            <div className="arc-footer-links-policy">
              <div className="row">
                <div className="col-lg-12">
                  <span className="footer-rtf-links">
                    <a href="/website-terms-of-use/" title="Terms">
                      Terms
                    </a>

                    <a href="/site-privacy-policy/" title="Privacy">
                      Privacy
                    </a>

                    <a
                      href="/pci-data-security-standards/"
                      title="PCI Standards"
                    >
                      PCI Standards
                    </a>

                    <a
                      href="https://arccorp.statusdashboard.com/"
                      title="ARC continually monitors the status of ARCCorp.com and related services. If a service is interrupted or is temporarily down for maintenance, an alert is posted here. If you wish to receive an email alert for specific services (or for all services), subscribe here."
                      target="_blank"
                    >
                      ARC System Status
                    </a>
                    <a href="https://www2.arccorp.com/support-training/data-subject-access-request-form/">
                      Do Not Sell My Personal Information
                    </a>
                  </span>
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

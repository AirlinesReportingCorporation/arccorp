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
                <Jumbovideo />

                <h2 className="arc-jumbo-inner-title white">
                  U.S. Travel Agency Sales Recover in 2021
                </h2>
                <div className="arc-jumbo-inner-body">
                  Learn of a rich history routed in air travel intelligence,
                  distribution and settlement.{" "}
                  <div className="arc-homepage-cta-link d-inline-flex pl-2">
                    <a href="https://www2.arccorp.com/about-us/newsroom/2022-news-releases/january-2022-us-travel-agency-sales-jump-187-year-over-year/?utm_source=Jumbo_Carousel">Read More</a>
                  </div>
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
                  src="https://www2.arccorp.com/globalassets/homepage/redesign/slides/ARCPay_White_Medium.png"
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
                  className="ctaBtn ctaBtn--white p-0"
                >
                  More Episodes
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
                        <a href="https://www2.arccorp.com/articles-trends/blog?utm_source=homepage-card">
                          All Articles
                        </a>
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
                      <a href="https://www2.arccorp.com/articles-trends/the-latest/coronavirus?utm_source=homepage-card">
                        See the Data
                      </a>
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
                        <a href="https://www2.arccorp.com/articles-trends/sales-statistics?utm_source=homepage-card">
                          Get Access
                        </a>
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
                        <a href="https://www2.arccorp.com/support-training/travel-agencies/participating-airline-information?utm_source=homepage-card">
                          Get Access
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="arc-homepage-card align-items-center lazy"
                data-bg={
                  "https://www2.arccorp.com/globalassets/homepage/redesign/march-update/TC_single_box.jpg"
                }
              >
                <div className="row align-items-center type-color-white">
                  <div className="col-lg-12">
                    <div className="arc-homepage-card-inner d-flex flex-column">
                      <div className="arc-homepage-cta-link border-top-white yellow">
                        <a href="https://arctravelconnect.com/episodes/using-consumer-spending-to-track-travel-trends?utm_source=homepage-card">
                          Get Access
                        </a>
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
                  "https://www2.arccorp.com/globalassets/homepage/redesign/march-update/product_highlight.jpg"
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
                      <a href="https://www2.arccorp.com/products-participation/products/arc-travel-demand/?utm_source=homepage-card-long">
                        Learn More
                      </a>
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
                  "https://www2.arccorp.com/globalassets/homepage/redesign/march-update/our_data.jpg"
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

        <div className="arc-footer">
          <div className="text-center arc-footer-container-base">
            <div className="row">
              <div className="col-lg-12">
                <div className="arc-footer-sub">
                  <img
                    src="https://www2.arccorp.com/globalassets/homepage/redesign/arc-footer-sub.png"
                    alt="The Intelligence Behind Air Travel"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="arc-footer-container">
            <div className="row">
              <div className="col">
                <div className="arc-footer-section">
                  <div className="arc-footer-title">Participation</div>
                  <a
                    href="https://www2.arccorp.com/support-training/travel-agencies/participating-airline-information?utm_source=footer-link"
                    className="arc-footer-link"
                  >
                    ARC Participating Airlines
                  </a>
                  <a
                    href="https://www2.arccorp.com/support-training/arc-check-results?utm_source=footer-link"
                    className="arc-footer-link"
                  >
                    ARC Check
                  </a>
                  <a
                    href="https://www2.arccorp.com/products-participation/travel-agencies/agency-participation/?utm_source=footer-link"
                    className="arc-footer-link"
                  >
                    ARC Agency Accreditation
                  </a>
                  <a
                    href="https://www2.arccorp.com/products-participation/travel-agencies/become-an-arc-accredited-agent/?utm_source=footer-link"
                    className="arc-footer-link"
                  >
                    Become an ARC-Accredited Agency
                  </a>
                  <a
                    href="https://www2.arccorp.com/products-participation/travel-agencies/become-an-arc-verified-travel-consultant/?utm_source=footer-link"
                    className="arc-footer-link"
                  >
                    Become an ARC Vertified Travel Consultant
                  </a>
                </div>
              </div>
              <div className="col-auto">
                <div className="arc-footer-section">
                  <div className="arc-footer-title">
                    Distribution & Financial Solutions
                  </div>
                  <a
                    href="https://www2.arccorp.com/products-participation/distribution/?utm_source=footer-link"
                    className="arc-footer-link"
                  >
                    ARC Direct Connect (NDC)
                  </a>
                  <a
                    href="https://www2.arccorp.com/about-us/arc-omnichannel-retailing/?utm_source=footer-link"
                    className="arc-footer-link"
                  >
                    Omnichannel Retailing
                  </a>
                  <a
                    href="https://www2.arccorp.com/products-participation/products/arc-pay/?utm_source=footer-link"
                    className="arc-footer-link"
                  >
                    Payment Processing
                  </a>
                  <a
                    href="https://www2.arccorp.com/about-us/settlement-services/?utm_source=footer-link"
                    className="arc-footer-link"
                  >
                    Settlement Services
                  </a>
                </div>
              </div>
              <div className="col">
                <div className="arc-footer-section">
                  <div className="arc-footer-title">Data Solutions</div>
                  <a
                    href="https://www2.arccorp.com/about-us/arc-data/?utm_source=footer-link"
                    className="arc-footer-link"
                  >
                    Our Data
                  </a>
                  <a
                    href="https://www2.arccorp.com/products-participation/products/arc-data-connect/?utm_source=footer-link"
                    className="arc-footer-link"
                  >
                    ARC Data Connect
                  </a>
                  <a
                    href="https://www2.arccorp.com/products-participation/products/arc-travel-demand/?utm_source=footer-link"
                    className="arc-footer-link"
                  >
                    ARC Travel Demand
                  </a>
                  <a
                    href="https://www2.arccorp.com/products-participation/products/direct-data-solutions/?utm_source=footer-link"
                    className="arc-footer-link"
                  >
                    Direct Data Solutions
                  </a>
                </div>
              </div>
              <div className="col">
                <div className="arc-footer-section">
                  <div className="arc-footer-title">Communications</div>
                  <a
                    href="https://www2.arccorp.com/about-us/newsroom/?utm_source=footer-link"
                    className="arc-footer-link"
                  >
                    Newsroom
                  </a>
                  <a
                    href="https://www2.arccorp.com/arc-talk-podcast?utm_source=footer-link"
                    className="arc-footer-link"
                  >
                    ARC Talk Podcast
                  </a>
                  <a
                    href="https://www2.arccorp.com/articles-trends/blog/?utm_source=footer-link"
                    className="arc-footer-link"
                  >
                    Blog
                  </a>
                  <a
                    href="https://www2.arccorp.com/articles-trends/agency-communications/travel-agent-communications/?utm_source=footer-link"
                    className="arc-footer-link"
                  >
                    Travel Agent Communications
                  </a>
                  <a
                    href="https://arctravelconnect.com?utm_source=footer-link"
                    className="arc-footer-link"
                  >
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
              <div className="col-lg-12">
                <div className="arc-footer-sub-border"></div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-7">
                &copy; 2022 Airlines Reporting Corporation (ARC). All rights
                reserved.
              </div>
              <div className="col-lg-2">
                <a
                  href="https://www.schellman.com/certificate-directory?certificateNumber=1427462-10"
                  target="_blank"
                  className="arc-footer-iso"
                >
                  <img
                    src="https://www2.arccorp.com/globalassets/homepage/redesign/march-update/iso_logo.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-lg-3">
                <ul className="arc-footer-links-social d-inline-block">
                  <li>
                    <a
                      href="https://twitter.com/ARCtalk"
                      title="twitter"
                      target="_blank"
                      className="arc-footer-icon"
                    >
                      <img
                        src="https://www2.arccorp.com/globalassets/homepage/redesign/march-update/twitter_logo.png"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/ARCtalk"
                      title="facebook"
                      target="_blank"
                      className="arc-footer-icon"
                    >
                      <img
                        src="https://www2.arccorp.com/globalassets/homepage/redesign/march-update/facebook_logo.png"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/arc"
                      title="LinkedIn"
                      target="_blank"
                      className="arc-footer-icon"
                    >
                      <img
                        src="https://www2.arccorp.com/globalassets/homepage/redesign/march-update/linkedin_logo.png"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/channel/UCWHZsoCDNhjorop892EVETw"
                      target="_blank"
                      className="arc-footer-icon"
                    >
                      <img
                        src="https://www2.arccorp.com/globalassets/homepage/redesign/march-update/youtube_logo.png"
                        alt=""
                      />
                    </a>
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

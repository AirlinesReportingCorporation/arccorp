import React, { Component } from "react";
import ReactDOM from "react-dom";
import moment from "moment";

import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "core-js/stable";

import LazyLoad from "vanilla-lazyload";
import { eventsList } from "./js/events";
import { Stickynav } from "arccorp-vars";

if (!document.lazyLoadInstance) {
  document.lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy",
  });
}

class Events extends Component {
  constructor(props) {
    super(props);
  }

  // Update lazyLoad after rerendering of every image
  componentDidUpdate() {
    document.lazyLoadInstance.update();
  }

  render() {
    const webinarList = [
      {
        date: "Feb 12, 2024",
        title:
          "Protecting Agents: Security Agreement Insights & Updates Webinar",
        time: "2:30PM EST",
        url: "",
      },
      {
        date: "Feb 12, 2024",
        title:
          "Protecting Agents: Security Agreement Insights & Updates Webinar",
        time: "2:30PM EST",
        url: "",
      },
      {
        date: "Feb 12, 2024",
        title:
          "Protecting Agents: Security Agreement Insights & Updates Webinar",
        time: "2:30PM EST",
        url: "",
      },
    ];

    console.log(webinarList.length)
    return (
      <div className="event-page">
        <Stickynav className="bg-color-tarmac" title="Events" />
        {
          webinarList.length > 0 ? 
          <div className="webinar-jumbo">
          <div className="row no-gutters jumbo-row">
            <div className="col-lg-6">
              <div
                className="jumbo-left"
                style={{
                  backgroundImage: "url('')",
                }}
              >
                <div className="jumbo-header">
                  <h2>Upcoming Webinars</h2>
                  <div className="jumbo-tag">
                    Stay up to date with the latest industry knowledge.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="jumbo-right">
                <div className="webinar-events">
                  <div className="webinar-list">
                    {webinarList.map((webinar) => {
                      let month = moment(webinar.date).format("MMM");
                      let day =
                        moment(webinar.date).format("D").length != 2
                          ? "0" + moment(webinar.date).format("D")
                          : moment(webinar.date).format("D");

                      return (
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="webinar-event">
                              <div className="webinar-cal">
                                <div className="event-month">
                                  <p>{month}</p>
                                </div>
                                <div className="event-day">
                                  <p>{day}</p>
                                </div>
                              </div>
                              <div className="webinar-details">
                                <div className="webinar-event-title">{webinar.title}</div>
                                <div className="webinar-time"><img src=""/> {webinar.time} EST</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        : ""
        }
        <div className="container event-container">
          <div className="row no-gutters">
            <div className="col-lg-12">
              <div className="event-page-title">
                <h2>Upcoming Events</h2>
              </div>
            </div>
          </div>
          <div className="event-inner">
            <div className="row no-gutters">
              {eventsList.map((event) => {
                let city = event.location
                  .split(",")[0]
                  .replace(" ", "-")
                  .toLowerCase();
                let url =
                  "https://www2.arccorp.com/globalassets/homepage/redesign/events/" +
                  city +
                  ".jpg";
                let month = moment(event.date).format("MMM");
                let day =
                  moment(event.date).format("D").length != 2
                    ? "0" + moment(event.date).format("D")
                    : moment(event.date).format("D");

                return (
                  <div className="col-lg-6">
                    {event.type != "arc" ? (
                      <div className="event-card-outer">
                        <div className="row">
                          <div
                            className="col event-card-left"
                            style={{
                              backgroundImage: "url(" + url + ")",
                            }}
                          >
                            <div className="event-date">
                              <div className="event-month">
                                <p>{month}</p>
                              </div>
                              <div className="event-day">
                                <p>{day}</p>
                              </div>
                            </div>
                          </div>
                          <div className="col event-card-right">
                            <div className="event-right-inner">
                              <p className="event-title">{event.title}</p>
                              <p className="event-desc">{event.desc}</p>
                              <p className="event-location">
                                <img
                                  className="location-icon"
                                  src="https://www2.arccorp.com/globalassets/homepage/redesign/events/location.png"
                                />
                                {event.location}
                              </p>
                              <a href={event.url} className="event-cta">
                                Learn More
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div
                        className="event-card-outer"
                        style={{ height: "100%" }}
                      >
                        <a href={event.url}>
                          <div
                            className="arc-event"
                            style={{
                              backgroundImage: "url(" + event.imgUrl + ")",
                            }}
                          ></div>
                        </a>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="on-demand-webinar-callout">
          <div className="container on-demand-webinar-inner">
            <div className="row">
              <div className="col-lg-6">
                <div className="webinar-inside">
                  <h2 className="webinar-title">On-Demand Webinars</h2>
                  <div className="webinar-desc">
                    Stay up to date with the latest industry knowledge. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
                    diam facilisis, lacinia sem ac, volutpat justo.
                  </div>
                  <div className="webinar-buttons">
                    <a
                      href="https://www2.arccorp.com/articles-trends/on-demand-webinars/?utm_source=events"
                      className="ctaBtn ctaBtn--white-outline"
                    >
                      Visit our On-demand Webinars
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

var mountNode = document.getElementById("arc-events");

ReactDOM.render(<Events />, mountNode);

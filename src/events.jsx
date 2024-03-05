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
  // componentDidUpdate() {
  //   document.lazyLoadInstance.update();
  // }

  render() {
    console.log(eventsList);
    return (
      <div className="event-page">
        <Stickynav className="bg-color-tarmac" title="Events" />
        <div className="container">
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
                      <div className="event-card-outer" style={{height: "100%"}}>
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
      </div>
    );
  }
}

var mountNode = document.getElementById("arc-events");

ReactDOM.render(<Events />, mountNode);

import "./index.scss";

import React, { Component } from "react";
import ReactDOM from "react-dom";

import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "core-js/stable";
import moment from "moment";

import LazyLoad from "vanilla-lazyload";
import { eventsList } from "./events";
import { Stickynav } from "arccorp-vars";
import EventCard from "./EventCard";

if (!document.lazyLoadInstance) {
  document.lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy",
  });
}

/*
Webinar Object:
  {
      date: "Feb 12, 2024",
      title: "Protecting Agents: Security Agreement Insights & Updates Webinar",
      time: "2:30PM",
      url: "https://www2.arccorp.com/articles-trends/on-demand-webinars/on-demand-webinar-list/webinar-012624/",
    }

*/

function ARCEvents() {
  const webinarList = [];

  return (
    <div className="event-page">
      <Stickynav className="bg-color-tarmac" title="Events" />
      {webinarList.length > 0 ? (
        <div className="webinar-jumbo">
          <div className="row jumbo-row no-gutters">
            <div className="col-lg-6 col-md-4 col-xs-12">
              <div
                className="jumbo-left"
                style={{
                  backgroundImage:
                    "url('https://www2.arccorp.com/globalassets/homepage/redesign/events/webinar-jumbo.png')",
                }}
              >
                <div className="jumbo-header">
                  <h2>Upcoming Webinar{webinarList.length > 1 ? "s" : ""}</h2>
                  <div className="jumbo-tag">
                    Stay up to date with the latest industry knowledge.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-8">
              <div
                className={"jumbo-right webinar-length-" + webinarList.length}
              >
                <div className="webinar-events">
                  <div className="webinar-list">
                    {webinarList.map((webinar, i) => {
                      let month = moment(webinar.date).format("MMM");
                      let day =
                        moment(webinar.date).format("D").length != 2
                          ? "0" + moment(webinar.date).format("D")
                          : moment(webinar.date).format("D");

                      return (
                        <div className="row" key={i}>
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
                              <a href={webinar.url} className="webinar-details">
                                <div className="webinar-event-title">
                                  {webinar.title}
                                </div>
                                <div className="webinar-time">
                                  <img src="" /> {webinar.time} EST
                                </div>
                              </a>
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
      ) : (
        ""
      )}
      <div className="container event-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="event-page-title">
              <h2>Upcoming Industry Events</h2>
            </div>
          </div>
        </div>
        {eventsList.map((event, i) => {
          let eventRow = <div></div>;
          if (i == eventsList.length - 1 && i % 2 == 0) {
            eventRow = (
              <div className="row" key={i}>
                <div className="col-lg-6">
                  <EventCard
                    title={event.title}
                    imgUrl={event.imgUrl}
                    url={event.url}
                    type={event.type}
                    desc={event.desc}
                    location={event.location}
                    date={event.date}
                  />
                </div>
              </div>
            );
          } else if (i == 0 || (i % 2 == 0 && i != eventsList.length - 1)) {
            let secondEvent = eventsList[i + 1];
            eventRow = (
              <div className="row" key={i}>
                <div className="col-lg-6">
                  <EventCard
                    title={event.title}
                    url={event.url}
                    imgUrl={event.imgUrl}
                    type={event.type}
                    desc={event.desc}
                    location={event.location}
                    date={event.date}
                  />
                </div>
                <div className="col-lg-6">
                  <EventCard
                    title={secondEvent.title}
                    url={secondEvent.url}
                    imgUrl={secondEvent.imgUrl}
                    type={secondEvent.type}
                    desc={secondEvent.desc}
                    location={secondEvent.location}
                    date={secondEvent.date}
                  />
                </div>
              </div>
            );
          }

          return eventRow;
        })}
      </div>
      <div className="on-demand-webinar-callout">
        <div className="container on-demand-webinar-inner">
          <div className="row">
            <div className="col-sm-12 col-lg-6">
              <div className="webinar-inside">
                <h2 className="webinar-title">On-Demand Webinars</h2>
                <div className="webinar-desc">
                  Build your knowledge of ARC and the travel industry.
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default ARCEvents;

var mountNode = document.getElementById("arc-events-app");

ReactDOM.render(<ARCEvents />, mountNode);

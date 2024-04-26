import React from "react";
import moment from "moment";

export default function EventCard(props) {
  let city = props.location.split(",")[0].replace(" ", "-").toLowerCase();
  let url =
    "https://www2.arccorp.com/globalassets/homepage/redesign/events/" +
    city +
    ".jpg";
  let month = moment(props.date).format("MMM");
  let day =
    moment(props.date).format("D").length != 2
      ? "0" + moment(props.date).format("D")
      : moment(props.date).format("D");

  return (
    <>
      {props.type != "arc" ? (
        <div className="event-card-outer">
          <div className="event-card-bg">
            <div className="row no-gutters">
              <div className="col-md-4">
                <div
                  className="event-card-left"
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
              </div>
              <div className="col-md-8">
                <div>
                  <div className="event-card-right">
                    <div className="event-right-inner">
                      <p className="event-title">{props.title}</p>
                      <p className="event-desc">{props.desc}</p>
                      <p className="event-location">
                        <img
                          className="location-icon"
                          src="https://www2.arccorp.com/globalassets/homepage/redesign/events/location.png"
                        />
                        {props.location}
                      </p>
                      <a href={props.url} className="event-cta">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="event-card-outer" style={{ height: "100%" }}>
            <div className="row no-gutters">
              <div className="col-12">
                <a href={props.url}>
                  <div
                    className="arc-event"
                    style={{
                      backgroundImage: "url(" + props.imgUrl + ")",
                    }}
                  ></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

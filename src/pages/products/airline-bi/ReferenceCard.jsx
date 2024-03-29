import React from "react";

export default function ReferenceCard(props) {
    console.log(props)
  return (
    <div className="col-lg-3">
      <a
        href={"https://www2.arccorp.com" + props.link}
        className="card-link"
      >
        <div className="card-outer">
          <div className="card-inner-top">
            <div className="card-title">{props.title}</div>
            <div className="card-desc">{props.desc}</div>
          </div>
          <div className="card-inner-bottom">
            <div className="card-cta">
              <span>{props.cta} <i class="fas fa-chevron-right"></i></span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

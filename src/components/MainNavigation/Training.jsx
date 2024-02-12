import React from "react";

function Training() {
  return (
    <div className="row no-gutters">
      <div className="col-md-6">
        <div className="arc-mn-sub-container arc-mn-sub-container-right">
          <div className="row">
            <div className="arc-mn-sub-main col-md-6">
              <a
                href="/support-training/travel-agencies/?utm_source=Global_Navigation"
                className="arc-mn-header"
              >
                Travel Agencies
              </a>
              <a
                href="/products-participation/travel-agencies/agency-participation/arc-specialist-certification/?utm_source=Global_Navigation"
                className="arc-mn-sub-link"
              >
                ARC Specialist Training & Certification
              </a>
              <a
                href="https://www2.arccorp.com/support-training/travel-agencies/iata-travel-tourism-diploma-courses/?utm_source=Global_Navigation"
                className="arc-mn-sub-link"
              >
                ARC/IATA Training
              </a>

              <a
                href="/support-training/travel-agencies/custom-training/?utm_source=Global_Navigation"
                className="arc-mn-sub-link"
              >
                Agent Custom Training
              </a>

              <a
                href="/support-training/travel-agencies/Self-help-training/?utm_source=Global_Navigation"
                className="arc-mn-sub-link"
              >
                Self-Paced Training Knowledge Center
              </a>
            </div>
            {/* <div className="arc-mn-sub-main col-md-6">
               <a
                href="/support-training/airlines/airline-training/?utm_source=Global_Navigation"
                className="arc-mn-header"
                >Airlines</a
              >
              <a
                href="/support-training/airlines/airline-training/?utm_source=Global_Navigation#arc101"
                className="arc-mn-sub-link"
                >ARC 101</a
              >
              <a
                href="/support-training/airlines/airline-training/?utm_source=Global_Navigation#agencylifecycle"
                className="arc-mn-sub-link"
                >Agency Life Cycle</a
              >
              <a
                href="/support-training/airlines/airline-training/?utm_source=Global_Navigation#reporting"
                className="arc-mn-sub-link"
                >Reporting & Settlement</a
              > 
            </div> */}
          </div>
        </div>
      </div>
      <div
        className="col-md-6 arc-mn-sub-feature"
        style={{ background: "#f6f6f6" }}
      >
        <div className="arc-mn-sub-container arc-mn-sub-container-left">
          <div className="row justify-content-end">
            <div className="arc-mn-sub-main col-md-6">
              <div className="arc-mn-webinar">
                <a
                  href="https://www2.arccorp.com/articles-trends/on-demand-webinars?utm_source=Global_Navigation&utm_campaign=Feature"
                  className="arc-mn-header no-arrow"
                >
                  On-Demand Webinars
                </a>
                <div className="arc-mn-webinar-title">
                  Build your knowledge of ARC and the travel industry.
                </div>
                <a
                  href="https://www2.arccorp.com/articles-trends/on-demand-webinars?utm_source=Global_Navigation&utm_campaign=Feature"
                  className="arc-mn-header"
                >
                  View All
                </a>
              </div>
            </div>
            <div className="arc-mn-sub-main col-md-6">
              <img
                src="https://www2.arccorp.com/globalassets/homepage/redesign/training_feature3.png"
                alt="On Demand Webinars"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Training;

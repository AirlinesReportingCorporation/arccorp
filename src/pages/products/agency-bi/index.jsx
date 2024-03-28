import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "core-js/stable";

import "./index.scss";

import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  Stickynav,
  ProductJumbo,
  ProductText,
  ProductQuote,
  ProductCallout,
  ProductLinks,
} from "arccorp-vars";

function AgencyBI() {
  return (
    <div className="abi-page">
      <Stickynav
        className="bg-color-teal"
        links={[
          {
            title: "Features",
            url: "#features",
          },
          {
            title: "Benefits",
            url: "#benefits",
          },
          {
            title: "How It Works",
            url: "#howitworks",
          },
          {
            title: "Modules",
            url: "#modules",
          },
        ]}
        pageLink="#top"
        rightLink=""
        stickyCTA="Contact Us"
        title="ARC Agency BI"
      />

      <ProductJumbo
        backgroundImage="https://www2.arccorp.com/globalassets/homepage/redesign/product/agency-bi-jumbo.png"
        className=""
        ctaLink="#features"
        ctaTitle="Learn More"
        subtitle={
          <>
            ARC Agency BI provides the{" "}
            <span>actionable business intelligence</span> that agencies need to
            evaluate performance, manage operations better, perform benchmarking
            comparisons and prepare for airline negotiations.
          </>
        }
        title="ARC Agency BI"
        width=""
      />

      <ProductText
        id="features"
        eyebrow="features"
        title="Gain Insights with Comprehensive Data"
        body={
          <div className="row mb-5">
            <div className="col-lg-3">
              <div className="abi-feature">
                <div className="mb-3">
                  <img
                    src="https://www2.arccorp.com/globalassets/products--participation/products/agency-bi/matrix_231x170_agencybi_1.jpg"
                    alt=""
                  />
                </div>
                <span>Broader Data Range</span>
                <br /> Analyze current year and two full years of historical
                data plus all future departures.
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mb-3">
                <img
                  src="https://www2.arccorp.com/globalassets/products--participation/products/agency-bi/matrix_231x170_agencybi_2.jpg"
                  alt=""
                />
              </div>
              <div className="abi-feature">
                <span>Broader Data Range</span>
                <br /> Analyze current year and two full years of historical
                data plus all future departures.
              </div>
            </div>
            <div className="col-lg-3">
              <div className="abi-feature">
                <div className="mb-3">
                  <img
                    src="https://www2.arccorp.com/globalassets/products--participation/products/agency-bi/matrix_231x170_agencybi_4.jpg"
                    alt=""
                  />
                </div>
                <span>Broader Data Range</span>
                <br /> Analyze current year and two full years of historical
                data plus all future departures.
              </div>
            </div>
            <div className="col-lg-3">
              <div className="abi-feature">
                <div className="mb-3">
                  <img
                    src="https://www2.arccorp.com/globalassets/products--participation/products/agency-bi/matrix_231x170_agencybi_3.jpg"
                    alt=""
                  />
                </div>
                <span>Broader Data Range</span>
                <br /> Analyze current year and two full years of historical
                data plus all future departures.
              </div>
            </div>
          </div>
        }
      />

      <div style={{ position: "relative" }}>
        <ProductQuote
          author="Shane Chapman"
          backgroundImage="https://www2.arccorp.com/globalassets/products--participation/products/agency-bi/agencybi_fullbleed_1400x687.jpg"
          company="Ovation Travel Group"
          id=""
          quote={
            "The Agency BI tool pays for itself. I am now ultra-prepared before airline reviews. With the tool and underlying data coming from ARC, airlines trust the numbers presented. It makes for a much more productive meeting for both parties, and conversations aren’t as one-sided."
          }
          title=""
        />
        <div className="product-quote-overlay"></div>
      </div>

      <ProductText
        id="benefits"
        eyebrow="Benefits"
        title="Optimize Revenue Performance"
        subtitle="​Powerful analytics, combined with targeted peer benchmarks, offer easy analysis of business strategies and recognition of trends to maximize goals.​"
      />

      <ProductText
        eyebrow="Benefits"
        className="bg-color-fog"
        title="Enhance Performance Measurement"
        subtitle="Increased visibility of sales trends over time, benchmarked against peers or industry, helps you better understand and manage performance."
        body={
          <>
            <img style={{maxWidth:"600px"}}src="https://www2.arccorp.com/globalassets/products--participation/products/agency-bi/containedpanel_floating_583x329_agencybi_11.svg" />
          </>
        }
      />
    </div>
  );
}

export default AgencyBI;

var mountNode = document.getElementById("product-app");

ReactDOM.render(<AgencyBI />, mountNode);

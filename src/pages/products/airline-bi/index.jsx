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
import { quotes } from "./quote";
import ReferenceCard from "./ReferenceCard";

function AirlineBI() {
  let number = Math.floor(Math.random() * quotes.length);
  console.log(number);
  let quote = quotes[number];
  console.log(quote);
  return (
    <div className="arc-airline-bi">
      <Stickynav
        title="Airline BI"
        links={[
          { title: "Features", url: "#features" },
          { title: "Benefites", url: "#benefits" },
          {
            title: "Customer Success Stories",
            url: "https://www2.arccorp.com/products-participation/customer-success-stories/",
          },
        ]}
      />
      <ProductJumbo
        backgroundImage="https://www2.arccorp.com/globalassets/products--participation/products/airline-bi/jumbotronstandard_1400x483_airlinebi.jpg"
        className=""
        ctaLink="#features"
        ctaTitle="Learn More"
        subtitle={
          <>
            ARC's Airline Business Intelligence (BI) tool provides{" "}
            <span>
              non-U.S.-based airlines with detailed U.S. travel agency
              point-of-sale data{" "}
            </span>{" "}
            to quickly measure sales performance, understand market share and
            identify market potential.
          </>
        }
        title="ARC Airline BI"
        width=""
      />
      <ProductText
        id="features"
        eyebrow="features"
        title="Intelligence to Manage your Agency Sales"
        body={
          <div className="row mb-5">
            <div className="col-lg-3">
              <div className="abi-feature">
                <div className="mb-3">
                  <img
                    src="https://www2.arccorp.com/globalassets/products--participation/products/airline-bi/thumbnail1.jpg"
                    alt=""
                  />
                </div>
                <p>
                  <b>Complete Dataset</b>
                </p>
                Access the current year and previous two years of data, plus all
                future data to the end of the GDS schedule.
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mb-3">
                <img
                  src="https://www2.arccorp.com/globalassets/products--participation/products/airline-bi/thumbnail2.jpg"
                  alt=""
                />
              </div>
              <div className="abi-feature">
                <p>
                  <b>Saving Capabilities</b>
                </p>
                Once custom reports are created within the tool, save these
                views for easy access to update and run reports in just a few
                clicks
              </div>
            </div>
            <div className="col-lg-3">
              <div className="abi-feature">
                <div className="mb-3">
                  <img
                    src="https://www2.arccorp.com/globalassets/products--participation/products/airline-bi/thumbnail3.jpg"
                    alt=""
                  />
                </div>
                <p>
                  <b>Intuitive Dashboards</b>
                </p>
                View data by date of issue or date of departure, analyze through
                interactive graphs and export data for reporting.
              </div>
            </div>
            <div className="col-lg-3">
              <div className="abi-feature">
                <div className="mb-3">
                  <img
                    src="https://www2.arccorp.com/globalassets/products--participation/products/airline-bi/thumbnail4.jpg"
                    alt=""
                  />
                </div>
                <p>
                  <b>Analysis Options</b>
                </p>
                Flexibility to view ticketing, marketing and operating airline
                data on the daily, weekly and monthly level.
              </div>
            </div>
          </div>
        }
      />

      <ProductText
        id="benefits"
        eyebrow="BENEFITS"
        title="Strengthen Agency Business"
        titleClass="white"
        className="bg-color-tarmac"
        subtitle="View data at the agency level to monitor sales on O&Ds and communicate more effectively with accounts on performance, contract expectations and new areas for partnership growth. Keep portfolios up to data with the tool’s agency contact information."
      />
      <ProductText
        id=""
        eyebrow=""
        title="Improve Performance Measurement"
        titleClass=""
        className=""
        subtitle="Visibility of sales and agency helps airlines understand performance and recognize market trends to maximize goals. Create customized sales territories within the tool for quick and easy analysis."
        body={
          <img src="https://www2.arccorp.com/globalassets/products--participation/products/airline-bi/containedpanel_floating_583x329_airlinebi_11.svg" />
        }
      />
      <ProductText
        id=""
        eyebrow=""
        backgroundImage=""
        title="Increase Data Efficiencies"
        titleClass="white"
        className="bg-color-tarmac"
        subtitle="A visual, aggregated view of agency sales information reduces time spent on compiling and analyzing data and offers airlines the ability to customize data the way they need it."
      />
      <ProductText
        id=""
        eyebrow=""
        title="Optimize Competitive Advantage"
        titleClass=""
        className=""
        subtitle="View market share and other metrics at the individual airline level as well as by customized peer group. Filter competitive data by O&D and by agency to compare performance on routes with partners and identify opportunities."
      />
      <ProductQuote
        author={quote.author}
        backgroundImage={quote.backgroundImage}
        className={quote.className}
        company={quote.company}
        id={quote.id}
        quote={quote.quote}
        title={quote.title}
      />

      <ProductLinks
        className="airline-bi-resources"
        colClass="col-lg-4"
        id=""
        prodLink={[
          {
            alt: "Travel Agency Payment Best Practices",
            copy: "See how Airline BI can give you visibility into your agency performance and market potential.",
            cta: "REQUEST A DEMO",
            direction: "",
            header: "Request a Demo",
            icon: "https://www2.arccorp.com/globalassets/icons/meeting-icon-matrix_231x170.png",
            link: "https://www2.arccorp.com/support-training/product-sales-request?Product=Airline_BI",
          },
          {
            alt: "Download Product Sheet",
            copy: "",
            cta: "Download",
            direction: "down",
            header: "Download Product Sheet",
            icon: "https://www2.arccorp.com/globalassets/products--participation/arc-pay/money-report-icon.png",
            link: "https://www2.arccorp.com/globalassets/datasheets/airline-bi-product-sheet.pdf",
          },
          {
            alt: "Fraud Prevention Practices",
            copy: "Get your questions answered, access additional resources or speak with an ARC representative.",
            cta: "Learn More",
            header: "Contact Us",
            icon: "https://www2.arccorp.com/globalassets/products--participation2/airlines/participation/support-icon-231x170.png",
            link: "https://www2.arccorp.com/about-us/contact-us/",
          },
        ]}
        valignClass="align-items-start"
      />

      <ProductText
        subtitle="Related Resources"
        body={
          <div className="row">
            <ReferenceCard link="https://www2.arccorp.com/products-participation/products/memo-analyzer-for-airlines/" title="Memo Analyzer for Airlines" desc="Memo Analyzer helps airlines track, benchmark and analyze memo and ticketing data to improve processes and reduce debit memos." cta="Learn more"/>
            <ReferenceCard link="https://www2.arccorp.com/products-participation/products/direct-data-solutions/" title="Direct Data Solutions" desc="Direct Data Solutions provide airlines with the industry’s most comprehensive global airline sales, market and passenger itinerary data." cta="Learn more"/>
          </div>
        }
      />
    </div>
  );
}

export default AirlineBI;

var mountNode = document.getElementById("product-app");

ReactDOM.render(<AirlineBI />, mountNode);

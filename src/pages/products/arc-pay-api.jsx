import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "core-js/stable";

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

import { CodeBlock, atomOneDark } from "react-code-blocks";

const showLineNumbers = true;
const wrapLines = true;
const codeBlock = false;

function ARCPayAPI() {
  return (
    <div style={{ paddingBottom: "90px" }}>
      <Stickynav
        title="ARC Pay API"
        links={[
          { title: "Features", url: "#features" },
          { title: "Developers", url: "#developers" },
          { title: "Supplementary Data", url: "#data" },
        ]}
        stickyCTALink="https://www2.arccorp.com/support-training/product-sales-request?Product=ARC_Pay"
        stickyCTA="Learn More"
      />

      <ProductJumbo
        backgroundImage="https://www2.arccorp.com/globalassets/products--participation/arc-pay/arc-pay-jumbo-3.png"
        title={
          <>
            Integrate.
            <br /> Innovate.
          </>
        }
        subtitle={
          <>
            <span>
              Our simplified integration ensures your customers enjoy a
              one-click payment experience
            </span>
            , supporting Apple Pay, Android Pay and other travel-related
            features and payment choices.{" "}
          </>
        }
      />
      <ProductText
        eyebrow="Overview"
        title="Seamless payment acceptance  "
        subtitle={
          <>
            ARC Pay API provides a convenient way for agents, aggregators,
            cruise lines and airlines to{" "}
            <span>seamlessly incorporate ARC's payment processing</span> into
            their booking platforms. ARC Pay API can be accessed through mobile,
            web interfaces or custom software solutions. ARC is PCI Compliant,
            and actively participates in the PCI Security Standards Council.
          </>
        }
      />
      <ProductText
        className="bg-color-fog pb-5"
        eyebrow="features"
        id="features"
        title="Process Payments Securely"
        subtitle="Streamline fraud detection processes, allowing you to focus on your core business activities while safeguarding your business."
        body={
          <div className="container mt-5 product-border">
            <div className="row text-center">
              <div className="col-lg-2">
                <img
                  className="img-fluid"
                  src="https://www2.arccorp.com/globalassets/products--participation/arc-pay/secure-1.png"
                />
                <div className="apa-process-text">Passwords & Certificates</div>
              </div>
              <div className="col-lg-2">
                <img
                  className="img-fluid"
                  src="https://www2.arccorp.com/globalassets/products--participation/arc-pay/secure-2.png"
                />
                <div className="apa-process-text">
                  EMV 3-D Secure Authentication
                </div>
              </div>
              <div className="col-lg-2">
                <img
                  className="img-fluid"
                  src="https://www2.arccorp.com/globalassets/products--participation/arc-pay/secure-3.png"
                />
                <div className="apa-process-text">
                  Risk <br />
                  Management
                </div>
              </div>
              <div className="col-lg-2">
                <img
                  className="img-fluid"
                  src="https://www2.arccorp.com/globalassets/products--participation/arc-pay/secure-4.png"
                />
                <div className="apa-process-text">
                  Transaction <br />
                  Filtering
                </div>
              </div>
              <div className="col-lg-2">
                <img
                  className="img-fluid"
                  src="https://www2.arccorp.com/globalassets/products--participation/arc-pay/secure-5.png"
                />
                <div className="apa-process-text">
                  Address Verification Service
                </div>
              </div>
              <div className="col-lg-2">
                <img
                  className="img-fluid"
                  src="https://www2.arccorp.com/globalassets/products--participation/arc-pay/secure-6.png"
                />
                <div className="apa-process-text">
                  Gateway <br />
                  Tokenization
                </div>
              </div>
            </div>
          </div>
        }
      />
      <ProductText
        eyebrow="features"
        title="Direct API"
        subtitle="Choose the Direct Payment model to have complete control over the transaction, management of payment pages and collection of payment details."
        body={
          <div className="container mt-5">
            <div className="row">
              <div className="col-lg-12">
                <img
                  className="img-fluid"
                  src="https://www2.arccorp.com/globalassets/products--participation/arc-pay/direct-api.png"
                />
              </div>
            </div>
          </div>
        }
      />

      <ProductText
        className="bg-color-fog pb-5"
        eyebrow="features"
        title="Hosted Checkout"
        subtitle={
          <>
            Simplify and enhance the payment process for <br />
            both customers and businesses.
          </>
        }
        body={
          <div className="container mt-5">
            <div className="row">
              <div className="col-lg-12">
                <img
                  className="img-fluid"
                  src="https://www2.arccorp.com/globalassets/products--participation/arc-pay/hosted-checkout.png"
                />
              </div>
            </div>
          </div>
        }
      />

      <ProductText
        className="pb-5"
        eyebrow="features"
        title="Mobile SDKs Integration"
        body={
          <div className="container mt-5">
            <div className="row">
              <div className="col-lg-12">
                <a href="https://api.arcpay.travel/api/documentation/integrationGuidelines/mobileSDK/gatewayiOSSDK.html?locale=en_US">
                  <img
                    className="img-fluid apa-sdk"
                    style={{ maxHeight: "116px", marginRight: "90px" }}
                    src="https://www2.arccorp.com/globalassets/products--participation/arc-pay/sdk-ios.png"
                  />
                </a>

                <a href="https://api.arcpay.travel/api/documentation/integrationGuidelines/mobileSDK/gatewayAndroidSDK.html?locale=en_US">
                  <img
                    className="img-fluid apa-sdk"
                    style={{ maxHeight: "116px" }}
                    src="https://www2.arccorp.com/globalassets/products--participation/arc-pay/sdk-android.png"
                  />
                </a>
              </div>
            </div>
          </div>
        }
      />

      <ProductText
        backgroundImage="https://www2.arccorp.com/globalassets/products--participation/arc-pay/arc-pay-credit-bg.png"
        eyebrow="Features"
        title={
          <span className="type-color-white">
            All major credit cards and preferred digital wallets accepted
          </span>
        }
        subtitle="Payment Link is a secure way to receive payments. You create a payment link URL and share it with the payer through email, text, or a QR code. When the payer clicks the link, they can choose a payment method to complete the transaction on the payment page. "
        body={
          <div
            className="sub-callout-container "
            style={{
              paddingLeft: 10,
              paddingRight: 10,
              paddingBottom: 120,
              marginTop: 90,
            }}
          >
            <div className="container">
              <div className="row align-items-center text-center">
                <div className="col-lg-3">
                  <img
                    data-src="https://www2.arccorp.com/globalassets/products--participation/arc-pay/visa-logo.png"
                    alt="Visa"
                    className="lazy entered loaded"
                    data-ll-status="loaded"
                    src="https://www2.arccorp.com/globalassets/products--participation/arc-pay/visa-logo.png"
                  />
                </div>
                <div className="col-lg-3">
                  <img
                    data-src="https://www2.arccorp.com/globalassets/products--participation/arc-pay/amex-logo.png"
                    alt="Visa"
                    className="lazy entered loaded"
                    data-ll-status="loaded"
                    src="https://www2.arccorp.com/globalassets/products--participation/arc-pay/amex-logo.png"
                  />
                </div>
                <div className="col-lg-3">
                  <img
                    data-src="https://www2.arccorp.com/globalassets/products--participation/arc-pay/mastercard-logo.png"
                    alt="Visa"
                    className="lazy entered loaded"
                    data-ll-status="loaded"
                    src="https://www2.arccorp.com/globalassets/products--participation/arc-pay/mastercard-logo.png"
                  />
                </div>
                <div className="col-lg-3">
                  <img
                    data-src="https://www2.arccorp.com//globalassets/products--participation/arc-pay/google-pay.png"
                    alt="Visa"
                    className="lazy entered loaded"
                    data-ll-status="loaded"
                    src="https://www2.arccorp.com//globalassets/products--participation/arc-pay/google-pay.png"
                  />
                </div>
              </div>
              <div
                className="row align-items-center text-center"
                style={{ marginTop: 60 }}
              >
                <div className="col-lg-3">
                  <img
                    data-src="https://www2.arccorp.com/globalassets/products--participation/arc-pay/jcb-logo.png"
                    alt="Visa"
                    className="lazy entered loaded"
                    data-ll-status="loaded"
                    src="https://www2.arccorp.com/globalassets/products--participation/arc-pay/jcb-logo.png"
                  />
                </div>
                <div className="col-lg-3">
                  <img
                    data-src="https://www2.arccorp.com/globalassets/products--participation/arc-pay/uatp-logo.png"
                    alt="Visa"
                    className="lazy entered loaded"
                    data-ll-status="loaded"
                    src="https://www2.arccorp.com/globalassets/products--participation/arc-pay/uatp-logo.png"
                  />
                </div>
                <div className="col-lg-3">
                  <img
                    data-src="https://www2.arccorp.com//globalassets/products--participation/arc-pay/apple-pay.png"
                    alt="Visa"
                    className="lazy entered loaded"
                    data-ll-status="loaded"
                    src="https://www2.arccorp.com//globalassets/products--participation/arc-pay/apple-pay.png"
                  />
                </div>
              </div>
            </div>
          </div>
        }
      />
      <ProductText
        className=""
        id="developers"
        title={<span className="">Designed for Developers</span>}
        subtitle=""
        body={
          <div className="container">
            <div className="row mt-5">
              <div className="col-lg-5">
                <div>
                  <CodeBlock
                    customStyle={{
                      height: "538px",
                      overflow: "scroll",
                      borderRadius: "10px",
                    }}
                    text={`{
                    "airline": {
                      "bookingReference": "MC12D8",
                      "itinerary": {
                        "leg": [
                          {
                            "carrierCode": "MA",
                            "departureAirport": "STL",
                            "departureDate": "2019-06-07",
                            "destinationAirport": "ORD"
                          },
                          {
                            "carrierCode": "MA",
                            "departureAirport": "ORD",
                            "departureDate": "2019-06-09",
                            "destinationAirport": "STL"
                          }
                        ],
                        "numberInParty": "2"
                      },
                      "passenger": [
                        {
                          "firstName": "JOHN",
                          "lastName": "SMITH"
                        },
                        {
                          "firstName": "JANE",
                          "lastName": "SMITH"
                        }
                      ]
                    }
                  }`}
                    language={"javascript"}
                    theme={atomOneDark}
                    {...{ showLineNumbers, wrapLines, codeBlock }}
                  />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="apa-dev">
                      Code samples and illustrative instances
                    </div>
                    <div className="apa-dev">
                      Command-line interface for development and testing
                    </div>
                    <div className="apa-dev">
                      Version-controlled API modifications{" "}
                    </div>
                    <div className="apa-dev">Webhook functionality </div>
                    <div className="apa-dev">Testing environment </div>
                    <div className="apa-dev">Support for metadata </div>
                  </div>
                  <div className="col-lg-6">
                    <a
                      href="https://api.arcpay.travel/api/documentation/integrationGuidelines/index.html"
                      className="ctaBtn"
                      style={{ width: "100%" }}
                    >
                      Developer Portal
                    </a>{" "}
                  </div>
                  <div className="col-lg-6">
                    <a
                      href="https://www.postman.com/arccorp?tab=collections"
                      className="ctaBtn"
                      style={{ width: "100%" }}
                    >
                      Postman Collection
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      />

      <ProductText
        className="bg-color-fog"
        id="data"
        title="Supplementary Data"
        body={
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <a
                  href="https://api.arcpay.travel/api/documentation/integrationGuidelines/supportedFeatures/pickAdditionalFunctionality/supplementaryData.html?locale=en_US"
                  className="apa-link"
                >
                  Integration Guidelines Page
                </a>
                <a
                  href="https://api.arcpay.travel/api/documentation/integrationGuidelines/supportedFeatures/pickAdditionalFunctionality/supplementaryData.html?locale=en_US"
                  className="apa-link"
                >
                  Statement Descriptor Data
                </a>
                <a
                  href="https://api.arcpay.travel/api/documentation/integrationGuidelines/supportedFeatures/pickAdditionalFunctionality/supplementaryData.html?locale=en_US"
                  className="apa-link"
                >
                  Level II and Level III Data
                </a>
                <a
                  href="https://api.arcpay.travel/api/documentation/integrationGuidelines/supportedFeatures/pickAdditionalFunctionality/supplementaryData.html?locale=en_US"
                  className="apa-link"
                >
                  Cruise Data
                </a>
                <a
                  href="https://api.arcpay.travel/api/documentation/integrationGuidelines/supportedFeatures/pickAdditionalFunctionality/supplementaryData.html?locale=en_US#:~:text=Risk%20Custom%20Data-,Merchant%20Custom%20Data,-Merchant%20custom%20data"
                  className="apa-link"
                >
                  Merchant Custom Data
                </a>
              </div>
              <div className="col-md-6">
                <a
                  href="https://api.arcpay.travel/api/documentation/downloads/index.html?locale=en_US"
                  className="apa-link"
                >
                  Sample Code
                </a>
                <a
                  href="https://api.arcpay.travel/api/documentation/glossary/index.html?locale=en_US"
                  className="apa-link"
                >
                  Glossary
                </a>
                <a
                  href="https://api.arcpay.travel/api/documentation/troubleshootingFaqs/index.html?locale=en_US"
                  className="apa-link"
                >
                  Troubleshooting & FAQ
                </a>
                <a
                  href="https://api.arcpay.travel/api/documentation/apiDocumentation/index.html?locale=en_US"
                  className="apa-link"
                >
                  API Reference Documentation
                </a>
              </div>
            </div>
          </div>
        }
      />

      <ProductQuote
        backgroundImage="https://www2.arccorp.com/globalassets/destination-gateway/dg-quote.png"
        quote="We're delighted to expand our relationship with ARC by using the ARC Pay API, marking a pivotal moment in improving the customer experience on our website. By using the ARC Pay API to enable features like Apple Pay, Google Pay, and 3DS, we're simplifying and elevating the travel-buying process for our clients. This collaboration underscores our commitment to innovation and excellence in travel solutions."
        author="-	Brian Crist, "
        title="Founder and CEO"
        company="Business Travel Group "
      />

      <ProductText
        className="bg-color-tarmac pb-5  text-center"
        subtitle={<span className="type-color-white">Latest Webinar</span>}
        body={
          <div className="container mt-5 text-center">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <a href="https://www2.arccorp.com/articles-trends/on-demand-webinars/on-demand-webinar-list/webinar-083023/">
                  <img
                    className="img-fluid"
                    src="https://www2.arccorp.com/globalassets/homepage/redesign/webinar/webinar-083023.jpg"
                  />
                </a>
                <div className="mt-3"></div>
              </div>
            </div>
          </div>
        }
      />

      <ProductCallout
        className=""
        cta="Learn More"
        ctaLink="https://www2.arccorp.com/support-training/product-sales-request?Product=ARC_Pay"
        subtitle=""
        title={
          <>
            <div>
              <img
                src="https://www2.arccorp.com/globalassets/products--participation/airportis/airportis-arc-logo.png"
                alt=""
              />
            </div>
            <div className="mt-3">Get Started</div>
          </>
        }
      />
    </div>
  );
}

export default ARCPayAPI;

var mountNode = document.getElementById("home-app");

ReactDOM.render(<ARCPayAPI />, mountNode);

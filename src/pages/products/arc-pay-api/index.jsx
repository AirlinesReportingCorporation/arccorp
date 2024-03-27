import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "core-js/stable";

import "./index.scss";

import React, { useEffect, useState } from "react";
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
    <div className="apa-product-page" style={{ paddingBottom: "90px" }}>
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
        className="apa-jumbo-top"
        backgroundImage="https://www2.arccorp.com/globalassets/products--participation/arc-pay/arc-pay-api-jumbo.jpg"
        title={
          <>
            Integrate.
            <br /> Innovate.
          </>
        }
        subtitle={
          <>
            <span>
              Our simplified integration ensures your customers enjoy an
              experience optimized for travel
            </span>
            , that supports Apple Pay, Google Pay and other travel-related
            features and payment choices.
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
            web interfaces or custom software solutions.
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
                  style={{ maxWidth: "80px" }}
                  className="img-fluid"
                  src="https://www2.arccorp.com/globalassets/products--participation/arc-pay/secure-1.png"
                />
                <div className="apa-process-text">Level 1 PCI Compliant</div>
              </div>
              <div className="col-lg-2">
                <img
                  style={{ maxWidth: "80px" }}
                  className="img-fluid"
                  src="https://www2.arccorp.com/globalassets/products--participation/arc-pay/secure-2.png"
                />
                <div className="apa-process-text">
                  EMV 3-D Secure Authentication
                </div>
              </div>
              <div className="col-lg-2">
                <img
                  style={{ maxWidth: "80px" }}
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
                  style={{ maxWidth: "80px" }}
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
                  style={{ maxWidth: "80px" }}
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
                  style={{ maxWidth: "80px" }}
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
            Simplify and enhance the payment process for both customers and
            businesses with our simplified integration that ensures your
            customers enjoy a <span>one-click payment experience</span>.
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
        subtitle={
          <div style={{ maxWidth: "700px" }}>
            Everything you need to develop and deploy mobile payment solutions
            using ARC Pay.
          </div>
        }
        body={
          <div className="row mt-4">
            <div className="col-lg-12">
              <a
                style={{ width: "150px" }}
                className="ctaBtn mr-3"
                target="_blank"
                href="https://api.arcpay.travel/api/documentation/integrationGuidelines/mobileSDK/gatewayiOSSDK.html?locale=en_US"
              >
                iOS
              </a>

              <a
                style={{ width: "150px" }}
                className="ctaBtn"
                target="_blank"
                href="https://api.arcpay.travel/api/documentation/integrationGuidelines/mobileSDK/gatewayAndroidSDK.html?locale=en_US"
              >
                Android
              </a>
            </div>
          </div>
        }
      />

      <ProductText
        className="pb-5 bg-color-fog"
        eyebrow="features"
        title="Use a Payment Link"
        subtitle={
          <>
            Payment Link is a <span>secure way to receive payments</span>. You
            create a payment link URL and share it with the payer through email,
            text, or a QR code. When the payer clicks the link, they can choose
            a payment method to complete the transaction on the payment page.{" "}
          </>
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
        subtitle={
          <>
            All ARC Pay solutions accept and are fully supported by all the
            major credit card brands,{" "}
            <span className="type-color-white">
              allowing you the flexibility to focus on other things.
            </span>
          </>
        }
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
                      target="_blank"
                      href="https://api.arcpay.travel/api/documentation/integrationGuidelines/index.html"
                      className="ctaBtn"
                      style={{ width: "100%" }}
                    >
                      Developer Portal
                    </a>{" "}
                  </div>
                  <div className="col-lg-6">
                    <a
                      target="_blank"
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

      <ProductQuote
        className="apa-quote"
        backgroundImage="https://www2.arccorp.com/globalassets/products--participation/arc-pay/arc-pay-api-quote.jpg"
        quote="We're delighted to expand our relationship with ARC by using the ARC Pay API, marking a pivotal moment in improving the customer experience on our website. By using the ARC Pay API to enable features like Apple Pay, Google Pay, and 3DS, we're simplifying and elevating the travel-buying process for our clients. This collaboration underscores our commitment to innovation and excellence in travel solutions."
        author="Brian Crist, "
        title="Founder and CEO"
        company="Business Travel Group "
      />

      <div id="data">
        <ProductLinks
          className="apa-product-links"
          colClass="col-lg-6"
          prodLink={[
            {
              alt: "Supplementary Data",
              copy: "Pass additional data related to the order in transactions.",
              cta: "Learn More",
              direction: "right",
              header: "Supplementary Data",
              icon: "https://www2.arccorp.com/globalassets/products--participation/arc-travel-demand/atd-product-sheet.jpg",
              link: "https://api.arcpay.travel/api/documentation/integrationGuidelines/supportedFeatures/pickAdditionalFunctionality/supplementaryData.html?locale=en_US",
            },
            {
              alt: "Troubleshooting & FAQ",
              copy: "Suggestions and solutions to problems that may occur with your integration.",
              cta: "Learn More",
              header: "Troubleshooting & FAQ",
              icon: "https://www2.arccorp.com/globalassets/products--participation/arc-pay/agreement-icon.png",
              link: "https://api.arcpay.travel/api/documentation/troubleshootingFaqs/index.html?locale=en_US",
            },
          ]}
        />
      </div>

      <ProductText
        className="bg-color-tarmac pb-5  text-center apa-webinar"
        title={<span className="type-color-white">Latest Webinar</span>}
        body={
          <div className="container mt-5 text-center">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <a
                  target="_blank"
                  href="https://www2.arccorp.com/articles-trends/on-demand-webinars/on-demand-webinar-list/webinar-083023/"
                >
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
        //cta="Learn More"
        //ctaLink="https://www2.arccorp.com/support-training/product-sales-request?Product=ARC_Pay"
        //subtitle="Click to learn more."
        title={
          <>
            <div>
              <img
                width="125px"
                src="https://www2.arccorp.com/globalassets/products--participation/arc-pay/arc-pay-api-wordmark.png"
                alt=""
              />
            </div>
            <div className="my-4">
              Ready to elevate your payment experience?
            </div>
            <div class="callout-box-copy">Click to learn more.</div>
            <div>
              <a
                href="https://www2.arccorp.com/support-training/product-sales-request?Product=ARC_Pay"
                class="ctaBtn ctaBtn--white  product-cta mr-4"
              >
                Learn More
              </a>
              <a
                href="https://www2.arccorp.com/globalassets/datasheets/arc-pay-datasheet.pdf"
                class="ctaBtn ctaBtn--white-outline  product-cta"
              >
                Product Sheet
              </a>
            </div>
          </>
        }
      />
    </div>
  );
}

export default ARCPayAPI;

var mountNode = document.getElementById("product-app");

ReactDOM.render(<ARCPayAPI />, mountNode);

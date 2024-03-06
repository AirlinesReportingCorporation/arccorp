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

function ARCPayAPI() {
  return (
    <div style={{ paddingBottom: "90px" }}>
      <Stickynav
        title="ARC Pay API"
        links={[
          { title: "Features", url: "#features" },
          { title: "Developers", url: "#developers" },
        ]}
      />

      <ProductJumbo
        backgroundImage="https://www2.arccorp.com/globalassets/products--participation/arc-pay/arc-pay-jumbo-3.png"
        title={
          <>
            Integrate.
            <br /> Innovate.
          </>
        }
        subtitle="Our simplified integration ensures your customers enjoy a one-click payment experience, supporting Apple Pay, Android Pay and other travel-related features and payment choices. 
        "
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
            web interfaces or custom software solutions. ARC is PCI Compliant, and actively participates in the PCI
            Security Standards Council.
          </>
        }
      />
      <ProductText
        id="features"
        title="Features"
        subtitle=""
        body={
          <>
            <div
              className="product-option-box lazy entered loaded"
              data-bg="https://www2.arccorp.com/globalassets/products--participation/arc-travel-demand/product-container-bg-1.jpg"
              data-ll-status="loaded"
              style={{
                backgroundImage:
                  'url("https://www2.arccorp.com/globalassets/products--participation/arc-travel-demand/product-container-bg-1.jpg")',
              }}
            >
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <div
                    className="product-option product-option-container-item"
                    data-id={3}
                  >
                    <div className="product-option-container-item-eyebrow"></div>
                    <div className="product-option-container-item-title">
                      Process Payments Securely
                    </div>
                    <div style={{ "font-size": "30px" }}>
                      <i class="fas fa-money-check"></i>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="product-copy-item">
                    <p>
                      Streamline fraud detection processes, allowing you to
                      focus on your core business activities while safeguarding
                      your business.
                    </p>
                    <ul className="type-color-white">
                      <li>
                        Secure your integration with passwords or certificates{" "}
                      </li>
                      <li>EMV 3-D Secure authentication</li>
                      <li>Risk management </li>
                      <li>Transaction filtering </li>
                      <li>Address verification service </li>
                      <li>Gateway Tokenization </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="product-option-box lazy entered loaded"
              data-bg="https://www2.arccorp.com/globalassets/products--participation/arc-travel-demand/product-container-bg-1.jpg"
              data-ll-status="loaded"
              style={{
                backgroundImage:
                  'url("https://www2.arccorp.com/globalassets/products--participation/arc-travel-demand/product-container-bg-1.jpg")',
              }}
            >
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <div
                    className="product-option product-option-container-item"
                    data-id={3}
                  >
                    <div className="product-option-container-item-eyebrow"></div>
                    <div className="product-option-container-item-title">
                      Direct API
                    </div>
                    <div style={{ "font-size": "30px" }}>
                      <i class="fas fa-plug"></i>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="product-copy-item">
                    <p>
                      Choose the Direct Payment model to have complete control
                      over the transaction, management of payment pages and
                      collection of payment details.
                    </p>
                    <ul className="type-color-white">
                      <li>
                        Retain management of the entire payment experience.
                      </li>
                      <li>
                        Integrates with any software, website or back-office
                        solutions.
                      </li>
                      <li>
                        Connect directly with ARC Pay Gateway and receive
                        real-time responses to API calls so your session is not
                        broken and your payer remains in your application.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="product-option-box lazy entered loaded"
              data-bg="https://www2.arccorp.com/globalassets/products--participation/arc-travel-demand/product-container-bg-1.jpg"
              data-ll-status="loaded"
              style={{
                backgroundImage:
                  'url("https://www2.arccorp.com/globalassets/products--participation/arc-travel-demand/product-container-bg-1.jpg")',
              }}
            >
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <div
                    className="product-option product-option-container-item"
                    data-id={3}
                  >
                    <div className="product-option-container-item-eyebrow"></div>
                    <div className="product-option-container-item-title">
                      Hosted Checkout
                    </div>
                    <div style={{ "font-size": "30px" }}>
                      <i class="fas fa-shopping-cart"></i>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="product-copy-item">
                    <p>
                      Simplify and enhance the payment process for both
                      customers and businesses.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="product-option-box lazy entered loaded"
              data-bg="https://www2.arccorp.com/globalassets/products--participation/arc-travel-demand/product-container-bg-1.jpg"
              data-ll-status="loaded"
              style={{
                backgroundImage:
                  'url("https://www2.arccorp.com/globalassets/products--participation/arc-travel-demand/product-container-bg-1.jpg")',
              }}
            >
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <div
                    className="product-option product-option-container-item"
                    data-id={3}
                  >
                    <div className="product-option-container-item-eyebrow"></div>
                    <div className="product-option-container-item-title">
                      Use a Payment Link
                    </div>
                    <div style={{ "font-size": "30px" }}>
                      <i class="fas fa-link"></i>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="product-copy-item">
                    <p>
                      Payment Link is a secure way to receive payments. You
                      create a payment link URL and share it with the payer
                      through email, text, or a QR code. When the payer clicks
                      the link, they can choose a payment method to complete the
                      transaction on the payment page.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        }
      />

      <ProductText
        backgroundImage="https://www2.arccorp.com/globalassets/products--participation/arc-pay/arc-pay-credit-bg.png"
        eyebrow="Features"
        title={
          <span class="type-color-white">
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
        id="developers"
        title="Designed for Developers"
        subtitle=""
        body={
          <div className="row mt-5">
            <div className="col-lg-6"></div>
            <div className="col-lg-6">
              <li>Code samples and illustrative instances.</li>

              <li>Command-line interface for development and testing.</li>

              <li>Version-controlled API modifications</li>

              <li>Webhook functionality</li>

              <li>Testing environment</li>

              <li>Support for metadata</li>

              <li>Postman Collection</li>
            </div>
          </div>
        }
      />

      <ProductText id="data" title="Supplementary Data" />
      <ProductQuote
        backgroundImage="https://www2.arccorp.com/globalassets/destination-gateway/dg-quote.png"
        quote="We're delighted to expand our relationship with ARC by using the ARC Pay API, marking a pivotal moment in improving the customer experience on our website. By using the ARC Pay API to enable features like Apple Pay, Google Pay, and 3DS, we're simplifying and elevating the travel-buying process for our clients. This collaboration underscores our commitment to innovation and excellence in travel solutions."
        author="-	Brian Crist, "
        title="Founder and CEO"
        company="Business Travel Group "
      />

      <ProductLinks
        className="align-items-top"
        colClass="col-lg-4"
        prodLink={[
          {
            alt: "Travel Agency Payment Best Practices",
            copy: "A concise guide with advice, best practices and practical examples for travel payment professionals.",
            cta: "Download",
            direction: "down",
            header: "Travel Agency Payment Best Practices",
            icon: "https://www2.arccorp.com/globalassets/products--participation/arc-pay/person-chart-icon.png",
            link: "https://www2.arccorp.com/support-training/travel-agency-payment-best-practices/",
          },
          {
            alt: "Chargebacks Best Practices",
            copy: "A set of best practices to help travel agencies reduce and mitigate chargebacks.",
            cta: "Learn More",
            header: "Chargebacks Best Practices",
            icon: "https://www2.arccorp.com/globalassets/products--participation/arc-pay/money-report-icon.png",
          },
          {
            alt: "Fraud Prevention Practices",
            copy: "ARC provides advice, education and tools to help recognize and reduce fraud and mitigate risk.",
            cta: "Learn More",
            header: "Fraud Prevention Practices",
            icon: "https://www2.arccorp.com/globalassets/products--participation/arc-pay/security-icon.png",
            link: "https://www2.arccorp.com/support-training/fraud-prevention",
          },
        ]}
      />

      <ProductCallout
        className=""
        cta="Learn More"
        ctaLink="https://arccorp.com/"
        subtitle="ARC's timely, concise and accurate data solutions contain actionable insights tailored to your organization's unique business needs. With a staff of analysts, statisticians and data scientists, ARC's team will consult with you on available report solutions, including format, frequency, depth and breadth of data."
        title="Looking for a more custom data solution?"
      />
    </div>
  );
}

export default ARCPayAPI;

var mountNode = document.getElementById("home-app");

ReactDOM.render(<ARCPayAPI />, mountNode);

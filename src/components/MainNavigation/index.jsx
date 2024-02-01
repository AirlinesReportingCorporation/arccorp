import React, { useRef, useState, useEffect } from "react";
import MyarcModal from "./MyarcModal";
import Products from "./Products";
import Participation from "./Participation";
import Communications from "./Communications";
import Support from "./Support";
import Training from "./Training";
import About from "./About";

var accreditationLoginLink = "https://arctravel.my.site.com/agencyportal";

var navCategories = [
  {
    name: "Participation",
    key: "participation",
    menu: <Participation />,
  },
  {
    name: "Products",
    key: "products",
    menu: <Products />,
  },
  {
    name: "Communications",
    key: "communications",
    menu: <Communications />,
  },
  {
    name: "Training",
    key: "training",
    menu: <Training />,
  },
  {
    name: "Support",
    key: "support",
    menu: <Support />,
  },
  {
    name: "About ARC",
    key: "about",
    menu: <About />,
  },
];

function MainNavigation() {
  const [activeMenu, setActiveMenu] = useState("");
  const [mobileMenu, setMobileMenu] = useState("");
  const [mobileCategory, setMobileCategory] = useState("");
  const [myarcModal, setMyarcModal] = useState("");
  const [loggedIn, setLoggedIn] = useState("");

  const mobileMenuOpen = () => {
    setMobileMenu("open");
    document.body.style.overflow = "hidden";
  };

  const closeMyarcModal = () => {
    setMyarcModal("");
    console.log("asdf");
  };

  const clickMyarcModal = (event) => {
    event.preventDefault();
    if (myarcModal.length === 0) {
      setMyarcModal("show");
    } else {
      setMyarcModal("");
    }
    console.log("myarcModal");
  };

  const mobileMenuClose = () => {
    setMobileMenu("close");
    setMobileCategory("");
    document.body.style.overflow = "visible";
  };

  return (
    <div className="arc-mn" onMouseLeave={() => setActiveMenu("")}>
      <div className="arc-mn-nav-container">
        <div className="arc-mn-inner">
          <div class="arc-mn-logo-inner">
            <div class="arc-mn-logo">
              <a
                href="/"
                class="arc-mn-logo-link icon-arc-logo"
                title="logo"
              ></a>
            </div>
          </div>

          <div class="arc-mn-mobile-icon" onClick={mobileMenuOpen}>
            <div class="hamburger icon-menu"></div>
          </div>

          <div className="arc-mn-menu">
            <div class="arc-mn-menu">
              <div class="arc-mn-menu-items">
                {navCategories.map((navCategory, i) => (
                  <a
                    href="#"
                    class="arc-mn-menu-item"
                    onMouseEnter={() => setActiveMenu(navCategory.key)}
                  >
                    {navCategory.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div
            className="arc-mn-utility"
            onMouseEnter={() => setActiveMenu("")}
          >
            <a
              href="https://www2.arccorp.com/search"
              class="topnav-link show-search icon-search"
            ></a>
            <a
              href="https://www2.arccorp.com/about-us/contact-us/"
              class="arc-mn-contact-link"
            >
              Contact Us
            </a>
            <a
              href="https://myarc.arccorp.com/"
              class="arc-mn-myarc-link"
              onClick={(event) => clickMyarcModal(event)}
            >
              My ARC
            </a>

            {myarcModal && (
              <MyarcModal
                closeMyarcModal={closeMyarcModal}
                myarcModal={myarcModal}
              />
            )}

            <a
              href={accreditationLoginLink}
              class="arc-mn-accreditation-link"
              target="_blank"
            >
              Accreditation Login
              <i
                style={{ fontSize: "11px;", marginLeft: "5px" }}
                className="fas fa-chevron-right"
              ></i>
            </a>
          </div>
        </div>
      </div>

      {navCategories.map((navCategory, i) => (
        <div
          className={
            "arc-mn-sub animated " +
            (activeMenu === navCategory.key ? "active fadeInDown" : "") +
            " " +
            navCategory.key.toLowerCase()
          }
        >
          {navCategory.menu}
        </div>
      ))}

      <div
        className={
          "arc-mn-mobile-menu  " +
          (mobileMenu === "open" ? "animated fadeInRight" : "") +
          (mobileMenu === "close" ? "animated fadeOutRight" : "")
        }
      >
        <div className="arc-mn-mobile-menu-container">
          <div style={{ display: mobileCategory === "" ? "block" : "none" }}>
            {navCategories.map((navCategory, i) => (
              <div
                className="arc-mn-mobile-menu-category"
                onClick={() => setMobileCategory(navCategory.key)}
              >
                {navCategory.name} <i class="fas fa-chevron-right"></i>
              </div>
            ))}
          </div>

          <div className="arc-mn-mobile-menu-category-menu">
            {navCategories.map((navCategory, i) => (
              <div
                style={{
                  display:
                    mobileCategory === navCategory.key ? "block" : "none",
                }}
              >
                {navCategory.menu}
              </div>
            ))}
          </div>
        </div>

        <div className="arc-mn-mobile-menu-utility">
          <a
            href="https://myarc.arccorp.com/PortalApp/PreLogin.portal"
            className="arc-mn-mobile-btn"
          >
            MyARC Login
          </a>
          <a
            href={accreditationLoginLink}
            className="arc-mn-mobile-btn outline"
          >
            Accreditation Login
          </a>
        </div>

        <div
          className="arc-mn-mobile-menu-back"
          style={{ display: mobileCategory === "" ? "none" : "block" }}
          onClick={() => setMobileCategory("")}
        >
          <i class="fas fa-chevron-left"></i>
        </div>

        <div className="arc-mn-mobile-menu-close" onClick={mobileMenuClose}>
          <i class="fas fa-times"></i>
        </div>
      </div>
    </div>
  );
}

export default MainNavigation;

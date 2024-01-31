import React, { useRef, useState, useEffect } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";

function MyarcModal({ closeMyarcModal }) {
  const ref = useDetectClickOutside({
    onTriggered: closeMyarcModal
  });

  const [loggedIn, setLoggedIn] = useState("");

  useEffect(() => {
    var element = document.getElementsByClassName("navcontainer")[0];
    var username = element.getAttribute("data-username");
    if (username.length > 0) {
      setLoggedIn(username);
    } else {
      setLoggedIn("");
    }
  });

  return (
    <div
      class="arc-mn-myarc-login"
      ref={ref}
      
    >
      <div class="arc-mn-myarc-login-inner">
        <div
          class="arc-mn-myarc-loggedin"
          style={{ display: loggedIn.length > 0 ? "block" : "none" }}
        >
          You are currently logged in as
          <div class="arc-mn-myarc-username">{loggedIn}</div>
          <a target="_blank" href="https://myarc.arccorp.com/" class="ctaBtn">
            My ARC
          </a>
          <a
            target="_blank"
            href="https://myarc.arccorp.com/PortalApp/ARCGateway.portal?_nfpb=true&_st=&_pageLabel=ARC_Login&_name=logout&_nfls=false"
            class="ctaBtn"
          >
            Log Out
          </a>
        </div>
        <form
          style={{ display: loggedIn.length > 0 ? "none" : "block" }}
          id="frmMyARCLogin"
          name="frmMyARCLogin"
          method="POST"
          action="https://myarc.arccorp.com/PortalApp/PreLogin.portal"
        >
          <input
            type="text"
            id="myarcusername"
            name="user"
            placeholder="Username"
            title="username"
          />

          <input
            type="password"
            id="myarcpassword"
            name="password"
            placeholder="Password"
            title="password"
          />
          <div class="arc-mn-myarc-submit">
            <button
              title="submit form"
              class="ctaBtn ctaBtn--main"
              type="submit"
            >
              Log In
            </button>
          </div>
          <br />
          <a
            href="https://myarc.arccorp.com/PortalApp/ArcPublicPortal.portal?_nfpb=true&_pageLabel=MyARC_ForgotUserName&_nfls=false"
            target="_blank"
            class="forgotUsername"
          >
            Forgot Username?
          </a>
          <a
            href="https://myarc.arccorp.com/PortalApp/ArcPublicPortal.portal?_nfpb=true&_pageLabel=ARC_ForgotPassword&_nfls=false"
            target="_blank"
            class="forgotUsername"
          >
            Forgot Password?
          </a>
        </form>
      </div>
    </div>
  );
}

export default MyarcModal;

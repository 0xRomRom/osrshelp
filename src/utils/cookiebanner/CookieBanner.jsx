import { useEffect, useState } from "react";
import stl from "./CookieBanner.module.css";

const CookieBanner = () => {
  const [cookieSettings, setCookieSettings] = useState({
    essential: false,
    analytics: false,
  });
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  const acceptCookies = () => {
    document.cookie = "cookieConsent=true; max-age=31536000"; // Expires in 1 year
    setShowBanner(false);
  };

  const declineCookies = () => {
    document.cookie = "cookieConsent=false; max-age=31536000";
    setShowBanner(false);
  };

  useEffect(() => {
    const hasCookieConsent = document.cookie
      .split(";")
      .some((cookie) => cookie.trim().startsWith("cookieConsent="));
    console.log(hasCookieConsent);
    // Update the state based on the presence of the cookie
    setShowBanner(!hasCookieConsent);
  }, []);

  const toggleCookieSettings = (setting) => {
    setCookieSettings((prevState) => {
      return {
        ...prevState,
        [setting]: !cookieSettings[setting],
      };
    });
  };

  return (
    <>
      {showBanner && (
        <div
          className={stl.cookieBackdrop}
          style={{ display: showBanner ? "flex" : "none" }}
        >
          <div className={stl.bannerWrap}>
            <div className={stl.cookiebanner}>
              {showPreferences && (
                <div className={stl.prefsBox}>
                  <div className={stl.prefItem}>
                    <div className={stl.prefTextBlock}>
                      <span className={stl.prefTitle}>Essential Cookies</span>
                      <span className={stl.prefDesc}>
                        These cookies improve user experience by storing user
                        configurations. Think of closed pop-ups and preferred
                        list orders.
                      </span>
                    </div>
                    <div className={stl.toggleBox}>
                      <div
                        className={`${stl.toggleWrap} ${
                          cookieSettings.essential ? stl.flipped : ""
                        }`}
                        onClick={() => toggleCookieSettings("essential")}
                      >
                        <div className={stl.toggleDot}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div
                className={stl.mainBanner}
                style={{
                  borderTop: showPreferences ? "1px solid var(--border)" : "",
                }}
              >
                <button className={stl.declineCta} onClick={declineCookies}>
                  Decline
                </button>
                <span className={stl.bannerSpan}>
                  We use cookies to <span className={stl.white}>improve</span>{" "}
                  your user experience.
                  <br />
                  <span className={stl.readMore}> Read more</span>
                </span>
                <button className={stl.acceptCta} onClick={acceptCookies}>
                  Accept
                </button>
                <button
                  className={stl.prefCta}
                  onClick={() => setShowPreferences(!showPreferences)}
                >
                  Preferences
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieBanner;

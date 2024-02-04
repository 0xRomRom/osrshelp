import { useEffect, useState } from "react";
import stl from "./CookieBanner.module.css";

const CookieBanner = () => {
  const [cookieSettings, setCookieSettings] = useState({});

  const [showBanner, setShowBanner] = useState(true);
  const acceptCookies = () => {
    document.cookie = "cookieConsent=true; max-age=31536000"; // Expires in 1 year
    setShowBanner(false);
  };

  const declineCookies = () => {
    document.cookie = "cookieConsent=false; max-age=31536000";
    setShowBanner(false);
  };

  const showPreferences = () => {};

  useEffect(() => {
    const hasCookieConsent = document.cookie
      .split(";")
      .some((cookie) => cookie.trim().startsWith("cookieConsent="));
    console.log(hasCookieConsent);
    // Update the state based on the presence of the cookie
    setShowBanner(!hasCookieConsent);
  }, []);

  return (
    <>
      {showBanner && (
        <div className={stl.cookieBackdrop}>
          <div className={stl.bannerWrap}>
            <div className={stl.cookiebanner}>
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
              <button className={stl.prefCta}>Preferences</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieBanner;

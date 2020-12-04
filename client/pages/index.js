import React, { useEffect } from "react";
import landingImage from "../public/img/quiksession-landing.png";
import { createSubscriber, fetchSubscribers } from "../services";
import styles from "../styles/Landing.css";

const Landing = () => {
  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("auth"));
    if (auth && auth.user && auth.user.id) {
      var userId = auth.user.id;
      window.OneSignal = window.OneSignal || [];
      window.OneSignal.push(function () {
        window.OneSignal.init({
          appId: process.env.NOTIFICATION_ID,
        });
        var isPushSupported = window.OneSignal.isPushNotificationsSupported();
        if (isPushSupported) {
          console.log("Supported");
          window.OneSignal.isPushNotificationsEnabled(function (isEnabled) {
            if (isEnabled) {
              console.log("Push notifications are enabled!");
              window.OneSignal.getUserId(async (playerId) => {
                const data = await fetchSubscribers();
                var flag = 0;
                await data.forEach((item) => {
                  if (
                    String(item.playerId) === String(playerId) &&
                    String(item.owner.id) === String(userId)
                  )
                    flag = 1;
                });
                if (flag === 0) {
                  await createSubscriber({ userId, playerId });
                }
                console.log("OneSignal User ID:", playerId);
                console.log("Auth ID:", userId);
              });
            } else {
              console.log("Push notifications are not enabled yet.");
              window.OneSignal.push(function () {
                window.OneSignal.showHttpPrompt();
              });
            }
          });
        } else {
          console.log("Not Supported");
        }
      });
    }
  }, []);
  return (
    <div style={{ textAlign: "center" }}>
      <img
        src={landingImage}
        className={styles.landingImage}
        alt="QuikSession Landing logo"
      />
      <h1>Set The Tone!!</h1>
    </div>
  );
};
export default Landing;

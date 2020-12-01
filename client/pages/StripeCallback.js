import React, { useEffect } from "react";
import { stripeSetup } from "../services";
import loader from "../img/loader.svg";

function StripeCallback({ history }) {
  async function finalize() {
    const query = new URLSearchParams(history.location.search);
    const code = query.get("code");
    const userId = JSON.parse(localStorage.getItem("userId"));
    let req = await stripeSetup({ code, userId });
    if (req && req.status === "ok") {
      history.push("/login");
    } else {
      console.log("req", req);
    }
  }

  useEffect(() => {
    finalize();
  }, []);
  return (
    <div>
      <div className="">
        <img src={loader} className="loader" />
      </div>

      <style jsx>{`
        .loader {
          position: absolute;
          top: 50%;
          left: 50%;
          margin-left: -19px;
          margin-top: -19px;
        }
      `}</style>
    </div>
  );
}

export default StripeCallback;

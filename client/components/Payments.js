import React, { useContext } from "react";
import axios from "axios";
import { FETCH_USER } from "../actions/types";
import StripeCheckout from "react-stripe-checkout";
import { Context } from "../context";

function Payments() {
  const userContext = useContext(Context);
  return (
    <StripeCheckout
      name="Quiksession"
      description="$50 for 50 credits"
      // The amount is set in cents 100 cents in $1
      amount={5000}
      // Token is a callback function which ran once Stripe sends back after a
      // user makes a charge
      token={async (token) => {
        const res = await axios.post("/api/stripe", token);
        userContext.userDispatch({ type: FETCH_USER, payload: res.data });
        // this.props.handleToken(token);
        // console.log(token);
      }}
      stripeKey={process.env.STRIPE_KEY}
    >
      <button style={{ backgroundColor: "#0071bc" }} className="btn">
        Add Credits
      </button>
    </StripeCheckout>
  );
}

export default Payments;

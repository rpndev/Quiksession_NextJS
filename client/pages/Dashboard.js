import Link from "next/link";

const Dashboard = () => (
  <Fragment>
    <h2 style={{ textAlign: "center" }}>You Are Now Logged Into QuikSession</h2>
    <h5 style={{ textAlign: "center" }}>Add some money to your account</h5>
    <div style={{ textAlign: "center" }}>
      <img
        src={landingImage}
        className="landing-image"
        alt="QuikSession Landing logo"
      />
    </div>
  </Fragment>
);
export default Dashboard;

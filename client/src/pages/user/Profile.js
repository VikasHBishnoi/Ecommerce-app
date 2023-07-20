import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";

const Proile = () => {
  return (
    <Layout>
      <div className="container-fluid m-3 p-3">
        <div className="row"></div>
        <div className="col-md-3">
          <UserMenu />
        </div>
        <div className="col-md-9">
          <h1> Your Profile</h1>
        </div>
      </div>
    </Layout>
  );
};

export default Proile;

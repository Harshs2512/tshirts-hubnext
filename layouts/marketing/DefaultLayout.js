// import node module libraries
import React, { Fragment, useEffect } from "react";
import Header from "./nav/Header";

const DefaultLayout = (props) => {
  return (
    <Fragment>
      <Header/>
      <main>{props.children}</main>
      {/* <Footer bgColor="bg-light" /> */}
    </Fragment>
  );
};

export default DefaultLayout;

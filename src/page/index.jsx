import React from "react";

import Hero from "../components/Hero";
import Main from "../components/Main";
import Title from "../components/Title";
import Service from "../components/Service";

import Footer from "../components/Footer";

import Feature1 from "../components/Feature1";
import Feature2 from "../components/Feature2";
import Teams0 from "../components/Testimonials";
import Footer0 from "../components/Footer0";

import "../less/antMotionStyle.less";

import {
  Feature10DataSource,
  Feature20DataSource,
  Teams00DataSource,
  Footer00DataSource,
  Feature30DataSource,
} from "../components/data.source";

export default function index() {
  return (
    <div>
      <Hero />

      <Main />

      <Feature1
        id="Feature1_0"
        key="Feature1_0"
        dataSource={Feature10DataSource}
        isMobile={false}
      />

      <Title />

      <Feature2
        id="Feature2_0"
        key="Feature2_0"
        dataSource={Feature20DataSource}
        isMobile={false}
      />

      <Service />

      <Footer
        id="Feature3_0"
        key="Feature3_0"
        dataSource={Feature30DataSource}
        isMobile={false}
      />

      <Teams0
        id="Teams0_0"
        key="Teams0_0"
        dataSource={Teams00DataSource}
        isMobile={false}
      />

      <Footer0
        id="Footer0_0"
        key="Footer0_0"
        dataSource={Footer00DataSource}
        isMobile={false}
      />
    </div>
  );
}

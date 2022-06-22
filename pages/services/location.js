import React from "react";
import Header from "../../components/layout/Header";
import FooterComponent from "../../components/layout/Footer";
import Location from "../../components/services/Location";

export default function details() {
  return (
    <div>
      <Header />
      <Location />
      <FooterComponent />
    </div>
  );
}

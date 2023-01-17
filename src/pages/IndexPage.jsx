import React from "react";
// import FooterComp from "../components/FooterComp";
import TopCompany from "../components/TopCompany";
import CategoryPage from "./CategoryPage";
import JumbotronPage from "./JumbotronPage";
import LikePromoPage from "./LikePromoPage";
// import NavbarPage from "./NavbarPage";

function IndexPage() {
  return (
    <React.Fragment>
      <div className="container-fluid">
        {/* <NavbarPage /> */}
        <JumbotronPage />
        <CategoryPage />
        <LikePromoPage />
        <TopCompany />
        {/* <FooterComp /> */}
      </div>
    </React.Fragment>
  );
}

export default IndexPage;

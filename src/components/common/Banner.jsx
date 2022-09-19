import React from "react";

export const Banner = (props) => {
  const { banner, title, desc,adddesc} = props;
  return (
    <header className="masthead" style={{ backgroundImage: `url(${banner})` }}>
      <div className="container position-relative px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            <div className="page-heading">
              <h1>{title}</h1>
              <span className="subheading">{desc}</span>
              <span className="addhead">{adddesc}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

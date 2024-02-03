import React from "react";
const About = () => {
  return (
    <>
      <div
        className="about py-5 text-white d-flex justify-content-center align-items-center "
        style={{ backgroundColor: "#1abc9c" }}
      >
        <div>
          <app-star _ngcontent-ogv-c7 _nghost-ogv-c6>
            <div
              _ngcontent-ogv-c6
              className="text-center pt-4"
              style={{ color: "white" }}
            >
              <h2 className="text-uppercase mb-3 fs-1 fw-bolder py-5">
                about component
              </h2>
              <div className="d-flex align-items-center justify-content-center mb-3">
                <div
                  className="line me-3"
                  style={{ backgroundColor: "white" }}
                />
                <i _ngcontent-ogv-c6 className="fa-solid fa-star" />
                <div
                  className="line ms-3"
                  style={{ backgroundColor: "white" }}
                />
              </div>
            </div>
          </app-star>

          <div className="container pb-5">
            <div className="row px-5 ">
              <div className="col-md-6 ">
                <p className="pb-5" >
                  {" "}
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.{" "}
                </p>
              </div>
              <div className="col-md-6 ">
                <p className="pb-5">
                  {" "}
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

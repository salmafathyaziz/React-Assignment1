import React from "react";
import image1 from "../../assets/images/poert1.png";
import image2 from "../../assets/images/port2.png";
import image3 from "../../assets/images/port3.png";
const Portofolio = () => {
  return (
    <>
      <div className="portofolio py-5">
        <div className="text-center py-5" style={{ color: "rgb(44, 62, 80)" }}>
          <h2 className="text-uppercase mb-3 fs-1 fw-bolder py-2">
            portfolio component
          </h2>

          <div className="d-flex align-items-center justify-content-center mb-3">
            <i className="fa-solid fa-star" />
          </div>
        </div>

        <div className="container">
          <div className="row g-5">
            <div className="col-lg-4 col-md-6">
              <div
                className="rounded-3 overflow-hidden position-relative"
                style={{}}
              >
                <img alt className="w-100 rounded-3" src={image1} />
                <div className="layer__ position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                  <i className="text-white fa-solid fa-plus fa-6x" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                _ngcontent-xjj-c19
                className="rounded-3 overflow-hidden position-relative"
              >
                <img alt className="w-100 rounded-3" src={image3} />
                <div className="layer__ position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                  <i className="text-white fa-solid fa-plus fa-6x" />
                </div>
              </div>
            </div>
            <div _ngcontent-xjj-c19 className="col-lg-4 col-md-6">
              <div
                _ngcontent-xjj-c19
                className="rounded-3 overflow-hidden position-relative"
              >
                <img alt className="w-100 rounded-3" src={image2} />
                <div
                  _ngcontent-xjj-c19
                  className="layer__ position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center"
                >
                  <i className="text-white fa-solid fa-plus fa-6x" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="rounded-3 overflow-hidden position-relative">
                <img alt className="w-100 rounded-3" src={image3} />
                <div className="layer__ position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                  <i className="text-white fa-solid fa-plus fa-6x" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="rounded-3 overflow-hidden position-relative">
                <img alt className="w-100 rounded-3" src={image1} />
                <div className="layer__ position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                  <i className="text-white fa-solid fa-plus fa-6x" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="rounded-3 overflow-hidden position-relative">
                <img alt className="w-100 rounded-3" src={image2} />
                <div className="layer__ position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                  <i className="text-white fa-solid fa-plus fa-6x" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portofolio;

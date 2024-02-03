import React from "react";
const Contact = () => {
  return (
    <>
      <div className="container text-center w-50 py-5">
        <div className="text-center pt-4" style={{ color: "rgb(44, 62, 80)" }}>
          <h2 className="mb-3 fs-1 fw-bolder py-4">CONTACT SECTION</h2>

          <div className="d-flex align-items-center justify-content-center mb-3">
            <i className="fa-solid fa-star" />
          </div>
        </div>
        <div classname="  text-center ">
          <label htmlFor="userName" className="position-relative top-0 __top">
            {" "}
          </label>
          <input
            id="userName"
            type="text"
            placeholder="userName"
            name="userName"
            className="form-control border-0 border-bottom py-3 position-relative ng-untouched ng-pristine ng-valid"
          />
          <label htmlFor="userAge" className="position-relative top-0 __top">
            {" "}
          </label>
          <input
            id="userAge"
            type="text"
            placeholder="userAge"
            name="userName"
            className="form-control border-0 border-bottom py-3 position-relative ng-untouched ng-pristine ng-valid"
          />
          <label htmlFor="userEmail" className="position-relative top-0 __top">
            {" "}
          </label>
          <input
            id="userEmail"
            type="text"
            placeholder="userEmail"
            name="userName"
            className="form-control border-0 border-bottom py-3 position-relative ng-untouched ng-pristine ng-valid"
          />
          <label
            htmlFor="userPassword"
            className="position-relative top-0 __top"
          >
            {" "}
          </label>
          <input
            id="userPassword"
            type="text"
            placeholder="userPassword"
            name="userName"
            className="form-control border-0 border-bottom py-3 position-relative ng-untouched ng-pristine ng-valid"
          />
          <button
            className="btn mt-4 text-white"
            style={{ backgroundColor: "#1abc9c" }}
          >
            {" "}
            send Message{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default Contact;

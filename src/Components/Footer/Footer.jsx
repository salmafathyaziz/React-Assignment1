import React from "react";
const Footer = () => {
  return (
    <>
      <footer
        className="  w-100  py-5 bottom-0  w-100 "
        style={{ backgroundColor: "#2c3e50" }}
      >
        <div className="container py-3">
          <div className="row">
            <div className="col-md-4">
              <div className="cards text-center text-white">
                <h3>LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>{" "}
              </div>
            </div>

            <div className="col-md-4">
              <div className="cards text-center text-white">
                <h3>AROUND THE WEB</h3>
                <div className="icons">
                  <i class="fa-brands fa-facebook mx-1 icon"></i>
                  <i class="fa-brands fa-twitter mx-1 icon"></i>
                  <i class="fa-brands fa-linkedin-in mx-1 icon"></i>
                  <i class="fa-solid fa-globe mx-1 icon"></i>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="cards text-center text-white">
                <h3>ABOUT FREELANCER</h3>
                <p>
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <div
          className="text-center text-white  "
          style={{ backgroundColor: "#1a252f" }}
        >
          <p>Copyright © Your Website 2021</p>
        </div> */}

        <div class=" py-3 bottom-0 " style={{marginBottom :"-50px", backgroundColor: "#1a252f"}
      }>
          <div class="container text-center ">
            <p class="text-white  py-2">
            Copyright © Your Website 202
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

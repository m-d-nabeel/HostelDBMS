import React from "react";
import "./Footer.css";

const Footer = () => {
	return (
		<>
			{/* <div className="footer py-2">
        <div className="container mt-4">
          <div className="row ">
            <div className="col-6 col-md-2 footer_hostels">
              <ul>
                <span className="font-weight-bold footer-heading"><h4>Campus-A</h4></span>
                <li>
                  <a href="#">Kelat</a>
                </li>
                <li>
                  <a href="#">New Boys</a>
                </li>
                <li>
                  <a href="#">Himadri</a>
                </li>
                <li>
                  <a href="#">Jwalamukhi</a>
                </li>
                <li>
                  <a href="#">Kellat</a>
                </li>
                <li>
                  <a href="#">Karakoram</a>
                </li>
                <li>
                  <a href="#">Kumaon</a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-3 footer_hostels">
              <ul>
                <span className="font-weight-bold footer-heading"><h4>Campus-B</h4></span>
                <li>
                  <a href="#">SRK</a>
                </li>
                <li>
                  <a href="#">FRK</a>
                </li>
                <li>
                  <a href="#">BRA</a>
                </li>
                <li>
                  <a href="#">Shivalik</a>
                </li>
                <li>
                  <a href="#">Udaigiri</a>
                </li>
                <li>
                  <a href="#">Vindhyachal</a>
                </li>
                <li>
                  <a href="#">Zanskar</a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="m-0" />
          <div className="footer-text pt-2 text-left ">
            <span>
              Copyright © Board for Hostel Management - Jamia Millia Islamia. All rights
              reserved.
            </span>
          </div>
        </div>
      </div> */}
			<div class="footer-basic full-width">
				<footer>
					<div class="social">
						<a href="#">
							<i class="fa fa-instagram"></i>
						</a>
						<a href="#">
							<i class="fa fa-snapchat"></i>
						</a>
						<a href="#">
							<i class="fa fa-twitter"></i>
						</a>
						<a href="#">
							<i class="fa fa-facebook"></i>
						</a>
					</div>
					<ul class="list-inline">
						<li class="list-inline-item">
							<a href="/">Home</a>
						</li>
						<li class="list-inline-item">
							<a href="/About">About</a>
						</li>
						<li class="list-inline-item">
							<a href="/Contact">Contact Us</a>
						</li>
						<li class="list-inline-item">
							<a href="/Faq">FAQs</a>
						</li>
						<li class="list-inline-item">
							<a href="/Payment">Fee Payment</a>
						</li>
					</ul>
					<p class="copyright">
						Copyright © Board for Hostel Management - Jamia Millia Islamia. All
						rights reserved.
					</p>
				</footer>
			</div>
		</>
	);
};

export default Footer;

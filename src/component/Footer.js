import React from 'react'
import './CSS/Footer.css'

function Footer() {
  return (
    <footer className="text-center m-0 p-0 footer text-center">
      <div className="container p-4">
        <div className="row text-md-start mt-5">
          <div className="col-md-4">
            <h4 className="pb-3">ROBOKALAM</h4>
            <p className="copy-right">
              Copyright ROBOKALAM. All Rights Reserved.
            </p>
          </div>

          <div className="col-md-3">
            <h5 className="pb-3">Solutions </h5>
            <ul className="list-style ps-0 ">
              <li className="pb-3">Patent Licensing and Acquisition</li>
              <li className="pb-3">Portfolio Management and Monetization</li>
              <li className="pb-3">R&D / Market Intelligence</li>
              <li className="pb-3">M&A Opportunity and Due Diligence</li>
              <li className="pb-3">Litigation Risk Assessment and Strategy</li>
              <li className="pb-3">Patent Prosecution</li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5 className="pb-3"> Quick links </h5>
            <ul className="list-style ps-0">
              <li className="pb-3">ROBOKALAM Empower</li>
              <li className="pb-3">ROBOKALAM Insight</li>
              <li className="pb-3">ROBOKALAM Corporation</li>
            </ul>
          </div>

          <div className="col-md-2">
            <h5 className="pb-3"> Other </h5>
            <ul className="list-style ps-0">
              <li className="pb-3">Privacy Policy</li>
              <li className="pb-3">Terms of Use</li>
              <li className="pb-3">Features</li>
              <li className="pb-3">Success Stories</li>
              <li className="pb-3">Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

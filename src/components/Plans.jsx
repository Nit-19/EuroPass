import React from 'react';

function Plans() {
  return (
    <div className='plans' id='plans' style={{ marginTop: '120px' }}>
      <div className="container" >
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4 box-shadow">

              <div className="card-body">
                <div className="d-flex" style={{ justifyContent: "center", alignItems: "center", flexDirection: "column", height: "250px" }}>
                  <i className='fa-solid fa-shield'></i>
                  <h2 style={{ padding: "20px 0 0 0" }}>Basic Plan</h2>
                  <h1 className="card-title pricing-card-title" style={{ color: "rgb(132, 161, 255)" }}>$0 <small className="muted" style={{ fontSize: "0.9rem" }}>/   Per Visit</small></h1>
                </div>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Email Configuration <i className='fa fa-check-circle colored'></i></li>
                  <li>Basic Network Troubleshooting<i className='fa fa-check-circle colored'></i></li>
                  <li>Operating System Updates<i className='fa fa-circle-xmark'></i></li>
                  <li>Server Management<i className='fa fa-circle-xmark'></i></li>
                  <li>Virus And Malware Removal<i className='fa fa-circle-xmark'></i></li>
                </ul>
                <span className='btn-span'><button type="button" className="btn btn-lg btn-block btn-outline-primary" style={{ width: "100%" }}>Book Now</button>
                </span></div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 box-shadow">

              <div className="card-body">
                <div className="d-flex" style={{ justifyContent: "center", alignItems: "center", flexDirection: "column", height: "250px" }}>
                  <i class="fa-solid fa-sun"></i>
                  <h2 style={{ padding: "20px 0 0 0" }}>Premium Plan</h2>
                  <h1 className="card-title pricing-card-title" style={{ color: "rgb(132, 161, 255)" }}>$99 <small className="muted" style={{ fontSize: "0.9rem" }}>/   Per Visit</small></h1>
                </div>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Email Configuration <i className='fa fa-check-circle colored'></i></li>
                  <li>Basic Network Troubleshooting<i className='fa fa-check-circle colored'></i></li>
                  <li>Operating System Updates<i className='fa fa-check-circle colored'></i></li>
                  <li>Server Management<i className='fa fa-circle-xmark'></i></li>
                  <li>Virus And Malware Removal<i className='fa fa-circle-xmark'></i></li>
                </ul>
                <span className='btn-span'><button type="button" className="btn btn-lg btn-block btn-outline-primary" style={{ width: "100%" }}>Book Now</button>
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 box-shadow">

              <div className="card-body">
                <div className="d-flex" style={{ justifyContent: "center", alignItems: "center", flexDirection: "column", height: "250px" }}>
                  <i class="fa-solid fa-trophy"></i>
                  <h2 style={{ padding: "20px 0 0 0" }}>Elite Plan</h2>
                  <h1 className="card-title pricing-card-title" style={{ color: "rgb(132, 161, 255)" }}>$199 <small className="muted" style={{ fontSize: "0.9rem" }}>/   Per Visit</small></h1>
                </div>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Email Configuration <i className='fa fa-check-circle colored'></i></li>
                  <li>Basic Network Troubleshooting<i className='fa fa-check-circle colored'></i></li>
                  <li>Operating System Updates<i className='fa fa-check-circle colored'></i></li>
                  <li>Server Management<i className='fa fa-check-circle colored'></i></li>
                  <li>Virus And Malware Removal<i className='fa fa-check-circle colored'></i></li>
                </ul>
                <span className='btn-span'><button type="button" className="btn btn-lg btn-block btn-outline-primary" style={{ width: "100%" }}>Book Now</button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plans;

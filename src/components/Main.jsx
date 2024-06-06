import React from 'react';

function Main() {

    return (
        <div className='mainPage' style={{ marginTop: "80px" }} >
            <div className="cardDiv" id='home' >
                <div className='cards' style={{ paddingTop: '20px'}}>
                    <div className="card" style={{ width: "20rem", height: "19rem", margin: '10px', background: "#738ee0", color: "white", padding: '10px 10px 20px 10px' }}>

                        <div className="card-body" >
                            <p style={{ marginBottom: '10px' }}>BPM Services</p>
                            <h5 className="card-title" style={{ marginTop: '5px', marginBottom: '20px' }}>Web Development</h5>
                            <p className="card-text" style={{ marginBottom: '10px' }}>Our web development at BPM Tech Solutions and Services creats innovative, responsive websites tailored to meet your business needs and goals .</p>
                        </div>
                        <button type="button" class="btn" style={{ textAlign: 'left', color: 'white', fontSize: '12px', marginBottom: '20px' }}><b>LEARN MORE <span style={{}}><i class="fa-solid fa-arrow-right"></i></span></b></button>
                    </div>

                    <div className="card d-flex" style={{ width: "21rem", height: "27rem", margin: '10px', background: "#738ee0", color: "white", padding: '45px', justifyContent: 'start', alignItems: 'flex-start' }}>

                        <div className="card-body">
                            <p style={{ marginBottom: '0px' }}>BPM Services</p>
                            <h5 className="card-title" style={{ marginTop: '5px', marginBottom: '20px' }}>Tech Support</h5>
                            <p className="card-text" style={{ marginBottom: '10px' }} >Our tech support at BPM Tech Solutions and Services Provides round-the-clock assistance , ensuring your systems run smoothly and efficently.</p>
                        </div>
                        <button type="button" class="btn" style={{ textAlign: 'left', color: 'white', fontSize: '12px', marginBottom: '20px' }}><b>LEARN MORE <span style={{}}><i class="fa-solid fa-arrow-right"></i></span></b></button>
                    </div>

                    <div className="card" style={{ width: "20rem", height: "19rem", margin: '10px', background: "#738ee0", color: "white", padding: '10px 10px 20px 10px' }}>

                        <div className="card-body" >
                            <p style={{ marginBottom: '10px' }}>BPM Services</p>
                            <h5 className="card-title" style={{ marginTop: '10px', marginBottom: '20px' }}>Digital Marketing</h5>
                            <p className="card-text" style={{ marginBottom: '10px' }}>BPM Tech Solutions and Services offers expert digital marketing strategies enhancing your online prsence for sustained buisness growth.</p>
                        </div>
                        <button type="button" class="btn" style={{ textAlign: 'left', color: 'white', fontSize: '12px', marginBottom: '20px' }}><b>LEARN MORE <span style={{}}><i class="fa-solid fa-arrow-right"></i></span></b></button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Main;
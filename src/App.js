import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PaintIcon from "./images/Webinar-Page.png";
import * as Icon from 'react-bootstrap-icons';
import image_1 from './images/1.svg';
import image_2 from './images/2.svg';
import image_3 from './images/3.svg';
import Secondleft from './components/Secondleft';
import Secondright from './components/Secondright';
import Thirdleft from './components/Thirdleft';
import Thirdright from './components/Thirdright';
import Footer from './components/Footer';
import './font/BegumSans-Regular.ttf';



function App() {
  
  return (
    
    <>
      <Router>
        <div style={{
          backgroundImage: `url(${PaintIcon})`
        }}>


          <div className="container-fluid"style={{
            marginBottom: -20
            }}>
            <div class="row">

              <div className="col-sm-8" id="mobile_head">
                <Navbar />
              </div>
              <div className="col-sm-4" id="mobile_2nd">
                <div className="butt">
                  <a href="#register"><button class="button" id="liv_butt">LIVE WEBINAR <Icon.PlayCircleFill  /></button></a>
                </div>
                <p id="t2">13TH NOVEMBER 2021</p>
                <p id="t3">SATURDAY</p>
                <p id="t4">12:00 - 1:00 PM</p>
                <hr id="l2"
                  style={{
                    color: 'black',
                    height: 2,
                    marginTop: -3,
                    width: 610,
                    marginLeft: -20

                  }}
                />
                <div className="bott_text" id="bott_text">
                  <p id="t5">Who should attend?</p>
                </div>
                <div className="bott_info" id="bott_info">
                  <p id="t6">Investors looking for a Growth <br />allocation in their portfolio</p>
                  <p id="t7">Investors looking to diversify <br />into Technology-led Investments</p>
                  <p id="t8">If you are looking to invest in Best <br />in-class Tech-focused Funds</p>
                </div>
                <div className="pic1" id="pic1">
                  <img src={image_1} height={100} width={100} />
                </div>
                <div className="pic2" id="pic2">
                  <img src={image_2} height={100} width={100} />
                </div>
                <div className="pic3" id="pic3">
                  <img src={image_3} height={120} width={120} />
                </div>

                <div className="butt_last" id="butt_last">
                  <a href='#register' type="button" class="btn btn-primary btn-lg">Register Now</a>
                </div>
              </div>
            </div>

          </div>
        </div>
        <hr style={{
            color: 'black',
            height: 0.5,
            marginTop: 40,
            marginRight: 10,
            marginLeft: 10,
            marginBottom: 20
            }}/>
        {/* Second screen */}
        <div style={{
          backgroundImage: `url(${PaintIcon})`
        }}>
        

          {/* <div className="container-fluid" style={{
            marginTop: 20,
            marginBottom: -20
            }}> */}
              
            <div class="row">

              <div className="col-sm-8" id="speaker">
                <p id = "title">Speakers</p>
                <Secondleft />
              </div>
              <div className="col-sm-4" id="moderator">
                <p id = "title1">Moderator</p>
                <Secondright />
              </div> 
            </div>

          </div>
        {/* </div> */}
        <hr style={{
            color: 'black',
            height: 0.5,
            marginTop: 40,
            marginRight: 10,
            marginLeft: 10,
            marginBottom: 20 
            }} />
        {/* Third screen */}
        <div style={{
          backgroundImage: `url(${PaintIcon})`
        }}>


          {/* <div className="container-fluid" id="register"> */}
            <div className="row" id="register">

              <div className="col-sm-8">
                <p id = "title3">Register now for assured access.</p>
                <p id = "title4">We have limited seats.</p>
                <Thirdleft />
              </div>
              <div className="col-sm-4" >
                
                <Thirdright />
              </div> 
            </div>

          </div>
        {/* </div> */}
        <Footer />
        
      </Router>
    </>
    
  );
}

export default App;

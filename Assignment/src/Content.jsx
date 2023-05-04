import React from 'react';
import "./content.css"

function Content(props) {
  return (
    <>
      <div className="container-fluid bg">
        <div className="row">
          <div className="box1 ">


            <h2>Up to 60% off | Styles for men</h2>
            <div class="col-6 "><img src="./image/Men-styling/ms1.jpg" /><span>Clothing</span></div>
            <div class="col-6"><img src="./image/Men-styling/ms2.jpg" /><span>Footwear</span></div>

            <div class="col-6"><img src="./image/Men-styling/ms3.jpg" /><span>Bags&luggage</span></div>
            <div class="col-6"><img src="./image/Men-styling/ms4.jpg" /><span>Watches</span></div>
            <a href='#'>See all ofers</a>
          </div>


          <div className="box2 ">
            <h2>Electronics devices for home office</h2>
            <div class="col-6 "><img src="./image/Gadgets/gs1.jpg" /><span>Smartwatches & fitness</span></div>
            <div class="col-6"><img src="./image/Gadgets/gs2.jpg" /><span>Tablets</span></div>

            <div class="col-6"><img src="./image/Gadgets/gs3.jpg" /><span>Laptops</span></div>
            <div class="col-6"><img src="./image/Gadgets/gs4.jpg" /><span>Moniters</span></div>
            <a href='#'>See all ofers</a>
          </div>


          <div className="box3 ">
            <h2>Latest and upcoming launches</h2>
            <div class="col-6 "><img src="./image/Mobiles/ps1.jpg" /><span>Oneplus Nord CE Lite 5G|₹19,999</span></div>
            <div class="col-6"><img src="./image/Mobiles/ps2.jpg" /><span>Samsung M14 5G|₹14,990</span></div>

            <div class="col-6"><img src="./image/Mobiles/ps3.jpg" /><span>Realme nazro|₹10,999</span></div>
            <div class="col-6"><img src="./image/Mobiles/ps4.jpg" /><span>Explore all new launches</span></div>
            <a href='#'>See all ofers</a>
          </div>


          <div className="box4 ">
            <h2>Up to 60% off | Styles for women</h2>
            <div class="col-6 "><img src="./image/Women-styling/ws1.jpg" /><span>Women's clothing</span></div>
            <div class="col-6"><img src="./image/Women-styling/ws2.jpg" /><span>Footwear&Handing</span></div>

            <div class="col-6"><img src="./image/Women-styling/ws3.jpg" /><span>Watches</span></div>
            <div class="col-6"><img src="./image/Women-styling/ws4.jpg" /><span>Fashion jewellery</span></div>
            <a href='#'>See all ofers</a>
          </div>


        </div>
      </div>
    </>
  );
}

export default Content;
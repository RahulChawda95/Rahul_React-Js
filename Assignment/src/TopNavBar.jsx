import React from 'react';
import "./TopNavBar.css"

function TopNavBar(props) {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-1  logo">
                        
                    </div>

                    <div className="col-2 address">
                        <span className='hello'>Hello</span><br/>
                        <i class="fa fa-map-marker"  ></i>
                    </div>

                    <div className="col-5 search container-fluid">
                        <div className="row">
                        <div className="all col-1">
                        <i class="fa fa-caret-down"></i>    
                        </div>
                        <div className='input1 col-10'>
                        <input type="text " placeholder='Search Amazon.in'></input>
                        </div>
                        <div className="submit1 col-1">
                        <button><i class="fa fa-search"></i></button>
                        </div>
                        </div>
                    </div>

                    <div className="col-4 account container-fluid">
                        <div className="row">
<span className='col-3 pt-3'>EN</span>

<span className='col-3 '>
    <span>Hello,sign in</span>
    <h6>Account & Lists</h6>
</span>

<span className='col-3'>
    <span>Returns</span>
    <p>& Orders</p>
</span>

<span className='col-3 pt-3'>
    <span>Cart</span>
</span>



                        </div>
                     

                    </div>


                </div>
            </div>


        </>

    );
}

export default TopNavBar;
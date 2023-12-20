import React from "react";

const HeaderCompo = () => {
  return (
    <>
      <header className="header-top">
        <div className="header-container">
            <div className="header-row">
                <div className="header-content">
                    <p className="header-para">Free Shipping Over $100 & Free Returns</p>
                </div>
                <div className="header-content">
                    <p className="header-para">Helpline:<a href="tel:+91 9535229535">+91 9535229535</a></p>
                </div>
            </div>
        </div>
      </header>
      <header className="header-upper">
        <div className="header-parent">
            <div className="header-row">
                <div>
                    <h1><Link>iShop</Link></h1>
                </div>
            </div>
        </div>
      </header>
    </>
  );
};

export default HeaderCompo;

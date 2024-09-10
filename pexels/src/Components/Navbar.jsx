import React from "react";

function Navbar({setSearch}) {
  return (
    <div>
      <div className="nav">
        <div className="btn">Nature</div>
        <div className="btn">Travel</div>
        <div className="btn">City</div>
        <div className="btn">Car</div>
        <div className="btn">Fashion</div>
        <div className="btn">Animals</div>
        <div className="btn">Tecnology</div>
        <div className="btn">Tokyo</div>
        <div className="btn">Business & Finace </div>
        <div className="btn">Dubai</div>
        <div className="btn">Saved</div>
      </div>
      <form action="">
        <div className="inputDiv">
            <input type="email" onChange={(e)=> setSearch(e.target.value)}/>
        </div>
      </form>
    </div>
  );
}

export default Navbar;

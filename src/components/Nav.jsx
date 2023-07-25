import React from 'react'
import { Link } from "react-router-dom";


export default function Nav(props) {
  return (
    <div className="nav">
      <Link to="/prices">
        <div>CRYPTO PRICES</div>
      </Link>
      {/* <Link to="/">
        <div>MAIN</div>
      </Link> */}
      <Link to="/currencies">
        <div>CURRENCIES</div>
      </Link>
    </div>
  );
};


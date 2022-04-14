import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";


export default function () {
  return (
    <div>
      <h1>Index page</h1>
      <h1><Link to="/carName">Car name page</Link></h1>
      <h1><Link to="/car">Car page</Link></h1>
      <h1><Link to="/carTemplate">Car template page</Link></h1>
      <h1><Link to="/position">Car position page</Link></h1>
      <h1><Link to="/client">Client page</Link></h1>
      <h1><Link to="/contract">Contract page</Link></h1>

    </div>
  );
}

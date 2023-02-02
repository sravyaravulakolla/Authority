import React from 'react';
import {Link} from 'react-router-dom';
function Home(){
return<>
<div className="container">
<p><b>Hello Admin!!</b></p>
<form>
  <label for="period"><p id="prd"><b>Select the period </b></p></label>
  <br/>
  <input type="date" id="period" name="period"/>
  <input type="date" id="period" name="period"/>
  <input type="submit"/>
</form>
</div>
<h3 id="h1"><b>REPORT</b></h3>
<div className="dropdown">
<button className="dropbtn">SELECT STATUS</button>
<div className="dropdown-content">
<Link to='/'>ALL</Link>
<Link to='/pending'>PENDING</Link>
<Link to='/approved'>APPROVED</Link>
<Link to='/rejected'>REJECTED</Link>
</div>
</div>
<h3 id="h1"><b>ALL REGISTRATIONS</b></h3>
<br/>
<div className="table-responsive">
<table className="table" id="Info">
  <tr>
      <th>S.No</th>
      <th>OWNER NAME</th>
      <th>REGISTRATION STATUS</th>
      <th>VIEW DETAILS</th>
  </tr>
  <tr>
      <td></td>
      <td></td>
      <td></td>
      <td><a href="View registrations.html">Click here</a></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td><a href="View registrations.html">Click here</a></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td><a href="View registrations.html">Click here</a></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td><a href="View registrations.html">Click here</a></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td><a href="View registrations.html">Click here</a></td>
  </tr>
</table>  
</div>
<h3 id="h1"><b>ALL LICENSE APPLICATIONS</b></h3>
<br/>
<div className="table-responsive">
<table className="table" id="Info">
  <tr>
      <th>S.No</th>
      <th>OWNER NAME</th>
      <th>LICENSE STATUS</th>
      <th>VIEW DETAILS</th>
  </tr>
  <tr>
      <td></td>
      <td></td>
      <td></td>
      <td><a href="View license.html">Click here</a></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td><a href="View license.html">Click here</a></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td><a href="View license.html">Click here</a></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td><a href="View license.html">Click here</a></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td><a href="View license.html">Click here</a></td>
  </tr>
</table>  
</div>
<h3 id="h1"><b>ALL PERMIT APPLICATIONS</b></h3>
<br/>
<div className="table-responsive">

<table className="table" id="Info">
  <tr>
      <th>S.No</th>
      <th>OWNER NAME</th>
      <th>PERMIT STATUS</th>
      <th>VIEW DETAILS</th>
  </tr>
  <tr>
      <td></td>
      <td></td>
      <td></td>
      <td><a href="View pemit applications.html">Click here</a></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td><a href="View pemit applications.html">Click here</a></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td><a href="View pemit applications.html">Click here</a></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td><a href="View pemit applications.html">Click here</a></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td><a href="View pemit applications.html">Click here</a></td>
  </tr>
</table>  
</div>
<button onclick="window.print()">Print</button>
</>
}
export default Home;
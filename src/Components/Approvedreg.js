import React from 'react';
import {Link} from 'react-router-dom';
function Approvedreg(){
return<>
<div className="container">
  <form>
    <label for="period"><p id="prd">Select the period</p></label>
    <br/>
    <input type="date" id="period" name="period"/>
    <input type="date" id="period" name="period"/>
    <input type="submit"/>
  </form>
</div>
<br/>
<div className="dropdown">
  <button className="dropbtn">SELECT STATUS</button>
  <div className="dropdown-content">
  <Link to='/reg'>ALL</Link>
<Link to='/pendingreg'>PENDING</Link>
<Link to='/approvedreg'>APPROVED</Link>
<Link to='/rejectedreg'>REJECTED</Link>
  </div>
</div>
  <br/>
  <h3 id="h1"><b>APPROVED REGISTRATIONS</b></h3>
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
<button onclick="window.print()">Print</button>
</>
}
export default Approvedreg;
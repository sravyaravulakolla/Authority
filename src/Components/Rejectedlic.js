import React from 'react';
import { Link } from 'react-router-dom';
function Rejectedlic() {
    return <><div class="container">
        <form>
            <label for="period"><p id="prd">Select the period</p></label>
            <br />
            <input type="date" id="period" name="period" />
            <input type="date" id="period" name="period" />
            <input type="submit" />
        </form>
    </div>
        <br />
        <div className="dropdown">
            <button className="dropbtn">SELECT STATUS</button>
            <div className="dropdown-content">
                <Link to='/lic'>ALL</Link>
                <Link to='/pendinglic'>PENDING</Link>
                <Link to='/approvedlic'>APPROVED</Link>
                <Link to='/rejectedlic'>REJECTED</Link>
            </div>
        </div>
        <br />
        <h3 id="h1"><b>REJECTED LICENSE APPLICATIONS</b></h3>
        <br />
        <div class="table-responsive">

            <table class="table" id="Info">
                <tr>
                    <th>S.No</th>
                    <th>OWNER NAME</th>
                    <th>LICENSE STATUS</th>
                    <th>REASON FOR REJECTION</th>
                    <th>VIEW DETAILS</th>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><a href="View license.html">Click here</a></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><a href="View license.html">Click here</a></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><a href="View license.html">Click here</a></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><a href="View license.html">Click here</a></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><a href="View license.html">Click here</a></td>
                </tr>
            </table>
        </div>
        <button onclick="window.print()">Print</button>
    </>
}
export default Rejectedlic;
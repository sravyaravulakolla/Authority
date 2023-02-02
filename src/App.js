import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Home from './Components/Home'
import Pending from './Components/Pending';
import Approved from './Components/Approved';
import Rejected from './Components/Rejected';
import Registration from './Components/Registration';
import Pendingreg from './Components/Pendingreg';
import Approvedreg from './Components/Approvedreg';
import Rejectedreg from './Components/Rejectedreg';
import License from './Components/License';
import Permit from './Components/Permit';
import Pendinglic from './Components/Pendinglic';
import Approvedlic from './Components/Approvedlic';
import Rejectedlic from './Components/Rejectedlic';
import Pendingper from './Components/Pendingper';
import Approvedper from './Components/Approvedper';
import Rejectedper from './Components/Rejectedper';
function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='pending' element={<Pending />} />
        <Route path='approved' element={<Approved />} />
        <Route path='rejected' element={<Rejected />} />
        <Route path='reg' element={<Registration />} />
        <Route path='pendingreg' element={<Pendingreg />} />
        <Route path='approvedreg' element={<Approvedreg />} />
        <Route path='rejectedreg' element={<Rejectedreg />} />
        <Route path='lic' element={<License />} />
        <Route path='pendinglic' element={<Pendinglic />} />
        <Route path='approvedlic' element={<Approvedlic />} />
        <Route path='rejectedlic' element={<Rejectedlic />} />
        <Route path='per' element={<Permit />} />
        <Route path='pendingper' element={<Pendingper/>}/>
        <Route path='approvedper' element={<Approvedper/>}/>
        <Route path='rejectedper' element={<Rejectedper/>}/>

      </Routes>
    </>
  );
}

export default App;



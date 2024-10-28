import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import base components for entire website
import NavBar from './components/NavBar.jsx';
import './App.css';
//import react pages
import SplashPage from './pages/SplashPage.jsx';
import HomePage from './pages/HomePage.jsx';
import CaseStudiesPage from './pages/CaseStudiesPage.jsx';
import GradeBookPage_Faculty from './pages/GradeBookPage_Faculty.jsx';
import GradeBookPage_Student from './pages/GradeBookPage_Student.jsx';
import InputQC_ResultsPage from './pages/InputQC_ResultsPage.jsx';
import PatientReportsPage from './pages/PatientReportsPage.jsx';
import QC_OrderEntriesPage from './pages/QC_OrderEntriesPage.jsx';
import QC_Page from './pages/QC_Page.jsx';
import QuizzesPage_Faculty from './pages/QuizzesPage_Faculty.jsx';
import QuizzesPage_Student from './pages/QuizzesPage_Student.jsx';
import ReferecnceFilesPage from './pages/ReferenceFilesPage.jsx';
import ViewQCResultsPage from './pages/ViewQCResultsPage.jsx';
import ReportSubmissionsPage_Student from './pages/ReportSubmissionsPage_Student.jsx';
import ReportSubmissionsPage_Faculty from './pages/ReportSubmissionsPage_Faculty.jsx';
import AccountPage_Faculty from './pages/AccountPage_Faculty.jsx';
import AccountPage_Student from './pages/AccountPage_Student.jsx';
import ErrorPage from './pages/ErrorPage.jsx';




function App() {

  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //Splash Page is login!
  
  return (
    <Router>
      
      <div className='nav-bar'>
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/casestudies" element={<CaseStudiesPage />} />
        <Route path="/gradebookfaculty" element={<GradeBookPage_Faculty />} />
        <Route path="/gradebookstudent" element={<GradeBookPage_Student />} />
        <Route path="/inputqcresults" element={<InputQC_ResultsPage />} />
        <Route path="/patientreports" element={<PatientReportsPage />} />
        <Route path="/orderentries" element={<QC_OrderEntriesPage />} />
        <Route path="/qc" element={<QC_Page />} />
        <Route path="/quizzesfaculty" element={<QuizzesPage_Faculty />} />
        <Route path="/quizzesstudent" element={<QuizzesPage_Student />} />
        <Route path="/referencefiles" element={<ReferecnceFilesPage />} />
        <Route path="/viewqcresults" element={<ViewQCResultsPage />} />
        <Route path="/reportsubmissionsstudent" element={<ReportSubmissionsPage_Student/>} />
        <Route path="/reportsubmissinosfaculty" element={<ReportSubmissionsPage_Faculty/>} />
        <Route path="/AccountPage_Faculty" element={<AccountPage_Faculty/>} />
        <Route path="/AccountPage_Student" element={<AccountPage_Student/>} />
        <Route path="/error" element={<ErrorPage/>} />


      </Routes>
    </Router>
  );
}

/*

routes to add
<Route path="/account" element={<accountPage />} />
<Route path="/account" element={<accountPage />} />


*/

export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home.js';
import Contact from './components/Contact.js';
import About from './components/About.js';
import CoreJava from './Pages/CoreJava.js';
import J2EE from './Pages/J2EE.js';
import ManualTesting from './Pages/ManualTesting.js';
import Selenium from './Pages/Selenium.js';
import SoapUI from './Pages/SoapUI.js';
import HtmlTraining from './Pages/HtmlTraining.js';
import Javascript from './Pages/Javascript.js';
import Css from './Pages/Css.js';
import Php from './Pages/Php.js';
import Jquery from './Pages/Jquery.js';
import Oracle from './Pages/Oracle.js';
import NetTraining from './Pages/NetTraining.js';
import ObjectiveC from './Pages/ObjectiveC.js';
import IOSTraining from './Pages/IOSTraining.js';
import AndroidTraining from './Pages/AndroidTraining.js';
import UNIX from './Pages/UNIX.js';
import PerlTraining from './Pages/PerlTraining.js';
import SEO from './Pages/SEO.js';
import CTraining from './Pages/CTraining.js';
import CMSApplication from './webpages/CMSApplication.js';
import DomainHoisting from './webpages/DomainHoisting.js';
import EcommerceApplication from './webpages/EcommerceApplication.js';
import MobileApps from './webpages/MobileApps.js';
import WebDesign from './webpages/WebDesign.js';
import WebDevelopment from './webpages/WebDevelopment.js';
import WebMaintaince from './webpages/WebMaintaince.js';
import WebMarketing from './webpages/WebMarketing.js';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Services from './components/Services.js';
import ContactPage from './Pages/ContactPage.js';




function App() {
  return (
    <>
      <Navbar />


      <Routes>
        <Route index element={<Home />} />
        {/* <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="add" element={<Add />} />
          <Route path="edit" element={<Edit />} /> */}
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="home" element={<Home />} />
        <Route path="java" element={<CoreJava />} />
        <Route path="j2ee" element={<J2EE />} />
        <Route path="manualtesting" element={<ManualTesting />} />
        <Route path="selenium" element={<Selenium />} />
        <Route path="soapui" element={<SoapUI />} />
        <Route path="htmltraining" element={<HtmlTraining />} />
        <Route path="js" element={<Javascript />} />
        <Route path="jquery" element={<Jquery />} />
        <Route path="css" element={<Css />} />
        <Route path="php" element={<Php />} />
        <Route path="oracle" element={<Oracle />} />
        <Route path="nettraining" element={<NetTraining />} />
        <Route path="andriodtraining" element={<AndroidTraining />} />
        <Route path="iOStraining" element={<IOSTraining />} />
        <Route path="objectiveC" element={<ObjectiveC />} />
        <Route path="ctraining" element={<CTraining />} />
        <Route path="unixshell" element={<UNIX />} />
        <Route path="perl" element={<PerlTraining />} />
        <Route path="seo" element={<SEO />} />
        <Route path="cmsapplication" element={<CMSApplication />} />
        <Route path="domainhosting" element={<DomainHoisting />} />
        <Route path="ecommerceapplication" element={<EcommerceApplication />} />
        <Route path="mobileapps" element={<MobileApps />} />
        <Route path="websitedesign" element={<WebDesign />} />
        <Route path="webdevelopment" element={<WebDevelopment />} />
        <Route path="webmaintenance" element={<WebMaintaince />} />
        <Route path="webmarketing" element={<WebMarketing />} />
        <Route path="services" element={<Services />} />
        <Route path="contactpage" element={<ContactPage />} />






        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>Page in Deveploment!</p>
            </main>
          }
        />

      </Routes>


      <Footer />
    </>
  );
}

export default App;
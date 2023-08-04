import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import EmailVerification from "./pages/Customer/signUp/Email/EmailVerification";
import MobileVerification from "./pages/Customer/signUp/Mobile/MobileVerification";
import 'bootstrap/dist/css/bootstrap.min.css';
import MobileLogin from "./pages/Customer/login/MobileLogin";
import EmailLogin from "./pages/Customer/login/EmailLogin";
import WarehouseDetails from "./pages/Customer/NewOrder/WarehouseDetails";
import SearchedLocations from "./pages/Customer/NewOrder/SearchedLocations";
import PartnerWarehouses from "./pages/Partner/PartnerWarehouses";
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
        <Route path="/signup/mobile" element={<MobileVerification/>}/>
        <Route path="/signup/email" element={<EmailVerification/>}/>
        <Route path="/login/customer/mobile" element={<MobileLogin/>}/>
        <Route path="/login/customer/email" element={<EmailLogin/>} />
        <Route path="/login/partner" element={<About/>}/>
        <Route path="/login/admin" element={<About/>}/>
        <Route path="/searchedlocations" element={<SearchedLocations/>}/>
        <Route path="/warehousedetails" element={<WarehouseDetails/>}/>
        <Route path="/partner" element={<PartnerWarehouses/>}/>
      </Routes>
      
    </BrowserRouter>
    </>
    
  );
}

export default App;

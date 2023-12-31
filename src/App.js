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
import CustomerWarehouseDetails from "./pages/Customer/NewOrder/CustomerWarehouseDetails";
import SearchedLocations from "./pages/Customer/NewOrder/SearchedLocations";
import PartnerWarehouses from "./pages/Partner/PartnerWarehouses/PartnerWarehouses";
import PartnerLogin from "./pages/Partner/PartnerLogin";
import PartnerOnboarding from "./pages/Admin/PartnerOnboarding/PartnerOnboarding";
import AdminLogin from "./pages/Admin/AdminLogin/AdminLogin";
import CustomerRegistration from "./pages/Customer/signUp/CustomerRegistration";
import MainScreen2 from "./pages/Customer/NewOrder/MainScreen2";
import CustomerMainScreen from "./pages/Customer/CustomerMainScreen/CustomerMainScreen";
import CustomerInventoryDashboard from "./pages/Customer/CustomerInventoryDashboard/CustomerInventoryDashboard";
import CustomerInventoryHistory from "./pages/Customer/CustomerInventoryHistory/CustomerInventoryHistory";
import PartnerMainScreen from "./pages/Partner/PartnerMainScreen/PartnerMainScreen";
import PartnerInventoryDashboard from "./pages/Partner/PartnerInventoryDashboard/PartnerInventoryDashboard";
import PartnerInventoryHistory from "./pages/Partner/PartnerInventoryHistory/PartnerInventoryHistory";
import AdminCustomerManagment from "./pages/Admin/AdminCustomerManagment/AdminCustomerManagment";
import AdminCustomerVerification from "./pages/Admin/AdminCustomerVerification/AdminCustomerVerification";
import AdminOrdersDashboard from "./pages/Admin/AdminOrdersDashboard/AdminOrdersDashboard";
import CustomerLayout from "./components/customer/CustomerLayout";
import PartnerLayout from './components/partner/PartnerLayout';
import MainScreen1 from "./components/MainScreen1";
import AddSensor from "./pages/Admin/AddSensor/AddSensor";
import UpdateSensor from "./pages/Admin/UpdateSensor/UpdateSensor";
import InventoryCreation from "./pages/Partner/InvetoryCreation/InventoryCreation";
import InventoryHistoryCreation from "./pages/Partner/InventoryHistoryCreation/InventoryHistoryCreation";
import AdminWarehouses from "./pages/Admin/AdminWarehouses/AdminWarehouses";
import AdminLayout from "./components/admin/AdminLayout";
import AddWarehouse from "./pages/Admin/AddWarehouse/AddWarehouse";
// import ButtonComponent from "./components/ButtonComponent";
// import PartnerWarehouseDetails from "./pages/Partner/PartnerWarehouseDetails/PartnerWarehouseDetails";
// import AdminWarehouseDetails from "./pages/Admin/AdminWarehouseDetails";
// import PartnerWarehouseDetails from "./pages/Partner/PartnerWarehouseDetails";
import UpdateWarehouseDetails from './pages/Admin/UpdateWarehouseDetails/UpdateWarehouseDetails';
import FacilityOnboarding from "./pages/Admin/FacillityOnboarding/FacilityOnboarding";
import AdminSensorDevices from "./pages/Admin/AdminSensorDevices/AdminSensorDevices";
import AdminWarehouseDetails from "./pages/Admin/AdminWarehouseDetails";
import PartnerWarehouseDetails from "./pages/Partner/PartnerWarehouseDetails/PartnerWarehouseDetails";
import CustomerOrderDetails from "./pages/Customer/CustomerOrderDetails/CustomerOrderDetails";
import PartnerOrderDetails from "./pages/Partner/PartnerOrderDetails/PartnerOrderDetails";
import AdminOrderDetails from "./pages/Admin/AdminOrderDetails/AdminOrderDetails";
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>

      {/* home page routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>

         {/* sign up, login and REGISTRATION for customer */}
        <Route path="/signup/mobile" element={<MobileVerification/>}/>
        <Route path="/signup/email" element={<EmailVerification/>}/>
        <Route path="/login/customer/mobile" element={<MobileLogin/>}/>
        <Route path="/login/customer/email" element={<EmailLogin/>} />
        <Route path="/customer/registration" element={<CustomerRegistration/>}/>
        
        {/* ------customer routes----- */}
        <Route path="/customer/" element={<CustomerLayout/>}>
          <Route path="mainscreen" element={<CustomerMainScreen/>}/>
          <Route path="order/details" element={<CustomerOrderDetails/>}/>
          <Route path="mainscreen1" element={<MainScreen1/>}/>
          <Route path="mainscreen2" element={<MainScreen2/>}/>
          <Route path="searchedlocations" element={<SearchedLocations/>}/>
          <Route path="warehouse/details" element={<CustomerWarehouseDetails/>}/>
          <Route path="inventory/dashboard" element={<CustomerInventoryDashboard/>}/>
          <Route path="inventory/history" element={<CustomerInventoryHistory/>}/>
          <Route path="*" element={<NoPage />} />
        </Route>

        <Route path="/login/partner" element={<PartnerLogin/>}/>

        {/* ----------partner routes------ */}
        <Route path="/partner/" element={<PartnerLayout/>}>

        <Route path="mainscreen" element={<PartnerMainScreen/>}/>
        <Route path="warehouses" element={<PartnerWarehouses/>}/>
        <Route path="warehouse/details" element={<PartnerWarehouseDetails/>}/>
  {/* pending      <Route path="sensordevices" element={<PartnerSensorDevices/>}/> */}
        <Route path="order/details" element={<PartnerOrderDetails/>}/>
        <Route path="inventory/dashboard" element={<PartnerInventoryDashboard/>}/>
        <Route path="inventory/history" element={<PartnerInventoryHistory/>}/>
        <Route path="inventory/creation" element={<InventoryCreation/>}/>
        <Route path="inventory/history/creation" element={<InventoryHistoryCreation/>}/>
       
        
        </Route>



        <Route path="/login/admin" element={<AdminLogin/>}/>
        
        {/* ---- admin routes------ */}   
        {/* ADMIN LAYOUT PENDING */}
        <Route path="/admin/" element={<AdminLayout/>}>

   {/* pending     <Route path="mainscreen" element={<AdminMainScreen/>}></Route> */}
        <Route path="warehouses" element={<AdminWarehouses/>}/>
        <Route path="/admin/warehouse/details" element={<AdminWarehouseDetails/>}/>
        <Route path="/admin/sensordevices" element={<AdminSensorDevices/>}/>
        <Route path="/admin/addwarehouse" element={<AddWarehouse/>}/>
        <Route path="/admin/updatewarehouse" element={<UpdateWarehouseDetails/>}/>
        <Route path="customer/management" element={<AdminCustomerManagment/>}/>
        <Route path="customer/verification" element={<AdminCustomerVerification/>}/>
        <Route path="orders/dashboard" element={<AdminOrdersDashboard/>}/>
        <Route path="/admin/order/details" element={<AdminOrderDetails/>}/>
        <Route path="partneronboarding" element={<PartnerOnboarding/>}/>
        <Route path="facilityonboarding" element={<FacilityOnboarding/>}/>
        <Route path="addsensor" element={<AddSensor/>}/>
        <Route path="updatesensor" element={<UpdateSensor/>}/>
        </Route>
        
        
        
        
        
        
        
        <Route path="/admin/customer/management" element={<AdminCustomerManagment/>}/>
        <Route path="/admin/customer/verification" element={<AdminCustomerVerification/>}/>
        <Route path="/admin/orders/dashboard" element={<AdminOrdersDashboard/>}/>
        
        
        {/* <Route path="/button" element={<ButtonComponent/>}/> */}
        
        
      




      </Routes>
      
    </BrowserRouter>
    </>
    
  );
}

export default App;

import React from "react";
import { Row,Col,Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import './CustomerInventoryDashboard.css';
import Table from 'react-bootstrap/Table';
import { inventorydetails } from "../CustomerMainScreen/orderdummydata";
import { useNavigate } from "react-router-dom";



let CustomerInventoryDashboard = () =>{
            const Navigate=useNavigate();
      function handleClick(){
         Navigate('/customer/inventory/history');
      }

    return(
        <>
          <Container className="mb-4">
          
              <Row>
                 <Row>
                    <Col xs={10} md={6} className="inventorydetailscoloumn mx-auto">Inventory DashBoard</Col>
                 </Row>
                 <div className="orderdetails bg-body-secondary rounded px-4">
                 <Row className="mt-3 ms-2">
                    <Col xs={12} md={6}> Order Id : 1</Col>     {/* data from database */}
                 </Row>
                 <Row className="mt-3 ms-2">
                    <Col xs={12} md={6}> Total Order Units : 250</Col>  {/* data from database */}
                    <Col xs={12} md={6}> Space Remaining for no.of Units: 70</Col>   {/* data from database */}
                 </Row>
                 

                 <Row className="mt-4">
                 
                 <Table striped="columns" bordered hover size="lg" variant="Secondary" className="shadow-lg" responsive>
      
                    <thead size="lg" className="fs-4" >
                      <tr>
                         <th >Inventory Id</th>
                         <th >Total no.of Units Belonging To Inventory</th>
                         <th >Balance Units In the Inventory</th>
                         <th >Batch Number</th>
                         <th > Arrived Date and Time</th>
                         <th> Ageing</th>
                         <th>Temperature Data</th>
                         <th >   </th>
                       </tr>
                    </thead>
                     <tbody className="center" size="lg">
                     { inventorydetails.map((val) =>(
                           <tr>
                            <><td>{val.inventoryid}</td>
                            <td>{val.totalunitsthatbelongtoinventory}</td>
                            <td>{val.balanceunitsintheinventory}</td>  
                            <td>{val.batchnumber}</td> 
                            <td>{val.ariveddatetime}</td> 
                            <td>{val.noofdaysfromarriveddate} days</td>
                            <td>{val.temperaturedata}</td>
                            <td> <Button onClick={handleClick} variant="danger">Inventory History</Button> </td> </>  
                            </tr>  ))} 
                        
                     </tbody>
                   </Table>
                   
                 </Row>
                 </div>
              </Row>
             
          </Container>   
         
        </>
    );
}
export default CustomerInventoryDashboard;
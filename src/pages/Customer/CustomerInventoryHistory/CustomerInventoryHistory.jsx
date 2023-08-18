import React from "react";
import { Row,Col,Container } from "react-bootstrap";
import './CustomerInventoryHistory.css';
import Table from 'react-bootstrap/Table';
import { inventoryhistory } from "../CustomerMainScreen/orderdummydata";


let CustomerInventoryHistory = () =>{
    return(
        <>
          <Container className="mb-4">
             
              <Row>
                 <Row>
                    <Col xs={10} md={6} xl={5} className="inventoryhistorycoloumn mx-auto">Inventory History</Col>
                 </Row>
                 <div className="bg-body-secondary mt-3">
                 <Row className="mt-3">
                     <Col xs={12} md={6} > <h4>Inventory Id :1 </h4></Col>    {/* from data base */}
                     <Col xs={12} md={6} > <h4>No Of Units Remaining In The Inventory: 30 </h4></Col>  {/* from data base */}
                 </Row>
                 <Row className="mt-4">
                 
                 <Table striped="columns" bordered hover size="lg" variant="Secondary" className="shadow-lg" responsive>
      
                    <thead size="lg" className="h5" >
                      <tr>
                         <th className="text-center">Inventoruy History Id</th>
                         <th className="text-center" >Units Before Dispatch</th>
                         <th className="text-center" >Units After Dispatch</th>
                         <th className="text-center" >Dispatch Date</th>
                         <th className="text-center" > Dispatch Time</th>
                         
                       </tr>
                    </thead>
                     <tbody className="center" size="lg">
                        { inventoryhistory.map((val) =>(
                           <tr>
                            <>
                            <td className="text-center">{val.inventoryhistoryid}</td>
                            <td className="text-center">{val.unitsbeforedispatch}</td>                         
                            <td className="text-center">{val.unitsafterdispatch}</td>  
                            <td className="text-center">{val.dispatcheddate}</td> 
                            <td className="text-center">{val.dispatchedtime}</td>  </>
                            </tr> 
                      ))}    
                     </tbody>
                   </Table>
                   
                 </Row>
                 </div>
              </Row>

          </Container>   

        </>
    );
}
export default CustomerInventoryHistory;
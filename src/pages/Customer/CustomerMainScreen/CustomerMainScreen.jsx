import React from "react";
import { Row,Col,Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import './CustomerMainScreen.css';
import Table from 'react-bootstrap/Table';
import {orderdetails} from './orderdummydata'

let CustomerMainScreen = () =>{
    return(
        <>
          <Container className="mb-5">
              <Row className="mt-3 mb-3">
               
                <Col xs={12} md={3} className="ms-auto">
                  <Button variant="warning" size="lg" className="placeaneworderbutton m-3 shadow-lg">Place a New Order</Button>
                </Col>
              </Row>

              <Row>
                 <Row >
                    <Col xs={12} md={6} className="yourorderscoloumn">Your Orders</Col>
                 </Row>
                 <Row className="mt-4">
                 
                 <Table striped="columns" bordered hover size="lg" variant="Secondary" className="shadow-lg" responsive>
      
                    <thead size="lg" className="h5" >
                      <tr>
                         <th className="text-center">Order Id</th>
                         <th className="text-center">Product Name</th>
                         <th className="text-center">Product Units</th>
                         <th className="text-center">Ordered Date</th>
                         <th className="text-center"> Order Status</th>
                         <th ></th>
                       </tr>
                    </thead>
                     <tbody className="center" size="lg">
                     { orderdetails.map((val) =>(
                           <tr>
                            <>
                            <td className="text-center">{val.orderid}</td>
                            <td className="text-center">{val.productname}</td>
                            <td className="text-center">{val.productunits}</td>  
                            <td className="text-center">{val.orderdate}</td> 
                            <td className="text-center">{val.ordersstatus}</td> 
                            <td className="text-center"> <Button variant="danger">More Details</Button> </td>
                            </>  
                            </tr> 
                       ))} 
                     </tbody>
                   </Table>
                   
                 </Row>
              </Row>

          </Container>   

        </>
    );
}
export default CustomerMainScreen;
import React, { useState } from "react";
import { Card, Container, FloatingLabel } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const MainScreen2 = ({ cityLocation }) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [productType, setProductType] = useState("Veg");
    const [productDetails, setProductDetails] = useState("");
    const [temperatureRange, setTemperatureRange] = useState("Dry");
    const [storageType, setStorageType] = useState("Pellates");
    const [uom, setUOM] = useState("Pellates");
    const [numberOfUnits, setNumberOfUnits] = useState("");
    const [duration, setDuration] = useState("");
  
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Form data to be displayed on the console
      const formData = {
        cityLocation,
        productType,
        productDetails,
        temperatureRange,
        storageType,
        uom,
        numberOfUnits,
        duration,
        selectedDate: selectedDate ? selectedDate.toLocaleDateString() : "",
      };
  
      console.log(formData);
  
      // Here you can perform any other actions with the form data, like sending it to a server, etc.
    };
  
    return (
      <>
     
       
        <div className="maindiv">
          <Container className="p-3">
            <Row>
              
              <Col xs={12} md={8} lg={6} className="m-auto">
                <Card className="shadow-lg" style={{borderRadius:20,backgroundColor:'whitesmoke'}}>
                  
                  <Card.Header className="p-2 mx-5 mt-4 mb-2" style={{ textAlign: "center", backgroundColor: "lightgrey", color: "black" }}>
                    <h4>Enter Product Details</h4>
                  </Card.Header>
                  
                  <Card.Body>
                    <Form onSubmit={handleSubmit}>
                      <Row className="p-3">
                      <Col xs={2}></Col>
                        <Col xs={12} md={8}>
                          <Form.Group>
                            <FloatingLabel controlId= "flotingInput" label="City Location"  className="mb-3">
                            <Form.Control type="text" placeholder="City Location" disabled readOnly value={cityLocation} size="lg" />
                            </FloatingLabel>
                          </Form.Group>
                        </Col>
                      </Row>
  
                      <Row className="p-3">
                      <Col xs={2}></Col>
                        <Col xs={12} md={8}>
                          <Form.Group className="mb-3">
                            <Form.Label><h5>Product Type</h5></Form.Label>
                            <Form.Select aria-label="Default select example" value={productType} onChange={(e) => setProductType(e.target.value)} size="lg">
                              <option value="Veg">Veg</option>
                              <option value="Non-Veg">Non-Veg</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                      </Row>
  
                      <Row className="p-3">
                      <Col xs={2}></Col>
                        <Col xs={12} md={8}>
                          <Form.Group>
                            <Form.Label><h5> Product Details:</h5></Form.Label>
                            <Form.Select aria-label="Default select example" value={productDetails} onChange={(e) => productDetails(e.target.value) } size="lg">
                              <option value="Product 1">Product 1</option>
                              <option value="Product 2">Product 2</option>
                              <option value="Product 3">Product 3</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                      </Row>
  
                      <Row className="p-3">
                      <Col xs={2}></Col>
                        <Col xs={12} md={8}>
                          <Form.Group className="mb-3">
                            <Form.Label><h5>Temperature Range :</h5></Form.Label>
                            <Form.Select aria-label="Default select example" value={temperatureRange} onChange={(e) => setTemperatureRange(e.target.value)} size="lg">
                              <option value="Dry">Dry</option>
                              <option value="Frozen">Frozen</option>
                              <option value="Chiller">Chiller</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                      </Row>
  
                      <Row className="p-3">
                      <Col xs={2}></Col>
                        <Col xs={12} md={8}>
                          <Form.Group className="mb-3">
                            <Form.Label><h5>Storage Type :</h5></Form.Label>
                            <Form.Select aria-label="Default select example" value={storageType} onChange={(e) => setStorageType(e.target.value)} size="lg">
                              <option value="Pellates">Pellates</option>
                              <option value="Floor Mezzanine">Floor Mezzanine</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                      </Row>
  
                      <Row className="p-3">
                      <Col xs={2}></Col>
                        <Col xs={12} md={8}>
                          <Form.Group className="mb-3">
                            <Form.Label><h5>UOM :</h5></Form.Label>
                            <Form.Select aria-label="Default select example" value={uom} onChange={(e) => setUOM(e.target.value)} size="lg">
                              <option value="Pellates">Pellates</option>
                              <option value="Tons">Tons</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                      </Row>
  
                      <Row className="p-3">
                      <Col xs={2}></Col>
                        <Col xs={12} md={8}>
                          <Form.Group>
                            <Form.Label><h5> Number Of Units:</h5></Form.Label>
                            <Form.Control type="number" placeholder="Enter the Number Of Units" value={numberOfUnits} onChange={(e) => setNumberOfUnits(e.target.value)} required  size="lg"/>
                          </Form.Group>
                        </Col>
                      </Row>
  
                      <Row className="p-3">
                      <Col xs={2}></Col>
                        <Col xs={12} md={8}>
                          <Form.Group>
                            <Form.Label><h5> Duration In Months:</h5></Form.Label>
                            <Form.Control type="number" placeholder="Enter the Number Of Months " value={duration} onChange={(e) => setDuration(e.target.value)} required size="lg" />
                          </Form.Group>
                        </Col>
                      </Row>
  
                      <Row className="p-3">
                      <Col xs={2}></Col>
                        <Col xs={12} md={8}>
                          <Form.Group className="mb-3" size="lg">
                            <Form.Label><h5>Possesion:</h5></Form.Label>
                            <br />
                            <DatePicker
                              selected={selectedDate}
                              onChange={handleDateChange}
                              dateFormat="dd/MM/yyyy"
                              placeholderText="Select a date"
                              required
                              
                            />
                          </Form.Group>
                        </Col>
                      </Row>
  
                      <div className="p-3">
                        <Row>
                          
                          <Col className="m-auto text-center">
                        <Button variant="primary" type="submit" className="submitbutton w-75">
                          Submit
                        </Button>
                        </Col>
                        </Row>
                      </div>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }

export default MainScreen2
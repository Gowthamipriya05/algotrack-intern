import React from 'react'
import { city } from '../dummyData'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './MainScreen1.css';

const MainScreen1 = () => {
  return (
    <>
       <div className='mainScreen1'>
       <div className='city-search'>
            <Form className="d-flex ms-auto search col-sm-6">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-4 ms-5"
              aria-label="Search"
            />
            <Button variant="dark">Search</Button>
          </Form>
       </div>
       

          <div className='container'>
          <div className='row g-3'>
          {city.map(val=>{
            return (
              <div className='col-6 col-md-4 col-lg-3'>
              <div  className='rounded text-center p-1 mainscreen-city-card'>
              <h2>{val.courseName}</h2>
                <img src={val.hoverCover} alt='monument'/>
                <h5>{val.course}</h5>
              </div>
              </div>
               

            )
           })}


          </div>
          
        </div>
       </div>
        
        
    </>
  )
}

export default MainScreen1
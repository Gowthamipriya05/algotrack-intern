import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./SearchedLocations.css";
import { Link } from 'react-router-dom';
import SearchBar from "../../../components/SearchBar";

const SearchedLocations = () => {
       
      const searchedLocationsData=[
        {
          img:'https://www.shutterstock.com/shutterstock/photos/1929800966/display_1500/stock-photo-interior-of-a-modern-warehouse-storage-of-retail-shop-with-pallet-truck-near-shelves-1929800966.jpg',
          warehouseName:'uncle warehouse',
          warehouseLocation:"Delhi",
          warehousePrice:'dho sav',
        },
        {
          img:'https://www.shutterstock.com/shutterstock/photos/1929800966/display_1500/stock-photo-interior-of-a-modern-warehouse-storage-of-retail-shop-with-pallet-truck-near-shelves-1929800966.jpg',
          warehouseName:'uncle warehouse',
          warehouseLocation:"Delhi",
          warehousePrice:'dho sav',
        },
        {
          img:'https://www.shutterstock.com/shutterstock/photos/1929800966/display_1500/stock-photo-interior-of-a-modern-warehouse-storage-of-retail-shop-with-pallet-truck-near-shelves-1929800966.jpg',
          warehouseName:'uncle warehouse',
          warehouseLocation:"Delhi",
          warehousePrice:'dho sav',
        },
        {
          img:'https://www.shutterstock.com/shutterstock/photos/1929800966/display_1500/stock-photo-interior-of-a-modern-warehouse-storage-of-retail-shop-with-pallet-truck-near-shelves-1929800966.jpg',
          warehouseName:'uncle warehouse',
          warehouseLocation:"Delhi",
          warehousePrice:'dho sav',
        }
      ]


  return (
    <>

       <div className="container">
       <SearchBar/>
        <div className="row g-2 bg-secondary rounded">

          
        { searchedLocationsData.map(item => {
          return(
          <div className="col-sm-12 col-lg-6 ">
            <Card style={{ width: '26rem' }} className="card shadow">
        <Card.Img variant="top" src={item.img} />
        <Card.Body>
          <Card.Text>
            Warehouse Name :{searchedLocationsData[0].warehouseName}
          </Card.Text>
          <Card.Text>
            Warehouse Location :
          </Card.Text>
          <Card.Text>
            Warehouse Price :
          </Card.Text>
          <div className="m-1"><Link to="/moredetails">
          <Button variant="secondary">Moredetails</Button>
          </Link></div>
          <div className="m-1"><Button variant="secondary">Submit</Button></div>
        </Card.Body>
      </Card>
          </div>
          )
        })}

    
        </div>
       </div>

     
       

    </>
  )
}

export default SearchedLocations
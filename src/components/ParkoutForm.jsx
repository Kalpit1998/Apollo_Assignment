import React, { useContext, useState } from "react";
import "../styles/parkoutForm.css";
import { VehicleContext } from "../context/vehicleContext";

import uniqueRandom from 'unique-random';

const random = uniqueRandom(1, 10);

export function Parkoutform(props) {
  const [number, setNumber] = useState("");
  // const [detail, setDetail] = useState({});

  const {handleDetail, detail} = useContext(VehicleContext);


// ************************************************************
// fetching vehicle data from database
// ***************************************************************


const handleForm = async (e) => {

    e.preventDefault()

    handleDetail([]);
    

    try {
      let data = await fetch(`https://apollo-parking-lot.herokuapp.com/parking?vehicle_number=${number}`);

      let res = await data.json();

      handleDetail(res);
    } 
    catch (error) {
      console.log(error,"vehicle not parked");
    }
    
}

  return (
    <>
      <div className="container">
        <form id="contact" onSubmit={handleForm}>
          <h3>VEHICLE DETAILS</h3>
          <fieldset>
            <label htmlFor="Vehicle_number">Vehicle Number</label>
            <input
              id="Vehicle_number"
              type="text"
              value={number}
              required
              placeholder="Enter vehicle number"
              onChange={(e) => setNumber(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <button type="submit">Submit</button>
          </fieldset>
        </form>
      </div>

        {detail.length == 0 ? <p>Detail Not Found</p> : <div id="out_wrapper">
          {detail.map((list, index) => {
            return(
              <ul>
              <li key={random()}><p>Vehicle Number:  {list.vehicle_number}</p> </li>
              <li key={random()}><p>Vehicle Type:  {list.vehicle_type}</p> </li>
              <li key={random()}><p>Parking Lot:  {list.parking_lot}</p> </li>
              <li key={random()}><p>Entry Timing: {list.in_time}</p></li>
              <li key={random()}><p>Out Timing: {new Date().toLocaleTimeString()}</p></li>
              {/* <li key={random()}><p>Amount To Be Paid: </p></li> */}
            </ul>
            )
            
          })}
        </div>}
      {/* <div id="detail_container">{detail.length != 0 ? console.log(detail) : console.log("empty")}</div> */}
    </>
  );
}

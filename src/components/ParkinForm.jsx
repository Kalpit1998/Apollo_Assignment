import React, {useState } from "react";
import "../styles/parkinForm.css";

export function ParkinForm(props) {
  const [number, setNumber] = useState("");
  const [type, setType] = useState("");
  const [lot, setLot] = useState("");


  //   *****************************************************
  // posting vehicle data to server
  // *******************************************************

  const handleForm = async (e) => {
    e.preventDefault();

    

    let res = await fetch(`https://apollo-parking-lot.herokuapp.com/parking`);
    res = await res.json();
    let two=1;
    res.map((el)=>{
      if(el.vehicle_number== number)
      {
        console.log(1);
        two=0;
        return;
      }
    })
    if(two===0){
      console.log(2)
      alert("Wrong Vehicle Detail, already available in our database")
      return;
    }
    const in_time = new Date().toLocaleTimeString();

    const data = {
      vehicle_number: number,
      vehicle_type: type,
      parking_lot: lot,
      in_time,
    };

    try{
      const res = await fetch("https://apollo-parking-lot.herokuapp.com/parking", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })

    // console.log(ans, "from data posting");

      alert("Vehicle parked successfully");
      setLot("");
      setNumber("");
      setType("");
    }
    catch(e){
      console.log(e, "from posting data");
    }
  };

  return (
    <>
      <div className="container">
        <form id="contact" action="" method="post" onSubmit={handleForm}>
          <h3>VEHICLE DETAILS</h3>
          <fieldset>
            <label htmlFor="Vehicle_number">Vehicle Number</label>
            <input
              id="Vehicle_number"
              type="text"
              value={number}
              required
              placeholder="Enter vehicle number"
              autoFocus
              onChange={(e) => setNumber(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="vehicle_type">Vehicle Type</label>
            <select
              name="vehicle_type"
              id="vehicle_type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="none"> Select vehicle type</option>
              <option value="bike"> 2-wheeler</option>
              <option value="hatchback"> Hatchback car</option>
              <option value="suv"> SUV car</option>
            </select>
          </fieldset>

          <fieldset>
            <label htmlFor="parking_lot">Parking Lot</label>
            <select
              name="parking_lot"
              id="parking_lot"
              value={lot}
              onChange={(e) => setLot(e.target.value)}
            >
              <option value="none">Select parking lot</option>
              <option value="lot-1">Lot-1</option>
              <option value="lot-2">Lot-2</option>
              <option value="lot-3">Lot-3</option>
            </select>
          </fieldset>

          <fieldset>
            <button type="submit">Submit</button>
          </fieldset>
        </form>
      </div>
    </>
  );
}

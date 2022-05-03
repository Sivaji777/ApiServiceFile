import axios from "axios";
import React from "react";
import { useEffect } from "react";
import Service from "./Service";

function AxiosLib() {
  const params = {
    pin: "524127",
  };
  useEffect(() => {
    /* normal using use effect ther is no async and awite */ 
    // const result = Service.getpinCode(params);
    // console.log(result, "ppppppppp");
    // pincodeApiFunction(params)
    userApiFunction()

  }, []);

  
  /*  using function and async and awite post methos */
  const pincodeApiFunction=async (params)=>{
    const data1=await Service.getpinCode(params)
    console.log(data1.data.data.District);
  }

  /*  using function and async and awite get methos */
  const userApiFunction=async ()=>{
    const data2=await Service.getUserData()
    console.log(data2);
  }

  return <div></div>;
}

export default AxiosLib;

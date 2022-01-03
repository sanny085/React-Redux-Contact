import React, {useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch , useSelector } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state);

 // const [store, setStore] = useState(contacts);

  const [reset, setRest] = useState(false);

//  useLayoutEffect(()=>{
//  dispatch({ type: "ADD_CONTACT", payload: store })
//  })
    useEffect(()=>{
   
      reset && dispatch({type:'RESET_CONTACT'}) 
     
    
  },[reset])
  return (
    <div className="col-md-12 bg-dark py-2">
      <nav className="navbar flex  bg-dark navbar-dark">
        <Link to={"/"} className="navbar-brand ml-5">
          React Redux Contact Book
        </Link>

        <button onClick={()=>setRest(!reset)}>Reset</button>
      </nav>
    </div>
  );
};

export default Navbar;

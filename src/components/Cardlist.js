import React from "react";
import Mycard from "../mycard";



const Cardlist = ({robots}) =>{
    const cardarray = robots.map((user,i) =>{
        return  <Mycard key={i}  id={robots[i].id}  name={robots[i].name}  email={robots[i].email}/>
    })
    
    
    return(
        <div> {cardarray}
        </div>
        
    );
}

export default Cardlist;
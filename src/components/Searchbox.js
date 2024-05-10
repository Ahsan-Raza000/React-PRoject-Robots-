import React from "react";



const Searchbox =({searchfield,searchchange})=>{
    return(
        <div className="pa2" >
            <input className="bg-lightest-blue" type='search' placeholder="search here " 
            onChange={searchchange}
            />
    
        </div>
);
}

export default Searchbox
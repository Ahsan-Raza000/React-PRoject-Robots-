import React from 'react';


const Mycard = (props) => {
    const {email,id} = props;
return(
    <div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
        <img alt="photo" src={'https://www.robohash.org/${id}'} />
        <div>
            <h2>{props.name}</h2>
            <p>{email}</p>
        </div>
    </div>
);
}


export default Mycard;
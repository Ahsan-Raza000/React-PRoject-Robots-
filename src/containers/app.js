import React,{useState,useEffect} from "react";
import Cardlist from "../components/Cardlist";
import Searchbox from "../components/Searchbox";
import Scroll from '../components/scroll';
import ErrorBoundary from '../components/Errorboundary'

import './app.css';





function App() {

    // constructor(){
    //     super()
    //     this.state={

    //         robots:[],
    //         searchfield:''
    //     }
    // }
    
const [robots,setrobots] = useState([])
const [searchfield, setsearchfield] = useState('')

    // componentDidMount(){
    //     fetch('https://jsonplaceholder.typicode.com/users ').then(response=>{
    //         return response.json();
    //     })
    // .then(users=> this.setState({robots:users}));

    // }
 
    //hooks here
useEffect(()=>{
    
        fetch('https://jsonplaceholder.typicode.com/users ').then(response=>{
            return response.json();
        })
    .then(users=> {setrobots(users)});

},[])

      const  onsearchchange =(event) =>{
       setsearchfield(event.target.value)
    }

        const filteredrobots= robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })

        if(robots.length==0){
            return <h1>Loading</h1>
        }
        else{
        return(
            <div className="tc">
                <h1> ROBOTS</h1>
                <Searchbox  searchchange={onsearchchange}/>
     <Scroll>   
        <ErrorBoundary><Cardlist robots={filteredrobots}/>    
        </ErrorBoundary>     </Scroll>           
              </div>
            );
        }
    




}
export default App;   
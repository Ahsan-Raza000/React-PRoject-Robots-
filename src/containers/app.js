 import React,{Component} from "react";
import Cardlist from "../components/Cardlist";
import Searchbox from "../components/Searchbox";
import Scroll from '../components/scroll';
import ErrorBoundary from '../components/Errorboundary'

import './app.css';








class app extends Component{

    constructor(){
        super()
        this.state={

            robots:[],
            searchfield:''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users ').then(response=>{
            return response.json();
        })
    .then(users=> this.setState({robots:users}));

    }


    onsearchchange =(event) =>{
        this.setState({searchfield: event.target.value})
        
  

    }
    render(){

        const filteredrobots= this.state.robots.filter(robot=>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        if(this.state.robots.length==0){
            return <h1>Loading</h1>
        }
        else{
        return(
            <div className="tc">
                <h1> ROBOTS</h1>
                <Searchbox  searchchange={this.onsearchchange}/>
     <Scroll>   
        <ErrorBoundary><Cardlist robots={filteredrobots}/>    
        </ErrorBoundary>     </Scroll>           
              </div>
            );
        }
    }




}
export default app;   
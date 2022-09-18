import React, { Component } from 'react'

export class Form extends Component {

       constructor(){
           super();
           this.state={
               name : "",
               name1 : "",
               total : 0
           }
       }
          handlename = (e)=>{
             this.setState({
                name : e.target.value
             })
              
          }
          handlename1 = (e)=>{
            this.setState({
               name1 : e.target.value
            })
        }
          handleform = (e)=>{
               this.setState({
                 total : parseInt(this.state.name) + parseInt(this.state.name1)
               })
          }
  render() {
    return (
      <div>
        <form onSubmit={this.handleform}> 
        <>
                 Enter name : <input type ="text" value ={this.state.name} onChange={this.handlename}/> <br></br>
            </>
            <>
                 Enter name : <input type ="text" value ={this.state.name1} onChange={this.handlename1}/> <br></br>
            </>
           

            <>
                <button type="submit">Submit</button>
            </>
        </form>
                {this.state.total}
          
      </div>
    )
  }
}

export default Form
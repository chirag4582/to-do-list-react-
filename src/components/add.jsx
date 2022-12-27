import React, { Component } from 'react'

class add extends Component {

  constructor(){
    super();
    this.state={
      text:'',
      List:[]
    }
    // this.changeHandler=this.changeHandler.bind(this)
  }

  changeHandler=(e)=>{
    this.setState({text:e.target.value})
  }

  Add(e){
    // e.preventDefault();
    this.setState({
      text:'',
    List:[...this.state.List,this.state.text],

  })
  } 

  delete(index){
    let listValue = [...this.state.List,this.state.text]
    listValue.splice(index,1)
    this.setState({
      text:'',
      List:listValue,
      
    })
  }

  edit(index){
    const editList = [...this.state.List,this.state.text] ;
    const promptVar = prompt("edit");
    editList.splice(index,1,promptVar);
    this.setState({
      List:editList
    })
  }

  render() {
    return (
      <div id='container'>
        <div>
        <input value={this.state.text} onChange={this.changeHandler} />
        <button onClick={(parameter)=>this.Add(parameter)}>ADD</button>
        <div>
          <ul>
              {this.state.List.map((e,index)=>{
                if(e){
                  return(
                    
                    <div style={{display:'flex',justifyContent:'center'}}>
                      <div style={{display:'flex',justifyContent:'space-around'}}>
                        <li style={{marginLeft:'5px'}}>
                          {e}
                        </li>
                        <button onClick={()=>this.delete(index)}>
                          delete
                        </button>
                        <button onClick={()=>this.edit(index)} >
                          EDIT
                        </button>
                      </div>
                    </div>
                    
              )
                  }
                
              })}
          </ul>
        </div>
      </div>
      </div>
    )
  }
}

export default add

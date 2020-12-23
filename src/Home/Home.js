import React from 'react'
 class  Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            x:1
        }
    }
    add(){
        this.setState({
            x:this.state.x+1
        });
    }
    fun1(data){
        console.log(data);
    }
    render(){
        return(
            <div>
                <button onClick={this.add.bind(this)}>add</button>
                <button onClick={ev=>{this.add(ev)}}>123</button>
                <button onClick={this.fun1(1)}></button>
                <button onClick={this.fun1.bind(this,1)}>按钮1</button>
                {this.state.x}
            </div>
        )
    }
}
export default Home;
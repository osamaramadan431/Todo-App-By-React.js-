import React, {Component} from "react";
import Todoitems from "./Components/Todoitems/Todoitems";
import Additems from "./Components/Additems/Additems";
class App extends Component {
    state = {
        items:[
            {id:1, name:"osama", age:39},
            {id:2, name:"Zeinab", age:34},
            {id:3, name:"Leen", age:8},
            {id:4, name:"Youssef", age:4},
        ]
    }

    deleteItem = (id) => {
        let items = this.state.items.filter(item => {
            return item.id !== id; // ترجع فقط العناصر التي لا تساوي id
        });
    
        this.setState({ items }); // تحديث حالة state بالعناصر الجديدة
    }
    
    addItem = (item)=> {
        item.id =Math.random()
        let items =this.state.items
        items.push(item ) 
        this.setState({items})
    }

    render() {
        return(
            <div className="container">
                <div className="text-title">
                <h2>Todo App<sup><span>"By Osama"</span></sup></h2> 
                
                </div>
                <Todoitems items={this.state.items} deleteItem={this.deleteItem}/> 
                <Additems  addItem={this.addItem}/> 
            </div>
        )
    }
}

export default App
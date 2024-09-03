import React, {Component} from "react";


class Additems extends Component {
    state = {
        name: "",
        age: ""
    }
    handleChang = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
handleSubmit = (e) => {
    e.preventDefault()
    if (e.target.name.value === "" && e.target.name.value === "") {
        return false
    }else {
        this.props.addItem(this.state)
    this.setState({
        name:'',
        age:''
    })
    }
}

     render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Your Name.." id="name" onChange={this.handleChang} value={this.state.name} />
                    <input type="number" placeholder="Your age.." id="age" onChange={this.handleChang} value={this.state.age}/>
                    <input type="submit" value="Add" />
                </form>
            </div>
        )

     }
}
export default Additems
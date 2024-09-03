import React from "react"


const Todoitems = (props) =>{
    const {items, deleteItem} =props;
    const length = items.length
    const listItems = length ? (
        items.map( (item) => {
            return (
                <div key={item.id} className="content">
                    <span className="name">{item.name}</span>
                    <span className="age">{item.age}</span>
                    <span className="aciton icon" onClick={() => deleteItem(item.id)}>&times;</span>
    
                </div>
            )
        })
    ) : (
        <p>There is No items here</p>
    )

    return (
        <div className="list-items">
            <div >
                <span className="name title">Name</span>
                <span className="age title">Age</span>
                <span className="action title">Action</span>
            </div>
            {listItems}
        </div>
    )
}

export default Todoitems
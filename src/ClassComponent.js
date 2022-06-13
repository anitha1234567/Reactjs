import React from 'react'

class ClassComponent extends React.Component {
    state = {
        myname: "Anitha",
        phone: 1234,
        employees: ["ravi", "siva", "ramu", "Teja"]
    }
    render() {
        console.log(this.state)
        return (
            <div>
                <h1>This is my class component</h1>
                <p>{this.props.name} {this.props.children}</p>
                <h2>state value in react</h2>
                <p>{this.state.myname} {this.state.phone}</p>
                <h1>Arrays in react</h1>
                <p>{this.state.employees[0]}</p>
                <p>{this.state.employees[1]}</p>
                <p>{this.state.employees[2]}</p>
                <p>{this.state.employees[3]}</p>
            </div>
        )
    }

}
export default ClassComponent;
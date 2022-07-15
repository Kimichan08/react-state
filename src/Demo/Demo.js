import React from "react";
import clsx from "clsx";
import style from '../demo.module.css'
import { keyboard } from "@testing-library/user-event/dist/keyboard";

class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Student:[
                {name: 'Lisa', status: false}
            ],
            item:'',
            check: -1
        }
    }

    getValue(e){
        this.setState({ item: e.target.value})
    }

    demo(e){
        let list = this.state.Student;
        list.push({name: this.state.item, status: Boolean(Math.round(Math.random())) })
        this.setState({
            Student: list
        })
    }

    updateName(e){
        let list = this.state.Student
        list.find((item,index)=>{
            return index == this.state.check
        }).name = this.state.item;
        this.setState({
            Student: list,
            check: -1
        })
    }

    delete(e,index){
        let list = this.state.Student;
        list.splice(index,1)
        this.setState({
            Student: list
        })
    }
    render() { 
        return ( 
            <>
                <input onChange={(e) => this.getValue(e)} type="text"/>
                <button onClick={(e) => this.demo(e)}>+</button>
                <table className="table" border={1}>
                    <thead>
                        <tr>
                            <td></td>
                            <td>STT</td>
                            <td>Ten</td>
                            <td>Trang thai</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </thead>
                    {
                        this.state.Student.map((item,index) =>{
                            return(
                                <tbody>
                                    <tr>
                                        <td> <input type="checkbox"/></td>
                                        <td>{index +1}</td>
                                        {(this.state.check == index)?
                                        <td><input defaultValue={item.name} onChange={(e) => this.getValue(e)} onBlur={(e) => this.updateName(e)} type="text"/></td>
                                        :
                                        <td className="red">{item.name}</td>
                                    }

                                    <td><button onClick={(e) => this.updateName(e,index)} className="c">Update</button></td>
                                    <td className={(item.status) ? style.green : style.red}>•</td>
                                    <td><button onClick={(e) => this.delete(e,index)} className="c">Delete</button></td>
                                    </tr>
                                </tbody>
                            )
                        }) 
                    }
                </table>
            </>
         );
    }
}
 
export default Demo;
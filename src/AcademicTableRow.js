import React, { Component } from "react";

export class AcademicTableRow extends Component {

    render() {
        let p = this.props.product;
        return <tr>
            <td>{p.id}</td>
            <td>{p.description}</td>
            <td>{p.semester}</td>
            <td>{p.prefix}</td>
            <td>{p.number}</td>
            <td>{p.grade}</td>
            
            <td>
                <button className="btn btn-sm btn-warning m-1"
                    onClick={ () => this.props.editCallback(p) }>
                        Edit
                </button> 
                <button className="btn btn-sm btn-danger m-1"
                    onClick={ () => this.props.deleteCallback(p) }>
                        Delete
                    </button>                  
            </td>
        </tr>
    }
}

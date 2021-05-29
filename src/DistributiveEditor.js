import React, { Component } from "react";

export class DistributiveEditor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formData: {
                id: props.supplier.id || "",
                description: props.supplier.description || "", 
                semester: props.supplier.semester || "", 
                prefix: props.supplier.prefix || "",
                number: props.supplier.number || "",
                grade: props.supplier.grade || ""
            }
        }
    }

    handleChange = (ev) => {
        ev.persist();
        this.setState(state => 
            state.formData[ev.target.name] =  
                ev.target.name === "courses" 
                    ? ev.target.value.split(",") : ev.target.value);
    }

    handleClick = () => {
        this.props.saveCallback(this.state.formData);        
    }

    render() {
        return <div className="m-2">
            <div className="form-group">
                <label>ID</label>
                <input className="form-control" name="id"
                    disabled
                    value={ this.state.formData.id }
                    onChange={ this.handleChange } />
            </div>
            <div className="form-group">
                <label>Description</label>
                <input className="form-control" name="description"
                    value={ this.state.formData.description }
                    onChange={ this.handleChange } />
            </div>       
            <div className="form-group">
                <label>Semester</label>
                <input className="form-control" name="semester"
                    value={ this.state.formData.semester }
                    onChange={ this.handleChange } />
            </div>       

            <div className="form-group">
                <label>Prefix</label>
                <input className="form-control" name="prefix"
                    value={ this.state.formData.prefix }
                    onChange={ this.handleChange } />
            </div>  

            <div className="form-group">
                <label>Number</label>
                <input className="form-control" name="number"
                    value={ this.state.formData.number }
                    onChange={ this.handleChange } />
            </div>   

            <div className="form-group">
                <label>Grade</label>
                <input className="form-control" name="grade"
                    value={ this.state.formData.grade }
                    onChange={ this.handleChange } />
            </div>                    

            <div className="text-center">
                <button className="btn btn-primary m-1" onClick={ this.handleClick }>
                    Save
                </button>
                <button className="btn btn-secondary" 
                        onClick={ this.props.cancelCallback }>
                    Cancel
                </button>                
            </div>
        </div>
    }
}

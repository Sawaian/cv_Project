import React, { Component } from "react";
import uniqid from "uniqid";

class GeneralInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            generalInfo: { name: 'Mar', email: 'ma', phone: '616161' },
            infoArray: [],
            edit: false,
        }
    }

    handleChange = (e) => {
        this.setState({
            generalInfo: { ...this.state.generalInfo, [e.target.name]: e.target.value, }
        })
    }

    onSubmitInfo = (e) => {
        e.preventDefault()
        console.log("Onsubmit")
        this.setState({
            infoArray: [...this.state.infoArray, this.state.generalInfo],
            generalInfo:  {
                id: uniqid(),
                schoolName: '',
                major: '',
                years: '',
              }
        })
        this.handleEdit()
    }

    handleDisplay = (e) => {
        this.setState({
            edit: false,
        })
    }

    handleEdit = (e) => {
        this.setState({
            edit: true
        })
    }


    render() {
        const { generalInfo, infoArray, edit } = this.state;

        if (edit) {
            return (
                <div>
                    <button className="editButton" onClick={this.handleDisplay}> Edit </button>
                    {
                        infoArray.map((info) => (
                            <div id={info.id}>
                                <p>Name: {info.name}</p>
                                <p>Email: {info.email}</p>
                                <p>Phone: {info.phone}</p>
                            </div>
                        ))
                    }
                </div>
            )
        }
        else {
            return (
                <div>
                    <form type="submit" className="form-active" onSubmit={this.onSubmitInfo}>
                        <label htmlFor="nameInput" > Name </label>
                        <input
                            className="inputField"
                            placeholder="Name"
                            onChange={this.handleChange}
                            value={generalInfo.name}
                            type="text"
                            name="name"
                            required
                        />
                        <label htmlFor="emailInput"> Email </label>
                        <input
                            className="inputField"
                            onChange={this.handleChange}
                            value={generalInfo.email}
                            type="text"
                            name="email"
                            required
                        />
                        <label htmlFor="phoneInput"> Phone </label>
                        <input
                            className="inputField"
                            onChange={this.handleChange}
                            value={generalInfo.phone}
                            type="number"
                            name="phone"
                        />
                        <button type="submit">Add info</button>
                    </form>
                </div>
            )
        }
    }
}
export default GeneralInfo
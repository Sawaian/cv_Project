import React, { Component } from "react";

class GeneralInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            generalInfo: { name: 'Mar', email: 'ma', phone: 'lake' },
            infoArray: [],
            edit: false,
        }
    }

    handleChange = (e) => {
        this.setState({
            generalInfo: { ...this.state.generalInfo, [e.target.name]: e.target.value, }
        })
    }


    render() {
        const { generalInfo, infoArray, edit } = this.state;

        if (edit) {
            return (
                <div>
                    <button className="editButton" onClick={this.handleEdit}> Edit </button>
                    {
                        infoArray.map((info) => (
                            <div id={info.id}>
                                <p>{info.name}</p>
                                <p>{info.email}</p>
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
                        />
                        <label htmlFor="emailInput"> Email </label>
                        <input
                            className="inputField"
                            onChange={this.handleChange}
                            value={generalInfo.email}
                            type="text"
                            name="email"
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
import React, { Component } from "react";
import uniqid from "uniqid";

class Education extends Component {
    constructor() {
        super()

        this.state = {
            education: {
                schoolName: 'Drizzt Uni',
                major: "Fantasy",
                dateOfStudy: '2015',
            },
            infoArray: [],
            edit: false,
        }


    }

    handleChange = (e) => {
        this.setState({
            education: {...this.state.education, [e.target.name]: e.target.value}
        }
        )
    }

    onSubmitInfo = (e) => {
        e.preventDefault();
        this.setState({
            infoArray: [...this.state.infoArray, this.state.infoArray ],
            education: {
                schoolName: 'Drizzt Uni',
                major: 'Fantasy',
                dateOfStudy: '2015',
            },   
        })
        this.handleEdit()
    }

    handleEdit(){
        this.setState({
            edit: true,
        })
    }

    handleDisplay(){
        this.setState({
            edit: false,
        })
    }

    render() {

        const { education, edit } = this.state;
        if (edit) {
            return (
                <div>
                    {education.map((info => (
                    <div><p>{info.schoolName}</p>
                    <p>{info.major}</p>
                    <p>{info.dateOfStudy}</p>
                    </div>
                    )
                    )
                    )
                    }
                </div>
            )
        }
        else {
            return(
                <div>
                <form className="EDU" onSubmit={this.onSubmitInfo}>
                    <div>
                        <label className="school"> School </label>
                        <input
                        className="schoolInput"
                        onChange={education.schoolName}
                        placeholder = "School Name"
                        value = "text"
                        name = "schoolName"
                        required
                        />
                    </div>
                </form>
                </div>
            )
        }
    }
}
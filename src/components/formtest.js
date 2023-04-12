import React from "react";
import axios from "axios";

const client = axios.create({
    baseURL: "https://localhost:7035/api/",
    header: { "X-Custom-Header": "foobar" }
})

class FormTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            number: '',
            message: ''
        };
    }

    onCreateForm = async () => {
        let formInfo = {
            name: this.refs.Name.value,
            email: this.refs.Email.value,
            mobileNumber: this.refs.Number.value
        };
        try {
            await client.post(`Reviews/test-form`, formInfo)
                .then((response) => {
                var data = response.data;
                this.setState({
                    name: data.name,
                    email: data.email,
                    number: data.mobileNumber,
                    message: JSON.stringify(data),
                })
            });
        } catch (error) {
            this.setState({ message: error.toString() });
        }
    }

    render() {
        return (
            <div>
                <h2>Please Enter Form Details...</h2>
                <p>
                    <label>Form Name : <input type="text" ref="Name"></input></label>
                </p>
                <p>
                    <label>Form Email : <input type="text" ref="Email"></input></label>
                </p>
                <p>
                    <label>Form Number : <input type="text" ref="Number"></input></label>
                </p>
                <button onClick={this.onCreateForm}>Create</button>
                <p>{this.state.message}</p>
            </div>
        );
    }
}
export default FormTest;
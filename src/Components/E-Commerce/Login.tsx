import { TextField, Typography, Box, Button } from '@mui/material'
import React, { Component } from 'react'
interface state {
    username: string;
    email: string;
    password: string;
    submittedData: { username: string; email: string; password: string }[];
    // error: { username: string; email: string; password: string }[];
}
export default class Login extends Component<{}, state> {
    constructor(props: {}) {
        super(props)
        this.state = {
            username: "",
            email: "",
            password: "",
            submittedData: [],
            error: {},
        }
    }
    componentDidMount() {
        const retrivedData = localStorage.getItem('submittedData',);
        console.log("Retrived from Local Storage", retrivedData)
        if (retrivedData) {
            this.setState({
                submittedData: JSON.parse(retrivedData)
            });
        }
    }
    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { username, email, password, submittedData } = this.state;
        const retrived = [...submittedData, { username, email, password }]
        this.setState({
            submittedData: retrived,
            username: "", email: "", password: "",
        })
        localStorage.setItem("submittedData", JSON.stringify(retrived));
        if (!e.target.value) {
            // setError()
        }

    }
    formvalidation = () => {
        const { submittedData } = this.state;
        // const error: 
    }
    render() {
        const { submittedData } = this.state
        return (
            <>
                <Box sx={{ display: "grid" }}>
                    <form onSubmit={this.handleSubmit}>
                        <Typography>LogIn</Typography>
                        <TextField
                            name='username'
                            label="Enter Your Name"
                            variant="outlined"
                            fullWidth margin='normal'
                            onChange={(e) => this.setState({ username: e.target.value })}
                            value={this.state.username}
                        />
                        <TextField
                            label="Enter Your Email"
                            variant="outlined"
                            fullWidth margin='normal'
                            onChange={(e) => this.setState({ email: e.target.value })}
                            value={this.state.email}
                        />
                        <TextField
                            name='password'
                            label="Enter Your Password"
                            variant="outlined"
                            fullWidth margin='normal'
                            onChange={(e) => this.setState({ password: e.target.value })}
                            value={this.state.password}
                        />
                        <Button variant="contained" type='submit'>Login</Button>
                    </form>

                    <div>
                        {submittedData.map((data, index) => (
                            <ul key={index}>
                                <li>Username: {data.username}</li>
                                <li>Email: {data.email}</li>
                                <li>Password: {data.password}</li>
                            </ul>
                        ))}
                    </div>

                </Box>



            </>

        )
    }
}

import { TextField, Typography, Box, Button } from '@mui/material'
import React, { Component } from 'react'
interface state {
    username: string;
    email: string;
    password: string;
}
export default class Login extends Component<{}, state> {
    constructor(props: {}) {
        super(props)
        this.state = {
            username: "",
            email: "",
            password: ""
        }
    }

    handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("submit")
    }

    handleChange = () => {
        console.log("onchange")
    }
    render() {
        const { handleSubmit, handleChange } = this
        return (
            <>
                <Box sx={{ display: "grid" }}>
                    <form onSubmit={handleSubmit}>
                        <Typography>LogIn</Typography>
                        <TextField
                            name='username'
                            label="Enter Your Name"
                            variant="outlined"
                            fullWidth margin='normal'
                            onChange={handleChange}
                        />
                        <TextField
                            name='email'
                            label="Enter Your Email"
                            variant="outlined"
                            fullWidth margin='normal'

                        />
                        <TextField
                            name='password'
                            label="Enter Your Password"
                            variant="outlined"
                            fullWidth margin='normal'

                        />
                        <Button variant="contained">Login</Button>
                    </form>

                </Box>

            </>

        )
    }
}

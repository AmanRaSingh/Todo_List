import React, { Component } from 'react'

import { Box, TextField, Typography, Button, ListItem, ListItemText } from '@mui/material'

interface states {
    textfield: string;
    listdata: string[];
}

export default class DataList extends Component<{}, states> {
    constructor(props: {}) {
        super(props);
        this.state = {
            textfield: "", listdata: []
        };
    }

    handleAdd = () => {
        const { textfield, listdata } = this.state;
        console.log(textfield)
        this.setState({ listdata: [...listdata, textfield], textfield: "" }, () => {
            console.log(listdata)

        })
    }

    handleDelete = () => {
        // this.state.textfield()
    }
    render() {


        return (
            <>
                <Box>
                    <Typography>Todo List</Typography>

                    <TextField value={this.state.textfield} onChange={(e) => this.setState({ textfield: e.target.value })} />

                    <Button variant="contained" onClick={this.handleAdd}>Add</Button>


                    <ListItem>
                        {this.state.listdata.map((index, item) => (
                            <ListItemText key={item}>{index}
                                <Button variant='contained' onClick={this.handleDelete}>Delete</Button>
                            </ListItemText>

                        ))}




                    </ListItem>
                </Box>
            </>
        )
    }
}

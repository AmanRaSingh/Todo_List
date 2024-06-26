import React, { Component } from 'react'

import { Box, TextField, Typography, Button, ListItem, ListItemText } from '@mui/material'

interface states {
    textfield: string;
    listdata: string[];
    edit: boolean;
    newText: number | null
}

export default class DataList extends Component<{}, states> {
    constructor(props: {}) {
        super(props);
        this.state = {
            textfield: "", listdata: [], edit: false, newText: null
        };
    }

    handleAdd = () => {
        const { textfield, listdata } = this.state;
        console.log(textfield)
        this.setState({ listdata: [...listdata, textfield], textfield: "" }, () => {
            console.log(listdata)
        })
    }

    handleDelete = (index: number) => {
        const updateList = this.state.listdata.filter((_, aman) => aman !== index)
        this.setState({ listdata: updateList })

    }
    handleEdit = (index: number) => {
        console.log("edit");
        this.setState({
            edit: true,
            textfield: this.state.listdata[index],
            newText: index

        })
    }
    handleUpdate = () => {
        console.log("update");

        const { textfield, listdata, newText } = this.state;
        if (newText !== null) {
            const updateData = listdata.map((item, index) =>
                index == newText ? textfield : item
            );
            this.setState({
                textfield: "",
                listdata: updateData,
                edit: false,
                newText: null
            })
        }

    }
    render() {
        const { edit } = this.state;

        return (
            <>
                <Box sx={{display:"grid",justifyContent:"center",alignItems:"center"}}>
                    <Typography sx={{fontSize:"3rem"}}>Todo List</Typography>

                    <TextField value={this.state.textfield} onChange={(e) => this.setState({ textfield: e.target.value })} />
                        
                    {edit ? (<Button variant="contained" onClick={this.handleUpdate}>Update</Button>) : (<Button variant="contained" onClick={this.handleAdd}>Add</Button>
                    )}

                    <Box sx={{ display: "grid" }}>
                        {this.state.listdata.map((data, index) => (
                            <ListItemText key={index} sx={{
                                width: "100%",
                                border: "2px solid red",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                padding: "8px",
                            }}
                            ><Typography sx={{fontSize:"1.5rem"}}>{data}</Typography>
                                <Box sx={{display:"flex",gap:"5rem"}}>
                                    <Button variant='contained' onClick={() => this.handleDelete(index)}>Delete</Button>

                                    <Button variant='contained' onClick={() => this.handleEdit(index)}>Edit</Button>

                                </Box>

                            </ListItemText>

                        ))}

                    </Box>
                </Box>
            </>
        )
    }
}



// import React, { Component } from 'react';
// import { Box, TextField, Typography, Button, ListItem, ListItemText } from '@mui/material';

// interface states {
//     textfield: string;
//     listdata: string[];
//     isEditing: boolean;
//     currentIndex: number | null;
// }

// export default class DataList extends Component<{}, states> {
//     constructor(props: {}) {
//         super(props);
//         this.state = {
//             textfield: "",
//             listdata: [],
//             isEditing: false,
//             currentIndex: null
//         };
//     }

//     handleAdd = () => {
//         const { textfield, listdata } = this.state;
//         this.setState({ listdata: [...listdata, textfield], textfield: "" });
//     }

//     handleDelete = (index: number) => {
//         const updateList = this.state.listdata.filter((_, aman) => aman !== index);
//         this.setState({ listdata: updateList });
//     }

//     handleEdit = (index: number) => {
//         this.setState({
//             isEditing: true,
//             currentIndex: index,
//             textfield: this.state.listdata[index]
//         });
//     }

//     handleUpdate = () => {
//         const { listdata, currentIndex, textfield } = this.state;
//         if (currentIndex !== null) {
//             const updatedList = listdata.map((item, index) =>
//                 index === currentIndex ? textfield : item
//             );
//             this.setState({
//                 listdata: updatedList,
//                 isEditing: false,
//                 currentIndex: null,
//                 textfield: ""
//             });
//         }
//     }

//     render() {
//         return (
//             <>
//                 <Box>
//                     <Typography>Todo List</Typography>

//                     <TextField
//                         value={this.state.textfield}
//                         onChange={(e) => this.setState({ textfield: e.target.value })}
//                     />

//                     {this.state.isEditing ? (
//                         <Button variant="contained" onClick={this.handleUpdate}>Update</Button>
//                     ) : (
//                         <Button variant="contained" onClick={this.handleAdd}>Add</Button>
//                     )}

//                     <ListItem sx={{ display: "grid" }}>
//                         {this.state.listdata.map((data, index) => (
//                             <ListItemText key={index}>
//                                 {data}
//                                 <Button variant='contained' onClick={() => this.handleDelete(index)}>Delete</Button>
//                                 <Button variant='contained' onClick={() => this.handleEdit(index)}>Edit</Button>
//                             </ListItemText>
//                         ))}
//                     </ListItem>
//                 </Box>
//             </>
//         )
//     }
// }

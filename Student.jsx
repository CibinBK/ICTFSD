import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState,useEffect } from 'react'
import SignIn from './SignIn';

const Student = () => {
    var [update,setUpdate] = useState(false);
    var [singleValue,setSingleValue] = useState([]);
    var [students,setStudents] = useState([]);
    useEffect(() =>{
        axios.get("http://localhost:3030/see")
        .then((response)=>{
            setStudents(response.data);
            console.log(response.data)
        })
        .catch()
    },[])

    const deleteValue = (id)=>{
        console.log("Delete id is:"+id);
        axios.delete("http://localhost:3030/delete/"+id)
        .then((response)=>{
            alert("Deleted")
            window.location.reload(false)
        })
        .catch((err)=>console.log(err))
    }

    const updateValue = (value)=>{
        setSingleValue(value)
        setUpdate(true)
    }
    
    var finalJSX = <div>
    <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell style={{color:'skyblue',backgroundColor:'black',fontFamily:'LucidaSans',fontSize:"30px"}}>Name</TableCell>
                    <TableCell style={{color:'skyblue',backgroundColor:'black',fontFamily:'LucidaSans',fontSize:"30px"}}>Grade</TableCell>
                    <TableCell style={{color:'skyblue',backgroundColor:'black',fontFamily:'LucidaSans',fontSize:"30px"}}>Delete</TableCell>
                    <TableCell style={{color:'skyblue',backgroundColor:'black',fontFamily:'LucidaSans',fontSize:"30px"}}>Update</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {students.map((value,index)=>{
                    return(
                        <TableRow key={index}>
                            <TableCell>{value.sname}</TableCell>
                            <TableCell>{value.sgrade}</TableCell>
                            <TableCell><Button variant='standard' onClick={()=>deleteValue(value._id)}>Delete</Button></TableCell>
                            <TableCell><Button variant='standard' onClick={()=>updateValue(value)}>Update</Button></TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    </TableContainer>
</div>
if(update){
    finalJSX=<SignIn data={singleValue} method="put"/>
}
  return (
    finalJSX
  )
}

export default Student
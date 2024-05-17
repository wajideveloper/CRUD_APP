

// import { Button, Table } from '@mui/material'
import React from 'react'
import { Link} from 'react-router-dom'
import { userList } from './Data'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser } from './UserReducer'

import { Button,Table } from '@mui/material'

// "include": ["src", "./setupTest.js"]

// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

const Home = () => {
    const users = useSelector((state)=> state.users);
    const dispatch = useDispatch();
    // const navigate = useNavigate();

    const handleDelete=(id)=>{
        dispatch(deleteUser({id:id}));
    }


  return (
    <div className='container'>
        <h2>Crud application</h2> 
        <Link to='/create' className='btn btn-success my-3'>Create +</Link>
        <Link style={{boxSizing:'border-box', margin:'5px'}}  to='/loginPage' className='btn btn-success my-3'>GO To LoginPage</Link>
        <Table>
            <thead>
                <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user,index)=>{
                        return(
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>

                                <td>
                                <Link to={`/edit/${user.id}`} className='btn btn-sm btn-primary'> Edit</Link>
                                <Button variant="contained" color='primary' style={{boxSizing:'border-box',
                     borderRadius:'3px', width:'100px', margin:'5px'}} type='submit' onClick={()=>handleDelete(user.id)} className='btn btn-sm btn-danger'>Delete</Button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
      
    </div>
  )
}

export default Home;


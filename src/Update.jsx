import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from './UserReducer.jsx';
import { Button } from '@mui/material'

const Update = () => {
    const{id}= useParams();
    const users = useSelector((state)=> state.users)
    // const existingUser = users.filter(f => f.id == id);
    // const existingUser = users.find(user => user.id === parseInt(id));

    const existingUser = users.find(user => user.id === parseInt(id));

    const [uname, setName] = useState(existingUser?.name || '');
    const [uemail, setEmail] = useState(existingUser?.email || '');
    // const {name,email} = existingUser[0];
    // const [uname,setName] = useState(name);
    // const [uemail,setEmail] = useState(email)
    const dispatch = useDispatch();
    const navigate = useNavigate();



    const handleUpdate = (event) => {
      event.preventDefault();
        dispatch(updateUser({
            id: parseInt(id),
            name:uname,
            email:uemail
        }))
        navigate('/')
    }




  return (
    <div>
      <div>
        <h2>Update User</h2>
        <form onSubmit={handleUpdate} action="">
            <div>
                <label htmlFor="name">name</label>
                <input type="text" name='name' className='form-control' 
                 value={uname} onChange={(e)=>setName(e.target.value)}/>
            </div><br />
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" name='email' className='form-control' 
                value={uemail} onChange={(e)=>setEmail(e.target.value)}/>
            </div><br />
            <Button type='submit' color='primary'>Update</Button>
        </form>
      </div>
    </div>
  )
}

export default Update;

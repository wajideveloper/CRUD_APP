import { useEffect, useState } from 'react';
import axios from 'axios';
import { formatUserName } from './utils';
import './App.css';
// import { DividerClassKey, dividerClasses } from '@mui/material';

function App1() {
 const [users, setUsers] = useState([]);

 // Load the data from the server
 useEffect(() => {
   let mounted = true;

   const getUsers = async () => {
     const response = await axios.get('https://jsonplaceholder.typicode.com/users');
     if (mounted) {
       setUsers(response.data);
     }
    }
})

return (
    <>
    {
      users.map((user)=>{
        return (
          <ul>
          <li key={user.id}>{user.name}</li></ul>
        )
      })
    }
    </>
)}

export default App1;
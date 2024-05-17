import React, { useState } from 'react'
import { Button } from '@mui/material'
import { useDispatch,useSelector } from 'react-redux'
import { addUser } from './UserReducer.jsx'
import { useNavigate } from 'react-router-dom'

// const Create = () => {
//     const[name,setName]=useState('')
//     const[email,setEmail]=useState('')
//     const users = useSelector((state)=>state.users);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     function handleSubmit(event){
//         event.preventDefault();
//         dispatch(addUser({id: users[users.length - 1].id+1, name,email}))
//         navigate('/')
//     }

//   return (
//     <div>
//       <div>
//         <h2>Add A new User</h2>
//         <form onSubmit={handleSubmit} action="">
//             <div>
//                 <label htmlFor="name">name</label>
//                 <input type="text" name='name' className='form-control' 
//                 onChange={(e)=>setName(e.target.value)}/>
//             </div><br />
//             <div>
//                 <label htmlFor="email">Email</label>
//                 <input type="text" name='email' className='form-control' 
//                 onChange={(e)=>setEmail(e.target.value)}/>
//             </div>
//             <Button type='submit' color='primary'>Submit</Button>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Create;

const Create = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(event) {
      event.preventDefault();
      const newUser = {
          id: users.length + 1, // Assign a unique ID to the new user
          name,
          email,
      };
      dispatch(addUser(newUser));
      navigate('/');
  }

  return (
      <div>
          <div>
              <h2>Add A new User</h2>
              <form onSubmit={handleSubmit} action="">
                  <div>
                      <label htmlFor="name">name</label>
                      <input
                          type="text"
                          name="name"
                          className="form-control"
                          onChange={(e) => setName(e.target.value)}
                      />
                  </div>
                  <br />
                  <div>
                      <label htmlFor="email">Email</label>
                      <input
                          type="text"
                          name="email"
                          className="form-control"
                          onChange={(e) => setEmail(e.target.value)}
                      />
                  </div>
                  <button type="submit" className="btn btn-primary">
                      Submit
                  </button>
              </form>
          </div>
      </div>
  );
};

export default Create;
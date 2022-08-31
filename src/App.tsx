import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
function App() {
  const [page,setpage] = useState(0);
  const [Table,setTable] = useState<any[]>([])
  useEffect(()=>{
    console.log()
    axios.get(`http://give-me-users-forever.herokuapp.com/api/users/${page}/next`).then((res )=>{
        setTable(res.data.users)
        console.log(res.data.users)
      })
    
  },[page])
  const Next = ()=>{
    setpage(page +10);
  }
  const Prev = ()=>{
    if(page> 1){
      setpage(page -10)
    }
    else{
      setpage(0)
    }
  }
  return (
    <div className="App">
      <table cellSpacing={0} className="table">
        <thead>
  <tr>
    <th>ID</th>
    <th>Job Title</th>
    <th>Email</th>
    <th>Email Address</th>
    <th>First Name Last Name</th>
    <th>Company</th>
    <th>Phone</th>
    
  </tr>
  </thead>
  <tbody>
  {Table.map((x,i)=>{
        if(i < 10){
          return  <tr key={i}>
          <td>{x.ID}</td>
          <td>{x.JobTitle}</td>
          <td>{x.Email}</td>
          <td>{x.EmailAddress}</td>
          <td>{x.FirstNameLastName}</td>
          <td>{x.Company}</td>
          <td>{x.Phone}</td>
        </tr>
        }
        
      })}
 </tbody>
 
</table>
        <div className='btns'>
          <button type='button' onClick={Prev}>Prev</button>
          <button type='button' onClick={Next}>Next</button>
        </div>
      
    </div>
  );
}

export default App;

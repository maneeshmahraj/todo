import { useEffect, useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import { MdDelete } from "react-icons/md";
const Item=()=>{

    const [data,setData]=useState({})
      const [mytodoData,setMytodoData]=useState([])
    const handleInput=(e)=>{
     let name=e.target.name;
     let val=e.target.value;
     setData(values=>({...values,[name]:val}))

    }
    const handleSubmit=()=>{

        let api="https://todo-server-96h7.onrender.com/v1/insert";
        axios.post(api,data).then((res)=>{
            
            toast(res.data,{
                position: "top-center",
            
                })
                loadData()
        })
    }
    const loadData=()=>{
        let api="https://todo-server-96h7.onrender.com/v1/load";
        axios.get(api).then((res)=>{
           setMytodoData(res.data)
        })
    }
    const deleteData=(mid)=>{
        let api="https://todo-server-96h7.onrender.com/v1/del"
        axios.post(api,{myId:mid}).then((res)=>{
            console.log(res.data)
            loadData()
        })
    }
    const handleStatus=(id)=>{
        let api="https://todo-server-96h7.onrender.com/v1/status"
        axios.post(api,{Id:id}).then((res)=>{
            console.log(res.data)
            loadData()
        })
    }
     useEffect(()=>{
        loadData()
     },[])

     const ans= mytodoData.map((key)=>{
        return(
            <>
            <tr>
             <td>{key.title}</td>
             <td>{key.discription}</td>
             <td>{!key.status?<b style={{color:"orange",cursor:"pointer"}} onClick={()=>{handleStatus(key._id)}}>panding</b>:<b style={{color:"green",cursor:"pointer"}}>complited</b>}</td>
             <td><MdDelete style={{color:"red",fontSize:"20px",cursor:"pointer"}} onClick={()=>{deleteData(key._id)}}/></td>
             </tr>
            </>
        )
     })
    return(
        <>
        <div className="sign-up-page">
       <div className="sign-up-item">
               <h2>To-Do-item</h2>
            </div>
            <div className="sign-up-item">
                <label>Title</label>
                <input type="text" name="title" onChange={handleInput} />
                
            </div>
            <div className="sign-up-item">
                <label>description</label>
               
               <textarea name="dis" rows={4} cols={40} onChange={handleInput}>

               </textarea>
            </div>
          
           
            <div className="sign-up-item">
                <button onClick={handleSubmit}>Add Item</button>
              
            </div>

            
       </div>
       <div className="list">
          <div className="list-item">
           <table>
            <tr>
                <th>Title</th>
                <th>Description</th>
                <th>status</th>
                <th></th>
            </tr>
             {ans}
           </table>
          </div>
       </div>
       <ToastContainer />
        </>
    )
}
export default Item;

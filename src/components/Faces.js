import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {usersActions} from '../actions/usersActions';

const Faces = () => {
    // LOCAL STATE 
    const [arr, setArr] = React.useState([]);

    // GET USERS FROM STATE
    const usersState = useSelector(state=> state.usersState);
    const {loading, error, users} = usersState;
    console.log(users)
    // DISPATCH
    const dispatch = useDispatch();

    // USE EFFECT
    React.useEffect(()=>{
       setArr(users); 
    },[users])

    // Delete user
    const deleteUser = id=>{
        console.log(id);
        // DISPATCH
        dispatch(usersActions(id));
    };
    let num = 1;
    //RETURN
    return (
        <div className='container'>
            <h3>User List</h3>
           {
               arr.map(u=> (            
                <div key={u.id} className="card">
                <div className="card-in">
                <img src={u.url} alt="img"/> <span>User {num++}</span>
                </div>
                <span className='delete-btn' onClick={()=>deleteUser(u.id)}>X</span>
                </div> 
            ))
           }
              <button className='save-btn'>Save</button>
              <button onClick={()=>window.location.reload()} className='save-btn'>Reload</button>
        </div>
    )
}

export default Faces

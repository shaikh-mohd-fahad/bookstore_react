import React from 'react'
import { useAuth } from '../context/AuthProvider';
import toast from 'react-hot-toast';
function Logout() {
    const [authUser,SetAuthUser]=useAuth();
    const handleLogout=()=>{
        try {
            SetAuthUser({
                ...authUser,
                user:null
            })
            localStorage.removeItem("Users")
            toast.success("Logout Successfully")
            // document.getElementById("login_modal").closed();
            // document.getElementById("login_modal").classList.add("hidden")
            setTimeout(() => {
                window.location.reload();
            }, 3000);
        } catch (error) {
            toast.error("Logout error: "+error.message)
            setTimeout(() => {}, 3000);
        }
    }
  return (
    <div>
      <button className='btn' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout

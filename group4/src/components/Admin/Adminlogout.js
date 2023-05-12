import React from "react";
import { useState } from "react";
function Adminlogout(props) {
    const [isLoggedin, setIsLoggedin] = useState(false);
    setIsLoggedin(true);
    const logout = () => {
        localStorage.removeItem('token-info');
        setIsLoggedin(false);
      };
    return (
        <button onClickCapture={logout}>logout user</button>
    )
}
export default Adminlogout;
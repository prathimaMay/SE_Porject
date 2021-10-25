import { useHistory } from 'react-router-dom'
import React, { Component , useEffect, useState } from "react";


const Login = () => {
const [username,setUsername] = useState("");
const [password,setPassword] = useState("");
const history = useHistory();

useEffect(() => {
if (localStorage.getItem('user-info')) {
history.push("/login") 
}
}, [])
function login () {
console.warn(username,password)
let item={username,password}
let result = await fetch("", {
method:'POST',
headers:{
"Content-Type":"application/json",
"Accept":"application/json"
},
body: JSON.stringify(item)
});
result = await result.json();
localStorage.setItem("user-info", JSON.stringify(result))
history.push("/login")
}
}



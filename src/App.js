 // import "./App.css";
 import { useState,useEffect,useRef } from "react";
 import { signInWithGoogle } from "./firebase-config";
 import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
 import Container from 'react-bootstrap/Container';
 import Nav from 'react-bootstrap/Nav';
 import Alert from 'react-bootstrap/Alert';
 import Webcam from 'react-webcam'
 
 import { db } from "./firebase-config";
 import {
     collection,
     getDocs,
     addDoc,
     updateDoc,
     deleteDoc,
     doc,
   } from "firebase/firestore";
 import AOS from 'aos';
 import 'aos/dist/aos.css'; 
 
 import { Card, Button, Row, Col } from 'react-bootstrap';
 import card1 from './images/card1.png'
 import card2 from './images/card2.png'
 import card3 from './images/card3.png'
 import Modal from 'react-bootstrap/Modal';
 import Navbar from 'react-bootstrap/Navbar';
 import { ethers } from 'ethers';
 import './App.css';
 import camera from './images/camera.png';
 import logo from './images/logo2.png'
 import heading from './images2/heading.png'
 import Home from './Home'
 import Transfer from "./Transfer";
 import CrossPics from "./CrossPics";
 import Upload from "./Upload";
 import Chat from './Chat'
 import Transfer2 from "./Transfer2";
 import { Routes, Route,Link } from "react-router-dom";
function App() {
  return (
	<div>App


<Routes>

<Route path="/" element={<Home/>} />
<Route path="/crosspics" element={<CrossPics/>} />
<Route path="/upload" element={<Upload/>} />  
<Route path="/chat" element={<Chat/>} />  
	  <Route path="/transfer" element={<Transfer/>} />
	  <Route path="/transfer2" element={<Transfer2/>} />
		  </Routes>
	</div>
  )
}

export default App
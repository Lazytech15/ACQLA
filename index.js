import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyCOB2qEHCqj4ogZdjIH4Ff-tl-StyLShOk",
  authDomain: "cpprog03.firebaseapp.com",
  projectId: "cpprog03",
  storageBucket: "cpprog03.appspot.com",
  messagingSenderId: "316552887176",
  appId: "1:316552887176:web:2d8b0fc17477132873d83d"
};
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  firebase.initializeApp(firebaseConfig);

  import {
    getFirestore, doc, getDoc, collection, addDoc, setDoc, updateDoc, deleteDoc, deleteField
  }
  from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";
  
  const db = getFirestore();
  const client = firebase.firestore();

  let desktop;
  let studeData;
  let count = 0;
  const studentName = document.getElementById('studentName');
  const studentID = document.getElementById('studentID');
  const studentSec = document.getElementById('studentSection');
  const studentSub = document.getElementById('studentsub');
  const pcunit = document.getElementById('pcnum');
  const DateHour = document.getElementById('TimeDate');
  //const studData_btn = document.getElementById('close_btn');
  let deskStat=[];

  async function checkSit(){

    client.collection("COMLAB-ATTENDANCE-TABLE").get().then((querySnapshot) => {
      querySnapshot.forEach((studentdata) => {
        studeData = studentdata.data();
        const dataID = studentdata.id;
        //console.log(data,dataID);
        deskStat.push({ ...studeData,dataID});

        deskStat.forEach((data)=>{
          if (data.Status==="Occupied"){
            desktop = data.Desk;
            getData(desktop)
          }else{
            
            var cells = document.getElementsByTagName('td');
            cells[data.Desk].style = "background-color: lightgreen;";
          }
         })
      })
    })
  }
       function getData(onValue){
       var cells = document.getElementsByTagName('td');
       cells[onValue].style = "background-color: red; padding:1px;";
       cells[onValue].innerHTML = "Occupied!";
      }
 

  document.addEventListener('DOMContentLoaded', function() {
    let cells = document.getElementsByTagName('td');
    for (let i = 0; i < cells.length; i++) {
      (function(i) {
        cells[i].addEventListener('pointerenter', function() {
          if(cells[i].innerHTML === "Occupied!"){
            deskStat.forEach((onValue)=>{
              const desk = onValue.Desk;
              if(i == desk){  
                pcunit.innerHTML = onValue.Com_Unit_Num;
                studentName.innerHTML = onValue.Student_Name;
                studentID.innerHTML = onValue.Student_ID;
                studentSec.innerHTML = onValue.Student_Section;
                studentSub.innerHTML = onValue.Student_Course;
                DateHour.innerHTML = onValue.Date_Scan;
                document.getElementById('info-container').style="display: flex";
              }
            }) 
          }else{
              document.getElementById('info-container').style="display: none";
          }  
        });
        cells[i].addEventListener('click', function(){
    
        })
      })(i); 
    }
  });
  /*
  studData_btn.addEventListener('click',function(){
    document.getElementById('info-container').style="display: none";
  })
  */

 
/*
  setInterval(function() {
    if (count < 3) {
      // Your function here
      checkSit();
      count++;
    } else {
      location.reload();
    }
  }, 5000);
    */
  
    window.onload = checkSit;

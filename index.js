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
    getFirestore, doc, getDoc, collection, addDoc, setDoc, updateDoc, deleteDoc, deleteField, onSnapshot
  }
  from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";
  
  const db = getFirestore();
  const client = firebase.firestore();
  let count;
  let studeData;
  const studentName = document.getElementById('studentName');
  const studentID = document.getElementById('studentID');
  const studentSec = document.getElementById('studentSection');
  const studentSub = document.getElementById('studentsub');
  const pcunit = document.getElementById('pcnum');
  const DateHour = document.getElementById('TimeDate');
  const stud_late = document.getElementById('stud_late');
  const stud_ontime = document.getElementById('stud_ontime');
  const toccupied = document.getElementById('toccupied');
  const pcavailable = document.getElementById('pcavailable');
  //const studData_btn = document.getElementById('close_btn');
  let deskStat=[];

  async function checkSit(){

    client.collection("COMLAB-ATTENDANCE-TABLE").onSnapshot((querySnapshot) => {
      querySnapshot.forEach((studentdata) => {
        studeData = studentdata.data();
        const dataID = studentdata.id;
        //console.log(data,dataID);
        deskStat.push({ ...studeData,dataID});

        
      })
      deskStat.forEach((data)=>{
        if (data.Status==="Occupied" && data.SchoolOnTime==="true"){
          toccupied.innerHTML = Number(toccupied.innerHTML) + 1;
          stud_late.innerHTML = Number(stud_late.innerHTML) + 1;
          pcavailable.innerHTML = Number(pcavailable.innerHTML) -1;
          const cells = document.getElementsByTagName('td');
          cells[data.Desk].style = "background-color: yellow; padding:10px; color: navy;";
          cells[data.Desk].innerHTML = '<span class="desk">' + data.Com_Unit_Num + '</span>' + "Occupied! <br> BUT LATE!";
        }else if (data.Status==="Occupied" && data.SchoolOnTime==="false"){
          toccupied.innerHTML = Number(toccupied.innerHTML) + 1;
          stud_ontime.innerHTML = Number(stud_ontime.innerHTML) + 1;
          pcavailable.innerHTML = Number(pcavailable.innerHTML) -1;
          const cells = document.getElementsByTagName('td');
          //cells[data.Desk].className = "top-left";
          cells[data.Desk].style = "background-color: red; padding:10px;";
          cells[data.Desk].innerHTML = '<span class="desk">' + data.Com_Unit_Num + '</span>' + "Occupied! <br> Ontime";
        }else{
          const cells = document.getElementsByTagName('td');
          cells[data.Desk].style = "background-color: lightgreen; padding:10px";
        }
       })
    })
  }
  const minimaldetails = document.getElementById('minimal-details-info');
  const infodetails = document.getElementById('info-container');
  document.addEventListener('DOMContentLoaded', function() {
    let cells = document.getElementsByTagName('td');
    for (let i = 0; i < cells.length; i++) {
      (function(i) {
        cells[i].addEventListener('pointerenter', function() {
          if(cells[i].innerHTML !== ""){
            deskStat.forEach((onValue)=>{
              const desk = onValue.Desk;
              
              if(i == desk){ 
                pcunit.innerHTML = onValue.Com_Unit_Num;
                studentName.innerHTML = onValue.Student_Name;
                studentID.innerHTML = onValue.Student_ID;
                studentSec.innerHTML = onValue.Student_Section;
                studentSub.innerHTML = onValue.Student_Course;
                DateHour.innerHTML = onValue.Date_Scan;
                console.log(pcunit.innerHTML);
               
              }
              document.getElementById('info-container').style="display: flex;";
              minimaldetails.style.opacity="0";
              minimaldetails.style.maxHeight="0";
              
            }) 
          }else{
            minimaldetails.style.opacity="1";
            minimaldetails.style.maxHeight="1000px";
            infodetails.style.opacity="0";
            infodetails.style.maxHeight="0";
        } 
        });
        cells[i].addEventListener('click', function(){
    
        })
      })(i); 
    }
  });

  async function TypingCheck(){
    let noTyping=[];
    const cells = document.getElementsByTagName('td');
    for (let c = 0; c < cells.length;c++){
      client.collection("SOME-IS-TYPING").onSnapshot((querySnapshot) => {
        querySnapshot.forEach((studentdata) => {
          const desk = studentdata.data().Desk;
          cells[desk].style = "background-color: purple; padding: 10px; ";
          noTyping = desk;
      })
      if ( noTyping === c) {
          console.log("working");
          cells[c].style = "background-color: lightgreen; padding: 10px; ";
      }    
      })

    }
    
}
window.onload = function() {
  TypingCheck();
  checkSit();
};
  
  setInterval(function() {
    if (count < 3) {
      count++;
    } else {
      location.reload();
      count="";
    }
  }, 20000);

  
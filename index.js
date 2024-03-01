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
  let cells = Array.from(document.getElementsByTagName('td'));
      cells.reverse().forEach(cell => cell.parentNode.appendChild(cell));
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
  const donwload_btn = document.getElementById('donwload_btn');
  const reset_btn = document.getElementById('reset_btn');
  const signin_btn = document.getElementById('signin_btn');
  const cancel_teacher = document.getElementById('cancel-teacher');
  const teacher_name = document.getElementById('teacher_name');
  const teacher_sub = document.getElementById('teacher_sub');
  const teacher_sec = document.getElementById('teacher_sec');
  const confirm_btn = document.getElementById('confirm_btn');
  const below_sub = document.getElementById("below-sub");
  const below_sec = document.getElementById("below-sec");
  const below_instuctor = document.getElementById("below-instuctor");
  const below_dtime = document.getElementById("below-date/time");
  let deskStat=[];
  let dataID;

  async function checkSit(){
    let ToTransfer = [];
    client.collection("COMLAB-ATTENDANCE-TABLE").orderBy('createdAt').onSnapshot((querySnapshot) => {
      querySnapshot.forEach((studentdata) => {
        studeData = studentdata.data();
        dataID = studentdata.id;
        deskStat.push({ ...studeData,dataID});
        ToTransfer.push({...studeData});
  })
  csvData(ToTransfer)
      deskStat.forEach((data)=>{
        if (data.Status==="Occupied" && data.SchoolOnTime==="true"){
          toccupied.innerHTML = Number(toccupied.innerHTML) + 1;
          stud_late.innerHTML = Number(stud_late.innerHTML) + 1;
          pcavailable.innerHTML = Number(pcavailable.innerHTML) -1;
          cells[data.Desk].style = "background-color: yellow; padding:10px; height: 50px; color: navy;";
          cells[data.Desk].innerHTML = '<span class="desk">' + data.Com_Unit_Num + '</span>' + "Occupied! <br> BUT LATE!";
        }else if (data.Status==="Occupied" && data.SchoolOnTime==="false"){
          toccupied.innerHTML = Number(toccupied.innerHTML) + 1;
          stud_ontime.innerHTML = Number(stud_ontime.innerHTML) + 1;
          pcavailable.innerHTML = Number(pcavailable.innerHTML) -1;
          cells[data.Desk].style = "background-color: red; padding:10px; height: 50px;";
          cells[data.Desk].innerHTML = '<span class="desk">' + data.Com_Unit_Num + '</span>' + "Occupied! <br> Ontime";
        }else{
          cells[data.Desk].style = "background-color: white; padding:10px;";
        }
      })
    })
  }

  
    
async function deletData(){
  client.collection("COMLAB-ATTENDANCE-TABLE").get().then((querySnapshot) => {
    if(querySnapshot.size !== 0){
      client.collection("COMLAB-ATTENDANCE-TABLE").get().then((querySnapshot) => {
        querySnapshot.forEach((studentdata) => {
          const dataID = studentdata.id;
          const ToDelete = doc(db,"COMLAB-ATTENDANCE-TABLE",dataID);
          deleteDoc(ToDelete);
          const ToDel = doc(db,"TEACHER-DATA","TEACHER-DOC");
          deleteDoc(ToDel);
          client.collection("SOME-IS-TYPING").get().then((querySnapshot) => {
            querySnapshot.forEach((studentdata) => {
              const dataID = studentdata.id;
              const ToDelete = doc(db,"SOME-IS-TYPING",dataID);
              deleteDoc(ToDelete);
            })
          })
        })
        })
        
    }else{
      document.getElementById('pop-up-message').innerHTML="Its seems like the data is not deleted yet, its probably the network is kinda slow";
      document.getElementById('pop-up-message').style.textAlign = "center";
      myPopup.classList.add("show");
    }
  })
}

  const minimaldetails = document.getElementById('minimal-details-info');
  const infodetails = document.getElementById('info-container');

  document.addEventListener('DOMContentLoaded', async function() {
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
          if (cells[i].innerHTML !=="" || cells[i].style.backgroundColor=="purple"){
            const userConfirmation = confirm("Are you sure that you want to delete this entry?");
            if (userConfirmation) {
              const ref = doc(db,"COMLAB-ATTENDANCE-TABLE","B1-28_DESKTOPPCNUMBER-"+i);
                          deleteDoc(ref);
              const docref = doc(db,"SOME-IS-TYPING","B1-28_DESKTOPPCNUMBER-"+i);
                          deleteDoc(docref);
              document.getElementById('pop-up-top').style="display:none";
              document.getElementById('pop-up-message').innerHTML="Delete Data Successfully!";
              document.getElementById('pop-up-message').style.textAlign = "center";
              myPopup.classList.add("show");
            }
            
          }else{
              document.getElementById('pop-up-message').innerHTML="Its seems nothing is in here";
              document.getElementById('pop-up-message').style.textAlign = "center";
              myPopup.classList.add("show");
          }
          
        })
      })(i); 
    }
  });

  async function TypingCheck(){
    let noTyping=[];
    
    for (let c = 0; c < cells.length;c++){
      client.collection("SOME-IS-TYPING").onSnapshot((querySnapshot) => {
        querySnapshot.forEach((studentdata) => {
          const desk = studentdata.data().Desk;
          cells[desk].style = "background-color: purple;";
          noTyping = desk;
      })
      if ( noTyping === c) {
          cells[c].style = "background-color: white; padding: 10px; ";
      }    
      })

    }
    
}

async function TeacherCheck() {
  client.collection('TEACHER-DATA').onSnapshot(querySnapshot => {
    querySnapshot.forEach(teacherData => {
      const teacherName = teacherData.data().Teacher_Name;
      const studentSection = teacherData.data().Teacher_Section;
      const StudentSubject = teacherData.data().Teacher_Subjects;
      const TimeDate = teacherData.data().Time_Date;
      below_instuctor.innerHTML = " " + teacherName;
      below_sec.innerHTML = " " + studentSection;
      below_sub.innerHTML = " " + StudentSubject;
      below_dtime.innerHTML = " " + TimeDate;
    });
  });
}

window.onload = function() {
  TypingCheck();
  TeacherCheck();
  checkSit();
};

function getDateHour(){
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; 
  minutes = minutes < 10 ? '0'+minutes : minutes;
  
  let strTime = hours + ':' + minutes + ampm;
  
  let day = ("0" + date.getDate()).slice(-2);
  let month = ("0" + (date.getMonth() + 1)).slice(-2);
  let year = date.getFullYear();
  let strDate =  month + "/" + day + "/" + year;
  let dateTime = strTime + " " + strDate;

  return dateTime
}

/* all button  */

signin_btn.addEventListener('click', function(){
  document.getElementById('teacher-form-container').style.display="flex";
})

cancel_teacher.addEventListener('click', function(){
  document.getElementById('teacher-form-container').style.display="none";
})

confirm_btn.addEventListener('click', function(){
  if (teacher_name.value =="" || teacher_sec.value == "" || teacher_sub.value ==""){
    document.getElementById('pop-up-message').innerHTML="Please complete the sign in";
    document.getElementById('pop-up-message').style.textAlign = "center";
    myPopup.classList.add("show");
  }else{
    const ref = doc(db, "TEACHER-DATA","TEACHER-DOC");
                setDoc( 
                ref, {
                  Teacher_Name : teacher_name.value,
                  Teacher_Subjects : teacher_sub.value,
                  Teacher_Section : teacher_sec.value,
                  Time_Date : getDateHour()

            })
            document.getElementById('pop-up-top').style="display:none";
            document.getElementById('pop-up-message').innerHTML="Data uploaded, student will now take the pc and attendance also";
            document.getElementById('pop-up-message').style.textAlign = "center";
            myPopup.classList.add("show");
            document.getElementById('teacher-form-container').style.display="none";
            teacher_name.value="";
            teacher_sec.value="";
            teacher_sub.value="";
  }
})

reset_btn.addEventListener('click', function(){
  if (deskStat == ""){
    document.getElementById('pop-up-top').style="display:none";
    document.getElementById('pop-up-message').innerHTML="It's seem that there is no data yet!";
    document.getElementById('pop-up-message').style.textAlign = "center";
    myPopup.classList.add("show");
  }else{
    document.getElementById('pop-up-top').style="display:none";
    document.getElementById('pop-up-message').innerHTML="Reset Data successfully!";
    document.getElementById('pop-up-message').style.textAlign = "center";
    myPopup.classList.add("show");
  deletData();
  }
})

function csvData(student) {
  const tableBody = document.getElementById('student-container');

  // Create a new row for the table header
  const headerRow = document.createElement('tr');
  headerRow.innerHTML = `
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
  `;
  tableBody.appendChild(headerRow);

  student.forEach((students) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${students.Student_ID}</td>
      <td>${students.Student_Name}</td>
      <td>${students.Student_Section}</td>
      <td>${students.Student_Course}</td>
      <td>${students.Com_Unit_Num}</td>
      <td>${students.Teacher_Name}</td>
      <td>${students.Date_Scan}</td>
      <td>${students.SchoolOnTime}</td>
    `;
    tableBody.appendChild(row);
  })

  const downloadRow = document.createElement('tr');
  downloadRow.innerHTML = `
    <td colspan="8"><button class="download-btn">DOWNLOAD</button><button class="cancel-btn">CANCEL</button></td>
    
  `;
  tableBody.appendChild(downloadRow);
  const cancel_btn = downloadRow.querySelector('.cancel-btn');
  const download_btn = downloadRow.querySelector('.download-btn');

  const headerMapping = [
    {old: "Student_ID", new: " STUDENT NUMBER  "},
    {old: "Student_Name", new: " STUDENT NAME  "},
    {old: "Student_Section", new: " SECTION "},
    {old: "Student_Course", new: " COURSE CODE  "},
    {old: "Com_Unit_Num", new: " PC NUMBER "},
    {old: "Teacher_Name", new: " INSTRUCTOR "},
    {old: "Date_Scan", new: " TIME/DATE SCANNED "},
    {old: "SchoolOnTime", new: " LATE "}
];

cancel_btn.addEventListener('click', ()=>{
  document.getElementById('table-sub-container').style.display="none";
})

download_btn.addEventListener('click', () => {

    tableBody.removeChild(downloadRow);

    let wb = XLSX.utils.table_to_book(document.getElementById('student-container'), {sheet:"Attendance"});

    // Customize the header
    const ws = wb.Sheets['Attendance'];
    for (let i = 0; i < headerMapping.length; i++) {
        const oldHeader = headerMapping[i].old;
        const newHeader = headerMapping[i].new;
        ws[XLSX.utils.encode_cell({r: 0, c: i})] = {v: newHeader, t: 's'}; // 's' indicates string type
    }

    // Calculate max length of data in each column
    let maxLengths = [];
    for (let R = 0; R != ws["!ref"].split(':')[1].charCodeAt(0) - 'A'.charCodeAt(0) + 1; ++R) {
        let maxLength = 0;
        for (let C = 0; C != ws["!ref"].split(':')[1].slice(1); ++C) {
            let cell = ws[String.fromCharCode('A'.charCodeAt(0) + R) + (C + 1)];
            if (cell !== undefined && cell.v.length > maxLength) maxLength = cell.v.length;
        }
        maxLengths.push(maxLength);
    }

    // Set column widths
    ws["!cols"] = maxLengths.map(w => ({wch: w}));

    let wbout = XLSX.write(wb, {bookType:'xlsx', bookSST:true, type: 'binary'});
    saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), 'ComLab-Attendance.xlsx');

    tableBody.appendChild(downloadRow);

    deletData();
    document.getElementById('pop-up-top').style="display:none";
    document.getElementById('pop-up-message').innerHTML="Download Complete! it will reset all, thank you for using ACQLA your simple yet useful Online Attendance";
    document.getElementById('pop-up-message').style.textAlign = "center";
    myPopup.classList.add("show");
    setInterval(function() {
      location.reload();
    }, 3000);

});

function s2ab(s) {
    var buf = new ArrayBuffer(s.length);
    var view = new Uint8Array(buf);
    for (var i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
    return buf;
}

}
donwload_btn.addEventListener('click', function(){
  if (deskStat == ""){
    document.getElementById('pop-up-top').style="display:none";
    document.getElementById('pop-up-message').innerHTML="No data to download";
    document.getElementById('pop-up-message').style.textAlign = "center";
    myPopup.classList.add("show");
  }else{
    document.getElementById('table-sub-container').style.display="flex";
  }  
})

closePopup.addEventListener("click", function () {
  myPopup.classList.remove("show");
});
window.addEventListener("click", function (event) {
if (event.target == myPopup) {
  myPopup.classList.remove("show");
}
});
  
  setInterval(function() {
    if(document.getElementById('teacher-form-container').style.display==="flex" || 
      document.getElementById('table-sub-container').style.display==="flex" ||
      myPopup.classList.contains("show") ||
      infodetails.style.opacity!=="0"){
    }else{
      if (count < 3) {
        count++;
      } else {
        location.reload();
        count="";
      }
    }
    
  }, 10000);

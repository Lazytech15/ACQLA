const _0xfc93ca=_0x3fe3;function _0x3fe3(_0xdb43f4,_0x2cb45b){const _0xaf9410=_0xaf94();return _0x3fe3=function(_0x3fe327,_0x1d76ed){_0x3fe327=_0x3fe327-0xa9;let _0x14f016=_0xaf9410[_0x3fe327];return _0x14f016;},_0x3fe3(_0xdb43f4,_0x2cb45b);}(function(_0x27b1d0,_0x4b56ef){const _0x136489=_0x3fe3,_0xe94ea3=_0x27b1d0();while(!![]){try{const _0x2348c0=-parseInt(_0x136489(0xdf))/0x1+-parseInt(_0x136489(0xe9))/0x2*(parseInt(_0x136489(0xbc))/0x3)+-parseInt(_0x136489(0xb7))/0x4*(parseInt(_0x136489(0xd6))/0x5)+-parseInt(_0x136489(0xde))/0x6+parseInt(_0x136489(0xc6))/0x7+-parseInt(_0x136489(0xe8))/0x8*(parseInt(_0x136489(0xf5))/0x9)+parseInt(_0x136489(0xbf))/0xa*(parseInt(_0x136489(0xcb))/0xb);if(_0x2348c0===_0x4b56ef)break;else _0xe94ea3['push'](_0xe94ea3['shift']());}catch(_0x273beb){_0xe94ea3['push'](_0xe94ea3['shift']());}}}(_0xaf94,0xa6a84));import{initializeApp}from'https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js';const firebaseConfig={'apiKey':_0xfc93ca(0xd4),'authDomain':'cpprog03.firebaseapp.com','projectId':_0xfc93ca(0xea),'storageBucket':_0xfc93ca(0xec),'messagingSenderId':'316552887176','appId':_0xfc93ca(0xac)},app=initializeApp(firebaseConfig);firebase[_0xfc93ca(0xd0)](firebaseConfig);import{getFirestore,doc,getDoc,collection,addDoc,setDoc,updateDoc,deleteDoc,deleteField,onSnapshot}from'https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js';const db=getFirestore(),client=firebase[_0xfc93ca(0xd2)]();let count,studeData;const studentName=document[_0xfc93ca(0xc7)](_0xfc93ca(0xcf)),studentID=document[_0xfc93ca(0xc7)](_0xfc93ca(0xbd)),studentSec=document[_0xfc93ca(0xc7)](_0xfc93ca(0xee)),studentSub=document[_0xfc93ca(0xc7)](_0xfc93ca(0xb6)),pcunit=document['getElementById'](_0xfc93ca(0xb9)),DateHour=document[_0xfc93ca(0xc7)](_0xfc93ca(0xc0)),stud_late=document[_0xfc93ca(0xc7)](_0xfc93ca(0xd8)),stud_ontime=document[_0xfc93ca(0xc7)](_0xfc93ca(0xcd)),toccupied=document[_0xfc93ca(0xc7)](_0xfc93ca(0xca)),pcavailable=document[_0xfc93ca(0xc7)](_0xfc93ca(0xd3)),donwload_btn=document[_0xfc93ca(0xc7)](_0xfc93ca(0xe6)),reset_btn=document[_0xfc93ca(0xc7)](_0xfc93ca(0xed));let deskStat=[],dataID;async function checkSit(){const _0x4bf73d=_0xfc93ca;client[_0x4bf73d(0xdb)]('COMLAB-ATTENDANCE-TABLE')[_0x4bf73d(0xf6)](_0x4a0649=>{const _0x4a64c7=_0x4bf73d;_0x4a0649[_0x4a64c7(0xdc)](_0x10b57e=>{const _0x512398=_0x4a64c7;studeData=_0x10b57e[_0x512398(0xf7)](),dataID=_0x10b57e['id'],deskStat['push']({...studeData,'dataID':dataID});}),deskStat[_0x4a64c7(0xdc)](_0x346987=>{const _0x21ab5a=_0x4a64c7;if(_0x346987['Status']===_0x21ab5a(0xfd)&&_0x346987['SchoolOnTime']===_0x21ab5a(0xba)){toccupied[_0x21ab5a(0xf3)]=Number(toccupied[_0x21ab5a(0xf3)])+0x1,stud_late['innerHTML']=Number(stud_late['innerHTML'])+0x1,pcavailable[_0x21ab5a(0xf3)]=Number(pcavailable[_0x21ab5a(0xf3)])-0x1;const _0x530543=document[_0x21ab5a(0xb2)]('td');_0x530543[_0x346987[_0x21ab5a(0xad)]][_0x21ab5a(0xae)]=_0x21ab5a(0xaa),_0x530543[_0x346987[_0x21ab5a(0xad)]]['innerHTML']=_0x21ab5a(0xd7)+_0x346987[_0x21ab5a(0xcc)]+_0x21ab5a(0x100)+_0x21ab5a(0xbb);}else{if(_0x346987[_0x21ab5a(0xe7)]==='Occupied'&&_0x346987['SchoolOnTime']==='false'){toccupied['innerHTML']=Number(toccupied['innerHTML'])+0x1,stud_ontime[_0x21ab5a(0xf3)]=Number(stud_ontime[_0x21ab5a(0xf3)])+0x1,pcavailable['innerHTML']=Number(pcavailable[_0x21ab5a(0xf3)])-0x1;const _0x24495e=document[_0x21ab5a(0xb2)]('td');_0x24495e[_0x346987[_0x21ab5a(0xad)]][_0x21ab5a(0xae)]='background-color:\x20red;\x20padding:10px;',_0x24495e[_0x346987['Desk']][_0x21ab5a(0xf3)]=_0x21ab5a(0xd7)+_0x346987['Com_Unit_Num']+_0x21ab5a(0x100)+_0x21ab5a(0xf1);}else{const _0x134dc0=document[_0x21ab5a(0xb2)]('td');_0x134dc0[_0x346987[_0x21ab5a(0xad)]]['style']=_0x21ab5a(0xab);}}});});}donwload_btn[_0xfc93ca(0x102)](_0xfc93ca(0xf8),function(){const _0x1cd7a8=_0xfc93ca;if(deskStat=='')alert('Not\x20in\x20there\x20yet');else{const _0x1790a3=[{'old':_0x1cd7a8(0xb1),'new':_0x1cd7a8(0xc8)},{'old':_0x1cd7a8(0xd1),'new':_0x1cd7a8(0xf4)},{'old':_0x1cd7a8(0xf0),'new':_0x1cd7a8(0xdd)},{'old':'Student_Course','new':_0x1cd7a8(0xd5)},{'old':_0x1cd7a8(0xcc),'new':_0x1cd7a8(0xf9)},{'old':_0x1cd7a8(0x103),'new':_0x1cd7a8(0xa9)},{'old':_0x1cd7a8(0xe1),'new':_0x1cd7a8(0xb4)}];function _0x1236c2(_0x2d0284){const _0xf1bbbc=_0x1cd7a8,_0x63b4bf={};for(var _0x511e31=0x0;_0x511e31<_0x1790a3[_0xf1bbbc(0xe0)];_0x511e31++){var _0x5aceef=_0x1790a3[_0x511e31][_0xf1bbbc(0xc1)],_0x365ae1=_0x1790a3[_0x511e31][_0xf1bbbc(0xb8)];_0x2d0284[_0xf1bbbc(0xeb)](_0x5aceef)&&(_0x63b4bf[_0x365ae1]=_0x2d0284[_0x5aceef]);}return _0x63b4bf;}const _0xe10d0=deskStat[_0x1cd7a8(0xe3)](_0x1236c2),_0x1fa052=XLSX[_0x1cd7a8(0xc9)][_0x1cd7a8(0xb5)](_0xe10d0),_0x6f9f82=XLSX[_0x1cd7a8(0xc9)][_0x1cd7a8(0xc4)]();XLSX[_0x1cd7a8(0xc9)]['book_append_sheet'](_0x6f9f82,_0x1fa052,_0x1cd7a8(0xe5));const _0xd4d9fa=XLSX[_0x1cd7a8(0xc5)](_0x6f9f82,{'bookType':_0x1cd7a8(0xfc),'type':_0x1cd7a8(0xff)});function _0x14cb1c(_0x54584a){const _0x4098cf=_0x1cd7a8,_0x3af6c8=new ArrayBuffer(_0x54584a[_0x4098cf(0xe0)]),_0x286873=new Uint8Array(_0x3af6c8);for(let _0x58dfe6=0x0;_0x58dfe6<_0x54584a[_0x4098cf(0xe0)];_0x58dfe6++)_0x286873[_0x58dfe6]=_0x54584a['charCodeAt'](_0x58dfe6)&0xff;return _0x3af6c8;}saveAs(new Blob([_0x14cb1c(_0xd4d9fa)],{'type':_0x1cd7a8(0xb3)}),'Com-Lab-Attendance.xlsx'),deletData();}});async function deletData(){const _0x434ef5=_0xfc93ca;client[_0x434ef5(0xdb)]('COMLAB-ATTENDANCE-TABLE')['onSnapshot'](_0xa0a149=>{const _0x11fa3d=_0x434ef5;_0xa0a149[_0x11fa3d(0xdc)](_0x133b23=>{const _0x1f1e28=_0x11fa3d,_0x36acf7=_0x133b23['id'],_0x46a060=doc(db,_0x1f1e28(0xef),_0x36acf7);deleteDoc(_0x46a060),alert(_0x1f1e28(0xe4)),setInterval(function(){location['reload']();},0x1388);});}),client[_0x434ef5(0xdb)](_0x434ef5(0xfa))[_0x434ef5(0xf6)](_0x56f97b=>{const _0x28b1fd=_0x434ef5;_0x56f97b[_0x28b1fd(0xdc)](_0x3228d9=>{const _0x19ea9d=_0x3228d9['id'],_0x5bfd6f=doc(db,'COMLAB-ATTENDANCE-TABLE',_0x19ea9d);deleteDoc(_0x5bfd6f);});});}function _0xaf94(){const _0x3b3757=['10779417fnrdRr','onSnapshot','data','click','PC\x20NUMBER','SOME-IS-TYPING','display:\x20flex;','xlsx','Occupied','onload','binary','</span>','DOMContentLoaded','addEventListener','Date_Scan','TIME/DATE\x20SCANNED','background-color:\x20yellow;\x20padding:10px;\x20color:\x20navy;','background-color:\x20lightgreen;\x20padding:10px','1:316552887176:web:2d8b0fc17477132873d83d','Desk','style','reload','Student_Course','Student_ID','getElementsByTagName','application/octet-stream','LATE','json_to_sheet','studentsub','4wadAlq','new','pcnum','true','Occupied!\x20<br>\x20BUT\x20LATE!','3TBSemX','studentID','opacity','59130qteCek','TimeDate','old','background-color:\x20purple;\x20padding:\x2010px;\x20','background-color:\x20lightgreen;\x20padding:\x2010px;\x20','book_new','write','5525387SUBMqZ','getElementById','STUDENT\x20NUMBER','utils','toccupied','7051mkADMB','Com_Unit_Num','stud_ontime','1000px','studentName','initializeApp','Student_Name','firestore','pcavailable','AIzaSyCOB2qEHCqj4ogZdjIH4Ff-tl-StyLShOk','COURSE\x20CODE','1220595mGiLsu','<span\x20class=\x22desk\x22>','stud_late','pointerenter','info-container','collection','forEach','SECTION','5125962rARxWB','639054BteVgr','length','SchoolOnTime','maxHeight','map','Delete\x20Successfully','Attendance','donwload_btn','Status','8thoOLq','1923466HkGDBy','cpprog03','hasOwnProperty','cpprog03.appspot.com','reset_btn','studentSection','COMLAB-ATTENDANCE-TABLE','Student_Section','Occupied!\x20<br>\x20Ontime','Not\x20in\x20there\x20yet','innerHTML','STUDENT\x20NAME'];_0xaf94=function(){return _0x3b3757;};return _0xaf94();}reset_btn['addEventListener'](_0xfc93ca(0xf8),function(){const _0x6f08e1=_0xfc93ca;deskStat==''?alert(_0x6f08e1(0xf2)):deletData();});const minimaldetails=document['getElementById']('minimal-details-info'),infodetails=document[_0xfc93ca(0xc7)](_0xfc93ca(0xda));document[_0xfc93ca(0x102)](_0xfc93ca(0x101),function(){const _0x57dbb5=_0xfc93ca;let _0x4b6a97=document[_0x57dbb5(0xb2)]('td');for(let _0x36d9c2=0x0;_0x36d9c2<_0x4b6a97[_0x57dbb5(0xe0)];_0x36d9c2++){(function(_0x4bfc66){const _0x3be634=_0x57dbb5;_0x4b6a97[_0x4bfc66][_0x3be634(0x102)](_0x3be634(0xd9),function(){const _0x4d5d9f=_0x3be634;_0x4b6a97[_0x4bfc66]['innerHTML']!==''?deskStat['forEach'](_0x3c7f99=>{const _0x348d03=_0x3fe3,_0x2c85b2=_0x3c7f99[_0x348d03(0xad)];_0x4bfc66==_0x2c85b2&&(pcunit[_0x348d03(0xf3)]=_0x3c7f99['Com_Unit_Num'],studentName[_0x348d03(0xf3)]=_0x3c7f99[_0x348d03(0xd1)],studentID[_0x348d03(0xf3)]=_0x3c7f99[_0x348d03(0xb1)],studentSec[_0x348d03(0xf3)]=_0x3c7f99['Student_Section'],studentSub[_0x348d03(0xf3)]=_0x3c7f99[_0x348d03(0xb0)],DateHour['innerHTML']=_0x3c7f99[_0x348d03(0x103)]),document[_0x348d03(0xc7)]('info-container')[_0x348d03(0xae)]=_0x348d03(0xfb),minimaldetails[_0x348d03(0xae)][_0x348d03(0xbe)]='0',minimaldetails[_0x348d03(0xae)][_0x348d03(0xe2)]='0';}):(minimaldetails['style'][_0x4d5d9f(0xbe)]='1',minimaldetails[_0x4d5d9f(0xae)][_0x4d5d9f(0xe2)]=_0x4d5d9f(0xce),infodetails['style'][_0x4d5d9f(0xbe)]='0',infodetails['style'][_0x4d5d9f(0xe2)]='0');}),_0x4b6a97[_0x4bfc66][_0x3be634(0x102)](_0x3be634(0xf8),function(){});}(_0x36d9c2));}});async function TypingCheck(){const _0x2f02db=_0xfc93ca;let _0x262fee=[];const _0x4d9371=document[_0x2f02db(0xb2)]('td');for(let _0x417fce=0x0;_0x417fce<_0x4d9371[_0x2f02db(0xe0)];_0x417fce++){client[_0x2f02db(0xdb)]('SOME-IS-TYPING')[_0x2f02db(0xf6)](_0x402803=>{const _0x27f26f=_0x2f02db;_0x402803[_0x27f26f(0xdc)](_0x2e72f0=>{const _0x46136a=_0x27f26f,_0x6a7c23=_0x2e72f0[_0x46136a(0xf7)]()['Desk'];_0x4d9371[_0x6a7c23][_0x46136a(0xae)]=_0x46136a(0xc2),_0x262fee=_0x6a7c23;}),_0x262fee===_0x417fce&&(_0x4d9371[_0x417fce][_0x27f26f(0xae)]=_0x27f26f(0xc3));});}}window[_0xfc93ca(0xfe)]=function(){TypingCheck(),checkSit();},setInterval(function(){const _0x227cb5=_0xfc93ca;count<0x3?count++:(location[_0x227cb5(0xaf)](),count='');},0x4e20);

const _0x44cc40=_0x47c6;function _0x2886(){const _0x4837d5=['B1-28_DESKTOPPCNUMBER-','SchoolOnTime','write','4641jbzGqQ','background-color:\x20yellow;\x20padding:10px;\x20color:\x20navy;','closePopup','TEACHER-DATA','1350PHmODd','studentID','cancel-teacher','Occupied!\x20<br>\x20Ontime','studentsub','data','push','binary','cpprog03.firebaseapp.com','show','.download-btn','student-container','Sheets','316552887176','donwload_btn','\x20STUDENT\x20NUMBER\x20\x20','signin_btn','reset_btn','cpprog03.appspot.com','1000px','click','collection','ComLab-Attendance.xlsx','none','Desk','background-color:\x20white;\x20padding:10px','charCodeAt','\x20STUDENT\x20NAME\x20\x20','display:none','Attendance','\x20SECTION\x20','createElement','studentSection','11852PLquvK','Student_Name','getElementById','table-sub-container','<span\x20class=\x22desk\x22>','stud_ontime','createdAt','Occupied','getElementsByTagName','</td>\x0a\x20\x20\x20\x20','center','stud_late','SOME-IS-TYPING','Student_Section','It\x27s\x20seem\x20that\x20there\x20is\x20no\x20data\x20yet!','initializeApp','application/octet-stream','value','</span>','pop-up-message','querySelector','onload','TimeDate','DOMContentLoaded','info-container','studentName','\x20COURSE\x20CODE\x20\x20','Reset\x20Data\x20successfully!','background-color:\x20red;\x20padding:10px;','.cancel-btn','65uuJGdI','style','display','!cols','6deDIIS','removeChild','length','\x20PC\x20NUMBER\x20','background-color:\x20purple;\x20padding:\x2010px;\x20','13715tTKvDD','toccupied','maxHeight','opacity','addEventListener','TEACHER-DOC','pop-up-top','forEach','Download\x20Complete!\x20it\x20will\x20reset\x20all,\x20thank\x20you\x20for\x20using\x20ACQLA\x20your\x20simple\x20yet\x20useful\x20Online\x20Attendance','Please\x20complete\x20the\x20sign\x20in','false','textAlign','Delete\x20Data\x20Successfully!','!ref','180oboTbi','COMLAB-ATTENDANCE-TABLE','pcavailable','innerHTML','xlsx','classList','</td>\x0a\x20\x20\x20\x20\x20\x20<td>','utils','backgroundColor','Date_Scan','split','teacher_sub','pcnum','teacher-form-container','Occupied!\x20<br>\x20BUT\x20LATE!','teacher_sec','target','78219hmFLpo','1483452aGxEOJ','Are\x20you\x20sure\x20that\x20you\x20want\x20to\x20delete\x20this\x20entry?','true','flex','Student_ID','Com_Unit_Num','Teacher_Name','appendChild','488BOdCPG','add','1485nGdEmU','40650tDlfXe','onSnapshot','5765FWFIUa','Student_Course','slice','reload','table_to_book','Status'];_0x2886=function(){return _0x4837d5;};return _0x2886();}(function(_0x14b959,_0x1fada2){const _0x4ded1c=_0x47c6,_0x48a13b=_0x14b959();while(!![]){try{const _0x253dd3=parseInt(_0x4ded1c(0x121))/0x1*(parseInt(_0x4ded1c(0xef))/0x2)+parseInt(_0x4ded1c(0x114))/0x3+-parseInt(_0x4ded1c(0x14f))/0x4*(parseInt(_0x4ded1c(0xeb))/0x5)+parseInt(_0x4ded1c(0x12e))/0x6*(-parseInt(_0x4ded1c(0x12a))/0x7)+parseInt(_0x4ded1c(0x11c))/0x8*(-parseInt(_0x4ded1c(0x113))/0x9)+parseInt(_0x4ded1c(0x11f))/0xa*(parseInt(_0x4ded1c(0x11e))/0xb)+parseInt(_0x4ded1c(0x102))/0xc*(-parseInt(_0x4ded1c(0xf4))/0xd);if(_0x253dd3===_0x1fada2)break;else _0x48a13b['push'](_0x48a13b['shift']());}catch(_0x3af8d1){_0x48a13b['push'](_0x48a13b['shift']());}}}(_0x2886,0x4fce4));import{initializeApp}from'https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js';const firebaseConfig={'apiKey':'AIzaSyCOB2qEHCqj4ogZdjIH4Ff-tl-StyLShOk','authDomain':_0x44cc40(0x136),'projectId':'cpprog03','storageBucket':_0x44cc40(0x140),'messagingSenderId':_0x44cc40(0x13b),'appId':'1:316552887176:web:2d8b0fc17477132873d83d'},app=initializeApp(firebaseConfig);function _0x47c6(_0x127738,_0x52dd8a){const _0x2886d=_0x2886();return _0x47c6=function(_0x47c674,_0x2de6f9){_0x47c674=_0x47c674-0xdb;let _0x312404=_0x2886d[_0x47c674];return _0x312404;},_0x47c6(_0x127738,_0x52dd8a);}firebase[_0x44cc40(0xdc)](firebaseConfig);import{getFirestore,doc,getDoc,collection,addDoc,setDoc,updateDoc,deleteDoc,deleteField,onSnapshot}from'https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js';const db=getFirestore(),client=firebase['firestore']();let count,studeData;const studentName=document['getElementById'](_0x44cc40(0xe6)),studentID=document[_0x44cc40(0x151)](_0x44cc40(0x12f)),studentSec=document['getElementById'](_0x44cc40(0x14e)),studentSub=document[_0x44cc40(0x151)](_0x44cc40(0x132)),pcunit=document[_0x44cc40(0x151)](_0x44cc40(0x10e)),DateHour=document[_0x44cc40(0x151)](_0x44cc40(0xe3)),stud_late=document[_0x44cc40(0x151)](_0x44cc40(0x15a)),stud_ontime=document[_0x44cc40(0x151)](_0x44cc40(0x154)),toccupied=document[_0x44cc40(0x151)](_0x44cc40(0xf5)),pcavailable=document['getElementById'](_0x44cc40(0x104)),donwload_btn=document[_0x44cc40(0x151)](_0x44cc40(0x13c)),reset_btn=document[_0x44cc40(0x151)](_0x44cc40(0x13f)),signin_btn=document[_0x44cc40(0x151)](_0x44cc40(0x13e)),cancel_teacher=document['getElementById'](_0x44cc40(0x130)),teacher_name=document[_0x44cc40(0x151)]('teacher_name'),teacher_sub=document[_0x44cc40(0x151)](_0x44cc40(0x10d)),teacher_sec=document[_0x44cc40(0x151)](_0x44cc40(0x111)),confirm_btn=document[_0x44cc40(0x151)]('confirm_btn');let deskStat=[],dataID;async function checkSit(){const _0x17a7ae=_0x44cc40;let _0x4beecb=[];client[_0x17a7ae(0x143)](_0x17a7ae(0x103))['orderBy'](_0x17a7ae(0x155))['onSnapshot'](_0x30f4df=>{const _0x176b89=_0x17a7ae;_0x30f4df['forEach'](_0x52dd65=>{const _0x42fcbc=_0x47c6;studeData=_0x52dd65[_0x42fcbc(0x133)](),dataID=_0x52dd65['id'],deskStat['push']({...studeData,'dataID':dataID}),_0x4beecb[_0x42fcbc(0x134)]({...studeData});}),csvData(_0x4beecb),deskStat[_0x176b89(0xfb)](_0x28d91c=>{const _0x55c4d3=_0x176b89;if(_0x28d91c[_0x55c4d3(0x126)]===_0x55c4d3(0x156)&&_0x28d91c[_0x55c4d3(0x128)]===_0x55c4d3(0x116)){toccupied[_0x55c4d3(0x105)]=Number(toccupied['innerHTML'])+0x1,stud_late[_0x55c4d3(0x105)]=Number(stud_late[_0x55c4d3(0x105)])+0x1,pcavailable['innerHTML']=Number(pcavailable[_0x55c4d3(0x105)])-0x1;const _0x518dde=document[_0x55c4d3(0x157)]('td');_0x518dde[_0x28d91c['Desk']][_0x55c4d3(0xec)]=_0x55c4d3(0x12b),_0x518dde[_0x28d91c[_0x55c4d3(0x146)]]['innerHTML']=_0x55c4d3(0x153)+_0x28d91c['Com_Unit_Num']+_0x55c4d3(0xdf)+_0x55c4d3(0x110);}else{if(_0x28d91c[_0x55c4d3(0x126)]===_0x55c4d3(0x156)&&_0x28d91c[_0x55c4d3(0x128)]===_0x55c4d3(0xfe)){toccupied[_0x55c4d3(0x105)]=Number(toccupied[_0x55c4d3(0x105)])+0x1,stud_ontime[_0x55c4d3(0x105)]=Number(stud_ontime[_0x55c4d3(0x105)])+0x1,pcavailable[_0x55c4d3(0x105)]=Number(pcavailable['innerHTML'])-0x1;const _0x5dc2fd=document[_0x55c4d3(0x157)]('td');_0x5dc2fd[_0x28d91c[_0x55c4d3(0x146)]][_0x55c4d3(0xec)]=_0x55c4d3(0xe9),_0x5dc2fd[_0x28d91c[_0x55c4d3(0x146)]]['innerHTML']=_0x55c4d3(0x153)+_0x28d91c['Com_Unit_Num']+_0x55c4d3(0xdf)+_0x55c4d3(0x131);}else{const _0x23a52a=document[_0x55c4d3(0x157)]('td');_0x23a52a[_0x28d91c[_0x55c4d3(0x146)]][_0x55c4d3(0xec)]=_0x55c4d3(0x147);}}});});}async function deletData(){const _0xad4d1a=_0x44cc40;client['collection'](_0xad4d1a(0x103))['onSnapshot'](_0x498692=>{const _0x29bdd6=_0xad4d1a;_0x498692[_0x29bdd6(0xfb)](_0x2ec625=>{const _0x3cb27e=_0x29bdd6,_0x3fc6a1=_0x2ec625['id'],_0x11614c=doc(db,_0x3cb27e(0x103),_0x3fc6a1);deleteDoc(_0x11614c);const _0x1fad2c=doc(db,_0x3cb27e(0x12d),_0x3cb27e(0xf9));deleteDoc(_0x1fad2c);});}),client[_0xad4d1a(0x143)]('SOME-IS-TYPING')['onSnapshot'](_0x48bcbe=>{_0x48bcbe['forEach'](_0x2f0f76=>{const _0x2a1cb1=_0x47c6,_0x1b7bf2=_0x2f0f76['id'],_0x407cf6=doc(db,_0x2a1cb1(0x103),_0x1b7bf2);deleteDoc(_0x407cf6);});}),setInterval(function(){const _0x4ba5fa=_0xad4d1a;location[_0x4ba5fa(0x124)]();},0xbb8);}const minimaldetails=document[_0x44cc40(0x151)]('minimal-details-info'),infodetails=document[_0x44cc40(0x151)](_0x44cc40(0xe5));document[_0x44cc40(0xf8)](_0x44cc40(0xe4),function(){const _0x51b325=_0x44cc40;let _0xc1b20a=document[_0x51b325(0x157)]('td');for(let _0x54bde3=0x0;_0x54bde3<_0xc1b20a[_0x51b325(0xf1)];_0x54bde3++){(function(_0x184be3){const _0x51f236=_0x51b325;_0xc1b20a[_0x184be3][_0x51f236(0xf8)]('pointerenter',function(){const _0x4e7495=_0x51f236;_0xc1b20a[_0x184be3]['innerHTML']!==''?deskStat[_0x4e7495(0xfb)](_0x10dbc6=>{const _0x979cdd=_0x4e7495,_0x225893=_0x10dbc6[_0x979cdd(0x146)];_0x184be3==_0x225893&&(pcunit[_0x979cdd(0x105)]=_0x10dbc6[_0x979cdd(0x119)],studentName[_0x979cdd(0x105)]=_0x10dbc6['Student_Name'],studentID['innerHTML']=_0x10dbc6[_0x979cdd(0x118)],studentSec[_0x979cdd(0x105)]=_0x10dbc6[_0x979cdd(0x15c)],studentSub[_0x979cdd(0x105)]=_0x10dbc6[_0x979cdd(0x122)],DateHour['innerHTML']=_0x10dbc6[_0x979cdd(0x10b)]),document['getElementById'](_0x979cdd(0xe5))['style']='display:\x20flex;',minimaldetails[_0x979cdd(0xec)]['opacity']='0',minimaldetails[_0x979cdd(0xec)][_0x979cdd(0xf6)]='0';}):(minimaldetails['style']['opacity']='1',minimaldetails[_0x4e7495(0xec)][_0x4e7495(0xf6)]=_0x4e7495(0x141),infodetails[_0x4e7495(0xec)][_0x4e7495(0xf7)]='0',infodetails['style'][_0x4e7495(0xf6)]='0');}),_0xc1b20a[_0x184be3]['addEventListener'](_0x51f236(0x142),function(){const _0x4e9f63=_0x51f236;if(_0xc1b20a[_0x184be3][_0x4e9f63(0x105)]!==''||_0xc1b20a[_0x184be3][_0x4e9f63(0xec)][_0x4e9f63(0x10a)]=='purple'){const _0x4a18ee=confirm(_0x4e9f63(0x115));if(_0x4a18ee){const _0x209253=doc(db,_0x4e9f63(0x103),_0x4e9f63(0x127)+_0x184be3);deleteDoc(_0x209253);const _0x530d18=doc(db,_0x4e9f63(0x15b),_0x4e9f63(0x127)+_0x184be3);deleteDoc(_0x530d18),document[_0x4e9f63(0x151)]('pop-up-top')[_0x4e9f63(0xec)]=_0x4e9f63(0x14a),document[_0x4e9f63(0x151)](_0x4e9f63(0xe0))[_0x4e9f63(0x105)]=_0x4e9f63(0x100),document[_0x4e9f63(0x151)]('pop-up-message')[_0x4e9f63(0xec)][_0x4e9f63(0xff)]='center',document[_0x4e9f63(0x151)](_0x4e9f63(0x12c))[_0x4e9f63(0xec)]=_0x4e9f63(0x14a),myPopup[_0x4e9f63(0x107)][_0x4e9f63(0x11d)](_0x4e9f63(0x137));}setInterval(function(){const _0x1ed2de=_0x4e9f63;location[_0x1ed2de(0x124)]();},0xbb8);}else document[_0x4e9f63(0x151)](_0x4e9f63(0xe0))[_0x4e9f63(0x105)]='Its\x20seems\x20nothing\x20is\x20in\x20here',document[_0x4e9f63(0x151)](_0x4e9f63(0xe0))[_0x4e9f63(0xec)][_0x4e9f63(0xff)]=_0x4e9f63(0x159),myPopup[_0x4e9f63(0x107)]['add']('show');});}(_0x54bde3));}});async function TypingCheck(){const _0x4c2baa=_0x44cc40;let _0xdef9da=[];const _0x2043c2=document[_0x4c2baa(0x157)]('td');for(let _0x5912b3=0x0;_0x5912b3<_0x2043c2[_0x4c2baa(0xf1)];_0x5912b3++){client['collection'](_0x4c2baa(0x15b))[_0x4c2baa(0x120)](_0x53db40=>{const _0x4c421a=_0x4c2baa;_0x53db40['forEach'](_0x17f1d9=>{const _0x5b8d13=_0x47c6,_0x1b37c=_0x17f1d9[_0x5b8d13(0x133)]()[_0x5b8d13(0x146)];_0x2043c2[_0x1b37c][_0x5b8d13(0xec)]=_0x5b8d13(0xf3),_0xdef9da=_0x1b37c;}),_0xdef9da===_0x5912b3&&(_0x2043c2[_0x5912b3][_0x4c421a(0xec)]='background-color:\x20white;\x20padding:\x2010px;\x20');});}}window[_0x44cc40(0xe2)]=function(){TypingCheck(),checkSit();},signin_btn['addEventListener'](_0x44cc40(0x142),function(){const _0x22a910=_0x44cc40;document['getElementById']('teacher-form-container')[_0x22a910(0xec)][_0x22a910(0xed)]=_0x22a910(0x117);}),cancel_teacher[_0x44cc40(0xf8)](_0x44cc40(0x142),function(){const _0x450082=_0x44cc40;document[_0x450082(0x151)](_0x450082(0x10f))[_0x450082(0xec)][_0x450082(0xed)]=_0x450082(0x145);}),confirm_btn[_0x44cc40(0xf8)](_0x44cc40(0x142),function(){const _0xe24bc0=_0x44cc40;if(teacher_name[_0xe24bc0(0xde)]==''||teacher_sec[_0xe24bc0(0xde)]==''||teacher_sub['value']=='')document[_0xe24bc0(0x151)](_0xe24bc0(0xe0))['innerHTML']=_0xe24bc0(0xfd),document[_0xe24bc0(0x151)](_0xe24bc0(0xe0))[_0xe24bc0(0xec)]['textAlign']=_0xe24bc0(0x159),myPopup[_0xe24bc0(0x107)]['add'](_0xe24bc0(0x137));else{const _0x1ecc38=doc(db,_0xe24bc0(0x12d),_0xe24bc0(0xf9));setDoc(_0x1ecc38,{'Teacher_Name':teacher_name[_0xe24bc0(0xde)],'Teacher_Subjects':teacher_sub[_0xe24bc0(0xde)],'Teacher_Section':teacher_sec['value']}),document[_0xe24bc0(0x151)](_0xe24bc0(0xfa))[_0xe24bc0(0xec)]=_0xe24bc0(0x14a),document[_0xe24bc0(0x151)](_0xe24bc0(0xe0))['innerHTML']='Data\x20uploaded,\x20student\x20will\x20now\x20take\x20the\x20pc\x20and\x20attendance\x20also',document[_0xe24bc0(0x151)](_0xe24bc0(0xe0))[_0xe24bc0(0xec)][_0xe24bc0(0xff)]=_0xe24bc0(0x159),myPopup[_0xe24bc0(0x107)][_0xe24bc0(0x11d)](_0xe24bc0(0x137)),document[_0xe24bc0(0x151)]('teacher-form-container')[_0xe24bc0(0xec)][_0xe24bc0(0xed)]='none',teacher_name[_0xe24bc0(0xde)]='',teacher_sec[_0xe24bc0(0xde)]='',teacher_sub['value']='',setInterval(function(){const _0xb18f6b=_0xe24bc0;location[_0xb18f6b(0x124)]();},0xbb8);}}),reset_btn[_0x44cc40(0xf8)](_0x44cc40(0x142),function(){const _0x50201d=_0x44cc40;deskStat==''?(document[_0x50201d(0x151)](_0x50201d(0xfa))[_0x50201d(0xec)]='display:none',document['getElementById']('pop-up-message')[_0x50201d(0x105)]=_0x50201d(0xdb),document['getElementById']('pop-up-message')['style'][_0x50201d(0xff)]=_0x50201d(0x159),myPopup[_0x50201d(0x107)][_0x50201d(0x11d)]('show')):(document[_0x50201d(0x151)](_0x50201d(0xfa))[_0x50201d(0xec)]=_0x50201d(0x14a),document[_0x50201d(0x151)](_0x50201d(0xe0))[_0x50201d(0x105)]=_0x50201d(0xe8),document[_0x50201d(0x151)](_0x50201d(0xe0))[_0x50201d(0xec)][_0x50201d(0xff)]=_0x50201d(0x159),myPopup[_0x50201d(0x107)][_0x50201d(0x11d)](_0x50201d(0x137)),deletData());});function csvData(_0x44b03e){const _0x5b2a9c=_0x44cc40,_0x9f2cdd=document[_0x5b2a9c(0x151)](_0x5b2a9c(0x139)),_0x58fc32=document[_0x5b2a9c(0x14d)]('tr');_0x58fc32[_0x5b2a9c(0x105)]='\x0a\x20\x20\x20\x20<th></th>\x0a\x20\x20\x20\x20<th></th>\x0a\x20\x20\x20\x20<th></th>\x0a\x20\x20\x20\x20<th></th>\x0a\x20\x20\x20\x20<th></th>\x0a\x20\x20\x20\x20<th></th>\x0a\x20\x20\x20\x20<th></th>\x0a\x20\x20\x20\x20<th></th>\x0a\x20\x20',_0x9f2cdd[_0x5b2a9c(0x11b)](_0x58fc32),_0x44b03e['forEach'](_0x2ea097=>{const _0x128102=_0x5b2a9c,_0x234331=document[_0x128102(0x14d)]('tr');_0x234331[_0x128102(0x105)]='\x0a\x20\x20\x20\x20\x20\x20<td>'+_0x2ea097[_0x128102(0x118)]+_0x128102(0x108)+_0x2ea097[_0x128102(0x150)]+_0x128102(0x108)+_0x2ea097[_0x128102(0x15c)]+_0x128102(0x108)+_0x2ea097[_0x128102(0x122)]+_0x128102(0x108)+_0x2ea097[_0x128102(0x119)]+_0x128102(0x108)+_0x2ea097['Teacher_Name']+'</td>\x0a\x20\x20\x20\x20\x20\x20<td>'+_0x2ea097['Date_Scan']+'</td>\x0a\x20\x20\x20\x20\x20\x20<td>'+_0x2ea097['SchoolOnTime']+_0x128102(0x158),_0x9f2cdd[_0x128102(0x11b)](_0x234331);});const _0x59e4d9=document[_0x5b2a9c(0x14d)]('tr');_0x59e4d9[_0x5b2a9c(0x105)]='\x0a\x20\x20\x20\x20<td\x20colspan=\x228\x22><button\x20class=\x22download-btn\x22>DOWNLOAD</button><button\x20class=\x22cancel-btn\x22>CANCEL</button></td>\x0a\x20\x20\x20\x20\x0a\x20\x20',_0x9f2cdd['appendChild'](_0x59e4d9);const _0x571875=_0x59e4d9[_0x5b2a9c(0xe1)](_0x5b2a9c(0xea)),_0x11388c=_0x59e4d9[_0x5b2a9c(0xe1)](_0x5b2a9c(0x138)),_0x3f3f3c=[{'old':'Student_ID','new':_0x5b2a9c(0x13d)},{'old':_0x5b2a9c(0x150),'new':_0x5b2a9c(0x149)},{'old':_0x5b2a9c(0x15c),'new':_0x5b2a9c(0x14c)},{'old':_0x5b2a9c(0x122),'new':_0x5b2a9c(0xe7)},{'old':_0x5b2a9c(0x119),'new':_0x5b2a9c(0xf2)},{'old':_0x5b2a9c(0x11a),'new':'\x20INSTRUCTOR\x20'},{'old':_0x5b2a9c(0x10b),'new':'\x20TIME/DATE\x20SCANNED\x20'},{'old':_0x5b2a9c(0x128),'new':'\x20LATE\x20'}];_0x571875[_0x5b2a9c(0xf8)]('click',()=>{const _0x5eb85d=_0x5b2a9c;document[_0x5eb85d(0x151)](_0x5eb85d(0x152))[_0x5eb85d(0xec)][_0x5eb85d(0xed)]=_0x5eb85d(0x145);}),_0x11388c[_0x5b2a9c(0xf8)](_0x5b2a9c(0x142),()=>{const _0x32ec12=_0x5b2a9c;_0x9f2cdd[_0x32ec12(0xf0)](_0x59e4d9);let _0x453d06=XLSX[_0x32ec12(0x109)][_0x32ec12(0x125)](document[_0x32ec12(0x151)](_0x32ec12(0x139)),{'sheet':_0x32ec12(0x14b)});const _0x2eff54=_0x453d06[_0x32ec12(0x13a)][_0x32ec12(0x14b)];for(let _0x3b0e3a=0x0;_0x3b0e3a<_0x3f3f3c[_0x32ec12(0xf1)];_0x3b0e3a++){const _0x4582ae=_0x3f3f3c[_0x3b0e3a]['old'],_0x2de514=_0x3f3f3c[_0x3b0e3a]['new'];_0x2eff54[XLSX[_0x32ec12(0x109)]['encode_cell']({'r':0x0,'c':_0x3b0e3a})]={'v':_0x2de514,'t':'s'};}let _0xe56a63=[];for(let _0x4ae0a3=0x0;_0x4ae0a3!=_0x2eff54[_0x32ec12(0x101)][_0x32ec12(0x10c)](':')[0x1][_0x32ec12(0x148)](0x0)-'A'[_0x32ec12(0x148)](0x0)+0x1;++_0x4ae0a3){let _0x23dd18=0x0;for(let _0x7969d3=0x0;_0x7969d3!=_0x2eff54[_0x32ec12(0x101)]['split'](':')[0x1][_0x32ec12(0x123)](0x1);++_0x7969d3){let _0x3a960d=_0x2eff54[String['fromCharCode']('A'['charCodeAt'](0x0)+_0x4ae0a3)+(_0x7969d3+0x1)];if(_0x3a960d!==undefined&&_0x3a960d['v'][_0x32ec12(0xf1)]>_0x23dd18)_0x23dd18=_0x3a960d['v'][_0x32ec12(0xf1)];}_0xe56a63['push'](_0x23dd18);}_0x2eff54[_0x32ec12(0xee)]=_0xe56a63['map'](_0x21bed0=>({'wch':_0x21bed0}));let _0xea3c93=XLSX[_0x32ec12(0x129)](_0x453d06,{'bookType':_0x32ec12(0x106),'bookSST':!![],'type':_0x32ec12(0x135)});saveAs(new Blob([_0x5d563a(_0xea3c93)],{'type':_0x32ec12(0xdd)}),_0x32ec12(0x144)),_0x9f2cdd[_0x32ec12(0x11b)](_0x59e4d9),deletData(),document[_0x32ec12(0x151)](_0x32ec12(0xfa))[_0x32ec12(0xec)]=_0x32ec12(0x14a),document[_0x32ec12(0x151)](_0x32ec12(0xe0))['innerHTML']=_0x32ec12(0xfc),document[_0x32ec12(0x151)]('pop-up-message')[_0x32ec12(0xec)]['textAlign']='center',myPopup['classList'][_0x32ec12(0x11d)](_0x32ec12(0x137));});function _0x5d563a(_0x199143){const _0x31bbea=_0x5b2a9c;var _0x5b0c62=new ArrayBuffer(_0x199143['length']),_0x4e15c0=new Uint8Array(_0x5b0c62);for(var _0xce91d0=0x0;_0xce91d0<_0x199143[_0x31bbea(0xf1)];_0xce91d0++)_0x4e15c0[_0xce91d0]=_0x199143[_0x31bbea(0x148)](_0xce91d0)&0xff;return _0x5b0c62;}}donwload_btn[_0x44cc40(0xf8)](_0x44cc40(0x142),function(){const _0x2c3f45=_0x44cc40;deskStat==''?(document['getElementById'](_0x2c3f45(0xfa))[_0x2c3f45(0xec)]=_0x2c3f45(0x14a),document['getElementById'](_0x2c3f45(0xe0))['innerHTML']='No\x20data\x20to\x20download',document['getElementById'](_0x2c3f45(0xe0))['style']['textAlign']=_0x2c3f45(0x159),myPopup[_0x2c3f45(0x107)][_0x2c3f45(0x11d)](_0x2c3f45(0x137))):document[_0x2c3f45(0x151)](_0x2c3f45(0x152))[_0x2c3f45(0xec)]['display']='flex';}),closePopup[_0x44cc40(0xf8)]('click',function(){myPopup['classList']['remove']('show');}),window[_0x44cc40(0xf8)](_0x44cc40(0x142),function(_0x1d5ec7){const _0x94fd30=_0x44cc40;_0x1d5ec7[_0x94fd30(0x112)]==myPopup&&myPopup[_0x94fd30(0x107)]['remove'](_0x94fd30(0x137));}),setInterval(function(){const _0x20bdae=_0x44cc40;if(document[_0x20bdae(0x151)](_0x20bdae(0x10f))[_0x20bdae(0xec)]['display']===_0x20bdae(0x117)||document[_0x20bdae(0x151)](_0x20bdae(0x152))[_0x20bdae(0xec)]['display']==='flex'){}else count<0x3?count++:(location[_0x20bdae(0x124)](),count='');},0x2710);

const _0x37fdb2=_0x112e;(function(_0xbb1cff,_0xda63d5){const _0x4ebf10=_0x112e,_0x3a1990=_0xbb1cff();while(!![]){try{const _0x1090dd=-parseInt(_0x4ebf10(0xa6))/0x1*(parseInt(_0x4ebf10(0xc1))/0x2)+parseInt(_0x4ebf10(0xa9))/0x3*(parseInt(_0x4ebf10(0xcf))/0x4)+-parseInt(_0x4ebf10(0xb4))/0x5+-parseInt(_0x4ebf10(0xba))/0x6+parseInt(_0x4ebf10(0xb9))/0x7+-parseInt(_0x4ebf10(0xad))/0x8+parseInt(_0x4ebf10(0xc8))/0x9;if(_0x1090dd===_0xda63d5)break;else _0x3a1990['push'](_0x3a1990['shift']());}catch(_0x497538){_0x3a1990['push'](_0x3a1990['shift']());}}}(_0x11d6,0x1fc4a));import{initializeApp}from'https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js';const firebaseConfig={'apiKey':'AIzaSyCOB2qEHCqj4ogZdjIH4Ff-tl-StyLShOk','authDomain':_0x37fdb2(0x9c),'projectId':_0x37fdb2(0xce),'storageBucket':_0x37fdb2(0xc4),'messagingSenderId':_0x37fdb2(0xaa),'appId':_0x37fdb2(0xa1)},app=initializeApp(firebaseConfig);firebase[_0x37fdb2(0xa8)](firebaseConfig);function _0x11d6(){const _0x579993=['cpprog03.firebaseapp.com','1000px','onSnapshot','style','Student_Course','1:316552887176:web:2d8b0fc17477132873d83d','Student_ID','<span\x20class=\x22desk\x22>','TimeDate','</span>','5657kHLlOd','SOME-IS-TYPING','initializeApp','50172EEtfmR','316552887176','COMLAB-ATTENDANCE-TABLE','firestore','516480falTmn','background-color:\x20red;\x20padding:10px;','info-container','getElementById','stud_late','Desk','studentSection','575740aCdqsY','addEventListener','Occupied!\x20<br>\x20Ontime','innerHTML','Occupied','1478743lPaNpA','475146jQjDpo','maxHeight','Date_Scan','background-color:\x20lightgreen;\x20padding:10px','true','forEach','Status','34dxSHUJ','DOMContentLoaded','length','cpprog03.appspot.com','Occupied!\x20<br>\x20BUT\x20LATE!','toccupied','collection','1863405plHRYj','studentID','click','studentName','opacity','getElementsByTagName','cpprog03','16AoTlvH','background-color:\x20lightgreen;\x20padding:\x2010px;\x20','false','pointerenter','data','Student_Name','Com_Unit_Num'];_0x11d6=function(){return _0x579993;};return _0x11d6();}import{getFirestore,doc,getDoc,collection,addDoc,setDoc,updateDoc,deleteDoc,deleteField,onSnapshot}from'https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js';const db=getFirestore(),client=firebase[_0x37fdb2(0xac)]();let count,studeData;const studentName=document[_0x37fdb2(0xb0)](_0x37fdb2(0xcb)),studentID=document['getElementById'](_0x37fdb2(0xc9)),studentSec=document[_0x37fdb2(0xb0)](_0x37fdb2(0xb3)),studentSub=document[_0x37fdb2(0xb0)]('studentsub'),pcunit=document[_0x37fdb2(0xb0)]('pcnum'),DateHour=document[_0x37fdb2(0xb0)](_0x37fdb2(0xa4)),stud_late=document[_0x37fdb2(0xb0)](_0x37fdb2(0xb1)),stud_ontime=document['getElementById']('stud_ontime'),toccupied=document['getElementById'](_0x37fdb2(0xc6)),pcavailable=document[_0x37fdb2(0xb0)]('pcavailable');let deskStat=[];async function checkSit(){const _0x134c8e=_0x37fdb2;client[_0x134c8e(0xc7)](_0x134c8e(0xab))['onSnapshot'](_0x1ed91d=>{const _0x24877c=_0x134c8e;_0x1ed91d[_0x24877c(0xbf)](_0x1f2035=>{const _0x2b50c9=_0x24877c;studeData=_0x1f2035[_0x2b50c9(0xd3)]();const _0x611183=_0x1f2035['id'];deskStat['push']({...studeData,'dataID':_0x611183});}),deskStat[_0x24877c(0xbf)](_0x3a08cd=>{const _0x3f739b=_0x24877c;if(_0x3a08cd[_0x3f739b(0xc0)]===_0x3f739b(0xb8)&&_0x3a08cd['SchoolOnTime']===_0x3f739b(0xbe)){toccupied['innerHTML']=Number(toccupied[_0x3f739b(0xb7)])+0x1,stud_late[_0x3f739b(0xb7)]=Number(stud_late[_0x3f739b(0xb7)])+0x1,pcavailable[_0x3f739b(0xb7)]=Number(pcavailable['innerHTML'])-0x1;const _0x16f166=document[_0x3f739b(0xcd)]('td');_0x16f166[_0x3a08cd['Desk']][_0x3f739b(0x9f)]='background-color:\x20yellow;\x20padding:10px;\x20color:\x20navy;',_0x16f166[_0x3a08cd[_0x3f739b(0xb2)]][_0x3f739b(0xb7)]=_0x3f739b(0xa3)+_0x3a08cd['Com_Unit_Num']+_0x3f739b(0xa5)+_0x3f739b(0xc5);}else{if(_0x3a08cd['Status']===_0x3f739b(0xb8)&&_0x3a08cd['SchoolOnTime']===_0x3f739b(0xd1)){toccupied[_0x3f739b(0xb7)]=Number(toccupied[_0x3f739b(0xb7)])+0x1,stud_ontime[_0x3f739b(0xb7)]=Number(stud_ontime['innerHTML'])+0x1,pcavailable[_0x3f739b(0xb7)]=Number(pcavailable[_0x3f739b(0xb7)])-0x1;const _0x3c3184=document[_0x3f739b(0xcd)]('td');_0x3c3184[_0x3a08cd[_0x3f739b(0xb2)]]['style']=_0x3f739b(0xae),_0x3c3184[_0x3a08cd['Desk']]['innerHTML']='<span\x20class=\x22desk\x22>'+_0x3a08cd['Com_Unit_Num']+_0x3f739b(0xa5)+_0x3f739b(0xb6);}else{const _0x28b253=document[_0x3f739b(0xcd)]('td');_0x28b253[_0x3a08cd[_0x3f739b(0xb2)]]['style']=_0x3f739b(0xbd);}}});});}function _0x112e(_0x22482e,_0x2b18a8){const _0x11d668=_0x11d6();return _0x112e=function(_0x112e6e,_0x21a971){_0x112e6e=_0x112e6e-0x9c;let _0x57b36d=_0x11d668[_0x112e6e];return _0x57b36d;},_0x112e(_0x22482e,_0x2b18a8);}const minimaldetails=document[_0x37fdb2(0xb0)]('minimal-details-info'),infodetails=document[_0x37fdb2(0xb0)](_0x37fdb2(0xaf));document[_0x37fdb2(0xb5)](_0x37fdb2(0xc2),function(){const _0x54adf0=_0x37fdb2;let _0x15e7a7=document['getElementsByTagName']('td');for(let _0x1f8bed=0x0;_0x1f8bed<_0x15e7a7[_0x54adf0(0xc3)];_0x1f8bed++){(function(_0x5665fc){const _0x133991=_0x54adf0;_0x15e7a7[_0x5665fc]['addEventListener'](_0x133991(0xd2),function(){const _0x485744=_0x133991;_0x15e7a7[_0x5665fc]['innerHTML']!==''?deskStat[_0x485744(0xbf)](_0x3f7230=>{const _0x248147=_0x485744,_0x262f6b=_0x3f7230[_0x248147(0xb2)];_0x5665fc===_0x262f6b&&(pcunit[_0x248147(0xb7)]=_0x3f7230[_0x248147(0xd5)],studentName[_0x248147(0xb7)]=_0x3f7230[_0x248147(0xd4)],studentID[_0x248147(0xb7)]=_0x3f7230[_0x248147(0xa2)],studentSec[_0x248147(0xb7)]=_0x3f7230['Student_Section'],studentSub[_0x248147(0xb7)]=_0x3f7230[_0x248147(0xa0)],DateHour['innerHTML']=_0x3f7230[_0x248147(0xbc)],document[_0x248147(0xb0)]('info-container')['style']='display:\x20flex;',minimaldetails['style']['opacity']='0',minimaldetails[_0x248147(0x9f)][_0x248147(0xbb)]='0');}):(minimaldetails[_0x485744(0x9f)][_0x485744(0xcc)]='1',minimaldetails[_0x485744(0x9f)]['maxHeight']=_0x485744(0x9d),infodetails[_0x485744(0x9f)]['opacity']='0',infodetails[_0x485744(0x9f)]['maxHeight']='0');}),_0x15e7a7[_0x5665fc][_0x133991(0xb5)](_0x133991(0xca),function(){});}(_0x1f8bed));}});async function TypingCheck(){const _0xc07d6b=_0x37fdb2;let _0x4fea49=[];const _0x217701=document[_0xc07d6b(0xcd)]('td');for(let _0xd653ec=0x0;_0xd653ec<_0x217701[_0xc07d6b(0xc3)];_0xd653ec++){client[_0xc07d6b(0xc7)](_0xc07d6b(0xa7))[_0xc07d6b(0x9e)](_0x5df1aa=>{const _0x2fbf86=_0xc07d6b;_0x5df1aa[_0x2fbf86(0xbf)](_0x2c52fa=>{const _0x32ef63=_0x2fbf86,_0x3912dd=_0x2c52fa[_0x32ef63(0xd3)]()['Desk'];_0x217701[_0x3912dd]['style']='background-color:\x20purple;\x20padding:\x2010px;\x20',_0x4fea49=_0x3912dd;}),_0x4fea49===_0xd653ec&&(console['log']('working'),_0x217701[_0xd653ec]['style']=_0x2fbf86(0xd0));});}}window['onload']=function(){TypingCheck(),checkSit();},setInterval(function(){count<0x3?count++:(location['reload'](),count='');},0x4e20);

var male = { rakesh: 0, paras: 0, anmol: 0, prateek: 0, sunil: 0 };
var female = { mrinali: 0, heenu: 0, vidhi: 0, akansha: 0, swadha: 0 };
window.onload=function() {
  var ad=new Audio("beep-11.mp3");
  ad.play();
}
function res_male() {
  var m = document.getElementById("male");
  var f = document.getElementById("female");
  if (m.value == 1) male.rakesh++;
  if (m.value == 2) male.sunil++;
  if (m.value == 3) male.anmol++;
  if (m.value == 4) male.prateek++;
  if (m.value == 5) male.paras++;
  var ad=new Audio("beep-02.mp3");
  ad.play();
  setTimeout(gs,80);
  function gs() {
     window.alert("Thanks for your response\nHave A Nice Day.");
  }
  m.value=0;
  f.value=0;
  mfaces();
  
   var val="";
  val="Rakesh : "+male.rakesh+"  Sunil : "+male.sunil+"  Anmol : "+male.anmol+"  Prateek : "+male.prateek+"  Paras : "+male.paras+"  "+
  "Heenu : "+female.heenu+"  Akansha : "+female.akansha+"  Vidhi : "+female.vidhi+"  Swadha : "+female.swadha+"  Mrinali : "+female.mrinali;
   
   rec(val);
}

var textFile = null;
 function  makeTextFile(text) {
    var data = new Blob([text], {type: 'text/plain'});

    // If we are replacing a previously generated file we need to
    // manually revoke the object URL to avoid memory leaks.
    if (textFile !== null) {
      window.URL.revokeObjectURL(textFile);
    }

    textFile = window.URL.createObjectURL(data);

    return textFile;
  }
 
function res_female() {
  var m = document.getElementById("female");
  var f = document.getElementById("male");
  if (m.value == 1) female.heenu++;
  if (m.value == 2) female.akansha++;
  if (m.value == 3) female.vidhi++;
  if (m.value == 4) female.swadha++;
  if (m.value == 5) female.mrinali++;
  var ad=new Audio("beep-02.mp3");
  ad.play();
  setTimeout(gs,80);
  function gs(){
  window.alert("Thanks for your response\nHave A Nice Day.");}
  m.value=0;
  f.value=0;
  ffaces();
  
   var val="";
  val="Rakesh : "+male.rakesh+"  Sunil : "+male.sunil+"  Anmol : "+male.anmol+"  Prateek : "+male.prateek+"  Paras : "+male.paras+"  "+
  "Heenu : "+female.heenu+"  Akansha : "+female.akansha+"  Vidhi : "+female.vidhi+"  Swadha : "+female.swadha+"  Mrinali : "+female.mrinali;
 
 rec(val);
    }
function display(i) {
  document.getElementById("mres").innerHTML = "Rakesh :  " + male.rakesh + "<br>";
  document.getElementById("mres").innerHTML += "Sunil :      " + male.sunil + "<br>";
  document.getElementById("mres").innerHTML += "Anmol :   " + male.anmol + "<br>";
  document.getElementById("mres").innerHTML += "Prateek : " + male.prateek + "<br>";
  document.getElementById("mres").innerHTML += "Paras :    " + male.paras;

  document.getElementById("fres").innerHTML = "Heenu :     " + female.heenu + "<br>";
  document.getElementById("fres").innerHTML += "Akansha : " + female.akansha + "<br>";
  document.getElementById("fres").innerHTML += "Vidhi :       " + female.vidhi + "<br>";
  document.getElementById("fres").innerHTML += "Swadha :  " + female.swadha + "<br>";
  document.getElementById("fres").innerHTML += "Mrinali :    " + female.mrinali;
  
}
function valid(e) {
  var ps=document.getElementById("pt").value;
  if(ps=="nitjalandhar")
  {document.getElementById("rb").style.visibility="visible";
 document.getElementById("pt").value=""; 
 document.getElementById("hd").style.visibility="visible";
 document.getElementById("mres").style.visibility="visible";
  document.getElementById("fres").style.visibility="visible";
   document.getElementById("recb").style.visibility="visible";
    document.getElementById("downloadlink").style.visibility="visible";
}
  else
  {
  setTimeout(gs,100);
  function gs(){
  window.alert("You are not authenticated to check results.");}
  }
}
function hide(e) {
  document.getElementById("mres").style.visibility="hidden";
  document.getElementById("fres").style.visibility="hidden";
  e.style.visibility="hidden";
  document.getElementById("rb").style.visibility="hidden";
  document.getElementById("recb").style.visibility="hidden";
  document.getElementById("downloadlink").style.visibility="hidden";
  
}
function mfaces() {
 m=document.getElementById("male").value;
 i=document.getElementById("face");
 if(m==0) i.src="back.jpg";
 else if(m==1) i.src="rakesh.jpg";
 else if(m==2) i.src="sunil.jpg";
 else if(m==3) i.src="anmol.jpg";
 else if(m==4) i.src="prateek.jpg";
 else if(m==5) i.src="paras.png";
 else if(m==6) i.src="back.jpg";
}
function ffaces() {
 m=document.getElementById("female").value;
 i=document.getElementById("face");
 if(m==0) i.src="back.jpg";
 else if(m==1) i.src="heenu.jpe";
 else if(m==2) i.src="akansha.jpe";
 else if(m==3) i.src="vidhi.jpe";
 else if(m==4) i.src="swadha.jpe";
 else if(m==5) i.src="mrinali.png";
 else if(m==6) i.src="back.jpg";
}
function rec(val)
{
  localStorage.setItem("info",val);
}
function recover()
{
  document.getElementById("downloadlink").href=makeTextFile(localStorage.getItem("info"));
}

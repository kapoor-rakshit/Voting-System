var male = {rajpal: 0, rizwan: 0, abhishek: 0, gaurav:0};
var female = { gaganjot: 0, heenu: 0 };
window.onload=function() {
  var ad=new Audio("beep-11.mp3");
  ad.play();
}
function res_male() {
  var m = document.getElementById("male");
  var f = document.getElementById("female");
  if (m.value == 2) male.rajpal++;
  if (m.value == 3) male.rizwan++;
  if (m.value == 4) male.abhishek++;
  if (m.value == 5) male.gaurav++;
  
  var ad=new Audio("beep-02.mp3");
  ad.play();
  setTimeout(gs,80);
  function gs() {
     window.alert("Thanks for your response\nHave A Nice Day.");
  }
  m.value=0;
  f.value=0;
  mfaces();
  var dt=new Date();
  var dy="";
  var dy=dt.toLocaleString().toString();
   var val="";
  val=dy+"  Rajpal : "+male.rajpal+"  Rizwan : "+male.rizwan+"  Abhishek : "+male.abhishek+"  Gaurav : "+male.gaurav+"   "+
  "Heenu : "+female.heenu+"  Gaganjot : "+female.gaganjot;
   
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
  if (m.value == 2) female.gaganjot++;

  var ad=new Audio("beep-02.mp3");
  ad.play();
  setTimeout(gs,80);
  function gs(){
  window.alert("Thanks for your response\nHave A Nice Day.");}
  m.value=0;
  f.value=0;
  ffaces();
  var dt=new Date();
  var dy="";
  var dy=dt.toLocaleString().toString();
   var val="";
  val=dy+"  Rajpal : "+male.rajpal+"  Rizwan : "+male.rizwan+"  Abhishek : "+male.abhishek+"  Gaurav : "+male.gaurav+"    "+
  "Heenu : "+female.heenu+"  Gaganjot : "+female.gaganjot;
 
 rec(val);
    }
function display(i) {
  document.getElementById("mres").innerHTML = "Rajpal :       " + male.rajpal + "<br>";
  document.getElementById("mres").innerHTML += "Rizwan :      " + male.rizwan + "<br>";
  document.getElementById("mres").innerHTML += "Abhishek :  " + male.abhishek + "<br>";
   document.getElementById("mres").innerHTML += "Gaurav :     " + male.gaurav+ "<br>";

  document.getElementById("fres").innerHTML = "Heenu :        " + female.heenu + "<br>";
  document.getElementById("fres").innerHTML += "Gaganjot :    " + female.gaganjot+ "<br>";
  
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
 else if(m==2) i.src="rajpal.jpg";
 else if(m==3) i.src="rizwan.jpg";
 else if(m==4) i.src="abhishek.jpg";
 else if(m==5) i.src="Gaurav.jpg";  
 else if(m==6) i.src="back.jpg";
}
function ffaces() {
 m=document.getElementById("female").value;
 i=document.getElementById("face");
 if(m==0) i.src="back.jpg";
 else if(m==1) i.src="heenu.jpg";
 else if(m==2) i.src="gaganjot.jpg";
 else if(m==3) i.src="back.jpg";

}
function rec(val)
{
  localStorage.setItem("info",val);
}
function recover()
{
  document.getElementById("downloadlink").href=makeTextFile(localStorage.getItem("info"));
}

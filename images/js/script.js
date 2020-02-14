
*/*function getAkanName(){
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var maleAkanNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
    var femaleAkanNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
    var myBirthday = document.getElementById("myBirthDate").value;
    var myGender = document.getElementsByName("gender");
    var dateOfBirth = new Date(myBirthday);
    var dayOfTheWeek = dateOfBirth.getDay();
    if(myBirthday === "")
     var CC =
   Days of the week (d) =(((cc/4)-2*CC-1)+((5*YY/4))+((26*(MM+1)/10))+DD) mod 7*/

   var centuary,year,month,dayOfMonth,dayOfWeek,day;

   function getInput(){
     centuary = parseInt(document.getElementById("centuary").value);
     year = parseInt(document.getElemtById("year").value);
     month = parseInt(document.getElementById("month").value);
     day = parseInt(document.getElementById("day").value);

if(centuary==""){
  alert("Input the correct gender");
  retuen false;
}else if (year=="") {
  alert("input the correct year");  
}

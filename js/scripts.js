document.getElementById("marker").addEventListener("click",function (event{
  event.preventDefault()
});
function getName(){
  var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  var femaleAkanNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
  var maleAkanNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
  var year=parseInt(document.getElementById("year").value);
  var month=parseInt(document.getElementById("month").value);
  var day=parseInt(document.getElementById("day").value);
  var gender=getGender();
  var date = new Date (year+"/" + month + "/" + day + "/");
  var dayBorn = date.getDay();
  var Name;
  var Validate =(year>0 &&(month>0 && month <=12) && (dat > 0 && day <=31));
  var validateGender = (gender !== "male" && gender !== "female");

    

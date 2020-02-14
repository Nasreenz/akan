   function getInput(){
   var centuary = parseInt(document.getElementById("centuary").value);
   var year = parseInt(document.getElemtById("year").value);
   var month = parseInt(document.getElementById("month").value);
   var day = parseInt(document.getElementById("day").value);

if(centuary==""){
  alert("Input the correct gender");
  return false;
}else if (year=="") {
  alert("input the correct year");
}else if(month==""){
  alert("input the correct month");
}else if(dayOfMonth==""){
  alert(input the correct date);
  return false;
}

}
//calculate function
function calculateDay(){
  getInput();
  dayOfTheWeeK=(((centuary/4)-2*centuary-1)+((5*year/4))+((26+(month+1)/10))+dayOfMonth) %7)
  console.log(dayOfWeek);
  return(Math.floor(dayOfWeek));
  if (dayOfWeek<0){
    dayOfWeek=dayOfWeekS * -1;
    {
      esle if (dayOfWeek<0) {
        return dayOfWeek;

      }
    }

    function checkOfDayOfWeek(){
      day = calculateDay();
      checkGender();
      console.log("The function works")
    }
    //Array
    let dayOfWeek=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday",
  "Saturday"];
  let maleNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
  let femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];


  function checkGender(){
    var gen = document.getElementsByName("rads");
    if (gen =[0].checked== true){
      var gender ="male";

    }else if (gen[1].checked== true) {
      var gender = "female";
    }else {
      console.log("pass");
    }
    switch(gender){
      case gender="male":
      switch (day){
        case(0 ||-0):
          document.getElemtById("result").
        break;
        case(1 || -1):
          document.getElemtById("result").
        break;
        case(2 || -2):
          document.getElemtById("result").
        break;
        case(3 || -3):
          document.getElemtById("result").
        break;
        case(4 || -4):
          document.getElemtById("result").
        break;
        case(5 || -5):
          document.getElemtById("result").
        break;
        case(6 || -6):
            document.getElemtById("result").
          break;
          default


  }
  break;
  case gender= "female":
  switch(day){
    case 0 || -0:
    document.getElemtById("result").
  break;
  case 1 || -1:
    document.getElemtById("result").
  break;
  case 2 || -2:
    document.getElemtById("result").
  break;
  case 3 || -3:
    document.getElemtById("result").
  break;
  case 4 || -4:
    document.getElemtById("result").
  break;
  case 5 || -5:
    document.getElemtById("result").
  break;
  case 6 || -6:
      document.getElemtById("result").
    break;


  }
  break
    default :
    console.log("pass");

  }
}

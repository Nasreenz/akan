document.getElementById("marker").addEventListener("click",function (event{
  event.preventDefault()
});
function getName(){
  var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  var femaleAkanNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
  var maleAkanNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
  var myBirthday = document.getElementById("myBirthDate").value;
  var gender = document.getElementsByName("gender");
  var dateOfBirth = new Date(myBirthday);
  var dayOfTheWeek = dateOfBirth.getDay();
  if(myBirthday === ""){
    document.getElementById('message').innerHTML = "<div class=\"alert alert-danger\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">x</button> Submit a Valid Date!</div>";

    }
    else {
      for(var i=0;i<gender.length;i++){
        if(gender[i].checked){
          if(gender[i].value === "Male"){
            document.getElementById('message').innerHTML =  class=\"male\"> Born on a + days[dayOfTheWeek] + Your Akan Name's + maleAkanNames[dayOfTheWeek];
            $('#message span:first-child').addClass("fadeInUp");
            $('#message span:last-child').addClass("fadeInDown");
          }
          else {
            document.getElementById('message').innerHTML = class=\"female\">Born on a  + days[dayOfTheWeek] +  Your Akan Name's+ femaleAkanNames[dayOfTheWeek];
            $('#message span:first-child').addClass("fadeInUP");
            $('#message span:last-child').addClass("fadeInDown");
          }
          break;
        }
        else {
          document.getElementById('message').innerHTML = "<div class=\"alert alert-danger\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">x</button>choose a Gender</div>";
          $('#message').addClass("shake");
        }
      }
    }
  }
  function clearAkanMessage(){
    document.getElementById('message').innerHTML = "";
  }

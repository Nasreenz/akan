$(document).ready(function(){
    $("#myBirthDate").mask("99/99/9999");
});

function getAkanName(){
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var femaleAkanNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
    var maleAkanNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
    var myBirthday = document.getElementById("myBirthDate").value;
    var gender = document.getElementsByName("gender");
    var dateOfBirth = new Date(myBirthday);
    var dayOfTheWeek = dateOfBirth.getDay();
    if(myBirthday === ""){
        document.getElementById('message').innerHTML = "<div class=\"alert alert-danger\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">x</button><strong>Oh no!</strong>Nasra says you should Submit a Valid Date!</div>";

    }
    else {
        for(var i=0;i<gender.length;i++){
            if(gender[i].checked){
                if(gender[i].value === "Male"){
                    document.getElementById('message').innerHTML = "<span><i class=\"male\"></i></span>&nbsp;&nbsp; Born on a <span>" + days[dayOfTheWeek] + "</span>, Your Akan Name's <span>" + maleAkanNames[dayOfTheWeek] + "</span>";
                    $('#message span:first-child').addClass("fadeInUp");
                    $('#message span:last-child').addClass("fadeInDown");
                }
                else {
                    document.getElementById('message').innerHTML = "<span><i class=\"female\"></i></span>&nbsp;&nbsp; Born on a <span>" + days[dayOfTheWeek] + "</span>, Your Akan Name's <span>" + femaleAkanNames[dayOfTheWeek] + "</span>";
                    $('#message span:first-child').addClass("fadeInUP");
                    $('#message span:last-child').addClass("fadeInDown");
                }
                break;
            }
            else {
                document.getElementById('message').innerHTML = "<div class=\"alert alert-danger\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">x</button><strong>Oh snap!</strong>choose a Gender To Determine Your Akan Name!</div>";
                $('#message').addClass("shake");
            }
        }
    }
}

function clearAkanMessage(){
    document.getElementById('message').innerHTML = "";
}

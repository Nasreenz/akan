var maleNames = ["Kwasi", "Kwandwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday"];
function getName() {
    var year =parseInt(document.getElementById("year").value);
    var month=parseInt(document.getElementById("month").value);
    var day=parseInt(document.getElementById("day").value);
    var gender=getGender();
    var date = new Date(year +"/" + month + "/"+day);
    var dayBorn = date.getDay();
    var Name;
    var validate = (year > 0 && (month >0 && month <=12) && (day > 0 && day <= 31));
    var validateGender = (gender !== "male" && gender !== "female");
    if (year <= 0 ) {
        alert("The year is invalid");
    }
    else if (month <= 0 || month > 12) {
        alert("The month is invalid since it's between 1 and 12");
    }
    else if (day <= 0 || day > 31){
        alert("The date is invalid");
    }
    else if (validate == false) {
        alert("Invalid Input");
    }
    if(gender ==="male" && year > 0 && month > 0 && month < 13 && day > 0 && day < 32){
        Name = maleNames[dayBorn];
    alert("You were born on "+ dayOfWeek[dayBorn]+ " and your Akan name is " +Name);
    }
    else if (gender === "female" && year > 0 && month > 0 && month < 13 && day > 0 && day < 32){
        Name = femaleNames[dayBorn];
    alert("You were born on "+ dayOfWeek[dayBorn]+ " and your Akan name is " +Name);
    }
}
    function getGender(){
        var gender = document.getElementsByName("gender");
        for(i = 0; i < gender.length; i++){
            if(gender[i].checked){
                return(gender[i].value)
        }
    }
}

var day=-1;
var month=-1;
var year=-1;
const d = new Date();
var curyear = d.getFullYear();
var curmonth = d.getMonth()+1;
var curday = d.getDate();
var temp;
function isleap(year) {
    const leap = new Date(year, 1, 29).getDate() === 29;
    if (leap) {
        return 1;
    } else {
        return 0;
    }
}
function storeday(){
    temp = document.getElementById("dayinp").value;
    if(temp!=""){
        day = temp;
    }
}
function storemonth(){
    temp = document.getElementById("monthinp").value;
    if(temp!=""){
        month = temp;
    }
}
function storeyear(){
    temp = document.getElementById("yearinp").value;
    if(temp!=""){
        year = temp;
    }
}
function enter(){
    document.getElementById("eyy").style.zIndex=0;
    document.getElementById("emm").style.zIndex=0;
    document.getElementById("edd").style.zIndex=0;
    var missing = 0;
    if(day==-1){
        document.getElementById("e11").style.color = "hsl(0, 100%, 67%)";
        document.getElementById("type11").style.color = "hsl(0, 100%, 67%)";
        document.getElementById("dayinp").style.borderColor = "hsl(0, 100%, 67%)";
        missing = 1;
    }
    else{
        document.getElementById("e11").style.color = "white";
        document.getElementById("type11").style.color = "hsl(0, 1%, 44%)";
        document.getElementById("dayinp").style.borderColor = "hsl(0, 0%, 86%)";
    }
    if(month==-1){
        document.getElementById("e22").style.color = "hsl(0, 100%, 67%)";
        document.getElementById("type22").style.color = "hsl(0, 100%, 67%)";
        document.getElementById("monthinp").style.borderColor = "hsl(0, 100%, 67%)";
        missing = 1;
    }
    else{
        document.getElementById("e22").style.color = "white";
        document.getElementById("type22").style.color = "hsl(0, 1%, 44%)";
        document.getElementById("monthinp").style.borderColor = "hsl(0, 0%, 86%)";
    }
    if(year==-1){
        document.getElementById("e33").style.color = "hsl(0, 100%, 67%)";
        document.getElementById("type33").style.color = "hsl(0, 100%, 67%)";
        document.getElementById("yearinp").style.borderColor = "hsl(0, 100%, 67%)";
        missing = 1;
    }
    else{
        document.getElementById("e33").style.color = "white";
        document.getElementById("type33").style.color = "hsl(0, 1%, 44%)";
        document.getElementById("yearinp").style.borderColor = "hsl(0, 0%, 86%)";
    }
    var future = 0;
    if(missing==0){
        document.getElementById("edd").style.zIndex=1;
        document.getElementById("emm").style.zIndex=1;
        document.getElementById("eyy").style.zIndex=1;
        if(year>curyear){
            future=1;
        }
        else if(year==curyear){
            if(month>curmonth){
                future = 1;
            }
            else if(month==curmonth){
                if(day>curday){
                    future =1;
                }
            }
        }
        if(future==1){
            document.getElementById("eyy").style.color = "hsl(0, 100%, 67%)";
            document.getElementById("type11").style.color = "hsl(0, 100%, 67%)";
            document.getElementById("type22").style.color = "hsl(0, 100%, 67%)";
            document.getElementById("type33").style.color = "hsl(0, 100%, 67%)";
            document.getElementById("yearinp").style.borderColor = "hsl(0, 100%, 67%)";
            document.getElementById("monthinp").style.borderColor = "hsl(0, 100%, 67%)";
            document.getElementById("dayinp").style.borderColor = "hsl(0, 100%, 67%)";    
            document.getElementById("emm").style.color = "white";
            document.getElementById("edd").style.color = "white";
        }
        else{
            document.getElementById("eyy").style.color = "white";
            document.getElementById("type11").style.color = "hsl(0, 1%, 44%)";
            document.getElementById("type22").style.color = "hsl(0, 1%, 44%)";
            document.getElementById("type33").style.color = "hsl(0, 1%, 44%)";
            document.getElementById("yearinp").style.borderColor = "hsl(0, 0%, 86%)";
            document.getElementById("monthinp").style.borderColor = "hsl(0, 0%, 86%)";
            document.getElementById("dayinp").style.borderColor = "hsl(0, 0%, 86%)";    
        }
    }
    var invalid =0;
    if(missing==0 && future==0){
        if(((month==1 || month ==3 || month ==5 || month==7 || month ==8 || month==10 || month==12) && day>31) ||
            ((month==4 || month ==6 || month ==9 || month==11) && day>30) || (month==2 && ((isleap(year)==1&&day>29) || (isleap(year)==0&&day>28)) )){
            document.getElementById("edd").style.color = "hsl(0, 100%, 67%)";
            document.getElementById("type11").style.color = "hsl(0, 100%, 67%)";
            document.getElementById("dayinp").style.borderColor = "hsl(0, 100%, 67%)";
            invalid = 1;
        }
        else{
            document.getElementById("edd").style.color = "white";
            document.getElementById("type11").style.color = "hsl(0, 1%, 44%)";
            document.getElementById("dayinp").style.borderColor = "hsl(0, 0%, 86%)";
        }
        if(month>12){
            if(day>31){
                document.getElementById("edd").style.color = "hsl(0, 100%, 67%)";
                document.getElementById("type11").style.color = "hsl(0, 100%, 67%)";
                document.getElementById("dayinp").style.borderColor = "hsl(0, 100%, 67%)";
            }
            else{
                document.getElementById("edd").style.color = "white";
                document.getElementById("type11").style.color = "hsl(0, 1%, 44%)";
                document.getElementById("dayinp").style.borderColor = "hsl(0, 0%, 86%)";
            }
            document.getElementById("emm").style.color = "hsl(0, 100%, 67%)";
            document.getElementById("type22").style.color = "hsl(0, 100%, 67%)";
            document.getElementById("monthinp").style.borderColor = "hsl(0, 100%, 67%)";
            invalid = 1;
        }
        else{
            document.getElementById("emm").style.color = "white";
            document.getElementById("type22").style.color = "hsl(0, 1%, 44%)";
            document.getElementById("monthinp").style.borderColor = "hsl(0, 0%, 86%)";
        }
    }
    if(invalid==0 && missing==0 && future==0){
        var ansday = 0;
        var ansyear = 0;
        var ansmonth = 0;
        if(month==curmonth && day==curday){
            ansyear = curyear -year;
        }
        else if(month==curmonth){
            if(day>curday){
                ansyear = curyear-year;
                month = 12+curmonth-month-1;
                ansday = day-curday;
            }
            else{
                ansyear = curyear-year-1;
                month = 12+curmonth-month;
                ansday = curday-day;
            }
        }
        else if(curmonth>month){
            ansyear = curyear-year;
            ansmonth = curmonth-month;
            if(day>curday){
                ansday = day - curday;
            }
            else{
                ansday = curday - day;
            }
        }
        else{
            ansyear = curyear-year-1;
            ansmonth = 12+curmonth-month;
            if(day>curday){
                ansday = day - curday;
            }
            else{
                ansday = curday - day;
            }
        }
        document.getElementById("type1").innerHTML = String(ansday);
        document.getElementById("type2").innerHTML = String(ansmonth);
        document.getElementById("type3").innerHTML = String(ansyear);
    }
    if(day!=-1){
        document.getElementById("dayinp").value = day;
    }
    if(month!=-1){
        document.getElementById("monthinp").value = month;
    }
    if(year!=-1){
        document.getElementById("yearinp").value = year;
    }
}

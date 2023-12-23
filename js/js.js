
function agecalc(){
let day =document.querySelector("#Day").value;
let month =document.querySelector("#MM").value;
let year =document.querySelector("#YY").value; 
let dayEror=document.querySelector("#day");
let monthEror=document.querySelector("#month");
let yearEror=document.querySelector("#year");
let resYear =document.querySelector("#resYear");
let resMonth =document.querySelector("#resMonth");
let resDay =document.querySelector("#resDay");
let rederor=document.querySelectorAll(".e");
let bordereror=document.querySelectorAll(".bred");
function eror(){
    for(let i=0 ;i<3;i++){
        rederor[i].style.color="hsl(0, 100%, 67%)";
        bordereror[i].style.borderColor="hsl(0, 100%, 67%)";
    }
}
for(let i=0 ;i<3;i++){
    rederor[i].style.color="hsl(0, 1%, 44%)";
    bordereror[i].style.borderColor="hsl(0, 1%, 44%)"
}
console.log(rederor);
function monthcheck (){ 
    if(month==1 ||month==3 ||month==5 ||month==6 ||month==7 ||month==8 ||month==10 ||month==12){
            if(day<=31){ 
                return true;
            }
            else{
                dayEror.innerHTML="must be a valid day";
                eror();
              
            }
    }
    if(month==4||month==9||month==11){
        if(day<=30){
            return true;
            
        }
        else{
            dayEror.innerHTML="must be a valid day";
            eror();
        }
    }
    if(month==2){
        if(day<=29){
            return true;   
        }
        else{
            dayEror.innerHTML="must be a valid day";
            eror();
        }
    }
    if(month>12){
        monthEror.innerHTML="must be a valid month";
        eror();
        if(day>31){
            dayEror.innerHTML="must be a valid day";
            eror();
        }
    }
   
}

 dayEror.innerHTML="";
 monthEror.innerHTML="";
 yearEror.innerHTML="";
 resYear.innerHTML="- -";
 resMonth.innerHTML="- -";
 resDay.innerHTML="- -";

date=new Date();
nowDay =date.getDay();
console.log(nowDay);
nowMonth =date.getMonth();
console.log(nowMonth);
nowYear =date.getFullYear();
console.log(nowYear);

// eror1( must be in th past)
if(year===""){
    yearEror.innerHTML="this feild is required";
    eror();
}
if(day===""){
    dayEror.innerHTML="this feild is required";
    eror();
}
if(month===""){
    monthEror.innerHTML="this feild is required";
    eror();
}
if(year!=="" && day!=="" && month!==""){
    if(year > nowYear){
        monthcheck ();
        yearEror.innerHTML="must be in the past";
        eror();
     }
    else if(year==nowYear){
        monthcheck ();
        if(month>nowMonth)
        {
        monthEror.innerHTML="must be in the past";
        eror();
        } 
         else if(month==nowMonth)
     {
        monthcheck();
         if(day>nowDay){
         dayEror.innerHTML="must be in th past";
         eror();
         }
         else if(day==nowDay){
             resYear.innerHTML=nowYear-year;
             resMonth.innerHTML=nowMonth-month;
             resDay.innerHTML="<1";
         }
         else{
            if(monthcheck()==true){
                resYear.innerHTML=nowYear-year;
                resMonth.innerHTML=nowMonth-month;
                resDay.innerHTML=nowDay-day;
            }
         }
        }
        else{
            if(nowDay-day<0){
                if(month==1 ||month==3 ||month==5 ||month==6 ||month==7 ||month==8 ||month==10 ||month==12){
                    nowDay=nowDay+31;
                    nowMonth=nowMonth-1;
                }
                else if(month==4||month==9||month==11){
                    nowDay=nowDay+30;
                    nowMonth=nowMonth-1;
                }
                else if (month==2){
                    nowDay=nowDay+29;
                    nowMonth=nowMonth-1;
                }  
            }
            resYear.innerHTML=nowYear-year;
            resMonth.innerHTML=nowMonth-month;
            resDay.innerHTML=nowDay-day;
    }
        }
    
    else if (year<nowYear){
        monthcheck();
        if(monthcheck()==true){
                if(nowDay-day<0){
                    if(month==1 ||month==3 ||month==5 ||month==6 ||month==7 ||month==8 ||month==10 ||month==12){
                        nowDay=nowDay+31;
                        nowMonth=nowMonth-1;
                    }
                    else if(month==4||month==9||month==11){
                        nowDay=nowDay+30;
                        nowMonth=nowMonth-1;
                    }
                    else if (month==2){
                        nowDay=nowDay+29;
                        nowMonth=nowMonth-1;
                    }  
                }
                if(nowMonth-month<0){
                    nowMonth=nowMonth+12;
                    nowYear=nowYear-1;
                }
            resYear.innerHTML=nowYear-year;
            resMonth.innerHTML=nowMonth-month;
            resDay.innerHTML=nowDay-day;
            }  
}
}
}





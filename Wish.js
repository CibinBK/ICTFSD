let a;
function wish(a){
    if(a<=11){
        console.log("Good Morning");
    }
    else if(a>=13&&a<=15){
        console.log("Good Afternoon");
    }
    else if(a>=16&&a<=18){
        console.log("Good Evening");
    }
    else{
        console.log("Good Night");
    }
}

wish(10);
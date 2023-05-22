function print(h,m,s,t){
    if(h<10){
        if(m<10){
            if(s<10){
                console.log("0"+h+":0"+m+":0"+s+" "+t);
            }
            else{
                console.log("0"+h+":0"+m+":"+s+" "+t);
            }
        }
        else{
            console.log("0"+h+":"+m+":"+s+" "+t);
        }
    }                                                          //For Printing Time
    else{
        if(m<10){
            if(s<10){
                console.log(+h+":0"+m+":0"+s+" "+t);
            }
            else{
                console.log(+h+":0"+m+":"+s+" "+t);
            }
        }
        else{
            console.log(h+":"+m+":"+s+" "+t);
        }
    }
}

function convert(h,m,s,t){
    console.log("12-hr Format :");
    print(h,m,s,t);                                            //Printing 12-hr Format

    if(h!=12&&t=="PM"){
        h+=12;
    }                                                          //Converting 12 to 24
    else if(h==12&&t=="AM"){
        h=0;
    }

    console.log("24-hr Format :");
    print(h,m,s,"");                                           //Printing 24-hr Format
}
convert(12,03,09,"AM");
let str="",str1="",str2="";
let screen=document.querySelector(".input");
let btn=document.querySelectorAll(".digit");
btn.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        if(e.target.innerText=="="){
            try{
                str=eval(str1).toString();
            }
            catch(error){
                console.log(error);
                str="ERROR!!";
            }   
        }
        else if(e.target.innerText=="AC"){
            str="";
            str1="";
        }
        else if(e.target.innerText=="Del"){
            if(str[str.length-1]=="%") str1=str1.slice(0,str1.length-4);
            else str1=str1.slice(0,str1.length-1);
            str=str.slice(0,str.length-1);  
        }
        else if(e.target.innerText=="%"){
            str1=str1+"/100";
            str=str+"%";
        }
        else if(e.target.innerText=="("){
            if(str1[str1.length-1]=="0"||str1[str1.length-1]=="1"||str1[str1.length-1]=="2"||str1[str1.length-1]=="3"||str1[str1.length-1]=="4"||str1[str1.length-1]=="5"||str1[str1.length-1]=="6"||str1[str1.length-1]=="7"||str1[str1.length-1]=="8"||str1[str1.length-1]=="9"||str[str1.length-1]==")")
                str1=str1+"*(";
            else 
                str1=str1+"(";
            str=str+"(";
        } 
        else if(e.target.innerText==")"){
            str=str+")";
            str1=str1+")";
        }
        else{
        str=str+e.target.innerText;
        str1=str1+e.target.innerText;
        }
        screen.value=str;
    })
})

let btn=document.querySelector(".btn");
let header=document.querySelector("header");
let hr=document.querySelector("hr");
let mode="light";
let body=document.querySelector("body");
let container=document.querySelector(".container");
let content1=document.querySelector(".content1");
let content2=document.querySelector(".content2");
let i1=document.querySelector("#i1");
let i2=document.querySelector("#i2");
let p1=document.querySelector("#p1");
let p2=document.querySelector("#p2");

function black(){
    if(mode==="light"){
        mode="dark";
        container.style.border="4px solid white";
        content1.style.border="4px solid white";
        content2.style.border="4px solid white";
        i1.style.color="white";
        i2.style.color="white";
        p1.style.color="white";
        p2.style.color="white";
        hr.style.backgroundColor="white";
        header.style.color="white";
        btn.innerText="Change to Light";
        btn.style.color="white";
        btn.style.backgroundColor="black";
        btn.style.border="2px solid white";
        body.style.backgroundColor="black";
    }else{
        btn.innerText="Change to Dark";
        container.style.border="4px solid black";
        content1.style.border="4px solid black";
        content2.style.border="4px solid black";
        mode="light";
        i1.style.color="black";
        i2.style.color="black";
        p1.style.color="black";
        p2.style.color="black";
        hr.style.backgroundColor="black";
        header.style.color="black";
        btn.style.color="black";
        btn.style.backgroundColor="white";
        btn.style.border="2px solid black";
        body.style.backgroundColor="white";
    }
}


// let a=[85,97,44,37,76,60];
// let b=0;
// for(let i of a){
//     b=b+i;
// }
// console.log(b/a.length);

// let a=[250,645,300,900,50];
// for(let i=0;i<5;i++ ){
//     let off= a[i]/10;
//     a[i]-=off;
// }
// console.log(a);

//function
// function vowels(a){
//     let b=0;
//     for(let i of a){
//         if(i==="a" || i==="e"|| i==="i"|| i==="o"|| i==="u"){b+=1;}
//     }
//     return b;
// }
// let a=prompt("Enter the string:");
// console.log(vowels(a));

// let a=(str)=>{
//     let b=0;
//     for(let i of str){
//         if(i==="a" || i==="e"|| i==="i"|| i==="o"|| i==="u"){b+=1;}
//     }
//     return b;
// }
// console.log(a("nitish"));

// let a=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// let b=a.filter((i)=>{
//     return i>10;
// })

// n=prompt("Enter the n: ");
// let a=[1];
// for(let i=1;i<n;i++){
//     a.push(i+1);
// }
// let b=a.reduce((i,j)=>{
//     return i+j;
// });





// function papa(ro){
//     console.log(`hello ${ro}`);
// }
// papa("niti");



// let but=document.querySelector("button");
// let a=0;
// but.onclick=()=>{
//     if(a==0){
//     document.body.style.backgroundColor="black";
//     a=1;
//     }
//     else if(a==1){
//          document.body.style.backgroundColor="White";
//          a=0;
//     }
// };

// let div=document.querySelector(".box");
// div.addEventListener("click",()=>{
//     console.log("hy how are u ji");
// });
// let div2=document.querySelector(".box2");
// div2.addEventListener("mouseover",()=>{
//     let i=document.querySelector(".box2");
//     i.style.backgroundColor="pink";
    
//     console.log("hello");
// });

let button= document.querySelectorAll(".button");
let turn0=0;
let paragraph=document.querySelector("p");
let n1=document.querySelector(".new");

//win case possibilities
let wincase=[
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];










//button inner text
button.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0==0){
            box.innerText="O";
            turn0=1;
        }
        else{
            box.innerText="X";
            turn0=0;
        } 
        box.disabled=true;
        checkloot();
    }) 
    
});







//reset button activated
let reset= document.querySelector("#reset");
reset.onclick=()=>{
    for(let i in button){
        button[i].innerText="";
        button[i].disabled=false;

    }
    paragraph.innerText="";
    n1.setAttribute("class","new");
}
n1.onclick=()=>{
    for(let i in button){
        button[i].innerText="";
        button[i].disabled=false;
    }
    paragraph.innerText="";
     n1.setAttribute("class","new");
}

//cases of win
const checkloot=()=>{
    wincase.forEach((ball)=>{
        let a= button[ball[0]].innerText;
        let b=button[ball[1]].innerText;
        let c=button[ball[2]].innerText;
        if(a!=""&&b!=""&&c!=""){
            if(a==b&&b==c){
                paragraph.innerText=`${a} is Winner!`;
                n1.setAttribute("class","n23");
                for(let i in button){
                    button[i].disabled=true;
                }
            }
        }
    })
}

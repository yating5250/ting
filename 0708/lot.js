let bf =document.getElementById("bf");
let af =document.getElementById("af");
let sec =document.getElementById("sec");

function lot1(){
    let arr1=[];
    for(let i=0;i<=5;i++){
        let rd1=Math.floor(Math.random()*38)+1

        if(arr1.includes(rd1)==false){
            arr1.push(rd1);
        }else{
            i--;
        }
    }

    bf.textContent="排序前:"+arr1;
    arr1.sort((a,b)=>{
        return a-b;
    })

    af.textContent="排序後"+arr1;

    sec.textContent="第二區"+(Math.floor(Math.random()*8)+1);
}

function lot2(){
    let arr2=[];
    for(let n=0;n<=6;n++){
        let rd2=Math.floor(Math.random()*49)+1;

        if(arr2.includes(rd2)==false){
            arr2.push(rd2);
        }else{
            n--;
        }
    }
    sec.textContent="第二區"+arr2.pop();

    bf.textContent="排序前"+arr2;

    arr2.sort((a,b)=>{
        return a-b;
    })

    af.textContent="排序後"+arr2;
}

function lot3(){
    let arr3=[];
    for(let x=0;x<=4;x++){
        let rd3=Math.floor(Math.random()*39)+1;

        if(arr3.includes(rd3)==false){
            arr3.push(rd3);
        }else{
            x--;
        }
    }
    bf.textContent="排序前"+arr3;
    arr3.sort((a,b)=>{
        return a-b;
    })

    af.textContent="排序後"+arr3;
    sec.textContent="";
}

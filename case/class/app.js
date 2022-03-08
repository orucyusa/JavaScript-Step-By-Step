var stackButton=document.getElementById('stackButton1');
var stackButton2=document.getElementById('stackButton2');
var stackButton3=document.getElementById('stackButton3');
var stackButton4=document.getElementById('stackButton4');
var stackButton5=document.getElementById('stackButton5');
var stackButton6=document.getElementById('stackButton6');
var stackButton7=document.getElementById('stackButton7');
class Stack{
    constructor(){
        this.items=[];
        this.ritems=[];
    }
    push(input){
        if(this.items.length<5){
            var length=this.items.length+1;
            console.log(length);
            document.getElementById(length.toString()).value=input;
            return this.items.push(input); 
        }else{
            window.alert("array taştı...");
        }
    }
    pop(){
        if(this.items.length==0){
            window.alert("eleman kalmadi");
        }else{
            document.getElementById(this.items.length.toString()).value="";
            return this.items.pop();
        }
        
    }
    swap(){
        var leng=this.items.length;
        var temp = document.getElementById(this.items[leng-1].toString()).value;
        document.getElementById(this.items[leng-1].toString()).value=document.getElementById(this.items[leng-2].toString()).value;
        document.getElementById(this.items[leng-2].toString()).value=temp;
        [this.items[leng - 1], this.items[leng - 2]] = [this.items[leng - 2], this.items[leng - 1]];
        
    }
    topMostValue(){
        var max=0;
        console.log(max = Math.max.apply(null, this.items));
            window.alert("En büyük değer : " + max);
        return max;
    }
    topMinValue(){
        var min=0;
        console.log(min=Math.min.apply(null,this.items));
            window.alert("En küçük değer : " + min);
    }
    reverse(){
        this.ritems=this.items.reverse();
        console.log(this.ritems);
        for(var i=0; i<this.ritems.length; i++){
            document.getElementById((i+1).toString()).value=this.ritems[i];
        }
    }
    async fastFill(){    // await kullanimi icin methodu async yapmamiz lazim.
        for(var i=0; i<5; i++){
            await this.wait(1000);
            stack.push(Math.floor(Math.random()*11).toString()); //input type=number olsa bile string olarak aldigi icin toString() methodu ihtiyac.
        }
    }
    wait(time){
        return (new Promise((res,rej)=>{
            setTimeout(()=>{
                res()
            },time)
        }))
    }
}

let stack = new Stack();
stackButton.addEventListener('click',function(){
    let inputValue=document.getElementById('inputValue').value;
    stack.push(inputValue);
    console.log(stack.items);
    
});
stackButton2.addEventListener('click',function(){
    stack.pop();
    console.log(stack.items);
});
stackButton3.addEventListener('click',function(){
    stack.swap();
    console.log(stack.items);
});
stackButton4.addEventListener('click',function(){
    stack.topMostValue();
});
stackButton5.addEventListener('click',function(){
    stack.topMinValue();
});
stackButton6.addEventListener('click',function(){
    stack.reverse();
});
stackButton7.addEventListener('click',function(){
    stack.fastFill();
})



// closure 

// function stack(){
//     let items=[];
//     return{
//         push:(item)=>{
//             return items.push(item);
//         },
//         pop:()=>{
//             return this.items.pop();
//         },
//         swap:()=>{

//         },
//         topMostValue:()=>{

//         }
//     }
// }
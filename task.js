const info1 = document.getElementById('name');
const rollnumber = document.getElementById('rollnumber');
const output = document.getElementById('formoutput');
const form = document.getElementById('form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const namevalue = info1.value.trim();
    const rollvalue = rollnumber.value.trim();
    if(namevalue!==''&& rollvalue!=='')
    {
        addtotheoutputname(namevalue);
        addtotheoutputroll(rollvalue);
    }
   info1.value='';
   rollnumber.value='';
});

function addtotheoutputname(namevalue)
{
    const item1 = document.createElement('th');
    item1.textContent=namevalue;
    console.log(item1.textContent);
    output.appendChild(item1);
}
function addtotheoutputroll(rollvalue)
{
    const item2 = document.createElement('th');
    item2.textContent=rollvalue;
    console.log(item2.textContent);
    output.appendChild(item2);
}


    const a = document.getElementById("num1");
    const b = document.getElementById("num2");
    const output1 = document.getElementById("result");
   

    document.getElementById("Asubmit").addEventListener('click',()=>{
       const x = a.value;
       const y = b.value;
       console.log(x);
       console.log(y);
        output1.textContent = x+y;
        console.log("addition done");
        a.value='';
        b.value='';
        
   })
   document.getElementById("Ssubmit").addEventListener('click',()=>{
    const x = a.value;
    const y = b.value;
    console.log(x);
    console.log(y);
        output1.textContent=x-y;
        a.value='';
        b.value='';
   })
   document.getElementById("Msubmit").addEventListener('click',()=>{
       // const item = document.createElement('div');
        output1.textContent=a.value*b.value;
        console.log("mult done");
        //output.appendChild(item);
        a.value='';
        b.value='';
   })
   document.getElementById("Dsubmit").addEventListener('click',()=>{
        //const item = document.createElement('div');
        output1.textContent=a.value/b.value;
        console.log("division done");
        //output.appendChild(item);
        a.value='';
        b.value='';

   })




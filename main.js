document.getElementById('double-btn').addEventListener('click',function(){
    const givenvalue=document.getElementById('value');
    const valueString=givenvalue.value;
    const value=parseFloat(valueString);
    givenvalue.value='';
    
    const updatedValue=2*value;
    if(isNaN(value)){
        alert('Please enter a number');
        return;
    }
    
    const p=document.createElement('p');
    p.innerText='This is your double' +' '+updatedValue;
    const parent=document.getElementById('main');
    parent.appendChild(p);
    p.style.textAlign='center';
    p.style.fontSize='2rem';
    p.style.fontWeight='bold'
})
document.getElementById('triple-btn').addEventListener('click',function(){
    const givenvalue=document.getElementById('value');
    const valueString=givenvalue.value;
    const value=parseFloat(valueString);
    givenvalue.value='';
    
    const updatedValue=3*value;
    if(isNaN(value)){
        alert('Please enter a number');
        return;
    }
    
    const p=document.createElement('p');
    p.innerText='This is your double' +' '+updatedValue;
    const parent=document.getElementById('main');
    parent.appendChild(p);
    p.style.textAlign='center';
    p.style.fontSize='2rem';
    p.style.fontWeight='bold'
})
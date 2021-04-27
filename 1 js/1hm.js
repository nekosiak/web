let age = prompt('How old are u?', 100);
let name = prompt('Whats your name?');
if(age<18) alert('You are not allowed to visit this website');
else if (age>=18 && age <=22) 
{
    let isBoss = confirm("Are you sure you want to continue?"); 
    if(isBoss==true) alert(`Welcome,  ${name}`);
    else alert('You are not allowed to visit this website');
}
else alert(`Welcome, ${name}`);
  

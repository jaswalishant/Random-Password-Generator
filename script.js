let password=document.querySelector(".password");
let len=12;

let uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase="abcdefghijklmnopqrstuvwxyz";
let numbers="0123456789";
let symbols="!@#$%^&*()_+-;:,.<>/?`~";

let allchar= uppercase + lowercase + numbers + symbols;

createPassword=()=>{
    let pass="";
    pass+=symbols[Math.floor(Math.random()*symbols.length)]
    while(len>pass.length){
        pass += allchar[Math.floor(Math.random()*allchar.length)];
    }
    password.value=pass;
    password.type="text";
}

copy=()=>{
    password.select();
    document.execCommand("copy")
}
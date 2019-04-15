let dropdownIsOpen = false;
let dropdownElement = null;
let dropdownInput = document.querySelectorAll(".dropdown .input");
dropdownInput.forEach(function(item){
    item.addEventListener("click",function(e){
        const ul = e.target.nextElementSibling;
        ul.style.display = "block";
        dropdownElement = ul;
        dropdownIsOpen = true;
    });
});

window.addEventListener("click",function(){
if(dropdownIsOpen){
    dropdownElement.style.display = "none";
    dropdownElement = null;
    dropdownIsOpen = false;
}
},true);


let dropdownIsOpen1 = false;
let dropdownElement1 = null;
let dropdownInput1 = document.querySelectorAll(".dropdown1 .btn2");
dropdownInput1.forEach(function(item){
    item.addEventListener("click",function(e){
        const ul = e.target.nextElementSibling;
        ul.style.display = "block";
        dropdownElement1 = ul;
        dropdownIsOpen1 = true;
    });
});

window.addEventListener("click",function(){
if(dropdownIsOpen1){
    dropdownElement1.style.display = "none";
    dropdownElement1 = null;
    dropdownIsOpen1 = false;
}
},true);


let dropdownIsOpen2 = false;
let dropdownElement2 = null;
let dropdownInput2 = document.querySelectorAll(".dropdown2 .btn4");
dropdownInput2.forEach(function(item){
    item.addEventListener("click",function(e){
        const ul = e.target.nextElementSibling;
        ul.style.display = "block";
        dropdownElement2 = ul;
        dropdownIsOpen2 = true;
    });
});

window.addEventListener("click",function(){
if(dropdownIsOpen2){
    dropdownElement2.style.display = "none";
    dropdownElement2 = null;
    dropdownIsOpen2 = false;
}
},true);

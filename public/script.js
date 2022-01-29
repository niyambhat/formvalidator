

let form = document.querySelector("#form");
let uname = document.querySelector("#name");
let dmail = document.querySelector("#deakinmail");
let unitcode = document.querySelector("#unitcode");
let phone = document.querySelector("#phone");
let handleClick = document.querySelector("#handleClick");
let emptyMessage = 'Please enter a value';
let validMessage = 'Valid entry';

let username;
let useremail;
let unitCode;
let userPhone;



//Function

const showError = (field, message)=>{
  field.style.border = '1px solid red';
  let parent = field.parentElement;
  parent.className = "col-md-4 mb-3 selected";
  let errorMsg= parent.querySelector('.errorMsg')
  errorMsg.innerHTML =message;
}


const showSuccess =(field) =>{
  field.style.border = '1px solid green';
  let parent = field.parentElement;
  parent.className='col-md-4 mb-3';
} 
//Event Listeners
main();

function main() {
  uname.addEventListener("keyup", grabUname);
  dmail.addEventListener("keyup", grabDmail);
  unitcode.addEventListener("keyup", grabCode);
  phone.addEventListener("keyup", grabPhone);
  handleClick.addEventListener("click",clickHandle);
  
}

function grabUname(e) {
  username = e.target.value;
}
function grabDmail(e) {
  useremail = e.target.value;
}
function grabCode(e) {
  unitCode = e.target.value;
}
function grabPhone(e) {
  userPhone = e.target.value;
}


function clickHandle(e){
e.preventDefault();
let checks = [uname, dmail, unitcode, phone]
checkRequired(checks);
checkEmailformat(dmail);
checkLength(phone);
checkString(unitcode);
}


function checkRequired(arra){
  arra.forEach(emptyOrNot);
  function emptyOrNot(field){
    if(field.value === ""){
      showError(field, "Please enter a value");
    } else{
      showSuccess(field);
    }
  }
}

function checkEmailformat(dmail){
let emailChecker= dmail.value.slice(-14);
if(emailChecker != '@deakin.edu.au'){
  showError(dmail, "Email needs to contain @deakin.edu.au");
}
}

function checkLength(phone){
if(phone.value.length >10){
  showError(phone, "Cannot exceed 10 digits");
}
}

function checkString(unitcode){
  if(unitcode.value.length >6){
    showError(unitcode, "Cannot exceed 6 digits");
  }
  let stringFirst = unitcode.value.slice(0,2);
  let stringlast= unitcode.value.slice(-3);
  if(isNaN(stringFirst)=== false){
    showError(unitcode, "First 3 needs to be string");
  } else if(isNaN(stringlast) != false){
    showError(unitcode, "Last 3 needs to be number");
  }
}






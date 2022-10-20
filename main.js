/*===== SHOW NAVBAR  =====*/
const showNavbar = (toggleId, navId, bodyId, headerId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId);

  // Validate that all variables exist
  if (toggle && nav && bodypd && headerpd) {
    toggle.addEventListener("click", () => {
      // show navbar
      nav.classList.toggle("show");
      // change icon
      // toggle.classList.toggle('bx-menu')
      // add padding to body
      bodypd.classList.toggle("body-pd");
      // add padding to header
      headerpd.classList.toggle("body-pd");
    });
  }
};

showNavbar("header-toggle", "nav-bar", "body-pd", "header");

/*===== LINK ACTIVE  =====*/
const linkColor = document.querySelectorAll(".nav__link");

function colorLink() {
  if (linkColor) {
    linkColor.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
  }
}
linkColor.forEach((l) => l.addEventListener("click", colorLink));

//admin drop down menu
document.addEventListener("click", (e) => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]");

  if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return;

  let currentDropdown;
  if (isDropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown]");
    currentDropdown.classList.toggle("active");
  }

  document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
    if (dropdown === currentDropdown) return;
    dropdown.classList.remove("active");
  });
});

$(document).ready(() => $(".mydatatable").DataTable());

function toggle() {
  let on = document.getElementById("show")
  let off = document.getElementById('hide')
//   console.log(off)
  document.addEventListener("click", (e) => {
    
    if (on) {
      console.log('on')
      document.getElementById("show").style.display = "block";
      document.getElementById("hide").style.display = "none";
    }
    else if(off){
        console.log('off')
        document.getElementById("show").style.display = "none";
        document.getElementById("hide").style.display = "block";
    }
  });
  // let hiedeHideSwtich = document.getElementById('hide')
}


//Forgot Password Page
function password(){
  let password = document.getElementById('floatingPassword') 
  let showPassword = document.getElementById('show')
  let hiedePassword = document.getElementById('hide')
  
  //Hide and show functionality

  if(password.type === 'password'){
      password.type = 'text'
      showPassword.style.display = 'block'
      hiedePassword.style.display = 'none'
  }

  else{
      password.type = 'password'
      showPassword.style.display = 'none'
      hiedePassword.style.display = 'block'
  }
}

function confirmPassword(){
  let confirmPassword = document.getElementById('floatingPasswordConfirm')
  let showPassword = document.getElementById('conf-show')
  let hiedePassword = document.getElementById('conf-hide')

  if(confirmPassword.type === 'password'){
      confirmPassword.type = 'text'
      showPassword.style.display = 'block'
      hiedePassword.style.display = 'none'
  }

  else{
      confirmPassword.type = 'password'
      showPassword.style.display = 'none'
      hiedePassword.style.display = 'block'
  }
}





//Multiple email selection
const emailContainer = document.querySelector('.email-container')

const input = document.querySelector('.email-container input')

var email = []

function createTag(label){
  const div = document.createElement('div')
  div.setAttribute('class', 'emails')
  const span = document.createElement('span')
  span.innerHTML = label 
  const closeBtn = document.createElement('i')
  closeBtn.setAttribute('class', 'fa fa-close')
  closeBtn.setAttribute('data-item', label)
  
  div.appendChild(span)
  div.appendChild(closeBtn)

  return div;
}

function reset(){
    document.querySelectorAll('.emails').forEach((e)=>{ e.parentElement.removeChild(e) })
}

function addEmails(){
    reset()
    email.slice().reverse().forEach( (em) => {
        const emInput = createTag(em)
        emailContainer.prepend(emInput)
    })
}



input.addEventListener('keypress', (e)=>{

  if(e.key === 'Enter'){
   
    email.push(input.value)
    addEmails()
    input.value = ''
    e.preventDefault()
  }

})

document.addEventListener('click', (e) => {

    if(e.target.tagName === 'I'){
        const value = e.target.getAttribute('data-item')
        const index = email.indexOf(value)
        email = [...email.slice(0, index), ...email.slice(index + 1)]
        addEmails()
    }


})


function sidebarFunction() {
  var element = document.getElementById("nav-bar");
  element.classList.add("activesidebar");
}

function closeFunction() {
  var element = document.getElementById("nav-bar");
  element.classList.remove("activesidebar");
}

$('#datepicker').datepicker();



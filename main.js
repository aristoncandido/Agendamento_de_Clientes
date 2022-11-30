const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const horario = document.querySelector('#horario');
const msg = document.querySelector('.msg');
const msg_email = document.querySelector('.msg_email');
const userList = document.querySelector('#users');
const btn = document.querySelector('.btn')





myForm.addEventListener('submit', cadastra);
btn.addEventListener('onmouseenter', enganar)


function cadastra(elemento) {

  elemento.preventDefault();



  if (nameInput.value === "" && emailInput.value === "") {

    alert("Por favor preencha os dados")
    msg.classList.add('error');
    msg.innerHTML = "Por favor preencha os dados!";




  } else {
    let li = document.createElement('li');

    li.appendChild(

      document.createTextNode(`Agendado: ${nameInput.value}  
                  ${emailInput.value} às ${horario.value}`)



    )




    userList.appendChild(li);

    nameInput.value = "";
    emailInput.value = "";
    horario.getElementsByTagName('option')[0].selected = 'selected';
    nameInput.focus();
    msg.innerHTML = "";

  }

  //escutando o input email e incovando a função valida email   

  emailInput.addEventListener('change', (e) => {


   

    let padrao = new RegExp(/.*@.*\..*/i);





        if (!padrao.test(emailInput.value)) {
      // alert('Por favor, insira um e-mail válido.');
              msg_email.classList.add('error');
              msg_email.innerHTML = 'Por favor, insira um e-mail válido.';
              setTimeout(() => msg.remove(), 3000);
    }




  });













}

/*
function enganar(){

  const btn = document.querySelector('.btn')
  var x = Math.random();
  x +=1

  if(x%2 == 0){
    btn.style.marginLeft = "50%";
  }else{
    
    btn.style.marginRight = "100%";
  }

 
  
 

}

function voltar(){
  const btn = document.querySelector('.btn')
      
 btn.style.margin = "0 auto";
  
} */
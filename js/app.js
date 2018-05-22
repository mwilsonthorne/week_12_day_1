document.addEventListener('DOMContentLoaded', () => {
  console.log("It's loaded successfully");

  const form = document.querySelector('#form');
  form.addEventListener('submit', formSubmitted);



});

const formSubmitted = function(event){
  event.preventDefault(); //stops all other default items when form is submitted.
  console.log(this);
  const formResult = document.querySelector('#form-result'); //CREATE
  const paragraphListItem = document.createElement('p'); //MANIPULATE
  paragraphListItem.textContent = `Users input:
  ${this.title.value}
  ${this.author.value}
  ${this.contact.value}
  ${this.select.value}
  `;


  formResult.appendChild(paragraphListItem);

  resetForm()
}

function resetForm(){
  document.querySelector('#form').reset();


}

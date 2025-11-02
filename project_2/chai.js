const form = document.querySelector('form');
// const height = parseInt(document.querySelector('#height').value);
// this will give you an empty string always
form.addEventListener('submit', function(e){
  e.preventDefault(); // prevents from reching the values to servers

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
 // converts the string value into an integer
  const results = document.querySelector('#results');

  if(height === '' || height<0 || isNaN(height)){ // cheking for the input
     
    results.innerHTML = `please enter a valid numaber ${height}`

  }

  
  else if(weight === '' || weight<0 || isNaN(weight)){
     
    results.innerHTML = `please enter a valid numaber ${weight}`

  }

  else {
     const bim = (weight / ((height*height)/10000)).toFixed(2);
     results.innerHTML = `<span>${bim}</span>`;
  }

 
})

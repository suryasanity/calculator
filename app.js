const btns = document.querySelectorAll('button[id=btitem]');
var input = document.querySelector('#clear');
var output = document.querySelector('#equals');
btns.forEach(btn => {

   btn.addEventListener('click', event => {
        document.getElementById('resultbox').value+=event.target.value;

   });
   input.addEventListener('click', function () {
          document.getElementById('resultbox').value="";
  });

output.addEventListener('click', function () {
  resultbox.value=eval(resultbox.value);       
});

});








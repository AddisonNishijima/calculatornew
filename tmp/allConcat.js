var Calculator = require('./../js/calculator.js').calculatorModule;

$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var calculator = new Calculator("hot pink");
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = (calculator.add(number1, number2));
    $("#outputadd").text(result);
  });
});

$(document).ready(function() {
  $("form#subtract").submit(function(event) {
    event.preventDefault();
    var calculator = new Calculator("hot pink");
    var number1 = parseInt($("#subtract1").val());
    var number2 = parseInt($("#subtract2").val());
    var result = (calculator.subtract(number1, number2));
    $("#outputsub").text(result);
  });
});

$(document).ready(function() {
  $("form#multiply").submit(function(event) {
    event.preventDefault();
    var calculator = new Calculator("hot pink");
    var number1 = parseInt($("#multiply1").val());
    var number2 = parseInt($("#multiply2").val());
    var result = (calculator.multiply(number1, number2));
    $("#outputmult").text(result);
  });
});

$(document).ready(function() {
  $("form#divide").submit(function(event) {
    event.preventDefault();
    var calculator = new Calculator("hot pink");
    var number1 = parseInt($("#divide1").val());
    var number2 = parseInt($("#divide2").val());
    var result = (calculator.divide(number1, number2));
    $("#outputdiv").text(result);
  });
});

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});

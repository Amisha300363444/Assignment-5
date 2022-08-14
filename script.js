function addValue(){
    // get the operands value

    // parse to integer. You can use: parseInt(input, 10);

    // perform operation

    // creating the text output

    // (if you want to check) print out in console

    // change the text area
    var input_a = document.mycalculator.input_a.value;
    var input_b = document.mycalculator.input_b.value;
    
    var result = parseInt(input_a) + parseInt(input_b)
  
    document.mycalculator.output.value = input_a +'+'+ input_a +' = '+ result;
}


function mulValue(){
    var input_a = document.mycalculator.input_a.value;
    var input_b = document.mycalculator.input_b.value;
    
    var result = parseInt(input_a) * parseInt(input_b)
  
    document.mycalculator.output.value = input_a +'*'+ input_a +' = '+ result;
}

function divValue(){
    var input_a = document.mycalculator.input_a.value;
    var input_b = document.mycalculator.input_b.value;
    
    var result = parseInt(input_a) / parseInt(input_b)
  
    document.mycalculator.output.value = input_a +'/'+ input_a +' = '+ result;;
}

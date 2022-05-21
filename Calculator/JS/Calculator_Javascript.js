// creates an object to track values
const Calculator = {
    //displays 0 on screen
    Display_Value: '0',
    //holds first operand for any expression, default null
    First_Operand: null,
    //checks if second operand has been input
    Wait_Second_Operand: false,
    //holds operator, default null
    operator: null,
};

//modifies value on button click
function Input_Digit(digit) {
    const { Display_Value, Wait_Second_Operand } = Calculator;
    //check Wait_second_Operand is true and set Display_Value to key clicked
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        //overwrites Display if current calue is 0, otherwise adds to it
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

//section handles decimal points
function Input_Decimal(dot) {
    //ensures accidental clicking decimal point doesn't cause bugs
    if (Calculator.Wait_Second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)) {
        //place decimal point if one is not present
        Calculator.Display_Value += dot;
    }
}

//section handles operators
function Handle_Operator(Next_Operator) {
    const { First_Operand, Display_Value, operator } = Calculator
    //when opperator pressed, convert current number on screen to a number
    //store result in Calculator.First_Operand if doesn't already exist
    const Value_of_Input = parseFloat(Display_Value);
    //checks if an operator already exists and if Wait_Second is true,
    //updates the operater and exits function
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) { //checks if operator already exists
        const Value_Now = First_Operand || 0;
        //if operator exists. property lookup is performed for the operator
        //in the Perform_Calculation object and the function that matches the
        //operator is executed
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input) ;
        //add a fixed amount of numbers after the decimal
        result = Number(result).toFixed(9)
    }
}
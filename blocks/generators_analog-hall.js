Blockly.JavaScript["ky_003_analog_hall_block"] = function(block) {
    var text_ky_003_analog_hall_pin = block.getFieldValue(
      "KY_003_ANALOG_HALL_PIN"
    );
    var variable_ky_003_analog_hall_value = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue("KY_003_ANALOG_HALL_VALUE"),
      Blockly.Variables.NAME_TYPE
    );
    // TODO: Assemble JavaScript into code variable.
    var code = `
	
	#VARIABLE
	int KY_003_ANALOG_HALL_PIN = ${text_ky_003_analog_hall_pin}; //sensor pin
	#END

	#SETUP
		pinMode(KY_003_ANALOG_HALL_PIN, INPUT); //set sensor pin as input
	#END

	${variable_ky_003_analog_hall_value} = digitalRead(KY_003_ANALOG_HALL_PIN); //Read the sensor
  `;
    return code;
  };
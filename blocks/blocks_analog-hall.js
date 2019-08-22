Blockly.Blocks['ky_003_analog_hall_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("KY-003 ANALOG HALL");
    this.appendValueInput("KY_003_ANALOG_HALL_PIN")
        .setCheck(null)
        .appendField("PIN");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
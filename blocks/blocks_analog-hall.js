Blockly.Blocks["ky_003_analog_hall_block"] = {
    init: function() {
      this.appendDummyInput().appendField("KY-003 ANALOG HALL");
      this.appendDummyInput()
        .appendField("PIN")
        .appendField(new Blockly.FieldTextInput("0"), "KY_003_ANALOG_HALL_PIN")
        .appendField("SET TO")
        .appendField(
          new Blockly.FieldVariable("KY_003_ANALOG_HALL_VALUE"),
          "KY_003_ANALOG_HALL_VALUE"
        );
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
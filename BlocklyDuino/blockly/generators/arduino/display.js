

goog.require('Blockly.Arduino');

Blockly.Arduino.show_string = function() {
  var value = this.getFieldValue("TEXT");
  Blockly.Arduino.definitions_['define_display_import'] = "#include <Display.h>\n";
  Blockly.Arduino.definitions_['define_display_var'] = "Display display;\n";
  Blockly.Arduino.setups_['setup_display'] = "display = Display();\n";
  Blockly.Arduino.setups_['setup_display_method'] = "display.setup();\n";
  var code ="display.show(String('"+value+"'));\n";
  return code;
};

Blockly.Arduino.show_value = function() {
  var text = Blockly.Arduino.valueToCode(this, 'TEXT',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '\'\'';
  Blockly.Arduino.definitions_['define_display_import'] = "#include <Display.h>\n";
  Blockly.Arduino.definitions_['define_display_var'] = "Display display;\n";
  Blockly.Arduino.setups_['setup_display'] = "display = Display();\n";
  Blockly.Arduino.setups_['setup_display_method'] = "display.setup();\n";
  var code ="display.show("+text+");\n";
  return code;
};

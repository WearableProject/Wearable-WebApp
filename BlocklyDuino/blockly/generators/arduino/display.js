

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

Blockly.Arduino.scroll_directions = function() {
  var direction = this.getFieldValue("DIRECTION");
  var value = this.getFieldValue("TEXT");
  var speed = Blockly.Arduino.valueToCode(this, 'SPEED',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '1';

  Blockly.Arduino.definitions_['define_display_import'] = "#include <Display.h>\n";
  Blockly.Arduino.definitions_['define_display_var'] = "Display display;\n";
  Blockly.Arduino.setups_['setup_display'] = "display = Display();\n";
  Blockly.Arduino.setups_['setup_display_method'] = "display.setup();\n";
  var code = "display.scroll"+direction;
  code += "(String('"+value+"'),"+speed;
  code += ");\n";
  return code;
};

Blockly.Arduino.scroll_directions_continuous = function() {
  var direction = this.getFieldValue("DIRECTION");
  var value = this.getFieldValue("TEXT");
  var seconds = Blockly.Arduino.valueToCode(this, 'SECONDS',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '1';
      var speed = Blockly.Arduino.valueToCode(this, 'SPEED',
          Blockly.Arduino.ORDER_UNARY_POSTFIX) || '1';

  Blockly.Arduino.definitions_['define_display_import'] = "#include <Display.h>\n";
  Blockly.Arduino.definitions_['define_display_var'] = "Display display;\n";
  Blockly.Arduino.setups_['setup_display'] = "display = Display();\n";
  Blockly.Arduino.setups_['setup_display_method'] = "display.setup();\n";
  var code = "display.scroll"+direction+"Continuous";
  code += "(String('"+value+"'),"+speed+","+seconds;
  code += ");\n";
  return code;
};

Blockly.Arduino.scroll_value_directions = function() {
  var direction = this.getFieldValue("DIRECTION");
  var value = Blockly.Arduino.valueToCode(this, 'TEXT',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '\'\'';
      var speed = Blockly.Arduino.valueToCode(this, 'SPEED',
          Blockly.Arduino.ORDER_UNARY_POSTFIX) || '1';

  Blockly.Arduino.definitions_['define_display_import'] = "#include <Display.h>\n";
  Blockly.Arduino.definitions_['define_display_var'] = "Display display;\n";
  Blockly.Arduino.setups_['setup_display'] = "display = Display();\n";
  Blockly.Arduino.setups_['setup_display_method'] = "display.setup();\n";
  var code = "display.scroll"+direction;
  code += "(String("+value;
  code += "),"+speed+");\n";
  return code;
};

Blockly.Arduino.scroll_value_directions_continuous = function() {
  var direction = this.getFieldValue("DIRECTION");
  var value = Blockly.Arduino.valueToCode(this, 'TEXT',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '\'\'';
      var speed = Blockly.Arduino.valueToCode(this, 'SPEED',
          Blockly.Arduino.ORDER_UNARY_POSTFIX) || '1';
  var seconds = Blockly.Arduino.valueToCode(this, 'SECONDS',
          Blockly.Arduino.ORDER_UNARY_POSTFIX) || '1';
  Blockly.Arduino.definitions_['define_display_import'] = "#include <Display.h>\n";
  Blockly.Arduino.definitions_['define_display_var'] = "Display display;\n";
  Blockly.Arduino.setups_['setup_display'] = "display = Display();\n";
  Blockly.Arduino.setups_['setup_display_method'] = "display.setup();\n";
  var code = "display.scroll"+direction+"Continuous";
  code += "(String("+value+"),"+speed+","+seconds;
  code += ");\n";
  return code;
};

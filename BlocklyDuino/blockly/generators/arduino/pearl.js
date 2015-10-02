goog.provide('Blockly.Arduino.Adaband');

goog.require('Blockly.Arduino');

Blockly.Arduino.set_brightness = function() {
  var brightnessVal = this.getFieldValue("NUMBER");
  Blockly.Arduino.definitions_['define_pearl'] = "Pearl pearl;\n";
  Blockly.Arduino.setups_['setup_pearl'] = "pearl = Pearl();\n";
  var code ="pearl.setBrightness("+brightnessVal+");\n";
  return code;
};

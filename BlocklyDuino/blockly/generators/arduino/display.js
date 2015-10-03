

goog.require('Blockly.Arduino');

Blockly.Arduino.set_brightness = function() {
  var brightnessVal = this.getFieldValue("NUMBER");
  Blockly.Arduino.definitions_['define_pearl'] = "Pearl pearl;\n";
  Blockly.Arduino.setups_['setup_pearl'] = "pearl = Pearl();\n";
  var code ="pearl.setBrightness("+brightnessVal+");\n";
  return code;
};

Blockly.Arduino.set_pixel_text_colour = function() {
  var pixelVal = parseInt(this.getFieldValue("PIXEL"));
  var colorVal = this.getFieldValue("COLOUR");
  Blockly.Arduino.definitions_['define_pearl'] = "Pearl pearl;\n";
  Blockly.Arduino.setups_['setup_pearl'] = "pearl = Pearl();\n";
  var code ="pearl.Change("+pixelVal+", CRGB("+colorVal+"));\n";
  code +="pearl.update();\n";
  return code;
};

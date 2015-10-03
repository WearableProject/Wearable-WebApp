goog.provide('Blockly.Arduino.Adaband');

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

Blockly.Arduino.set_pixel_rgb = function() {
  var pixelVal = parseInt(this.getFieldValue("PIXEL"));
  var redVal = this.getFieldValue("RED");
  var greenVal = this.getFieldValue("GREEN");
  var blueVal = this.getFieldValue("BLUE");
  Blockly.Arduino.definitions_['define_pearl'] = "Pearl pearl;\n";
  Blockly.Arduino.setups_['setup_pearl'] = "pearl = Pearl();\n";
  var code ="pearl.Change("+pixelVal+", CRGB("+redVal+","+greenVal+","+blueVal+"));\n";
  code +="pearl.update();\n";
  return code;
};
function hexToR(h) {return parseInt((cutHex(h)).substring(0,2),16)}
function hexToG(h) {return parseInt((cutHex(h)).substring(2,4),16)}
function hexToB(h) {return parseInt((cutHex(h)).substring(4,6),16)}
function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h}

Blockly.Arduino.set_pixel_colour = function() {
  var pixelVal = parseInt(this.getFieldValue("PIXEL"));
  var hexVal = this.getFieldValue("RGB");
  Blockly.Arduino.definitions_['define_pearl'] = "Pearl pearl;\n";
  Blockly.Arduino.setups_['setup_pearl'] = "pearl = Pearl();\n";
  var code ="pearl.Change("+pixelVal+", CRGB("+hexToR(hexVal)+","+hexToG(hexVal)+","+hexToB(hexVal)+"));\n";
  code +="pearl.update();\n";
  return code;
};

Blockly.Arduino.set_all_text_colour = function() {
  var colorVal = this.getFieldValue("COLOUR");
  Blockly.Arduino.definitions_['define_pearl'] = "Pearl pearl;\n";
  Blockly.Arduino.setups_['setup_pearl'] = "pearl = Pearl();\n";
  var code ="pearl.ChangeAll(CRGB("+colorVal+"));\n";
  code +="pearl.update();\n";
  return code;
};

Blockly.Arduino.set_all_rgb = function() {
  var redVal = this.getFieldValue("RED");
  var greenVal = this.getFieldValue("GREEN");
  var blueVal = this.getFieldValue("BLUE");
  Blockly.Arduino.definitions_['define_pearl'] = "Pearl pearl;\n";
  Blockly.Arduino.setups_['setup_pearl'] = "pearl = Pearl();\n";
  var code ="pearl.ChangeAll(CRGB("+redVal+","+greenVal+","+blueVal+"));\n";
  code +="pearl.update();\n";
  return code;
};

Blockly.Arduino.set_all_colour = function() {
  var hexVal = this.getFieldValue("RGB");
  Blockly.Arduino.definitions_['define_pearl'] = "Pearl pearl;\n";
  Blockly.Arduino.setups_['setup_pearl'] = "pearl = Pearl();\n";
  var code ="pearl.ChangeAll(CRGB("+hexToR(hexVal)+","+hexToG(hexVal)+","+hexToB(hexVal)+"));\n";
  code +="pearl.update();\n";
  return code;
};

goog.provide('Blockly.Arduino.Adaband');

goog.require('Blockly.Arduino');


Blockly.Arduino.pearl_change = function() {
    function hexToRgb(hex) {
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
      } : null;
  }
  var leds = this.getFieldValue('Number');

  Blockly.Arduino.definitions_['define_pearl'] = '#include <Pearl.h>\n';
  //generate PIN#+1 port
  var NextPIN = _get_next_pin(dropdown_pin);

  Blockly.Arduino.definitions_['var_pearl'] = 'Pearl pearl;\n';
  Blockly.Arduino.setups_['setup_pearl'] = 'pearl = Pearl();\n';
  var code = "";
  for(var i=0;i<leds;i++)
  {
    // fetch led number and colours
    var led = this.getFieldValue('LED number');
    var colour = this.getFieldValue('COLOR'+i);
    var rgb = hexToRgb(colour);
    code += "pearl.Change("+led+",CRGB("+rgb.r+","+rgb.g+","+rgb.b+"));\n"
  }
  code += "pearl.show();\n"
  return code;
};

Blockly.Arduino.pearl_off = function() {
  // Blockly.Arduino.definitions_['pearl'] = 'Pearl();\n';
  Blockly.Arduino.definitions_['define_pearl'] = '#include <Pearl.h>\n';
  Blockly.Arduino.definitions_['var_pearl'] = 'Pearl pearl;\n';
  Blockly.Arduino.setups_['setup_pearl'] = 'pearl = Pearl();\n';
  var code = "pearl.off();\n";
  return code;
};

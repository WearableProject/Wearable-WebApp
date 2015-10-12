goog.provide('Blockly.Arduino.Adaband');

goog.require('Blockly.Arduino');

Blockly.Arduino.set_brightness = function() {
  var brightnessVal = Blockly.Arduino.valueToCode(this, 'NUMBER',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '0';
  Blockly.Arduino.definitions_['define_pearl_import'] = "#include <Pearl.h>\n#include <FastSPI_LED2.h>";
  Blockly.Arduino.definitions_['define_pearl_var'] = "Pearl pearl;\n";
  Blockly.Arduino.setups_['setup_pearl'] = "pearl = Pearl();\n";
  var code ="pearl.setBrightness("+brightnessVal+");\n";
  return code;
};

Blockly.Arduino.set_pixel_text_colour = function() {
  var pixelVal = Blockly.Arduino.valueToCode(this, 'PIXEL',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '0';
  var colorVal = this.getFieldValue("COLOUR");
  Blockly.Arduino.definitions_['define_pearl_import'] = "#include <Pearl.h>\n#include <FastSPI_LED2.h>";
  Blockly.Arduino.definitions_['define_pearl_var'] = "Pearl pearl;\n";
  Blockly.Arduino.setups_['setup_pearl'] = "pearl = Pearl();\n";
  var code ="pearl.Change("+pixelVal+", CRGB("+colorVal+"));\n";
  code +="pearl.update();\n";
  return code;
};

Blockly.Arduino.set_pixel_rgb = function() {
  var pixelVal = Blockly.Arduino.valueToCode(this, 'PIXEL',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '0';
  var redVal = Blockly.Arduino.valueToCode(this, 'RED',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '0';
  var greenVal = Blockly.Arduino.valueToCode(this, 'GREEN',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '0';
  var blueVal = Blockly.Arduino.valueToCode(this, 'BLUE',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '0';
  Blockly.Arduino.definitions_['define_pearl_import'] = "#include <Pearl.h>\n#include <FastSPI_LED2.h>";
  Blockly.Arduino.definitions_['define_pearl_var'] = "Pearl pearl;\n";
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
  var pixelVal = Blockly.Arduino.valueToCode(this, 'PIXEL',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '0';
  var hexVal = this.getFieldValue("RGB");
  Blockly.Arduino.definitions_['define_pearl'] = "#include <Pearl.h>\n";
  Blockly.Arduino.definitions_['define_pearl_var'] = "Pearl pearl;\n";
  Blockly.Arduino.setups_['setup_pearl'] = "pearl = Pearl();\n";
  var code ="pearl.Change("+pixelVal+", CRGB("+hexToR(hexVal)+","+hexToG(hexVal)+","+hexToB(hexVal)+"));\n";
  code +="pearl.update();\n";
  return code;
};

Blockly.Arduino.set_all_text_colour = function() {
  var colorVal = this.getFieldValue("COLOUR");
  Blockly.Arduino.definitions_['define_pearl_import'] = "#include <Pearl.h>\n#include <FastSPI_LED2.h>";
  Blockly.Arduino.definitions_['define_pearl_var'] = "Pearl pearl;\n";
  Blockly.Arduino.setups_['setup_pearl'] = "pearl = Pearl();\n";
  var code ="pearl.ChangeAll(CRGB("+colorVal+"));\n";
  code +="pearl.update();\n";
  return code;
};

Blockly.Arduino.set_all_rgb = function() {
  var redVal = Blockly.Arduino.valueToCode(this, 'RED',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '0';
  var greenVal = Blockly.Arduino.valueToCode(this, 'GREEN',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '0';
  var blueVal = Blockly.Arduino.valueToCode(this, 'BLUE',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '0';
  Blockly.Arduino.definitions_['define_pearl_import'] = "#include <Pearl.h>\n#include <FastSPI_LED2.h>";
  Blockly.Arduino.definitions_['define_pearl_var'] = "Pearl pearl;\n";
  Blockly.Arduino.setups_['setup_pearl'] = "pearl = Pearl();\n";
  var code ="pearl.ChangeAll(CRGB("+redVal+","+greenVal+","+blueVal+"));\n";
  code +="pearl.update();\n";
  return code;
};

Blockly.Arduino.set_all_colour = function() {
  var hexVal = this.getFieldValue("RGB");
  Blockly.Arduino.definitions_['define_pearl_import'] = "#include <Pearl.h>\n#include <FastSPI_LED2.h>";
  Blockly.Arduino.definitions_['define_pearl_var'] = "Pearl pearl;\n";
  Blockly.Arduino.setups_['setup_pearl'] = "pearl = Pearl();\n";
  var code ="pearl.ChangeAll(CRGB("+hexToR(hexVal)+","+hexToG(hexVal)+","+hexToB(hexVal)+"));\n";
  code +="pearl.update();\n";
  return code;
};

Blockly.Arduino.set_row_text_colour = function() {
  var rowVal = Blockly.Arduino.valueToCode(this, 'ROW',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '0';
  var colorVal = this.getFieldValue("COLOUR");
  var ledString = "";
  switch(rowVal)
  {
    case 0:
    ledString = "{0,1,5}"
    break;
    case 1:
    ledString = "{2,3,4}";
    break;
  }
  Blockly.Arduino.definitions_['define_pearl_import'] = "#include <Pearl.h>\n#include <FastSPI_LED2.h>";
  Blockly.Arduino.definitions_['define_pearl_var'] = "Pearl pearl;\n";
  Blockly.Arduino.setups_['setup_pearl'] = "pearl = Pearl();\n";
  var code ="pearl.ChangeMultiple("+ledString+", CRGB("+colorVal+"));\n";
  code +="pearl.update();\n";
  return code;
};

Blockly.Arduino.set_row_rgb = function() {
  var rowVal = Blockly.Arduino.valueToCode(this, 'ROW',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '0';
  var redVal = Blockly.Arduino.valueToCode(this, 'RED',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '0';
  var greenVal = Blockly.Arduino.valueToCode(this, 'GREEN',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '0';
  var blueVal = Blockly.Arduino.valueToCode(this, 'BLUE',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '0';
  var ledString = "";
  switch(rowVal)
  {
    case 0:
    ledString = "{0,1,5}"
    break;
    case 1:
    ledString = "{2,3,4}";
    break;
  }
  Blockly.Arduino.definitions_['define_pearl_import'] = "#include <Pearl.h>\n#include <FastSPI_LED2.h>";
  Blockly.Arduino.definitions_['define_pearl_var'] = "Pearl pearl;\n";
  Blockly.Arduino.setups_['setup_pearl'] = "pearl = Pearl();\n";
  var code ="pearl.ChangeMultiple("+ledString+",CRGB("+redVal+","+greenVal+","+blueVal+"));\n";
  code +="pearl.update();\n";
  return code;
};

Blockly.Arduino.set_row_colour = function() {
  var rowVal = Blockly.Arduino.valueToCode(this, 'ROW',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '0';
  var hexVal = this.getFieldValue("RGB");
  var ledString = "";
  switch(rowVal)
  {
    case 0:
    ledString = "{0,1,5}"
    break;
    case 1:
    ledString = "{2,3,4}";
    break;
  }
  Blockly.Arduino.definitions_['define_pearl_import'] = "#include <Pearl.h>\n#include <FastSPI_LED2.h>";
  Blockly.Arduino.definitions_['define_pearl_var'] = "Pearl pearl;\n";
  Blockly.Arduino.setups_['setup_pearl'] = "pearl = Pearl();\n";
  var code ="pearl.ChangeMultiple("+ledString+", CRGB("+hexToR(hexVal)+","+hexToG(hexVal)+","+hexToB(hexVal)+"));\n";
  code +="pearl.update();\n";
  return code;
};

Blockly.Arduino.set_column_text_colour = function() {
  var colVal = Blockly.Arduino.valueToCode(this, 'COL',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '0';
  var colorVal = this.getFieldValue("COLOUR");
  var ledString = "";
  switch(colVal)
  {
    case 0:
    ledString = "{1,2}"
    break;
    case 1:
    ledString = "{3,0}";
    break;
    case 2:
    ledString = "{4,5}";
    break;
  }
  Blockly.Arduino.definitions_['define_pearl_import'] = "#include <Pearl.h>\n#include <FastSPI_LED2.h>";
  Blockly.Arduino.definitions_['define_pearl_var'] = "Pearl pearl;\n";
  Blockly.Arduino.setups_['setup_pearl'] = "pearl = Pearl();\n";
  var code ="pearl.ChangeMultiple("+ledString+", CRGB("+colorVal+"));\n";
  code +="pearl.update();\n";
  return code;
};

Blockly.Arduino.set_column_rgb = function() {
  var colVal = Blockly.Arduino.valueToCode(this, 'COL',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '0';
  var redVal = Blockly.Arduino.valueToCode(this, 'RED',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '0';
  var greenVal = Blockly.Arduino.valueToCode(this, 'GREEN',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '0';
  var blueVal = Blockly.Arduino.valueToCode(this, 'BLUE',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '0';
  var ledString = "";
  switch(colVal)
  {
    case 0:
    ledString = "{1,2}"
    break;
    case 1:
    ledString = "{3,0}";
    break;
    case 2:
    ledString = "{4,5}";
    break;
  }
  Blockly.Arduino.definitions_['define_pearl_import'] = "#include <Pearl.h>\n#include <FastSPI_LED2.h>";
  Blockly.Arduino.definitions_['define_pearl_var'] = "Pearl pearl;\n";
  Blockly.Arduino.setups_['setup_pearl'] = "pearl = Pearl();\n";
  var code ="pearl.ChangeMultiple("+ledString+",CRGB("+redVal+","+greenVal+","+blueVal+"));\n";
  code +="pearl.update();\n";
  return code;
};

Blockly.Arduino.set_column_colour = function() {
  var colVal = Blockly.Arduino.valueToCode(this, 'COL',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '0';
  var hexVal = this.getFieldValue("RGB");
  var ledString = "";
  switch(colVal)
  {
    case 0:
    ledString = "{1,2}"
    break;
    case 1:
    ledString = "{3,0}";
    break;
    case 2:
    ledString = "{4,5}";
  }
  Blockly.Arduino.definitions_['define_pearl_import'] = "#include <Pearl.h>\n#include <FastSPI_LED2.h>";
  Blockly.Arduino.definitions_['define_pearl_var'] = "Pearl pearl;\n";
  Blockly.Arduino.setups_['setup_pearl'] = "pearl = Pearl();\n";
  var code ="pearl.ChangeMultiple("+ledString+", CRGB("+hexToR(hexVal)+","+hexToG(hexVal)+","+hexToB(hexVal)+"));\n";
  code +="pearl.update();\n";
  return code;
};

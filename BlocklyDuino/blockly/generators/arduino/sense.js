

goog.require('Blockly.Arduino');

Blockly.Arduino.update_sense = function() {
  Blockly.Arduino.definitions_['define_sense_import'] = "#include <Sense.h>\n#define DHT11PIN 4";
  Blockly.Arduino.definitions_['define_sense_var'] = "Sense sense;\n";
  Blockly.Arduino.setups_['setup_sense'] = "sense = Sense();\n";
  var code = "int error = sense.read(DHT11PIN);\n";
  return code;
};


Blockly.Arduino.lightlevel = function() {
  Blockly.Arduino.definitions_['define_sense_import'] = "#include <Sense.h>\n#define DHT11PIN 4";
  Blockly.Arduino.definitions_['define_sense_var'] = "Sense sense;\n";
  Blockly.Arduino.setups_['setup_sense'] = "sense = Sense();\n";
  var code = "sense.lightLevel()";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.humidity = function() {
  Blockly.Arduino.definitions_['define_sense_import'] = "#include <Sense.h>\n#define DHT11PIN 4";
  Blockly.Arduino.definitions_['define_sense_var'] = "Sense sense;\n";
  Blockly.Arduino.setups_['setup_sense'] = "sense = Sense();\n";
  var code = "sense.humidity";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.temp_c = function() {
  Blockly.Arduino.definitions_['define_sense_import'] = "#include <Sense.h>\n#define DHT11PIN 4";
  Blockly.Arduino.definitions_['define_sense_var'] = "Sense sense;\n";
  Blockly.Arduino.setups_['setup_sense'] = "sense = Sense();\n";
  var code = "sense.temperature";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.temp_k = function() {
  Blockly.Arduino.definitions_['define_sense_import'] = "#include <Sense.h>\n#define DHT11PIN 4";
  Blockly.Arduino.definitions_['define_sense_var'] = "Sense sense;\n";
  Blockly.Arduino.setups_['setup_sense'] = "sense = Sense();\n";
  var code = "sense.Kelvin()";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.dewpoint = function() {
  Blockly.Arduino.definitions_['define_sense_import'] = "#include <Sense.h>\n#define DHT11PIN 4";
  Blockly.Arduino.definitions_['define_sense_var'] = "Sense sense;\n";
  Blockly.Arduino.setups_['setup_sense'] = "sense = Sense();\n";
  var code = "sense.Dewpoint()";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.temp_f = function() {
  Blockly.Arduino.definitions_['define_sense_import'] = "#include <Sense.h>\n#define DHT11PIN 4";
  Blockly.Arduino.definitions_['define_sense_var'] = "Sense sense;\n";
  Blockly.Arduino.setups_['setup_sense'] = "sense = Sense();\n";
  var code = "sense.Fahrenheit()";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

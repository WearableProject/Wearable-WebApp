goog.require('Blockly.Arduino');

Blockly.Arduino.update_sensor = function() {
  Blockly.Arduino.definitions_['define_motion_import'] = "#include <Motion.h>\n#include <MMA7660.h>\n#include <Wire.h>";
  Blockly.Arduino.definitions_['define_motion_var'] = "Motion motion;\n";
  Blockly.Arduino.setups_['setup_motion'] = "motion = Motion();\n motion.init();\n";
  var code = "motion.update();\n";
  return code;
};


Blockly.Arduino.x_output = function() {
  Blockly.Arduino.definitions_['define_motion_import'] = "#include <Motion.h>\n#include <MMA7660.h>\n#include <Wire.h>";
  Blockly.Arduino.definitions_['define_motion_var'] = "Motion motion;\n";
  Blockly.Arduino.setups_['setup_motion'] = "motion = Motion();\n motion.init();\n";
  var code = "motion.getX()";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.y_output = function() {
  Blockly.Arduino.definitions_['define_motion_import'] = "#include <Motion.h>\n#include <MMA7660.h>\n#include <Wire.h>";
  Blockly.Arduino.definitions_['define_motion_var'] = "Motion motion;\n";
  Blockly.Arduino.setups_['setup_motion'] = "motion = Motion();\n motion.init();\n";
  var code = "motion.getY()";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.z_output = function() {
  Blockly.Arduino.definitions_['define_motion_import'] = "#include <Motion.h>\n#include <MMA7660.h>\n#include <Wire.h>";
  Blockly.Arduino.definitions_['define_motion_var'] = "Motion motion;\n";
  Blockly.Arduino.setups_['setup_motion'] = "motion = Motion();\n motion.init();\n";
  var code = "motion.getZ()";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.vector_output = function() {
  Blockly.Arduino.definitions_['define_motion_import'] = "#include <Motion.h>\n#include <MMA7660.h>\n#include <Wire.h>";
  Blockly.Arduino.definitions_['define_motion_var'] = "Motion motion;\n";
  Blockly.Arduino.setups_['setup_motion'] = "motion = Motion();\n motion.init();\n";
  var code = "motion.getVector()";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

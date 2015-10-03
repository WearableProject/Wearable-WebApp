

goog.require('Blockly.Arduino');

Blockly.Arduino.bluetooth_read = function() {
  Blockly.Arduino.definitions_['define_bluetooth_import'] = "#include <SoftwareSerial.h>\nSoftwareSerial BLE (2, 3);\nchar readIn;\n char* readBuffer;\n char* oldBuffer;";
  Blockly.Arduino.setups_['ble_display'] = "BLE.begin(9600);\n";
  
  var code =" readBuffer = new char[1];\n while(BLE.available())\n{\n readIn = BLE.read();\n }";
  return code;
};

Blockly.Arduino.bluetooth_write_text = function() {
  var value = this.getFieldValue("TEXT");
  Blockly.Arduino.definitions_['define_bluetooth_import'] = "#include <SoftwareSerial.h>\nSoftwareSerial BLE (2, 3);\nchar readIn;\n char* readBuffer;\n char* oldBuffer;";
  Blockly.Arduino.setups_['ble_display'] = "BLE.begin(9600);\n";
  var code ="BLE.print("+value+");\n";
  return code;
};

Blockly.Arduino.bluetooth_write_block = function() {
  var text = Blockly.Arduino.valueToCode(this, 'TEXT',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '\'\'';
  Blockly.Arduino.definitions_['define_bluetooth_import'] = "#include <SoftwareSerial.h>\nSoftwareSerial BLE (2, 3);\nchar readIn;\n char* readBuffer;\n char* oldBuffer;";
  Blockly.Arduino.setups_['ble_display'] = "BLE.begin(9600);\n";
  var code ="BLE.print("+text+");\n";
  return code;
};

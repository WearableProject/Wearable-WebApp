

goog.require('Blockly.Arduino');

Blockly.Arduino.bluetooth_read = function() {
  Blockly.Arduino.definitions_['define_bluetooth_import'] = "#include <SoftwareSerial.h>\n SoftwareSerial BLE (2, 3);\n char* readBuffer;\n char* oldBuffer;";
  Blockly.Arduino.setups_['ble_setup'] = "BLE.begin(9600);\n readBuffer = new char[1];";

  var code =" while(BLE.available())\n";
  code += "{\n ";
  code += " if(readBuffer == 0)\n";
  code += "  { \n";
  code += "    readBuffer = BLE.read();\n "
  code += "  }\n";
  code += " else\n";
  code += "  { \n";
  code += "     oldBuffer = new char*(readBuffer);\n";
  code += "     readBuffer = new char*[sizeof(oldBuffer)+1];\n";
  code += "     readBuffer = oldBuffer;\n";
  code += "     readBuffer++;\n";
  code += "     readBuffer = BLE.read();\n";
  code += "  }";
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

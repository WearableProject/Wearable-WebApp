//http://www.seeedstudio.com/wiki/GROVE_System
//http://www.seeedstudio.com/depot/index.php?main_page=advanced_search_result&search_in_description=1&keyword=grovefamily
//support starter bundle example http://www.seeedstudio.com/wiki/GROVE_-_Starter_Kit_V1.1b

/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Fred Lin.
 * https://github.com/gasolin/BlocklyDuino
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Helper functions for generating seeeduino grove blocks.
 * @author gasolin@gmail.com (Fred Lin)
 */

 // TODO: pearl change 1, pearl change all,
 // pearl change to word, pearl change to RGB value


goog.require('Blockly.Blocks');

Blockly.Blocks['show_string'] = {
  helpUrl: 'http://github.com/wearableproject',
  init: function() {
    this.setColour(222);
    this.appendDummyInput().appendField('Show:')
    .appendField(new Blockly.FieldTextInput('hello, world'), 'TEXT');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks['show_value'] = {
  helpUrl: 'http://github.com/wearableproject',
  init: function() {
    this.setColour(222);
    this.appendValueInput('TEXT').appendField('Show:');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks['scroll_directions'] = {
  helpUrl: 'http://github.com/wearableproject',
  init: function() {
    var dropdown = [["left", "left"], ["right", "right"], ["up", "up"], ["down", "down"], ["horizontal","horizontal"],["vertical","vertical"]];

    var dropdownField = new Blockly.FieldDropdown(dropdown);
    this.setColour(222);
    this.appendDummyInput().appendField('Scroll')
    .appendField(dropdownField, 'DIRECTION')
    .appendField(new Blockly.FieldTextInput("hello, world"), 'TEXT')
    .appendField("Continuous?")
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'CONTINUOUS');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks['scroll_value_directions'] = {
  helpUrl: 'http://github.com/wearableproject',
  init: function() {
    var dropdown = [["left", "left"], ["right", "right"], ["up", "up"], ["down", "down"], ["horizontal","horizontal"],["vertical","vertical"]];

    var dropdownField = new Blockly.FieldDropdown(dropdown);
    this.setColour(222);
    this.appendDummyInput().appendField('Scroll')
    .appendField(dropdownField, 'DIRECTION').appendField('Text');
    this.appendValueInput('TEXT');
    this.appendDummyInput().appendField("Continuous?")
    .appendField(new Blockly.FieldCheckbox("FALSE"), 'CONTINUOUS');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

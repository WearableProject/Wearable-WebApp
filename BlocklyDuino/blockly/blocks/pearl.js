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

goog.provide('Blockly.Blocks.Adaband');

goog.require('Blockly.Blocks');

Blockly.Blocks['set_brightness'] = {
  helpUrl: 'http://github.com/wearableproject',
  init: function() {
    var value = new Blockly.FieldTextInput('0');
    this.setColour(250);
    this.appendDummyInput().appendField('Set brightness to')
    .appendField(new Blockly.FieldTextInput('40'), 'NUMBER');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks['set_pixel_text_colour'] = {
  helpUrl: 'http://github.com/wearableproject',
  init: function() {
    var value = new Blockly.FieldTextInput('0');
    var text_colours = new Blockly.FieldDropdown([['off',[0,0,0]],['red',[255,0,0]], ['green',[0,255,0]],
                                                  ['blue',[0,0,255]], ['yellow',[255,255,0]],
                                                  ['pink',[255,182,193]], ['orange',[255,165,0]],
                                                  ['purple',[255,0,255]]]);
    this.setColour(250);
    this.appendDummyInput().appendField('Set pixel')
    .appendField(new Blockly.FieldTextInput('1'), 'PIXEL')
    .appendField('to colour').appendField(text_colours, 'COLOUR');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks['set_pixel_rgb'] = {
  helpUrl: 'http://github.com/wearableproject',
  init: function() {
    this.setColour(250);
    this.appendDummyInput().appendField('Set pixel')
    .appendField(new Blockly.FieldTextInput('1'), 'PIXEL')
    .appendField('to RGB:')
    .appendField(new Blockly.FieldTextInput('0'), 'RED')
    .appendField(new Blockly.FieldTextInput('0'), 'GREEN')
    .appendField(new Blockly.FieldTextInput('0'), 'BLUE');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks['set_pixel_colour'] = {
  helpUrl: 'http://github.com/wearableproject',
  init: function() {
    this.setColour(250);
    this.appendDummyInput().appendField('Set pixel')
    .appendField(new Blockly.FieldTextInput('1'), 'PIXEL')
    .appendField('to colour:')
    .appendField(new Blockly.FieldColour('#ffffff'), 'RGB');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks['set_all_text_colour'] = {
  helpUrl: 'http://github.com/wearableproject',
  init: function() {
    var text_colours = new Blockly.FieldDropdown([['off',[0,0,0]],['red',[255,0,0]], ['green',[0,255,0]],
                                                  ['blue',[0,0,255]], ['yellow',[255,255,0]],
                                                  ['pink',[255,182,193]], ['orange',[255,165,0]],
                                                  ['purple',[255,0,255]]]);
    this.setColour(250);
    this.appendDummyInput().appendField('Set all to colour').appendField(text_colours, 'COLOUR');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks['set_all_rgb'] = {
  helpUrl: 'http://github.com/wearableproject',
  init: function() {
    this.setColour(250);
    this.appendDummyInput().appendField('Set all to RGB:')
    .appendField(new Blockly.FieldTextInput('0'), 'RED')
    .appendField(new Blockly.FieldTextInput('0'), 'GREEN')
    .appendField(new Blockly.FieldTextInput('0'), 'BLUE');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks['set_all_colour'] = {
  helpUrl: 'http://github.com/wearableproject',
  init: function() {
    this.setColour(250);
    this.appendDummyInput().appendField('Set all to colour').appendField(new Blockly.FieldColour(), 'RGB');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks['set_row_text_colour'] = {
  helpUrl: 'http://github.com/wearableproject',
  init: function() {
    var text_colours = new Blockly.FieldDropdown([['off',[0,0,0]],['red',[255,0,0]], ['green',[0,255,0]],
                                                  ['blue',[0,0,255]], ['yellow',[255,255,0]],
                                                  ['pink',[255,182,193]], ['orange',[255,165,0]],
                                                  ['purple',[255,0,255]]]);
    this.setColour(250);
    this.appendDummyInput().appendField('Set row')
    .appendField(new Blockly.FieldTextInput('0'), 'ROW')
    .appendField('to colour').appendField(text_colours, 'COLOUR');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks['set_row_rgb'] = {
  helpUrl: 'http://github.com/wearableproject',
  init: function() {
    this.setColour(250);
    this.appendDummyInput().appendField('Set row')
    .appendField(new Blockly.FieldTextInput('0'), 'ROW')
    .appendField('to RGB:')
    .appendField(new Blockly.FieldTextInput('0'), 'RED')
    .appendField(new Blockly.FieldTextInput('0'), 'GREEN')
    .appendField(new Blockly.FieldTextInput('0'), 'BLUE');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks['set_row_colour'] = {
  helpUrl: 'http://github.com/wearableproject',
  init: function() {
    this.setColour(250);
    this.appendDummyInput().appendField('Set row')
    .appendField(new Blockly.FieldTextInput('0'), 'ROW')
    .appendField('to colour').appendField(new Blockly.FieldColour(), 'RGB');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks['set_column_text_colour'] = {
  helpUrl: 'http://github.com/wearableproject',
  init: function() {
    var text_colours = new Blockly.FieldDropdown([['off',[0,0,0]],['red',[255,0,0]], ['green',[0,255,0]],
                                                  ['blue',[0,0,255]], ['yellow',[255,255,0]],
                                                  ['pink',[255,182,193]], ['orange',[255,165,0]],
                                                  ['purple',[255,0,255]]]);
    this.setColour(250);
    this.appendDummyInput().appendField('Set column')
    .appendField(new Blockly.FieldTextInput('0'), 'COL')
    .appendField('to colour').appendField(text_colours, 'COLOUR');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks['set_column_rgb'] = {
  helpUrl: 'http://github.com/wearableproject',
  init: function() {
    this.setColour(250);
    this.appendDummyInput().appendField('Set column')
    .appendField(new Blockly.FieldTextInput('0'), 'COL')
    .appendField('to RGB:')
    .appendField(new Blockly.FieldTextInput('0'), 'RED')
    .appendField(new Blockly.FieldTextInput('0'), 'GREEN')
    .appendField(new Blockly.FieldTextInput('0'), 'BLUE');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks['set_column_colour'] = {
  helpUrl: 'http://github.com/wearableproject',
  init: function() {
    this.setColour(250);
    this.appendDummyInput().appendField('Set column')
    .appendField(new Blockly.FieldTextInput('0'), 'COL')
    .appendField('to colour').appendField(new Blockly.FieldColour(), 'RGB');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

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

goog.provide('Blockly.Blocks.Adaband');

goog.require('Blockly.Blocks');

Blockly.Blocks['pearl_change'] = {
  helpUrl: 'http://arduino.cc/en/Reference/delay',
  init: function() {
    var NUMBERS = [["Number",-1],["1",1],["2",2],["3",3],["4",4],["5",5],["6",6]];

    var dropdown = new Blockly.FieldDropdown(NUMBERS, function(option){
      this.sourceBlock_.updateShape_(option);
    });
    this.setColour(190);
    this.appendDummyInput().appendField("Change # LEDs").appendField(dropdown, "Number");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Delay specific time');

  },

  updateShape_ : function(option){
    var NUMBERS = [["1",0],["2",1],["3",2],["4",3],["5",4],["6",5]];
    for(var i=0;i<option;i++)
    {
      var inputExists = this.getInput('COLOR'+i);
      if(!inputExists)
      {
        this.appendDummyInput('COLOR'+i)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("LED #")
        .appendField(new Blockly.FieldDropdown(NUMBERS), "LED number")
        .appendField("Color ")
        .appendField(new Blockly.FieldColour("#00ff00"), "RGB"+i);
      }
    }
    var j = option;
    while(j < 7)
    {
      var inputExists = this.getInput('COLOR'+j);
      if(inputExists)
      {
        this.removeInput('COLOR'+j);
      }
      j++;
    }
  },
  mutationToDom: function() {
      var container = document.createElement('mutation');

      return container;
    },
    domToMutation: function(xmlElement) {
    },
    decompose: function(workspace) {
      var containerBlock = Blockly.Block.obtain(workspace,
                                                'project_pearl_container');
      return containerBlock;
    },
    compose: function(containerBlock) {
      // Disconnect all input blocks and remove all inputs.
        for (var x = this.itemCount_ - 1; x >= 0; x--) {
          //console.log("cnt:"+x);
          this.removeInput('COLOR' + x);
        }

      /*var top;
      if(this.itemCount_ > 0){
        top = this.itemCount_-1;
      } else {
        top = 0;
      }
      console.log("top:"+top);*/
      this.itemCount_ = 0;
      // Rebuild the block's inputs.
      var itemBlock = containerBlock.getInputTargetBlock('STACK');
      while (itemBlock) {
        var colour_rgb = this.getFieldValue('RGB' + this.itemCount_);
        if(colour_rgb==null){
            colour_rgb = "00ff00";
        }
        //console.log("blk:"+this.itemCount_);
        /*if(top>this.itemCount_){
          this.removeInput('COLOR' + this.itemCount_);
        }*/
        var input = this.appendDummyInput('COLOR' + this.itemCount_);
        //if (this.itemCount_ == 0) {
          input.setAlign(Blockly.ALIGN_RIGHT)
               .appendField("Color " + (this.itemCount_+1))
               .appendField(new Blockly.FieldColour(colour_rgb), "RGB" + this.itemCount_);
        //}
        // Reconnect any child blocks.
        if (itemBlock.valueConnection_) {
          input.connection.connect(itemBlock.valueConnection_);
        }
        this.itemCount_++;
        itemBlock = itemBlock.nextConnection &&
            itemBlock.nextConnection.targetBlock();
      }
    }
};

Blockly.Blocks['pearl_off'] = {
  helpUrl: 'http://arduino.cc/en/Reference/delay',
  init: function() {

    this.setColour(190);
    this.appendDummyInput().appendField("Turn LEDs off");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Delay specific time');

  },

  updateShape_ : function(option){
    var NUMBERS = [["1",0],["2",1],["3",2],["4",3],["5",4],["6",5]];
    for(var i=0;i<option;i++)
    {
      var inputExists = this.getInput('COLOR'+i);
      if(!inputExists)
      {
        this.appendDummyInput('COLOR'+i)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("LED #")
        .appendField(new Blockly.FieldDropdown(NUMBERS), "LED number")
        .appendField("Color ")
        .appendField(new Blockly.FieldColour("#00ff00"), "RGB"+i);
      }
    }
    var j = option;
    while(j < 7)
    {
      var inputExists = this.getInput('COLOR'+j);
      if(inputExists)
      {
        this.removeInput('COLOR'+j);
      }
      j++;
    }
  },
  mutationToDom: function() {
      var container = document.createElement('mutation');
      var fields = this.getFieldValue('Number');
      container.setAttribute('items', fields);
      var max = fields + 1;
      for (var x = 0; x < max; x++) {
        var colour_rgb = this.getFieldValue('RGB'+x);
        //alert(colour_rgb);
        container.setAttribute('RGB' + x, colour_rgb);
      }
      return container;
    },
    domToMutation: function(xmlElement) {
      var fields = this.getFieldValue('Number');
      for (var x = 0; x < this.itemCount_; x++) {
        this.removeInput('COLOR' + x);
      }
      this.itemCount_ = fields;
      for (var x = 0; x < this.itemCount_; x++) {
        var color = window.parseInt(xmlElement.getAttribute('RGB'+x), "#00ff00");
        var input = this.appendDummyInput('COLOR' + x);
        //if (x == 0) {
          input.setAlign(Blockly.ALIGN_RIGHT)
               .appendField("Color "+(x+1))
               .appendField(new Blockly.FieldColour(color), "RGB" + x);
        //}
      }
    },
    decompose: function(workspace) {
      var containerBlock = Blockly.Block.obtain(workspace,
                                                'project_pearl_container');
      containerBlock.initSvg();
      var connection = containerBlock.getInput('STACK').connection;
      for (var x = 0; x < this.itemCount_; x++) {
        var itemBlock = Blockly.Block.obtain(workspace, 'project_pearl_number_item');
        itemBlock.initSvg();
        connection.connect(itemBlock.previousConnection);
        connection = itemBlock.nextConnection;
      }
      return containerBlock;
    },
    compose: function(containerBlock) {
      // Disconnect all input blocks and remove all inputs.
        for (var x = this.itemCount_ - 1; x >= 0; x--) {
          //console.log("cnt:"+x);
          this.removeInput('COLOR' + x);
        }

      /*var top;
      if(this.itemCount_ > 0){
        top = this.itemCount_-1;
      } else {
        top = 0;
      }
      console.log("top:"+top);*/
      this.itemCount_ = 0;
      // Rebuild the block's inputs.
      var itemBlock = containerBlock.getInputTargetBlock('STACK');
      while (itemBlock) {
        var colour_rgb = this.getFieldValue('RGB' + this.itemCount_);
        if(colour_rgb==null){
            colour_rgb = "00ff00";
        }
        //console.log("blk:"+this.itemCount_);
        /*if(top>this.itemCount_){
          this.removeInput('COLOR' + this.itemCount_);
        }*/
        var input = this.appendDummyInput('COLOR' + this.itemCount_);
        //if (this.itemCount_ == 0) {
          input.setAlign(Blockly.ALIGN_RIGHT)
               .appendField("Color " + (this.itemCount_+1))
               .appendField(new Blockly.FieldColour(colour_rgb), "RGB" + this.itemCount_);
        //}
        // Reconnect any child blocks.
        if (itemBlock.valueConnection_) {
          input.connection.connect(itemBlock.valueConnection_);
        }
        this.itemCount_++;
        itemBlock = itemBlock.nextConnection &&
            itemBlock.nextConnection.targetBlock();
      }
    }
    /*saveConnections: function(containerBlock) {
      // Store a pointer to any connected child blocks.
      var itemBlock = containerBlock.getInputTargetBlock('STACK');
      var x = 0;
      while (itemBlock) {
        var input = this.getInput('COLOR' + x);
        itemBlock.valueConnection_ = input && input.connection.targetConnection;
        x++;
        itemBlock = itemBlock.nextConnection &&
            itemBlock.nextConnection.targetBlock();
      }
    }*/
};

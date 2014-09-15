/**
* Post.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  		titulo: {
  			type: 'String',
  			unique: true
  		},

  		contenido: {
  			type: 'String',
  			unique: true
  		},

  		autor: {
  			type: 'String',
  		}
  }
};


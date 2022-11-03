const db = require("../utils/database");

const { DataTypes } = require("sequelize");
const Users = require('./users.models');
const Conversations = require("./conversations.models");

const Message = db.define("message", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
  },
  senderId: {
    type: DataTypes.UUID,
    allowNull: false,
    field: 'sender_id',
    reference: {
        key: id,
        Model: Users
    }
    
  },
  conversationId: {
    type: DataTypes.UUID,
    allowNull: false,
    field: 'conversation_id',
    reference: {
        key: id,
        Model: Conversations
    }
    
  },

  message: {
    type: DataTypes.STRING,
    allowNull: false,
   
  },
  
});

module.exports = Message
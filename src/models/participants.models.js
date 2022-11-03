const db = require("../utils/database");

const { DataTypes } = require("sequelize");
const Users = require('./users.models')
const Conversations = require('./conversations.models')




const Participants = db.define("participants", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    field: 'user_id',
    reference: {
        key: 'id',
        Model: Users
    }
    
  },
  conversationId: {
    type: DataTypes.UUID,
    allowNull: false,
    field: 'conversation_id',
    reference: {
        key: 'id',
        Model: Conversations
    }
  },
  
});

module.exports = Participants
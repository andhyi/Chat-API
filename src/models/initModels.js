
const Message = require('./message.models')
const Participants = require('./participants.models')
const Conversations = require('./conversations.models')
const Users = require('./users.models')

const initModels = () => {
    // 1. Un usuario tiene muchas conversaciones M:M
    Users.hasMany(Conversations)
    Conversations.hasMany(Users)
    // 2. Un usuario es participante de muchas conversaciones
    Users.hasMany(Participants)
    Participants.belongsTo(Users)
    // 3. Un usuario envia muchos mensajes
    Users.hasMany(Message)
    Message.belongsTo(Users)
    // 4. Una conversacion tiene muchos participantes
    Conversations.hasMany(Participants)
    Participants.belongsTo(Conversations)
    // 5. Una conversacion tiene muchos mensajes
   Conversations.hasMany(Message)
   Message.belongsTo(Conversations)

}

module.exports = initModels
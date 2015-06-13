var Schemas = {}

Mensajes = new Mongo.Collection('mensajes')

Schemas.Mensaje = new SimpleSchema({
  texto: {
    type: String,
    autoform: {
      label: false,
      autofocus: true
    }
  },

  fecha: {
    type: Date,
    autoValue: function() {
      return this.value || (this.isInsert && new Date)
    }
  },

  usuario: {
    type: String,
    autoValue: function() {
      var user = Meteor.user()

      return user.profile.name
    }
  },

  salon: {
    type: String
  }
})

Mensajes.attachSchema(Schemas.Mensaje)

Salones  = new Mongo.Collection('salones')

Schemas.Salon = new SimpleSchema({
  nombre: {
    type: String,
    index: true,
    unique: true
  }
})

Salones.attachSchema(Schemas.Salon)

Meteor.publish('mensajes', function () {
  if (this.userId)
    return Mensajes.find()
  else
    return []
})

Mensajes.allow({
  insert: function (userId, doc) {
    return !! userId
  }
})

Meteor.publish('salones', function () {
  if (this.userId)
    return Salones.find()
  else
    return []
})

Salones.allow({
  insert: function (userId, doc) {
    return !! userId
  }
})

Meteor.startup(function () {
  if (Salones.find().count() === 0)
    Salones.insert({ nombre: 'Principal' })
})

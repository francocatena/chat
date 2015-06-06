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

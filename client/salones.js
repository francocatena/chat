Session.set('salonSeleccionado', 'Principal')

Template.salon.helpers({
  activo: function () {
    return Session.equals('salonSeleccionado', this.nombre) && 'active'
  }
})

Template.salon.events({
  'click a': function (event) {
    event.preventDefault()

    Session.set('salonSeleccionado', this.nombre)
  }
})

Template.salones.helpers({
  salones: function () {
    return Salones.find({}, { sort: { nombre: 1 } })
  }
})

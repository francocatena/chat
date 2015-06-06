Template.mensajes.helpers({
  mensajes: function () {
    var selector = { salon: Session.get('salonSeleccionado') }

    return Mensajes.find(selector, { sort: { fecha: 1 } })
  }
})

Template.mensajes.events({
  'submit': function (event) {
    event.preventDefault()

    var $mensaje = $('#mensaje')
    var texto    = $mensaje.val().trim()
    var usuario  = Meteor.user()

    if (texto)
      Mensajes.insert({
        texto:   texto,
        fecha:   new Date,
        usuario: usuario.profile.name,
        salon:   Session.get('salonSeleccionado')
      })

    $mensaje.val('').focus()
  }
})

Template.mensaje.helpers({
  fecha: function () {
    return moment(this.fecha).format('LT')
  }
})

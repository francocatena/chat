Meteor.subscribe('mensajes')

accountsUIBootstrap3.setLanguage('es')

Template.chat.helpers({
  mensajes: function () {
    return Mensajes.find({}, { sort: { fecha: 1 } })
  }
})

Template.chat.events({
  'submit': function (event) {
    event.preventDefault()

    var $mensaje = $('#mensaje')
    var texto    = $mensaje.val().trim()

    if (texto)
      Mensajes.insert({ texto: texto, fecha: new Date })

    $mensaje.val('').focus()
  }
})

Template.mensaje.helpers({
  fecha: function () {
    return moment(this.fecha).format('LT')
  }
})

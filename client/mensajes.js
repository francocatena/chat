Template.mensajes.helpers({
  mensajes: function () {
    var selector = { salon: Session.get('salonSeleccionado') }

    return Mensajes.find(selector, { sort: { fecha: 1 } })
  }
})

Template.mensaje.helpers({
  fecha: function () {
    return moment(this.fecha).format('LT')
  }
})

AutoForm.addHooks('agregarMensaje', {
  before: {
    insert: function (mensaje) {
      mensaje.salon = Session.get('salonSeleccionado')
      mensaje.fecha = new Date

      return mensaje
    }
  }
})

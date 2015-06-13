Template.mensaje.helpers({
  fecha: function () {
    return moment(this.fecha).format('LT')
  }
})

AutoForm.addHooks('agregarMensaje', {
  before: {
    insert: function (mensaje, lala) {
      var salon = Router.current() && Salones.findOne(Router.current().params._id)

      mensaje.salon = salon.nombre
      mensaje.fecha = new Date

      return mensaje
    }
  }
})

Template.salon.helpers({
  activo: function (contexto) {
    return contexto.salon.nombre === this.nombre && 'active'
  }
})

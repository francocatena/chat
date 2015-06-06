var mensajesSub = Meteor.subscribe('mensajes')
var salonesSub  = Meteor.subscribe('salones')

accountsUIBootstrap3.setLanguage('es')

Template.chat.helpers({
  listo: function () {
    return mensajesSub.ready() && salonesSub.ready()
  }
})

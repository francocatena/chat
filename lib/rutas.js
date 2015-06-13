Router.configure({
  layoutTemplate: 'principal'
})

Router.onBeforeAction(function () {
  if (! Meteor.userId())
    this.render('inicio')
  else
    this.next()
})

Router.route('/', function () {
  this.subscribe('salones').wait()

  if (this.ready()) {
    var salon = Salones.findOne({}, { sort: { nombre: 1 } })

    this.redirect('salon', salon)
  } else {
    this.render('cargando')
  }
})

Router.route('/salones/:_id', function () {
  var salonId = this.params._id

  this.subscribe('salones').wait()
  this.subscribe('mensajes').wait()

  if (this.ready()) {
    this.render('chat', {
      data: function () {
        var salon = Salones.findOne(salonId)

        return {
          salon:    salon,
          mensajes: Mensajes.find({ salon: salon.nombre }),
          salones:  Salones.find({}, { sort: { nombre: 1 } })
        }
      }
    })
  } else {
    this.render('cargando')
  }
}, { name: 'salon' })

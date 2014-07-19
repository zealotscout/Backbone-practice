var Libro = Backbone.Model.extend({
  urlRoot: '/libros',
  initialize: function(){
    console.log("se ha creado una nueva instancia");
  this.on("change",function(){
    console.log("el model ha cambiado")

  });
  }

});

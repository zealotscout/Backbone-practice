var app = app {};
app.Libreria = Backbone.View.extend({
	el :"#app",
	initialize:function(){
		app.libros.fetch();
		
		app.libros.on("add",this.mostrarLibro);
	},
	mostrarLibro:function(modelo){

		var vista = new MostrarLibroView({model:modelo});
		$("#libros").append(vista.render().$el())
	
}
});


var MostrarLibroView = Backbone.View.extend({
		template : _.template($("#tplMostrarLibro").html()),

		render: function(){

			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
});
var appView  = new Libreria();


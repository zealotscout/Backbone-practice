var app = app ||{};
app.LibrosCollection = Backbone.Collection.extend({
model : Libro,
url:'/libros'
});

var libros = new LibrosCollection();



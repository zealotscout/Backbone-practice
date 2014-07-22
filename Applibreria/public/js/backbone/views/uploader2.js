
var Game = Backbone.Model.extend({
	urlRoots:"/libros",
	defaults: {
		name:'placeholder',
		system:"ps3",
		rating:"rated M"

	},
	initialize: 
		function(){
			console.log("New Game created")
			this.on("change",function(){
				console.log("Game changed");
			});
		}
});

var Games = Backbone.Collection.extend({
	model:Game,
	initialize: function(){
		this.on("add",function(model){
			console.log("Game has been added to the list");
			this.map(function(model){
				return model.get({});
			})
		});
		this.on('remove',this.hideModel);

	},
	hideModel:function(model){
		model.trigger('hide');
	}

});

var GameView = Backbone.View.extend({model:Game,
	el:'#book-list',
	template: _.template("<div id=row> <h1> Name </h1><label class = title > <%= name %> </label> <h2>System</h2><label class = title> <%= system %> </label> <h3> Rating </h3> <label class= title> <%= rating %> <label></div>" ),
	initialize:
		function(){
			this.model.on("change:name",this.render,this);
			this.model.on("change",this.render,this);
			this.model.on('destroy',this.remove,this);
			console.log("game view created");
			this.model.on('hide',this.remove,this);
		},
	render: function(model){
		var attributes = this.model.toJSON();
		console.log(attributes)
		this.$el.append(this.template(attributes));
	},
	remove:function(){
		$('#row').remove();
	}
});


var GamesView = Backbone.View.extend({collection:Games,el:'#game-container',
	tagName:'div',
	initialize: function(){
		console.log("gamesView initialized");
		this.collection.on("add",this.addOne,this);
		//this.collection.on("change",this.addOne,this);
		this.collection.on('reset',this.addAll,this);

		},
	render: function(){
		this.addAll(this.addOne,this)
	},
	addOne: function(model){
		var view = new GameView({model:model});
		this.$el.append(view.render());
	},
	addAll: function(){
		this.collection.forEach(this.addOne,this);
	}
	

			/*
			var val1,val2,val3;
			val1 = $("#title-input").val();
			val2 = $("#author-input").val();
			val3 = $("#pages-input").val();
			var game = new Game({name:val1,system:val2,rating:val3});
			
			games.add([game]);
			var view = new GameView({model:game});
			view.render();
			console.log("view.el is ",view.el)
			//var gameView = new GameView({model:model})
			//gameView.render();
			$("#book-list").append(view.el)
			console.log("el on games view",this.el)
			games.forEach(function(ga){
			*/

			

});
//var games = new Games([{title:'demonsouls'}],[{title:'darksouls'}]);
//var gamesView = new GamesView({});
//var gamesView = new GamesView({});
//var games = new GameLibrary({});

/*var GamesView = Backbone.View.extend({collection:GameLibrary,

});

var gamesView = new GamesView();
var Game = Backbone.Model.extend({
	urlRoots:"/libros",
	defaults: {
		name:'placeholder',
		system:"ps3",
		rating:"rated M",

	},
	initialize: 
		function(){

			this.once("change",function(){
				console.log("model has changed");

			},this);
		}
});

var GameLibrary = Backbone.Collection.extend({model:Game,
	initialize:
		function(){
			console.log("gamelist made");
		}
});
var gamelib = new GameLibrary({})
var GameView = Backbone.View.extend({
	model:Game,
	el:'.col-md-5',
	
	template: _.template("<h1 class = title > <%= name %> </h1> <h2 class = title> <%= system %> </h2> <h3 class = title> <%= rating %> <h3>" ),

	initialize:
	function(){

		console.log("view initialized");
		//var game = new Game({});
		//this.model.on("change",this.render,this);
		//this.model.on("destroy",this.remove,this);
		//this.model.on("add",this.render,this);
		
	},
	
	removeGame:
		function(){
			this.$(".title").remove();

		},
	events: {
		"click #send":"sendGame",
		"click #remove":"removeGame"

	},
	sendGame: 
		function(){

			var val1,val2,val3;

			val1 = $("#title-input").val();
			val2 = $("#author-input").val();
			val3 = $("#pages-input").val();

			this.model.set({name:val1,system:val2,rating:val3});
			gamelib.add([this.model])
			//console.log(game.toJSON());
			var attributes = game.toJSON();

			$("#book-list").html(this.template(attributes));
			/*var gameView = GameView({model:model})
			
			console.log("Sent ;)");	
			var field1 = $('#title-input').val();
			console.log("field1 : "+field1);
		this.model.add({title:field1});
		gameView.render();
			console.log("poop")
			*/
			/*
			console.log($("#title-input").val());
			var value1= $("#title-input").val();
			this.model.set({name:value1})
			gview = new GameView({model:game});
			gview.render();*/
			/*
		}
});

var game = new Game({});
var gameView = new GameView({model:game});
*/

//models
var Berserker = Backbone.Model.extend({
	defaults:{
		weapon:"greatsword",
		title :"fighter"
	}
});
var guts = new Berserker({weapon:"dragonslayer",title:"blackswordsman"});

var weapon = guts.get("weapon");
var title = guts.get("title");

var attributes = guts.toJSON();

var peguts = new Berserker();

peguts.set({weapon:"drayonslayer2",title:"the struggler"});

var weapon = Backbone.Model.Extend({
defaults:{
	title:'weapon',
	swordClass:'great',
	damage :'50'
},
initialize : function(){

}
});

var sword = new weapon({title:"Zweihander",swordClass:"ultra-great",damage:"150"});

var name = sword.get("title");
var sclass = sword.get("swordClass");
var output = sword.get("damage");


var Photo = Backbone.Model.extend({
	defaults:{
		title:'another picture',
		src:'placeholder.jpg',
		tags:['untagged'],
		location:'home'
		
	},
	initialize: function(){
		console.log("this model has been initialized");
		this.on("change:title",function(){
			var title = this.get("title");
			console.log("my tittle has been changed to .." + title);
		});
	},
	setTitle : function(newTitle){
		this.set({title:newTitle});
	}
});

var myPhoto = new Photo({title:"fishing",src:"fishing.jpg"});
myPhoto.setTitle("newfishingtitle");

//See validation

// views

/*
var Warrior = Backbone.Model.extend({
    defaults:
    {title:"warrior",
     weapon:"sword",
     handle:"warrior"
        },
    initialize: function(){
      
        
    console.log("A warrior is born");
        
    },
    setTitle: function(newTitle){
        this.set({title:newTitle});
    }
    
    
});

var Berserker = new Warrior({title:"Berzerker",weapon:"Dragonslater",handle:"The Black Swordsman"});

console.log(Berserker.get('title'));
console.log(Berserker.get('weapon'));
console.log(Berserker.get('handle'));

var Fighter = new Warrior();
Fighter.set({title:'Greatsword warrior',weapon:'Ultragreatsword of desctruction'});

fighterStats = Fighter.toJSON();
console.log(fighterStats);

*/

/*
var Todo = Backbone.Model.extend({
    defaults:{
        title:'',
        completed: false
    }
});
var myTodo = new Todo({title:'set through instantiation'});
console.log('Todo Title:' + myTodo.get('title'));
console.log('completion status:'+ myTodo.get('completed'));

myTodo.set("title","todo set through single set statements");
console.log(myTodo.get('title'));
myTodo.set({title:'Call of Cthulhu',completion:'false'});
console.log("the title of this book is "+myTodo.get('title')+" and the completition status is: "+ myTodo.get('completed'));
*/

/*


var Swordsman = Backbone.Model.extend({
    defaults:{
    name:'soldier',
        title:'swordsman'
    },
    initialize: function(){console.log("created successfully");}
});

var berserker = new Swordsman();
berserker.on("change:name",function(){console.log("name has been changed succesfully")});
berserker.on("change:weapon",function(){console.log("weapon has been changed");})
berserker.set({name:'guts',weapon:'dragonslayer'});

berserker.set({name:'skullnight'},{silent:false})
berserker.set({weapon:'100 man slayer'});
console.log(berserker.hasChanged("name"));*/

/*//listening for changes to your model

var Todo = Backbone.Model.extend({
    defaults:{
        title:'',
        completed:false
    },
    initialize: function(){
                 console.log("model has been initialized");   
        this.on('change',function(){
            console.log("this record has been changed");
        });            
    }
});

var todo = new Todo();
todo.set({title:'New name precisely'});
console.log("new name of the book is: "+ todo.get('title') );*/

/*
using the on function
var Todo = Backbone.Model.extend({
    defaults:{
        title:'',
        completed:false
    },
    initialize: function(){

                    console.log("model has been initialized");
    this.on('change:title',function(){
    console.log(" title has been changed");                
});



                },
                    setTitle: function(newTitle){
                        this.set({title:newTitle});
                    }
});

var myTodo = new Todo();

myTodo.set({title:'new title'});
console.log("title is now "+ myTodo.get('title'));
myTodo.setTitle('new title ex plus alpha exceed ');
console.log("title after first change is now " + myTodo.get('title'));

*/

/*View practice

var button1 = $('<button></button>');
var button2 = $('<button></button>');

var View = Backbone.View.extend({
    events:
    {
        click: function(e){
            console.log(view.el===e.target);
        
        }
    }

});

var view = new View({el:button1});
view.setElement(button2);
button1.trigger('click');
button2.trigger('click');*/

/*
tostringify
var Todo = Backbone.Model.extend({
    defaults:{
        title:'',
        completed: false
    }
});
var TodosCollection = Backbone.Collection.extend({
    model: Todo
});

var myTodo = new Todo({title:'read the whole book',id :2});
var a = new Todo({title:'Go to Jamaica'}),
    b = new Todo({title:'Go to China'}),
    c = new Todo({title:'Go to Disneyland'});

var todos = new TodosCollection([a,b,c]);

 todos.remove(c);
todos.remove(a);

console.log("Size of collection at the moment is: "+ todos.length);

todos.add([a,c]);

console.log("length of todo is now at: "+todos.length);

var Items = Backbone.Collection.extend({
    defaults:{
        name:'',
        id:''
    }
});
var items = new Items();
items.add([{id:1,name:"dog",age:3},{id:2,name:"cate",age:2},{id:3,name:"lion"}])

console.log(JSON.stringify(items.toJSON()));
*/
/*
var Book = Backbone.Model.extend({
    defaults:{
        title:'',
        completed:false
    }
});

var book1 = new Book({title:'best of lovecraft',completed:false,id:1});

console.log("contents of book right now are "+JSON.stringify(book1.toJSON()));

var book2 = new Book({title:'berserk',completed:true,id:2});

console.log("contents of book2 right now are "+JSON.stringify(book2.toJSON()));

var Library = Backbone.Collection.extend({
    model:Book
});

library =  new Library([book1,book2]);

library.on("add",function(book){
    console.log("a new book has been added called"+book.get("title"));
});

library.on("change:title",function(model){
    console.log("this book has changed its title to:",model.get("title"));
});

library.add([{title:'god hand',completed:false,id:3}]);
library.add([{title:'whisper in the dark',completed:false,id:4}]);


console.log("inside our library are currently "+library.length+" books");
book1.set({title:'Berserk Zero'});

*/

/*
var Todo = Backbone.Model.extend({
    defaults:{
        title:'',
        completed:false
    }
});

var myTodo = new Todo();
myTodo.set({title:'buy some cookies',completed:true});

myTodo.on({
    'change:title' : titleChanged,
    'change:completed' : stateChanged

});

function titleChanged(model){
    console.log("title has been changed to ",model.get('title'));
}
function stateChanged(model){
    console.log("state has been changed",model.get('completed'));
}
myTodo.set({title:'new title',completed:false});

var Warrior = Backbone.Model.extend({
    name:'',
    title:'',
    weapon:''
});

berserker = new Warrior({name:'Guts',title:'Captain of the raiders',weapon:'100 man slaughter'});

berserker.on({
    'change:name': changeName,
    'change:title':changeTitle,
    'change:weapon':changeWeapon
});

function changeName(warrior){
    console.log("Guts has changed name to",warrior.get('name'));
}
                function changeTitle(warrior){
        console.log("Guts has changed title to",warrior.get('title'));
    }
function changeWeapon(warrior){
    console.log("Guts has changed name to ",warrior.get('weapon'));
}

berserker.set({title:'blackswordsman',weapon:'dragonslayer'});







using set on collections
var TodosCollection =  new Backbone.Collection();

TodosCollection.add([
    {id:1,title:'go to Jamaica',completed:false},
    {id:2,title:'go to china',completed:false},
    {id:3,title:'go to Disneyland',completed:true}
]);

TodosCollection.on("add",function(model){
    console.log("added: "+model.get('title'));
});

TodosCollection.on("remove",function(model){
    console.log("removed: "+model.get('title'));
});

TodosCollection.on("change:completed",function(model){
    console.log("completed: "+model.get('title'));
});

TodosCollection.set([
    { id: 1, title:'go to Jamaica',completed:true},
    {id:2,title:'go to china',completed:false},
    {id:4,title:'go to disneyland',completed:false},
  
]);

using set on collections


var BerserkCast = new Backbone.Collection();

BerserkCast.add([
    {id:1,name:'Guts'},
    {id:2,name:'Casca'},
    {id:3,name:'Griffith'}
]);

BerserkCast.on("add",function(model){
    console.log(" a new member has been added: ",model.get('name'));
});

BerserkCast.on("change:name",function(model){
    console.log("a berserk cast has had a name change to: ",model.get('name'));
});

BerserkCast.set([
    {id:4,name:'Judea'},
    {id:3,name:'Femto'},
    {id:1,name:'black swordsman'}
]);



*/

/*using set to smart update a collection

var Beatle = Backbone.Model.extend({
    defaults: {
        job: 'musician'
    }
});

var john = new Beatle({
    firstName: 'John',
    lastName: 'Lennon'
}),
    paul = new Beatle({
        firstName: 'Paul',
        lastName: 'McCartney'
    }),
    george = new Beatle({
        firstName: 'George',
        lastName: 'Harrison'
    }),
    ringo = new Beatle({
        firstName: 'Ringo',
        lastName: 'Starr'
    });

var theBeatles = new Backbone.Collection([john,paul,george,ringo]);
var pete = new Beatle({firstName:'Pete',lastName:'Best'});

theBeatles.set([john,paul,pete,ringo]);
john.set({name:'poopy-face'});
console.log("current members of the beatles are: ",JSON.stringify(theBeatles.toJSON()));


Using trigger and on with extending backbone events to a object
var ourObject = {};

// Mixin
_.extend(ourObject, Backbone.Events);

// Add a custom event
ourObject.on('dance', function(msg){
  console.log('We triggered ' + msg);
});




// Trigger the custom event
ourObject.trigger('dance', 'our event');
var guts = {};

_.extend(guts,Backbone.Events);

guts.on("sight of godhand",function(msg){
    console.log("Guts yells out : ",msg)
});

guts.trigger("sight of godhand","GRIFFISSS!");


*/

var ourObject= {};

_.extend(ourObject,Backbone.Events);

function dancing(msg){
console.log("we started " +msg);
}

ourObject.on("dance:tap",dancing);
ourObject.on("dance:break",dancing);
             
             ourObject.trigger("dance:tap","tap dancing yeah!");
               
ourObject.trigger("dance:break","break dancing Yeah!!");


//triggering multiple events at once

var ourObject = {};

_.extend(ourObject,Backbone.Events);

function doAction(action,duration)
{
    console.log("We are "+action+" for " + duration);
}

ourObject.on("dance",doAction);
ourObject.on("hop",doAction);
ourObject.on("skip",doAction);

ourObject.trigger("dance","dancing","fuh days");
ourObject.trigger("dance hop skip"," jumping","fuh days homie");


<script type="text/template" id="search_template">
    <label>Search</label>
    <input type="text" id="search_input"></input>
    <input type="button" id="search_button" value="search"></input>
        
</script>

<div id="search_container"></div>

var SearchView = Backbone.View.extend({
    initialize: function(){
        this.render();
    },
    
    render: function(){
        var template = _.template($("#search_template").html(),{} );
        this.$el.html(template);
    },
    events:{ "click input[type=button]" : "doSearch"},
    doSearch : function(event){
    alert("searching for "+$("#search_input").val() );
}
});
        
var searchView = new SearchView({el:$("#search_container")});











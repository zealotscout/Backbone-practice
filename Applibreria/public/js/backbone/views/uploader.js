var Book = Backbone.Model.extend({

    urlRoot:"/libros",
    defaults:{
        title:"no title",
        pages:"",
        author:"unknown"


    },
    h2clicked:
    function(){
        alert("sent");

    }
});



var book = new Book ({title:"call of cthulhu",author:"hp lovecraft"});

book.on("change:author",function(){

    alert("Changes have been made to: "+book.get("title"));

});




var BookView = Backbone.View.extend({
    model:Book,
    el:'#book-list',

    

    initialize:function(){
    this.model.on("change",this.render,this);
    this.model.on("destroy",this.remove,this);
    this.model.on("hide",this.remove,this);
    }
    

    ,
    remove:
    function(){
        this.$el.remove();
        console.log(this.el)
    }
    ,
    template: _.template("<h1>Title </h1><li> <strong> <%= title %> </strong></li>  <h2>Author </h2> <li> <%= author %></li><h3>Pages</h3> <li> <%= pages%></li> <br>"),
    render: function(){

        var attributes = this.model.toJSON();
        //var html = '<h1>' +this.model.get("title") + '</h1>'
        //$(this.el).html(template(attributes));
        this.$el.append(this.template(attributes));
        //$('div').html(this.template(attributes));
        console.log("the following is the content of");
        console.log(this.el);
        return this
        },
    events:{
        "dblclick li":"liclicked"
        

    },
    liclicked: function(){
        alert(this.model.get("title"));
    }
});

var Books = Backbone.Collection.extend({
    model:Book,
    url:'/libros'

});



var json = [
  {title: 'call of cthulhu',author:'lovecraft',pages:'999'},
  {title: 'shadow out of time',author:'lovecraft',pages:'999'},
  {title: 'shadow over insmouth',author:'lovecraft',pages:'999'} 
];



var books = new Books ();
books.on("reset",function(){

    alert("length of objects"+books.length);
});
books.on("add",function(model){

console.log(model.get("title"));
});

var titles = books.map(function(model){

    return model.get("title");

});

var BookListView = Backbone.View.extend({collection:Books,el:'div',
    className:".col-md-5",
 events:{"click #send": "sendBook"}

,
    initialize: function(){
        this.collection.on("add",this.addOne,this);
       // this.collection.on("reset",this.render,this);
        //this.collection.on("reset",this.addAll,this);
        this.collection.on("remove",this.hide)

    },
    /*render: function(){
        this.collection.forEach(this.addOne,this);

    },*/
    addOne: function(model){



        var view = new BookView({model:model});
        view.render();
      //this.$el.html(view.el);
        $("#book-container").html(view.el);

    },
    addAll: function(){

        this.collection.forEach(this.addOne,this);
    },
    hide: function(model){
        model.trigger('hide');

    },
    sendBook: function(){
    var value1 =  $("#title-input").val(); 
    var value2 =  $("#author-input").val(); 
    var value3 =  $("#pages-input").val(); 
        
    
    //this.collection.add([{title:value1,author:value2,pages:value3}]); // change this so this will be executed in addOne
    
       this.collection.add({title:value1,author:value2,pages:value3});
  

   //this.collection.addOne([{title:value1,author:value2,pages:value3}]);
     //this.collection.add([{title:value}]);
}

})



var book = new Book({title:'Berserk',author:'Miura',pages:'300'});
var bview = new BookView({model:book});




/* last working version
var Book = Backbone.Model.extend({

    urlRoot:"/libros",
    defaults:{
        title:"no title",
        pages:"",
        author:"unknown"


    },
    h2clicked:
    function(){
        alert("sent");

    }
});



var book = new Book ({title:"call of cthulhu",author:"hp lovecraft"});

book.on("change:author",function(){

    alert("Changes have been made to: "+book.get("title"));

});





var BookView = Backbone.View.extend({
    model:Book,
    el:'div',
    initialize:function(){
    this.model.on("change",this.render,this);
    this.model.on("destroy",this.remove,this);

    }
    ,
    remove:
    function(){
        this.$el.remove();
        console.log(this.el)
    }
    ,
    template: _.template("<li> <%= title %> </li> <li> <%= author %></li> <li> <%= pages%></li>"),
    render: function(){
        var attributes = this.model.toJSON();
        //var html = '<h1>' +this.model.get("title") + '</h1>'
        //$(this.el).html(template(attributes));
        this.$el.html(this.template(attributes));
        //$('div').html(this.template(attributes));
        console.log(this.el);
        },
    events:{
        "dblclick h1":"h1clicked",
        "dblclick h2":"h2clicked"

    },
    h1clicked: function(){
        alert(this.model.get("title"));
    },
    h2clicked:function(){
        alert("sent");
        this.model.h2clicked();
    }
});

var Books = Backbone.Collection.extend({
    model:Book,
    url:'/libros'

});



var json = [
  {title: 'call of cthulhu'},
  {title: 'shadow out of time'},
  {title: 'shadow over insmouth'} 
];



var books = new Books ();
books.on("reset",function(){

    alert("length of objects"+books.length);
});
books.on("add",function(model){

console.log(model.get("title"));
});

var titles = books.map(function(model){

    return model.get("title");

});

var BookListView = Backbone.View.extend({collection:Books,el:'body',
    initialize: function(){
        this.collection.on("add",this.addOne,this);
        this.collection.on("reset",this.render,this);
        this.collection.on("reset",this.addAll,this);

    },
    render: function(){
        this.collection.forEach(this.addOne,this);

    },
    addOne: function(model){
        var view = new BookView({model:model});
        view.render();
      this.$el.html(view.el);


    },
    addAll: function(){

        this.collection.forEach(this.addOne,this);
    }

})

*/

















/*//node app.js
var Appointment = Backbone.Model.extend({
    defaults: 
        function(){
            return {  title: 'Checkup',
                      date: new Date()
                   }
             },
    urlRoot: "/libros",
    cancelApp:

        function(){

            this.set({cancelled:true});
            this.save();
        }
    
});

var appointment = new Appointment({});
 

    appointment.fetch();
     
     //appointment.save();
console.log(JSON.stringify((appointment.toJSON())));
appointment.on("change:name",function(){
alert("ALART");

}) 

var AppointmentView = Backbone.View.extend({
    model:Appointment,
  tagName:'li',
className:'appointment',
  template: _.template("<span> <%= title > </span>") ,
  

  initialize:
    function(){
       this.model.on("change",this.render,this) ;
       this.model.on("destroy",this.remove,this);

    }
  ,
  render: function(){
    var attributes = this.model.toJSON();
    console.log("rendering");
    //this.$el.html(this.template(attributes));
    this.$el.html(this.template(this.model.toJSON()));
  },
  events:{
    "dblclick span":"clicked",
    "click a":"cancelApp"

  },
    cancelApp:
        function(){

            this.model.cancelApp()
        

    },
  clicked: 
  function(){
     alert(this.model.get("title"))

  }
});

var AppointmentList = Backbone.Collection.extend({
    url:'libros',
    model:Appointment});

var appointment = new AppointmentList();
var json = [
  {title: 'Back pain'},
  {title: 'Dry mouth'},
  {title: 'Headache'} 
];
appointments.reset(json);
appointments.on("add",function(model){

console.log(model.get("title"));

})
appointments.on("reset",function(){
    alert("number of items in the server "+appointments.length);
});

var titles = appointments.map(function(model){
    return model.get("title");
});

console.log(titles);



var AppointmentListView = Backbone.View.extend({
  render: function(){
    this.collection.forEach(this.addOne,this);
  },
  addOne: function(model){
    var appointmentView = new AppointmentView({model:model})
    appointmentView.render()
    this.$el.append(appointmentView.el);
    
  }
});

var appointmentList= new appointmentListView;
var AppointmentListView = Backbone.View.extend({});
var appointments = new appointmentList
var appointmentListView = new AppointmentListView({ 
    collection: appointments
})

var appointmentsView = new AppointmentListView({collection:appointmentList});

$("#app").html(appointmentsView.render().el)

*/
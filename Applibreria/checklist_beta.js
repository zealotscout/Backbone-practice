<body>
    <label>FRIEND ADDER</label>
    <input type="text" id="input"></input>
    <input type="button" id="add-input" value="Add Friend"></input>
    <label>Remover Rip</label>
    <input type="text" id="remove-bar" placeholder="texthere"></input>
    <input type="button" id="remove-selected" value="remove selected friend rip"></input>
    <input type="button" id="remove-last" value="remove last Friend -_;">
    <input type="button" id="remove-all" value="remove ALL  Friends -_; -_;">    
     
        
        
    <ul id="friends-list"></ul>
    <p>number of friends so sfar</p>
    <label id="friend-count"></label>
</body>

var cnt = 0;
FriendList = Backbone.Collection.extend({
    initialize: function () {
        this.bind("add", function (model) {

            view.render(model);

        })

        console.log("initialized correctly");
        this.on("add", function (model) {
            console.log("new entry added");
            console.log("people currrently on the list :", this.length, " ", JSON.stringify(this.toJSON()));

        });
    }
});

FriendView = Backbone.View.extend({
    tagName: 'li',

    events: {
        "click #add-input": "getFriend",
            "click #remove-last": "removeFriend",
        "click #remove-all": "removeAll",
        "click #remove-selected" : "removeSelected"
    },
    getFriend: function () {
        var friend_name = $('#input').val();
        console.log(friend_name);
        console.log("added :" + $("#input").val());
        alert("Friend added: " + $("#input").val());
        friendsList.add({
            name: friend_name,id:cnt+=1
        })

    },
    removeFriend:
        function(){
            friendsList.remove({id:cnt});    
            console.log("remaining members are",+friendsList.length);
        },
    removeAll:
    function(){ 
        friendsList.reset([]);
        console.log("Removed all friends current friends on the list are  :"+friendsList.length);
       
       
        cnt=0;
        
    },removeSelected:function(){
        console.log("preparing to remove selected friend......");
        
        console.log($("#remove-bar").val());
        friendsList.remove({name:$("#remove-bar").val()});
            
    }
    ,
    render: function (model) {

        $("#friends-list").append("<input type=checkbox>" + model.get("name") + "</input> <br>");
        var html = '<label>' + friendsList.length + '</label>';
        $("#friend-count").html(html);
    }
});
var friendsList = new FriendList;
var view = new FriendView({
    el: 'body'
});
var Friend = Backbone.Model.extend({

    defaults: {
        name: 'no-name',
        profilePicture: 'placeholder.jpg',


    }
});


var friend = new Friend();


var FriendList = Backbone.Collection.extend({
    model: Friend,
    initialize: function () {
        this.on("add", function (model) {
            console.log(" a new friend has been added")
            friendsView.render(model);
        });
    }
});

var friendList = new FriendList();
var FriendsView = Backbone.View.extend({

    initialize: function () {
        console.log("view has been initialized");
    },
    events: {
        "click #add-friend": "addFriend",
            "click #send": "sendFriend"
    }
    ,
    addFriend: function () {

        console.log("button clicked to add friend");
        var friend = $("#search-bar").val();
        var value = $("#send").val();
        console.log(value);
        friendList.add([{
            name: friend,
            profilePicture: value
        }])
        console.log(JSON.stringify(friendList));


    },
    sendFriend: function () {
        console.log("hitted choose file");
    },

    render: function (model) {
        $("#friend-list").append("<li>" + model.get("name")+ "</li>");
         model.set({profilePicture:"file:///home/zealotscout/Documents/Applibreria/public/img/placeholder.jpg"}); //remove this line to get picture
        var variables = {data:model.get("profilePicture")};
        console.log("content of variables",variables);
               
        var template = _.template($("#image-template").html(),variables);

        console.log("content of model ",model.toJSON());
         this.$el.html( template );
        console.log("content of template: ",template.toJSON);
    }



});
var friendsView = new FriendsView({
    el: $('body')
});
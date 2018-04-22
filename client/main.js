import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Meteor.call('getData', function(error, result){
    if(error){
        console.log("error", error);
    }

    console.log(result);

    Session.set("home", result);
});

Template.home.helpers({
    scrap_data: function () {
        return Session.get("home");
    }
});


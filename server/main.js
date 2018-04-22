import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
    var cheerio = Meteor.npmRequire('cheerio');

    Meteor.methods({
        getData : function () {
            result = Meteor.http.get("https://www.awfis.com/office-space/new-delhi/aruna-asaf-ali_connaught-place_igi-airport_jangpura-extens_mayur-vihar-3_mohan-cooperati_nelson-mandela-_vasant-vihar/cabin_fixed-desk_flexible-office_meeting-room");
            $ = cheerio.load(result.content);
            var resp = $('#6-seater h3.ng-binding').text();
            return resp;
        }
    })
});

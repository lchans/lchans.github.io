/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function() {
var app = angular.module('portfolio', []);

app.controller('folioController', function(){
    this.information = details; 
    this.media = icons;
    this.design = designs;
});

var details = [
  { name: 'Colombus', 
    image: "img/colombusweb.png",
    tools: "HTML, CSS, Javascript, AngularJS, JQuery",
    other: "Google Maps API, Flickr API, Google Geocoding API, least.js",
    link: "http://columbusapp.herokuapp.com",
    info: "An image gallery application which allows users to search for a paticular\n\
    tag based on the location of a marker on the world map. The user can also generate \n\
    a heat map around the marker, so the more red an area glows, the more images there are in \n\
    that spot which also relates to the tag. Uses Google Maps API for world map generation, \n\
    Google Geocode API for translating between marker latititude and longitude to an area name\n\
    and also uses Flickr API for image generation. This application was\n\
    less focused on the user interface than other projects, I wanted this project to be more \n\
    about the exploration about API, particularly all the features which Google Maps API has\n\
     and the use of JSON calls to generate specific data."
  },
  { name: 'Med Revue Website', 
    image: "img/medrevueweb.png",
    tools: "HTML, CSS, Javascript, AngularJS, JQuery",
    other: "least.js",
    link: "http://lchans.github.io/medrevue/",
    info: "Med Revue 2015 UNSW Website - I was intiailly approached by one of next year's Directors\n\
    to redesign the 2014 website, some information is still pending - \n\
    (I'm assuming the writers are busy working on scripts instead!), however hopefully the launch \n\
    of this website should be at the end of this year. This project was built using the AngularJS \n\
    Framework. "
  }
];

var icons = [ 
    { image: "img/media/black218.png", 
      link: "mailto:lchan@cse.unsw.edu.au"}, 
    { image: "img/media/google110.png",
      link: "https://plus.google.com/u/0/113761323093515822040/"}, 
    { image: "img/media/tumblr7.png",
      link: "http://blackradar.tumblr.com"}
];

var designs = [ 
    { image: "img/designs//poster.png", 
      name: "Ice Skating Poster",
      description: "CSESOC UNSW"}, 
    { image: "img/designs/proposal.png", 
      name: "Sponsorship Proposal",
      description: "CSESOC UNSW"}, 
    { image: "img/designs/soctial.png",
      name: "Soctail 2014",
      description: "CSESOC UNSW"},
    { image: "img/designs/arama.jpg",
      name: "Arama Logo",
      description: "Microsoft Imagine Cup Entry"},
    { image: "img/designs/hoodie.png",
      name: "Hoodie Design",
      description: "CSESOC UNSW"},  
    { image: "img/designs/trivia.png",
      name: "Trivia Night Poster",
      description: "CSESOC UNSW"} 
]; 

})();
var quotes = ["Be the change you wish to see.", "Social progress can be measured by the social position of the female sex.", "I like the religion that teaches liberty, equality and fraternity.", "If you tremble with indignation at every injustice then you are a comrade of mine.", "Teaching is a very noble profession that shapes the character, caliber, and future of an individual. If the people remember me as a good teacher, that will be the biggest honour for me."];

var authors = ["Mahatma Gandhi", "Karl Marx", "B. R. Ambedkar", "Ernesto Che Guevara", "Abdul Kalam"];
    
var i = 0;


function item4() {"use strict";
    if (i < 4) {
        i += 1;
    } else {
        i = 0;
    }
    document.getElementById("item1").innerHTML = quotes[i];
    document.getElementById("item2").innerHTML = authors[i];
               }

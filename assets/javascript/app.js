$(function(){
    breedButtons(breedsArray,"breedSearch","#results")
    console.log("This page is working :)")
});

var breedsArray= ["Pug", "Shiba Inu", "Dachshund"];

function breedButtons(breeds, newClass, newArea){
    $(newArea).empty();
    for(var i=0;i<breedsArray.length; i++){
        var a= $("<button>");
        a.addClass(newClass);
        a.attr("data-type", breedsArray[i]);
        a.text(breedsArray[i])
        $(newArea).append(a);
    }
};
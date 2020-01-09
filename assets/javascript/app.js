$(function(){
    breedButtons(breedsArray,"breedSearch","#results")
    console.log("This page is working :)")
});

var breedsArray= ["Pug", "Shiba Inu", "Dachshund"];

function breedButtons(breedsArray, newClass, newArea){
    $(newArea).empty();
    for(var i=0;i<breedsArray.length; i++){
        var a= $("<button>");
        a.addClass(newClass);
        a.attr("data-type", breedsArray[i]);
        a.text(breedsArray[i])
        $(newArea).append(a);
    }
};

$(document).on("click",".breedSearch", function(){
    var breed = $(this).data("type");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q="+breed+"&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9"+"&limit=10"
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);
      });
});
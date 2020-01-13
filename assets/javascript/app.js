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
    $("#searches").empty();
    var breed = $(this).data("type");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q="+breed+"&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9"+"&limit=10"
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);
        for(i=0;i<response.data.length;i++){
            var searchDiv = $("<div class='search-item'>");
            var rating = response.data[i].rating;
            var p = $("<p>").text("Rating: "+rating);
            var animated = response.data[i].images.fixed_height.url;
            var still = response.data[i].images.fixed_height_still.url;
            var image = $("<img>");
            image.attr("src", still);
            image.attr("data-still", still);
            image.attr("data-animated", animated);
            image.attr("data-state","still");
            image.addClass("searchImage");
            searchDiv.append(p);
            searchDiv.append(image);
            $("#results").append(searchDiv);
        }
      });
});
$(document).on("click",".searchImage", function(){
    var state = $(this).attr("data-state");
    if (state === "still"){
        $(this).attr("src", $(this).data("animated"));
        $(this).attr("data-state", "animated");
    }else{
        $(this).attr("src", $(this).data("still"));
        $(this).attr("data-state", "still");
    }
})

$("#addBreed").on("click", function(){
    // Using .eq(0) to avoid using "Submit" as value because of the tag it has on the HTML
    var newBreed = $("input").eq(0).val();
    breedsArray.push(newBreed);
    breedButtons(breedsArray,"breedSearch","#results");
    // Using a return false to prevent the page reloading before adding the new breed to search
    return false;
});
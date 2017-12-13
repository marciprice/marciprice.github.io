
// Get content data from acme.json
function getData(input) {
  // Get the data from the file
  $.ajax({
    url: "acme.json"
    , dataType: "jsonp"
    , success: function (data) {
      console.log(data);
//        var name = data.name;
//        var image = data.Anvils.path;
//        var description = data.description;
//        var manu = data.manufacturer;
//        var price = data.price;
//        var review = data.reviews;

//        console.log('Name is: ' + name);
//        console.log("Image is: " + image);
//        console.log("Description is: " + description);
//        console.log("Manu is: " + manu);
//        console.log("Price is: "+ price);
//        console.log("Review is: " + review);
//
//        $("#name").text(name);
//        $("image-right").attr("src", image);
//        $("#description").text(description);
//        $("#manu").text("Made by: " + manu);
//        $("#review").text("Reviews: " + review);
//        $("#title-display").html(name + " | ACME");
//        $(".home-content").fadeOut(250);
        
    }
  });
}



// Intercept the menu link clicks
$(".navigation").on("click", "a", function (evt) {
  evt.preventDefault();
  // With the text value get the needed value from the data-import.json file
  var navItem = $(this).text(); // Anvil, etc...
    
    
    
  console.log("Look at me: " + navItem);
    
    if (navItem == "Home"){
        document.getElementById("home-content").style.display = "block";
        
        document.getElementById("product-content").style.display = "none";
    }
        else {
            $.ajax({
            url: "/acme/js/acme.json"
            , dataType: "json"
            , success: function (data) {
            console.log(data);
            console.log(data[navItem]);
           
            
            var name = data[navItem].name;
            var image = data[navItem].path;
            var description = data[navItem].description;
            var manu = data[navItem].manufacturer;
            var price = data[navItem].price;
            var review = data[navItem].reviews;
        
            $("#name").text(name);
            $("#image").html('<img src="' + image + '" alt="product_image">');
            $("#description").text(description);
            $("#manu").text("Made by: " + manu);
            $("#review").text("Reviews: " + review);
            $("#price").text("Price: "+ price);
            $("#title-display").html(name + " | ACME");
        
        
            document.getElementById("home-content").style.display = "none";
            
            document.getElementById("product-content").style.display = "flex";
     
    }
  });
 }
});

    
    //make it so the content doesnt load up automatically

//    IMage do $ thing and string concationation to insert in div done
    
//data[navItem].keyname
//That will get the exact contents in the key name done

//change the css display home content and remove content content done

//Reverse for content content done

//ajax method inside else statment done
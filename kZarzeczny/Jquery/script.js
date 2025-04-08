//Selekcja elementu po ID
$("#myElement").text("Nowy tekst");

//Selekcja wielu elementów po klasie
$(".my-class").hide();

//Obsługa zdarzeń
$("#button1").click(function(){
    alert("Kliknięto przycisk!");
});

//Proste animacje
$("#element").fadeIn(500);

//zapytanie AJAX
$.ajax({
    url: "https://jsonplaceholder.typicode.com/",
    success: function(result){
        $("#output").html(result)
    }
})
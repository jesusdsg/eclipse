
$(document).ready(function() {
	//Header fixed

	//Filter oculto
	$('#filter').hide();

	//Inicializando filtro 
	$(".btn-filter").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('3000');
        }
        else
        {
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
	$(this).removeClass("active");
	}
	$(this).addClass("active");

});

function showFilter()
{
	if ($('#filter').is(":visible"))
	{
		$('#filter').hide( "drop", {direction: "up"}, 200 );

	}
	else
	{
		$('#filter').show( "drop", {direction: "down"}, 200 );
	}
};


//Filtro

  filter("all"); // Execute the function and show all columns
  function filter(c) {
  var x, i;
  x = document.getElementsByClassName("galery");
  if (c == "all") c = "";
  // Se oculta o se muestra según el filtro y nombre de base (Customized)
  for (i = 0; i < x.length; i++) {
      $(x[i]).hide();
      if (x[i].className.indexOf(c) > -1) $(x[i]).show();
    }
  }


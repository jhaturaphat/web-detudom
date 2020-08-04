$(function(){ 
    $("#bar-menu").on("click" ,e => {
        e.preventDefault(); 
        if($('#bar-menu').hasClass('fa-bars')){

            $("#bar-menu").removeClass( "fa-bars" ).addClass( "fa-times" );
            document.getElementById('nav-menu').style.display = 'flex';  

        }else{

            $("#bar-menu").removeClass( "fa-times" ).addClass( "fa-bars" );
            document.getElementById('nav-menu').style.display = 'none';  

        }
              
    });
    
});
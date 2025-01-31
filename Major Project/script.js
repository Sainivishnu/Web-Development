window.addEventListener('scroll', function() {

    let scrollPosition = window.scrollY;


    if (scrollPosition > 400) {

        document.body.style.backgroundColor = 'black'; 
       
    } else {

        document.body.style.backgroundColor = 'white'; 
        
    }

});


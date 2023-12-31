        //Division for the Contact Page----------------------------------------------------------------------------------
        var hiddenDivision = document.getElementById("contactspage");
        var homediv = document.getElementById("home");
        function contacts_block() {

            if (hiddenDivision.style.visibility === "hidden") {
                hiddenDivision.style.visibility = "visible";
                homediv.style.filter = 'blur(4px)';
                console.log('here')
            } else {
                hiddenDivision.style.visibility = "hidden";
                homediv.style.filter = 'none';
                console.log('else')
            }
        };

        //to cross the contact us pop up tab when clicking the image---------------------------------------------------------

        document.getElementById("contact-link").addEventListener("click", contacts_block)
        document.getElementById("join_button").addEventListener("click", contacts_block)
        document.getElementById("crossimg").addEventListener("click", contacts_block)
        // get the element to animate
        var element = document.getElementById('characterstic');
        var elementHeight = element.clientHeight;

        // listen for scroll event and call animate function
        document.addEventListener('scroll', animate);

        // check if element is in view
        function inView() {
        // get window height
        var windowHeight = window.innerHeight;
        // get number of pixels that the document is scrolled
        var scrollY = window.scrollY || window.pageYOffset;
        
        // get current scroll position (distance from the top of the page to the bottom of the current viewport)
        var scrollPosition = scrollY + windowHeight;
        // get element position (distance from the top of the page to the bottom of the element)
        var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;
        console.log(scrollPosition)
        console.log(elementPosition)
        
        // is scroll position greater than element position? (is element in view?)
        if (scrollPosition > elementPosition - 200) {
            return true;
        }
        
        return false;
        }


//---------------------------------------------------------------------------------------------------------
        // animate element when it is in view
        function animate() {
        // is element in view?
        if (inView()) {
            // element is in view, add class to element
            var circles = document.getElementsByClassName("circle");
            for (var i = 0; i < circles.length; i++) {
            circles[i].classList.add('animate');
            circles[i].style.animationDelay = i*0.5 + "s";
            
        }
        } else {
            var circles = document.getElementsByClassName("circle");
            for (var i = 0; i < circles.length; i++) {
            circles[i].classList.remove('animate');
            }
            
        }
        }

        // Scroll to the particular part of the page and close the navbar collapse
        function scrollToSectionAndCloseNavbar(sectionId) {
            var targetSection = document.getElementById(sectionId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        
            // Close the navbar collapse
            var navbarCollapse = document.getElementById('navbarNav');
            if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
            }
        }
        
        // Event listeners for navbar links
        document.getElementById('homeicon').addEventListener('click', function() {
            scrollToSectionAndCloseNavbar('home');
        });
        
        document.getElementById('aboutus_icon').addEventListener('click', function() {
            scrollToSectionAndCloseNavbar('aboutus');
        });
        
        document.getElementById('serviceicon').addEventListener('click', function() {
            scrollToSectionAndCloseNavbar('service');
        });
        

        //-------------------------------------------------------------------------------------------------------

        // window.addEventListener('scroll', function(){            to shrink taskbar when you scroll down and expanded only when you are on top of your page
        //     var 
        // })

        $(document).ready(function() {
            $('#collapse-button').click(function() {
              $(this).fadeOut(300, function() {
                $(this).html('<span class="close-icon" aria-label="Close navigation" aria-expanded="true" data-toggle="collapse" data-target="#navbarNav"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"><path d="M8 6.586l4.95-4.95a.55.55 0 1 1 .778.779L8.779 7.364l4.95 4.95a.55.55 0 1 1-.778.778l-4.95-4.95-4.95 4.95a.55.55 0 1 1-.778-.778l4.95-4.95-4.95-4.95a.55.55 0 1 1 .778-.779l4.95 4.95z"/></svg></span>').fadeIn(300);
              });
            });
          
            $(document).on('click', '.close-icon', function() {
              $('#collapse-button').fadeOut(300, function() {
                $(this).html('<span class="navbar-toggler-icon"></span>').fadeIn(300);
              });
            });
          });
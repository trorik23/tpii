vartoggle=document.getElementsByClassName('navbar-toggler')[0];varcollapse=document.getElementsByClassName('navbar-collapse')[0];functiontoggleMenu(){collapse.classList.toggle('collapse');collapse.classList.toggle('in');}functioncloseMenusOnResize(){if(document.body.clientWidth>=768){collapse.classList.add('collapse');collapse.classList.remove('in');}}//Eventlistenerswindow.addEventListener('resize',closeMenusOnResize,false);toggle.addEventListener('click',toggleMenu,false);
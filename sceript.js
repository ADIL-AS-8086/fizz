
            const container = document.querySelector('.b02-left');
            const rotateElement = document.querySelector('.rotate-element');

            function handleScrollRotate() {

            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            const rotationAngle = scrollTop * 0.5;
            rotateElement.style.transform = `rotate(${rotationAngle}deg)`;
            }
            window.addEventListener('scroll', handleScrollRotate);


       
            const icon = document.getElementById('icon_bar');
            var menu =document.getElementById("bar");
            var drawer=document.getElementById("drawer");
            var menuClick = 0;

            menu.onclick=function menuclick(){
                menuClick++;
                if(menuClick%2==1){
                    drawer.style.display = "block";
                    icon.className = "fa-solid fa-x";
                }
                else{
                    drawer.style.display = "none";
                    icon.className = "fa-solid fa-bars";
                }
            }
            drawer.onblur = function(){
                drawer.style.display = "none";
            }
       



     
  /*  function aumenta(obj){
        obj.height=obj.height*2;
        obj.width=obj.width*2;
    }
     
    function diminui(obj){
        obj.height=obj.height/2;
        obj.width=obj.width/2;
    }

    function slide1(){
        function fadeIn(element,time){
        processa(element,time,0,100);
        }
        document.getElementById('id').src="./imagens/casa1.jpg";
       
        setTimeout("slide2()", 5000)
    }

    function slide2(){
        function fadeIn(element,time){
        processa(element,time,0,100);
        }
        document.getElementById('id').src="./imagens/res1.jpg";
        
        setTimeout("slide3()", 5000)
    }

    function slide3(){
        function fadeIn(element,time){
        processa(element,time,0,100);
        }
        document.getElementById('id').src="./imagens/salao1.jpg";
    
        setTimeout("slide1()", 5000)
    }*/
    function onOff(){
    document
    .querySelector('#modal')
    .classList
    .toggle("hide")

    document
    .querySelector('#botao')
    .classList
    .toggle("hide")

    document
    .querySelector('body')
    .classList
    .toggle("hideScroll")

   
}
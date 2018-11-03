$(document).ready(function(){
    
    var slideIndex = 0;  /*  переменная которая отвечает за активную фото  */
    
    
    showPhotos();
    
    
    
    function showPhotos(){
       
       var slides = $('#instafeed a');
       console.log(slides);
       console.log(slides.length);
        
        /* запускаем цикл для скрытия фотографий */
        
      for ( i = 0; i < slides.length; i++ ){           /* цикл для обхода всех фото,вначале счетчик равен 0,если он <slides.length то прибавляется еденица */
          console.log(i);
          
          $(slides[i]).hide()
          
        }  
        
        /* переменная которая отвечает за фото которую будет показываться */
        
     slideIndex++;   /* тут слайиндекс увеличили на еденицу *////
        console.log(slideIndex);
        
        /*    тут прописываем сброс до 1 фото. Если slideIndex больше slides.length(равен 12),то slideIndex сбрасывается до 1   */
        if (slideIndex > slides.length ){
            slideIndex = 1
        }
        $(slides[slideIndex-1]).show();  /* так как слайиндекс +1,то обращаемся -1   */
        
        setTimeout(showPhotos, 1000); /*  запускаем функцию через отложенный интервал(сделал 1 сек)    */
    } 
    
});
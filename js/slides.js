$(function(){
    $('.mosaico .container .mosaico-wrapper').slick({
        centerMode:false,
        slidesToShow:6,
        arrows:false,
        responsive:[
        
        {
            breakpoint:768,
            settings:{
                arrows:false,
                centerMode:true,
                slidesToShow:3,
            }
        },

        {
            breakpoint:580,
            settings:{
                slidesToShow:2,
                arrows:false,
                centerMode:true
            }
        },

        {
            breakpoint:380,
            settings:{
                arrows:false,
                centerMode:true,
                slidesToShow:1
            }
        }
        
        ]
    });

    $('.tratamento .container').slick({
        centerMode:false,
        slidesToShow:3,
        arrows:false,
        infinite:false,
        responsive:[

            {
                breakpoint:768,
                settings:{
                    arrows:false,
                    dots:true,
                    infinite:false,
                    centerMode:false,
                    slidesToShow:2
                }
            },

            {
                breakpoint:480,
                settings:{
                    arrows:false,
                    dots:true,
                    infinite:false,
                    centerMode:false,
                    slidesToShow:1
                }
            }
                
        ]
    });

    $('.depoimento .container').slick({
        centerMode:false,
        slidesToShow:1,
        arrows:false,
        dots:true,
        infinite:false,
    });

});
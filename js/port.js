(($,window)=>{

    class PORT {
        init(){
            this.header();
            
        }
        parallax(){
            let obj = {
                init(){
                    this.section1();
                    this.section3();
                },
                section1(){
                    const sec1 =  $('#section1')
                    let sec1Top = $('#section1').offset().top-$(window).height();
            
                    $(window).scroll(()=>{
        
                        if( $(window).scrollTop() == 0 ){
                            sec1.removeClass('addAni');
                        }
        
                        if( $(window).scrollTop() > sec1Top ){
                            sec1.addClass('addAni');
                        }
        
                    });
                },
                section3(){
                const sec3 = $('#section3');
                let sec3Top = $('#section3').offset().top-$(window).height();

                $(window).scroll(()=>{
                    if($(window).scrollTop()==0){
                        sec3.removeClass('addParallax');
                    }
                    if($(window).scrollTop() > sec3Top ){
                        sec3.addClass('addParallax');
                    }
                });
                }
            }
            obj.init();

        }
        header(){
            const path = $('#logoSvg path');
            let size = [];

            function svgAni(){
                $.each(path, function(idx, obj){
                    size[idx] = obj.getTotalLength();
                    obj.style.strokeDasharray = size[idx];
                    obj.style.strokeDashoffset = size[idx];

                    $(obj).stop().animate({strokeDashoffset:0},6000, function(){
                    $(obj).stop().animate({strokeDashoffset:size[idx]},3000);
                    });
                });
            }
            svgAni();
            setInterval(svgAni,9000);
        }

    }

    const newPORT = new PORT();
    newPORT.init();
})(jQuery,window);
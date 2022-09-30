(function ($) 
{
    $(".animsition").animsition(
    {
        inClass: 'fade-in',
        outClass: 'fade-out',
        inDuration: 1500,
        outDuration: 800,
        linkElement: '.animsition-link',
        loading: true,
        loadingParentElement: 'html',
        loadingClass: 'animsition-loading-1',
        loadingInner: '<div class="loader05"></div>',
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: [ 'animation-duration', '-webkit-animation-duration'],
        overlay : false,
        overlayClass : 'animsition-overlay-slide',
        overlayParentElement : 'html',
        transition: function(url){ window.location.href = url; }
    });

    var headerDesktop = $('.containerOpening');
    var wrapMenu = $('.menuNavbar');

    if($('.topBar').length > 0) 
    {
        var posWrapHeader = $('.topBar').height();
    }
    else 
    {
        var posWrapHeader = 0;
    }
    
    if($(window).scrollTop() > posWrapHeader) 
    {
        $(headerDesktop).addClass('fix-menu-desktop');
        $(wrapMenu).css('top',0); 
    }  
    else 
    {
        $(headerDesktop).removeClass('fix-menu-desktop');
        $(wrapMenu).css('top',posWrapHeader - $(this).scrollTop()); 
    }

    $(window).on('scroll',function()
    {
        if($(this).scrollTop() > posWrapHeader) 
        {
            $(headerDesktop).addClass('fix-menu-desktop');
            $(wrapMenu).css('top',0); 
        }  
        else 
        {
            $(headerDesktop).removeClass('fix-menu-desktop');
            $(wrapMenu).css('top',posWrapHeader - $(this).scrollTop()); 
        } 
    });
})(jQuery);


function validation()
{
    var x = document.getElementById("namaProduk")
    var y = document.getElementById("harga")
    var z = document.getElementById("prodDesc")

    if(x.value === '' || x.value == null)
    {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Fill in your product name',
          })
    }
    else if(x.value.split(' ').length < 5)
    {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Your product name is less than 5 words',
          })
    }
    else if(y.validity.rangeUnderflow)
    {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'The product price must be above Rp.100',
          })
    }
    else if(y.value === '')
    {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Fill in the price of your product',
          })
    }
    else if(z.value === '')
    {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Fill in your product description',
          })
    }
    else
    {
        Swal.fire({
            title: 'Do you want to add the product?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: `Save`,
            denyButtonText: `Don't save`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire('Congratulations the product has been added!', '', 'success')
            } else if (result.isDenied) {
              Swal.fire('Product not added', '', 'info')
            }
          })

        document.getElementById("addProduct").reset();
        document.getElementById("formharga").reset();
    }
   
}


function size()
{
    Swal.mixin({
        input: 'text',
        confirmButtonText: 'Add &rarr;',
        showCancelButton: true,
        progressSteps: ['1', '2', '3', '4']
      }).queue([
        {
          title: 'Add Size',
          text: 'Add the size of your product'
        },
        'Add Size',
        'Add Size',
        'Add Size'
      ]).then((result) => {
        if (result.value) {
          const answers = JSON.stringify(result.value)
          Swal.fire({
            title: 'All done!',
            confirmButtonText: 'Save!',
          })
        }
      })
}

function color()
{
    Swal.mixin({
        input: 'text',
        confirmButtonText: 'Add &rarr;',
        showCancelButton: true,
        progressSteps: ['1', '2', '3', '4']
      }).queue([
        {
          title: 'Add Color',
          text: 'Add the color of your product'
        },
        'Add Color',
        'Add Color',
        'Add Color'
      ]).then((result) => {
        if (result.value) {
          const answers = JSON.stringify(result.value)
          Swal.fire({
            title: 'All done!',
            confirmButtonText: 'Save!',
          })
        }
      })
}

function success()
{
  Swal.fire(
    'Nice!',
    'Your item has been successfully added to the cart',
    'success'
  )
}
    


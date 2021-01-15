var key;
var keyCode;
var count = 0
var text;
$(document).ready(function(){
    //Enter ღილაკით წერა
    $('input').keydown(function(e){
        if(e.keyCode == 13){
            $('#click').click()
        }
    })
    $('#div-show').hide()
    $('#alert-show').hide();
    //დამატების ღილაკი
    $('#click').on('click',function(){
        //ალერთის ჩვენება
      if($('#text-here').val() == ''){
       $('#alert-show').fadeTo(2000,1000).slideUp(1300,function(){
           $('#alert-show').slideUp(100)
       })
      }else{
          //შეყვანილი მნიშვნელობის ჩვენება
          $('#div-show').show()
          $('#alert-show').hide()
        var text = $('#text-here').val();
        data = $('<tr class="mt-1"><td class="col-md-11 border-one"><b>'+text +'</b></td><td class="col-md-1 border-two table-input"><input type="checkbox" name="record" id="check"></td></tr>');
        $('#show').append(data)
        //localStorage გასაღები 
        key     = Math.floor(Math.random() * 10000000)
        keyCode =   localStorage.setItem(key,text)
        $('#text-here').val('')
      }        
    })
    //მონიშნულის წაშლა
    $('#remove').click(function(){
        $('#show').find('input[name="record"]').each(function(){
            if($(this).is(':checked')){
                $(this).parents("tr").remove();  
              localStorage.removeItem(key,text)
                --count          
            }
        })
    })
   $('#all-remove').click(function(){
        $('#show').find("tr").remove()
        localStorage.clear()
        count = 0
   })
})

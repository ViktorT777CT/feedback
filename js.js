

$("#add").click(function(){

    var len=$('#form1 .container_form .d-flex').length+1;

//if(len>1)

    $("#form1 .container_form:last").append(

        '<div class="d-flex">'+
            '<div class="mb-3 p-2">'+
                '<span class=”error_message”></span>'+
                '<input value="'+len+'" type="text" name="number" class="form-control bg_color" id="inputNumber'+len+'" readonly>'+
            '</div>'+
            '<div class="mb-3 p-2">'+
                '<span class=”error_message”></span>'+
                '<input type="text" name="article" class="form-control bg_color" id="inputArticle'+len+'">'+
            '</div>'+
            '<div class="mb-3 p-2">'+
                '<span class=”error_message”></span>'+
                '<input type="text" name="name" class="form-control bg_color" id="inputName'+len+'">'+
            '</div>'+
            '<div class="mb-3 p-2">'+
                '<span class=”error_message”></span>'+
                '<input type="text" name="quantity" class="form-control bg_color" id="inputQuantity'+len+'">'+
            '</div>'+
            '<div class="mb-3 p-2">'+
                '<span class=”error_message”></span>'+
                '<input type="text" name="comment" class="form-control bg_color" id="inputComment'+len+'">'+
            '</div>'+
        '</div>'

    );

});

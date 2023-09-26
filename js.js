

$("#add").click(function(){

    var len=$('#form1 .container_form .d-flex').length+1;

//if(len>1)

    $("#form1 .container_form:last").append(

        '<div class="row">'+
            '<div class="col-1 p-0">'+
                '<div class="p-1">'+
                    '<span class=”error_message”></span>'+
                    '<input value="'+len+'" type="text" name="number" class="form-control bg_color" id="inputNumber'+len+'" readonly>'+
                '</div>'+
            '</div>'+
            '<div class="col-3 p-0">'+
                '<div class="p-1">'+
                    '<span class=”error_message”></span>'+
                    '<input type="text" name="article" class="form-control bg_color" id="inputArticle'+len+'">'+
                '</div>'+
            '</div>'+
            '<div class="col-2 p-0">'+
                '<div class="p-1">'+
                    '<span class=”error_message”></span>'+
                    '<input type="text" name="name" class="form-control bg_color" id="inputName'+len+'">'+
                '</div>'+
            '</div>'+
            '<div class="col-1 p-0">'+
                '<div class="p-1">'+
                    '<span class=”error_message”></span>'+
                    '<input type="text" name="quantity" class="form-control bg_color" id="inputQuantity'+len+'">'+
                '</div>'+
            '</div>'+
            '<div class="col p-0">'+
                '<div class="p-1">'+
                    '<span class=”error_message”></span>'+
                    '<input type="text" name="comment" class="form-control bg_color" id="inputComment'+len+'">'+
                '</div>'+
            '</div>'+
        '</div>'

    );

});

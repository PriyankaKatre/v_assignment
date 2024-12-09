$(document).ready(function(){
  $( "#datepicker" ).datepicker({
      changeMonth: true,
      changeYear: true
    });

    //User Info

    $.ajax({
        method: "Get",
        url: "data.json",
        success: function(data) {
            for(key in data)
            {
            if(data.hasOwnProperty(key))
                $('input[name='+key+']').val(data[key]);
                $("input[name=gender][value=" + data.gender + "]").prop('checked', true);
            }
        }
    });

    //Country State City
    $.ajax({
        method: "Get",
        url: "country.json",
        success: function(data) {
            let countryOption = "<option>Select Country</option>";
        $.each(data, (i, country)=> {
            countryOption += "<option value='"+country.name+"'>"+country.name+"</option>";
        });
        $('#country').html(countryOption);
        }
    });
    $('#country').change(function(){
        //   if($(this).val() == 'IN') {
            var countryName = $("#country :selected").text();
            // alert(countryName);
            $.ajax({
                method: "Get",
                url: "state.json",
                success: function(data) {
                    let stateOption = "<option>Select State</option>";
                $.each(data, (i, state)=> {
                    if(countryName == state.country_name) {
                        stateOption += "<option value='"+state.state_name+"'>"+state.state_name+"</option>";
                    }
                });
                $('#state').html(stateOption);

                }
            });
            // }
        });

    $('#state').change(function(){
        let stateName = $("#state :selected").text();
        $.ajax({
            method: "Get",
            url: "city.json",
            success: function(data) {
                var cityOption = "<option>Select City</option>";
                $.each(data, (i, city)=> {
                    if(stateName == city.citi_state) {
                        cityOption += "<option value='"+city.city_name+"'>"+city.city_name+"</option>";
                    }
                });
                $('#city').html(cityOption);
            }
        });
    });

    $('#form').submit(function(e){
        e.preventDefault();
        var $inputs = $('#form :input');
        var x = $("form").serializeArray();
        $.each(x, function(i, field){
        $("#results").append(field.name + ":" + field.value + " ");
        });
        // let data = JSON.stringify($('#form').serialize());
        //     alert(data);
    })
});

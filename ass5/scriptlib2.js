$(document).ready(function(){

    $("button#get_data").click(function() {
        var items = [];
        var i = 0;

        var airtable_read_endpoint = "https://api.airtable.com/v0/appENaVzPyNLQlumN/Outfits?api_key=keytLf7m73sOFf472&maxRecords=35&view=Grid%20view";
        var dataSet = [];
        $.getJSON(airtable_read_endpoint, function(result) {
               $.each(result.records, function(key,value) {
                   items = [];
                       items.push(value.fields.Outfits_code);
                       items.push(value.fields.Occasions_);
                       items.push(value.fields.Total_price);
                       items.push(value.fields.Money_saved);
                       items.push(value.fields.Tops_price);
                       items.push(value.fields.Bottoms_price);
                       dataSet.push(items);
                       console.log(items);
                }); // end .each
                console.log(dataSet);

             $('#example').DataTable( {
                 data: dataSet,
                 retrieve: true,
                 columns: [
                     { title: "Outfits_code",
                       defaultContent:""},
                     { title: "Occasions_",
                       defaultContent:""},
                     { title: "Total_price",
                       defaultContent:"" },
                     { title: "Money_saved",
                       defaultContent:""},
                     { title: "Tops_price",
                       defaultContent:""},
                     { title: "Bottoms_price",
                       defaultContent:""},
                 ]
             } );
        }); // end .getJSON
     }); // end button

//roll up table 1





}); // document ready

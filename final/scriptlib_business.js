$(document).ready(function(){


    $("button#see_total_price").click(function() {

//roll up table2
var table_items = [];
         var i = 0;
         var airtable_read_endpoint =
         "https://api.airtable.com/v0/appENaVzPyNLQlumN/Business%26Interview?api_key=keytLf7m73sOFf472&maxRecords=40&view=Grid%20view";
         var table_dataSet = [];
         $.getJSON(airtable_read_endpoint, function(result) {
                $.each(result.records, function(key,value) {
                    table_items = [];
                        table_items.push(value.fields.Outfits_code);
                        table_items.push(value.fields.Total_price);
                        table_dataSet.push(table_items);
                        console.log(table_items);
                 }); // end .each
                 console.log(table_dataSet);
                $('#table').DataTable( {
                    data: table_dataSet,
                    retrieve: true,
                    ordering: false,
                    columns: [
                        { title: "Outfits_code",
                          defaultContent:""},
                        { title: "Total_price",
                          defaultContent:""},
                    ] // rmf columns
                } ); // end dataTable


    var chart = c3.generate({
                         data: {
                             columns: table_dataSet,
                             type : 'bar'
                         },
                         bar: {
                             title: "Total price for Each Outfit:",
                         }
                     });

              }); // end .getJSON
           }); // end button


           






}); // document ready

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
                       items.push(value.fields.Occasions);
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
                     { title: "Occasions",
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
var table2_items = [];
    var i = 0;
    var airtable_read_endpoint =
    "https://api.airtable.com/v0/appENaVzPyNLQlumN/Outfits?api_key=keytLf7m73sOFf472&maxRecords=35&view=Grid%20view";
    var table2_dataSet = [];
    $.getJSON(airtable_read_endpoint, function(result) {
           $.each(result.records, function(key,value) {
               table2_items = [];
                   table2_items.push(value.fields.Name);
                   table2_items.push(value.fields.Total_Entries);
                   table2_dataSet.push(table2_items);
                   console.log(table2_items);
            }); // end .each
            console.log(table2_dataSet);
           $('#table2').DataTable( {
               data: table2_dataSet,
               retrieve: true,
               ordering: false,
               columns: [
                   { title: "Name",
                     defaultContent:""},
                   { title: "Total Entries",
                     defaultContent:""},
               ] // rmf columns
           } ); // end dataTable

           var chart = c3.generate({
                data: {
                    columns: table2_dataSet,
                    type : 'bar'
                },
                bar: {
                    title: "Tasks for Each Stage:",
                }
            });

     }); // end .getJSON
  }); // end button

   // $.getJSON('http://localhost/d756a/data_export.json/Computer+TV', function(obj) {




}); // document ready

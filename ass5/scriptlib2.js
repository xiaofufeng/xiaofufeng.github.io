$(document).ready(function(){

  $("button#get_data").click(function() {
     var table1_items = [];
     var i = 0;
     var airtable_read_endpoint = "https://api.airtable.com/v0/appENaVzPyNLQlumN/Outfits?api_key=keytLf7m73sOFf472&maxRecords=35&view=Grid%20view";
     var table1_dataSet = [];
     $.getJSON(airtable_read_endpoint, function(result) {
            $.each(result.records, function(key,value) {
                table1_items = [];
                    table1_items.push(value.fields.Outfits_code);

                    table1_items.push(value.fields.Occasions_);
                    table1_items.push(value.fields.Total_price);
                    table1_items.push(value.fields.Money_saved);
                    table1_items.push(value.fields.Tops_price);
                    table1_items.push(value.fields.Bottoms_price);
                    table1_dataSet.push(table1_items);
                    console.log(table1_items);
             }); // end .each
             console.log(table1_dataSet);

          $('#table1').DataTable( {
              data: table1_dataSet,
              retrieve: true,
              columns: [
                  { title: "Outfits_code",
                    defaultContent:""},

                  { title: "Occasions_",
                      defaultContent:"" },
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



    $("button#roll_up").click(function() {

//roll up table2
var table2_items = [];
         var i = 0;
         var airtable_read_endpoint =
         "https://api.airtable.com/v0/appENaVzPyNLQlumN/Occasions?api_key=keytLf7m73sOFf472&maxRecords=35&view=Grid%20view";
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
                        { title: "Occasions",
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
                             title: "Total Numbers for Each Occasion:",
                         }
                     });

              }); // end .getJSON
           }); // end button


           $("button#see_chart").click(function() {

           //roll up table2
           var table2_items = [];
                var i = 0;
                var airtable_read_endpoint =
                "https://api.airtable.com/v0/appENaVzPyNLQlumN/Occasions?api_key=keytLf7m73sOFf472&maxRecords=35&view=Grid%20view";
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
                               { title: "Occasions",
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
                                    title: "Total Numbers for Each Occasion:",
                                }
                            });

                     }); // end .getJSON
                  }); // end button






}); // document ready

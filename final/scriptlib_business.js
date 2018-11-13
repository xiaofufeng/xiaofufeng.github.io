$(document).ready(function(){

  $("button#see_outfits").click(function() {
     var table1_items = [];
     var i = 0;
     var airtable_read_endpoint = "https://api.airtable.com/v0/appENaVzPyNLQlumN/Business%26Interview?api_key=keytLf7m73sOFf472&maxRecords=40&view=Grid%20view";
     var table1_dataSet = [];
     $.getJSON(airtable_read_endpoint, function(result) {
            $.each(result.records, function(key,value) {
                table1_items = [];
                    table1_items.push(value.fields.Outfits_code);

                    table1_items.push(value.fields.Occasions_);
                    table1_items.push('<td><img src="'+value.fields.Tops_image_url+'"style="width:200px;"/></td>');
                    table1_items.push('<td><img src="'+value.fields.Bottoms_image_url+'"style="width:200px;"/></td>');
                    table1_items.push(value.fields.Total_price);
                    table1_items.push(value.fields.Money_saved);

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
                  { title: "Tops_image",
                      defaultContent:"" },
                  { title: "Bottoms_image",
                      defaultContent:"" },
                  { title: "Total_price",
                    defaultContent:"" },
                  { title: "Money_saved",
                    defaultContent:""},

              ]
          } );
     }); // end .getJSON
}); // end button



$("button#see_total_price").click(function() {

//roll up table2
var table2_items = [];
         var i = 0;
         var airtable_read_endpoint =
         "https://api.airtable.com/v0/appENaVzPyNLQlumN/Business%26Interview?api_key=keytLf7m73sOFf472&maxRecords=40&view=Grid%20view";
         var table2_dataSet = [];
         $.getJSON(airtable_read_endpoint, function(result) {
                $.each(result.records, function(key,value) {
                    table2_items = [];
                        table2_items.push(value.fields.Outfits_code);
                        table2_items.push(value.fields.Total_price);
                        table2_dataSet.push(table2_items);
                        console.log(table2_items);
                 }); // end .each
                 console.log(table2_dataSet);
                $('#table2').DataTable( {
                    data: table2_dataSet,
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
                             columns: table2_dataSet,
                             type : 'bar'
                         },
                         color: {
                                 pattern: ['#1f77b4']
                             },
                         axis: {
                                     x: {label: 'Outfits code'},
                                     y: {label: '# of Total price'}
                                   },
                                bar: {
                                    title: "Total Price for Each Occasion:",
                                },
                                width: {
                                            ratio: 0.5 // this makes bar width 50% of length between ticks
                                        }
                                        // or
                                        //width: 100 // this makes bar width 100px

                     });

              }); // end .getJSON
           }); // end button


}); // document ready

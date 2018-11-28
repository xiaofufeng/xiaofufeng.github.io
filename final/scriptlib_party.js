$(document).ready(function(){

  $("button#see_outfits").click(function() {
    $("#div1").show(1000);
    $("#footer").show(1000);
    $("#chart").hide(1000);
     var table1_items = [];
     var i = 0;
     var airtable_read_endpoint = "https://api.airtable.com/v0/appENaVzPyNLQlumN/Party_outfits?api_key=keytLf7m73sOFf472&maxRecords=40&view=Grid%20view";
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
                  { title: "Total_price(HKD)",
                    defaultContent:"" },
                  { title: "Money_saved(HKD)",
                    defaultContent:""},

              ]
          } );
     }); // end .getJSON
}); // end button





   //see chart of mondy saved
         $("button#see_money_saved").click(function() {
$("#div1").hide(1000);
$("#footer").show(1000);
         var table3_items = [];
                  var i = 0;
                  var airtable_read_endpoint =
                  "https://api.airtable.com/v0/appENaVzPyNLQlumN/Party_outfits?api_key=keytLf7m73sOFf472&maxRecords=40&view=Grid%20view";
                  var table3_dataSet = [];
                  $.getJSON(airtable_read_endpoint, function(result) {
                         $.each(result.records, function(key,value) {
                             table3_items = [];
                                 table3_items.push(value.fields.Outfits_code);
                                 table3_items.push(value.fields.Money_saved);
                                 table3_dataSet.push(table3_items);
                                 console.log(table3_items);
                          }); // end .each
                          console.log(table3_dataSet);
                         $('#table3').DataTable( {
                             data: table3_dataSet,
                             retrieve: true,
                             ordering: false,
                             columns: [
                                 { title: "Outfits_code",
                                   defaultContent:""},
                                 { title: "Money_saved",
                                   defaultContent:""},
                             ] // rmf columns
                         } ); // end dataTable


             var chart = c3.generate({
                                  data: {
                                      columns: table3_dataSet,
                                      type : 'bar',
                                      labels: true,
                                  },
                                  color: {
                                          pattern: ['#1f77b4','#aec7e8','#1f77b4','#aec7e8','#aec7e8']
                                      },
                                  axis: {
                                              x: {label: 'Outfits code'},
                                              y: {label: '# of Money saved(HKD)'}
                                            },
                                  grid: {
                                            y: {
                                                lines: [
                                                    {value: 50, text: 'Label 50 for y', position: 'start'},

                                                        ]
                                                }
                                          },
                                         bar: {
                                             title: "Money Saved for Each Occasion:",

                                         width: {
                                                     ratio:0.4 // this makes bar width 50% of length between ticks
                                                 },
                                                 // or
                                                 //width: 100 // this makes bar width 100px
                                                },
                              });

                       }); // end .getJSON
                    }); // end button

        //see chart of total price

              $("button#see_total_price").click(function() {
     $("#div1").hide(1000);
     $("#footer").show(1000);
              var table2_items = [];
                       var i = 0;
                       var airtable_read_endpoint =
                       "https://api.airtable.com/v0/appENaVzPyNLQlumN/Party_outfits?api_key=keytLf7m73sOFf472&maxRecords=40&view=Grid%20view";
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
                                           type : 'bar',
                                           labels: true,
                                       },
                                       color: {
                                               pattern: ['#aec7e8','#16547F','#aec7e8','#aec7e8','#1f77b4']
                                           },
                                       axis: {
                                                   x: {label: 'Outfits code'},
                                                   y: {label: '# of Total Price(HKD)'}
                                                 },
                                       grid: {
                                                 y: {
                                                     lines: [
                                                         {value: 300, text: 'Label 300 for y', position: 'start'},
                                                        {value: 600, text: 'Label 600 for y', position: 'start'},
                                                        {value: 900, text: 'Label 900 for y', position: 'start'},
                                                             ]
                                                     }
                                               },
                                              bar: {
                                                  title: "Total Price for Each Occasion:",

                                              width: {
                                                          ratio:0.4 // this makes bar width 50% of length between ticks
                                                      },
                                                      // or
                                                      //width: 100 // this makes bar width 100px
                                                     },
                                   });

                            }); // end .getJSON
                         }); // end button


}); // document ready

$(document).ready(function(){

   //see chart of aggregation
         $("button#see_aggregation").click(function() {


         var table1_items = [];
                  var i = 0;
                  var airtable_read_endpoint =
                  "https://api.airtable.com/v0/appENaVzPyNLQlumN/Occasions?api_key=keytLf7m73sOFf472&maxRecords=40&view=Grid%20view";
                  var table1_dataSet = [];
                  $.getJSON(airtable_read_endpoint, function(result) {
                         $.each(result.records, function(key,value) {
                             table1_items = [];
                                 table1_items.push(value.fields.Name);
                                 table1_items.push(value.fields.Total_Entries);
                                 table1_dataSet.push(table1_items);
                                 console.log(table1_items);
                          }); // end .each
                          console.log(table1_dataSet);
                         $('#table1').DataTable( {
                             data: table1_dataSet,
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
                                      columns: table1_dataSet,
                                      type : 'bar'
                                  },
                                  color: {
                                          pattern: ['#1f77b4']
                                      },
                                  axis: {
                                              x: {label: 'Occasions'},
                                              y: {label: '# of Total Entries'}
                                            },
                                         bar: {
                                             title: "Number of Outfits for Each Occasion:",

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

$(document).ready(function(){

   //see chart of aggregation
         $("button#see_aggregation").click(function() {

$("#zoom").hide(1000);
$("#div2").hide(1000);
$("#div3").hide(1000);
$("#div1").show(1000);
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
                                      type : 'bar',
                                      labels: true,
                                  },
                                  color: {
                                          pattern: []
                                      },
                                  axis: {
                                              x: {label: 'Occasions'},
                                              y: {label: '# of Total Entries'}
                                            },
                                  grid: {
                                            y: {
                                                lines: [
                                                    {value: 5, text: 'Label 5 for y', position: 'start'},

                                                        ]
                                                }
                                          },
                                         bar: {
                                             title: "Number of Outfits for Each Occasion:",

                                         width: {
                                                     ratio:0.3 // this makes bar width 50% of length between ticks
                                                 },
                                                 // or
                                                 //width: 100 // this makes bar width 100px
                                                },
                              });

                       }); // end .getJSON
                    }); // end button

                    //see chart of mondy saved
                          $("button#see_chart").click(function() {
                    $("#div1").hide(1000);
                    $("#div2").hide(1000);
                    $("#div3").hide(1000);
                    $("#chart").show(1000);


                    $("#zoom").show(1000);

                          var table7_items = [];
                                   var i = 0;
                                   var airtable_read_endpoint =
                                   "https://api.airtable.com/v0/appENaVzPyNLQlumN/final_tops?api_key=keytLf7m73sOFf472&maxRecords=40&view=Grid%20view";
                                   var table7_dataSet = [];
                                   $.getJSON(airtable_read_endpoint, function(result) {
                                          $.each(result.records, function(key,value) {
                                              table7_items = [];
                                                  table7_items.push(value.fields.Outfits_code);
                                                  table7_items.push(value.fields.Money_saved);

                                                  table7_dataSet.push(table7_items);
                                                  console.log(table7_items);
                                           }); // end .each
                                           console.log(table7_dataSet);
                                          $('#table7').DataTable( {
                                              data: table7_dataSet,
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
                                                       columns: table7_dataSet,
                                                       type : 'bar',
                                                       labels: true,
                                                   },
                                                   zoom: {
                                                     enabled: true
                                                 },
                                                   color: {
                                                           pattern: ['#1f77b4','#aec7e8','#aec7e8','#aec7e8','#1f77b4','#1f77b4','#1f77b4','#1f77b4','#aec7e8','#1f77b4','#1f77b4','#1f77b4','#1f77b4','#1f77b4','#1f77b4','#aec7e8','#aec7e8','#aec7e8','#aec7e8','#aec7e8','#aec7e8','#aec7e8','#aec7e8','#aec7e8','#aec7e8','#1f77b4','#aec7e8','#1f77b4','#aec7e8','#aec7e8','#aec7e8','#aec7e8','#1f77b4']
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
                                                              title: "Money Saved for Each Outfit:",

                                                          width: {
                                                                      ratio:0.6 // this makes bar width 50% of length between ticks
                                                                  },
                                                                  // or
                                                                  //width: 100 // this makes bar width 100px
                                                                 },
                                               });


                                        }); // end .getJSON
                                     }); // end button
     //see chart of total price
           $("button#see_chart2").click(function() {
     $("#div1").hide(1000);
     $("#div2").hide(1000);
     $("#div3").hide(1000);
     $("#chart").show(1000);


     $("#zoom").show(1000);

           var table8_items = [];
                    var i = 0;
                    var airtable_read_endpoint =
                    "https://api.airtable.com/v0/appENaVzPyNLQlumN/final_tops?api_key=keytLf7m73sOFf472&maxRecords=40&view=Grid%20view";
                    var table8_dataSet = [];
                    $.getJSON(airtable_read_endpoint, function(result) {
                           $.each(result.records, function(key,value) {
                               table8_items = [];
                                   table8_items.push(value.fields.Outfits_code);
                                   table8_items.push(value.fields.Total_price);

                                   table8_dataSet.push(table8_items);
                                   console.log(table8_items);
                            }); // end .each
                            console.log(table8_dataSet);
                           $('#table8').DataTable( {
                               data: table8_dataSet,
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
                                        columns: table8_dataSet,
                                        type : 'bar',
                                        labels: true,
                                    },
                                    zoom: {
                                      enabled: true
                                  },
                                    color: {
                                            pattern: ['#1f77b4','#1f77b4','#1f77b4','#1f77b4','#aec7e8','#aec7e8','#aec7e8','#aec7e8','#aec7e8','#aec7e8','#aec7e8','#aec7e8','#aec7e8','#1f77b4','#aec7e8','#1f77b4','#1f77b4','#1f77b4','#1f77b4','#1f77b4','#1f77b4','#1f77b4','#1f77b4','#16547f','#16547f','#16547f','#16547f','#16547f','#16547f','#16547f','#16547f','#16547f','#aec7e8','#aec7e8','#1f77b4','#1f77b4']
                                        },
                                    axis: {
                                                x: {label: 'Outfits code'},
                                                y: {label: '# of Total price(HKD)'}
                                              },
                                    grid: {
                                              y: {
                                                  lines: [
                                                    {value: 300, text: 'Label 300 for y', position: 'start'},
                                                   {value: 600, text: 'Label 600 for y', position: 'start'},

                                                          ]
                                                  }
                                            },
                                           bar: {
                                               title: "Total price for Each Outfit:",

                                           width: {
                                                       ratio:0.8 // this makes bar width 50% of length between ticks
                                                   },
                                                   // or
                                                   //width: 100 // this makes bar width 100px
                                                  },
                                });


                         }); // end .getJSON
                      }); // end button


}); // document ready

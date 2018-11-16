$(document).ready(function(){
    $("button#see_cards").click(function() {
      $("#card_count").show(1000);
      $("#div1").hide(1000);
      $("#div2").hide(1000);
      $("#div3").hide(1000);
      $("#div4").hide(1000);
      $("#div5").hide(1000);
      $("#div6").hide(1000);
      $("#chart").hide(1000);
      $("#footer").show(1000);
      $("#how_to_match").hide(1000);
      $("#jeans").hide(1000);
      $("#casual_pants").hide(1000);
      $("#suit_pants").hide(1000);
      $("#skirts").hide(1000);
      $("#see_chart").hide(1000);



    }); // end button

  $("button#see_table").click(function() {
    $("#card_count").hide(1000);
    $("#div1").show(1000);
    $("#div2").hide(1000);
    $("#div3").hide(1000);
    $("#div4").hide(1000);
    $("#div5").hide(1000);
    $("#div6").hide(1000);
    $("#chart").hide(1000);
    $("#footer").show(1000);
    $("#how_to_match").show(1000);
    $("#jeans").hide(1000);
    $("#casual_pants").hide(1000);
    $("#suit_pants").hide(1000);
    $("#skirts").hide(1000);
    $("#see_chart").hide(1000);


     var table1_items = [];
     var i = 0;
     var airtable_read_endpoint = "https://api.airtable.com/v0/appENaVzPyNLQlumN/final_bottoms?api_key=keytLf7m73sOFf472&maxRecords=40&view=Grid%20view";
     var table1_dataSet = [];
     $.getJSON(airtable_read_endpoint, function(result) {
            $.each(result.records, function(key,value) {
                table1_items = [];
                    table1_items.push(value.fields.Outfits_code);

                    table1_items.push(value.fields.Occasions_);
                    table1_items.push('<td><img src="'+value.fields.Tops_image_url+'"style="width:170px;"/></td>');
                    table1_items.push(value.fields.Tops_price);

                    table1_items.push('<td><img src="'+value.fields.Bottoms_image_url+'"style="width:170px;"/></td>');
                    table1_items.push(value.fields.Bottoms_price);

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
                  { title: "Tops_price (HKD)",
                    defaultContent:"" },
                  { title: "Bottoms_image",
                      defaultContent:"" },
                  { title: "Bottoms_price (HKD)",
                    defaultContent:"" },
                  { title: "Total_price (HKD)",
                    defaultContent:"" },
                  { title: "Money_saved (HKD)",
                    defaultContent:"" },

              ],
              "columnDefs": [

                  {
                      "targets": [ 1 ],
                      "visible": false
                  },
                  {
                      "targets": [ 2 ],
                      "visible": false,
                  },
                  {
                      "targets": [ 3 ],
                      "visible": false
                  },
                  {
                      "targets": [ 6 ],
                      "visible": false
                  },
                  {
                      "targets": [ 7 ],
                      "visible": false
                  },
              ],
              "lengthMenu": [[25, 50, -1], [25, 50, "All"]]
          } );
     }); // end .getJSON
}); // end button

$("button#how_to_match").click(function() {
  $("#div1").show(1000);
  $("#div2").show(1000);
  $("#div3").hide(1000);
  $("#div4").hide(1000);
  $("#div5").hide(1000);
  $("#div6").hide(1000);
  $("#footer").show(1000);
  $("#how_to_match").show(1500);
  $("#jeans").show(1500);
  $("#casual_pants").show(1500);
  $("#suit_pants").show(1500);
  $("#skirts").show(1500);
  $("#see_chart").show(1500);

   var table2_items = [];
   var i = 0;
   var airtable_read_endpoint = "https://api.airtable.com/v0/appENaVzPyNLQlumN/final_bottoms?api_key=keytLf7m73sOFf472&maxRecords=40&view=Grid%20view";
   var table2_dataSet = [];
   $.getJSON(airtable_read_endpoint, function(result) {
          $.each(result.records, function(key,value) {
              table2_items = [];
                  table2_items.push(value.fields.Outfits_code);

                  table2_items.push(value.fields.Occasions_);
                  table2_items.push('<td><img src="'+value.fields.Tops_image_url+'"style="width:170px;"/></td>');
                  table2_items.push(value.fields.Tops_price);

                  table2_items.push('<td><img src="'+value.fields.Bottoms_image_url+'"style="width:170px;"/></td>');
                  table2_items.push(value.fields.Bottoms_price);

                  table2_items.push(value.fields.Total_price);
                  table2_items.push(value.fields.Money_saved);
                  table2_dataSet.push(table2_items);
                  console.log(table2_items);
           }); // end .each
           console.log(table2_dataSet);

        $('#table2').DataTable( {
            data: table2_dataSet,
            retrieve: true,
            columns: [
                { title: "Outfits_code",
                  defaultContent:""},
                { title: "Occasions_",
                    defaultContent:"" },
                { title: "Tops_image",
                    defaultContent:"" },
                { title: "Tops_price (HKD)",
                  defaultContent:"" },
                { title: "Bottoms_image",
                    defaultContent:"" },
                { title: "Bottoms_price (HKD)",
                  defaultContent:"" },
                { title: "Total_price (HKD)",
                  defaultContent:"" },
                { title: "Money_saved (HKD)",
                  defaultContent:"" },

            ],
            "columnDefs": [
                {
                    "targets": [ 0 ],
                    "visible": false,
                },
                {
                    "targets": [ 1 ],
                    "visible": false
                },
                {
                    "targets": [ 4 ],
                    "visible": false
                },
                {
                    "targets": [ 5 ],
                    "visible": false
                },

            ],
            "lengthMenu": [[25, 50, -1], [25, 50, "All"]]
        } );
   }); // end .getJSON
}); // end button


$("button#jeans").click(function() {
  $("#div1").hide(1000);
  $("#div2").hide(1000);
  $("#div3").show(1000);
  $("#div4").hide(1000);
  $("#div5").hide(1000);
  $("#div6").hide(1000);
  $("#footer").show(1000);
  $("#how_to_match").show(1000);
  $("#jeans").show(1000);
  $("#casual_pants").show(1000);
  $("#suit_pants").show(1000);
  $("#skirts").show(1000);
  $("#see_chart").show(1000);
   var table3_items = [];
   var i = 0;
   var airtable_read_endpoint = "https://api.airtable.com/v0/appENaVzPyNLQlumN/final_jeans?api_key=keytLf7m73sOFf472&maxRecords=40&view=Grid%20view";
   var table3_dataSet = [];
   $.getJSON(airtable_read_endpoint, function(result) {
          $.each(result.records, function(key,value) {
              table3_items = [];
                  table3_items.push(value.fields.Outfits_code);

                  table3_items.push(value.fields.Category_bottom_);


                  table3_items.push('<td><img src="'+value.fields.Bottoms_image_url+'"style="width:170px;"/></td>');
                  table3_items.push(value.fields.Bottoms_price);
                  table3_items.push('<td><img src="'+value.fields.Tops_image_url+'"style="width:170px;"/></td>');
                  table3_items.push(value.fields.Tops_price);
                  table3_items.push(value.fields.Total_price);
                  table3_items.push(value.fields.Money_saved);
                  table3_dataSet.push(table3_items);
                  console.log(table3_items);
           }); // end .each
           console.log(table3_dataSet);

        $('#table3').DataTable( {
            data: table3_dataSet,
            retrieve: true,
            columns: [
                { title: "Outfits_code",
                  defaultContent:""},
                { title: "Category",
                    defaultContent:"" },

                { title: "Bottoms_image",
                    defaultContent:"" },
                { title: "Bottoms_price (HKD)",
                  defaultContent:"" },
                  { title: "Tops_image",
                      defaultContent:"" },
                  { title: "Tops_price (HKD)",
                    defaultContent:"" },
                { title: "Total_price (HKD)",
                  defaultContent:"" },
                { title: "Money_saved (HKD)",
                  defaultContent:"" },

            ],

            "lengthMenu": [[25, 50, -1], [25, 50, "All"]]
        } );
   }); // end .getJSON
}); // end button

$("button#casual_pants").click(function() {
  $("#div1").hide(1000);
  $("#div2").hide(1000);
  $("#div3").hide(1000);
  $("#div4").show(1000);
  $("#div5").hide(1000);
  $("#div6").hide(1000);
  $("#footer").show(1000);
  $("#how_to_match").show(1000);
  $("#jeans").show(1000);
  $("#casual_pants").show(1000);
  $("#suit_pants").show(1000);
  $("#skirts").show(1000);
  $("#see_chart").show(1000);
   var table4_items = [];
   var i = 0;
   var airtable_read_endpoint = "https://api.airtable.com/v0/appENaVzPyNLQlumN/final_casual_pants?api_key=keytLf7m73sOFf472&maxRecords=40&view=Grid%20view";
   var table4_dataSet = [];
   $.getJSON(airtable_read_endpoint, function(result) {
          $.each(result.records, function(key,value) {
              table4_items = [];
                  table4_items.push(value.fields.Outfits_code);

                  table4_items.push(value.fields.Category_bottom_);


                  table4_items.push('<td><img src="'+value.fields.Bottoms_image_url+'"style="width:170px;"/></td>');
                  table4_items.push(value.fields.Bottoms_price);
                  table4_items.push('<td><img src="'+value.fields.Tops_image_url+'"style="width:170px;"/></td>');
                  table4_items.push(value.fields.Tops_price);
                  table4_items.push(value.fields.Total_price);
                  table4_items.push(value.fields.Money_saved);
                  table4_dataSet.push(table4_items);
                  console.log(table4_items);
           }); // end .each
           console.log(table4_dataSet);

        $('#table4').DataTable( {
            data: table4_dataSet,
            retrieve: true,
            columns: [
                { title: "Outfits_code",
                  defaultContent:""},
                { title: "Category",
                    defaultContent:"" },

                { title: "Bottoms_image",
                    defaultContent:"" },
                { title: "Bottoms_price (HKD)",
                  defaultContent:"" },
                  { title: "Tops_image",
                      defaultContent:"" },
                  { title: "Tops_price (HKD)",
                    defaultContent:"" },
                { title: "Total_price (HKD)",
                  defaultContent:"" },
                { title: "Money_saved (HKD)",
                  defaultContent:"" },

            ],

            "lengthMenu": [[25, 50, -1], [25, 50, "All"]]
        } );
   }); // end .getJSON
}); // end button

$("button#suit_pants").click(function() {
  $("#div1").hide(1000);
  $("#div2").hide(1000);
  $("#div3").hide(1000);
  $("#div4").hide(1000);
  $("#div5").show(1000);
  $("#div6").hide(1000);
  $("#footer").show(1000);
  $("#how_to_match").show(1000);
  $("#jeans").show(1000);
  $("#casual_pants").show(1000);
  $("#suit_pants").show(1000);
  $("#skirts").show(1000);
  $("#see_chart").show(1000);
   var table5_items = [];
   var i = 0;
   var airtable_read_endpoint = "https://api.airtable.com/v0/appENaVzPyNLQlumN/final_suit_pants?api_key=keytLf7m73sOFf472&maxRecords=40&view=Grid%20view";
   var table5_dataSet = [];
   $.getJSON(airtable_read_endpoint, function(result) {
          $.each(result.records, function(key,value) {
              table5_items = [];
                  table5_items.push(value.fields.Outfits_code);

                  table5_items.push(value.fields.Category_bottom_);


                  table5_items.push('<td><img src="'+value.fields.Bottoms_image_url+'"style="width:170px;"/></td>');
                  table5_items.push(value.fields.Bottoms_price);
                  table5_items.push('<td><img src="'+value.fields.Tops_image_url+'"style="width:170px;"/></td>');
                  table5_items.push(value.fields.Tops_price);
                  table5_items.push(value.fields.Total_price);
                  table5_items.push(value.fields.Money_saved);
                  table5_dataSet.push(table5_items);
                  console.log(table5_items);
           }); // end .each
           console.log(table5_dataSet);

        $('#table5').DataTable( {
            data: table5_dataSet,
            retrieve: true,
            columns: [
                { title: "Outfits_code",
                  defaultContent:""},
                { title: "Category",
                    defaultContent:"" },

                { title: "Bottoms_image",
                    defaultContent:"" },
                { title: "Bottoms_price (HKD)",
                  defaultContent:"" },
                  { title: "Tops_image",
                      defaultContent:"" },
                  { title: "Tops_price (HKD)",
                    defaultContent:"" },
                { title: "Total_price (HKD)",
                  defaultContent:"" },
                { title: "Money_saved (HKD)",
                  defaultContent:"" },

            ],

            "lengthMenu": [[25, 50, -1], [25, 50, "All"]]
        } );
   }); // end .getJSON
}); // end button

$("button#skirts").click(function() {
  $("#div1").hide(1000);
  $("#div2").hide(1000);
  $("#div3").hide(1000);
  $("#div4").hide(1000);
  $("#div5").hide(1000);
  $("#div6").show(1000);
  $("#footer").show(1000);
  $("#how_to_match").show(1000);
  $("#jeans").show(1000);
  $("#casual_pants").show(1000);
  $("#suit_pants").show(1000);
  $("#skirts").show(1000);
  $("#see_chart").show(1000);
   var table6_items = [];
   var i = 0;
   var airtable_read_endpoint = "https://api.airtable.com/v0/appENaVzPyNLQlumN/final_skirts?api_key=keytLf7m73sOFf472&maxRecords=40&view=Grid%20view";
   var table6_dataSet = [];
   $.getJSON(airtable_read_endpoint, function(result) {
          $.each(result.records, function(key,value) {
              table6_items = [];
                  table6_items.push(value.fields.Outfits_code);

                  table6_items.push(value.fields.Category_bottom_);


                  table6_items.push('<td><img src="'+value.fields.Bottoms_image_url+'"style="width:170px;"/></td>');
                  table6_items.push(value.fields.Bottoms_price);
                  table6_items.push('<td><img src="'+value.fields.Tops_image_url+'"style="width:170px;"/></td>');
                  table6_items.push(value.fields.Tops_price);
                  table6_items.push(value.fields.Total_price);
                  table6_items.push(value.fields.Money_saved);
                  table6_dataSet.push(table6_items);
                  console.log(table6_items);
           }); // end .each
           console.log(table6_dataSet);

        $('#table6').DataTable( {
            data: table6_dataSet,
            retrieve: true,
            columns: [
                { title: "Outfits_code",
                  defaultContent:""},
                { title: "Category",
                    defaultContent:"" },

                { title: "Bottoms_image",
                    defaultContent:"" },
                { title: "Bottoms_price (HKD)",
                  defaultContent:"" },
                  { title: "Tops_image",
                      defaultContent:"" },
                  { title: "Tops_price (HKD)",
                    defaultContent:"" },
                { title: "Total_price (HKD)",
                  defaultContent:"" },
                { title: "Money_saved (HKD)",
                  defaultContent:"" },

            ],

            "lengthMenu": [[25, 50, -1], [25, 50, "All"]]
        } );
   }); // end .getJSON
}); // end button


   //see chart of mondy saved
         $("button#see_chart").click(function() {
$("#div1").hide(1000);
$("#div2").hide(1000);
$("#div3").hide(1000);
$("#div4").hide(1000);
$("#div5").hide(1000);
$("#div6").hide(1000);
$("#chart").show(1000);
$("#footer").show(1000);
$("#how_to_match").show(1000);
$("#jeans").show(1000);
$("#casual_pants").show(1000);
$("#suit_pants").show(1000);
$("#skirts").show(1000);


         var table7_items = [];
                  var i = 0;
                  var airtable_read_endpoint =
                  "https://api.airtable.com/v0/appENaVzPyNLQlumN/final_bottoms?api_key=keytLf7m73sOFf472&maxRecords=40&view=Grid%20view";
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
                                      zoom: {
                                        enabled: true
                                    }
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




}); // document ready

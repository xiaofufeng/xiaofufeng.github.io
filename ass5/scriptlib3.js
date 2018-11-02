$(document).ready(function(){
$("button#see_chart").click(function() {
                var chart = c3.generate({
                     data: {
                         columns: table2_dataSet,
                         type : 'bar'
                     },
                     bar: {
                         title: "Outfits for Each Occasions:",
                     }
                 });



}); // end button





}); // document ready

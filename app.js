var url = "./db/belly_button_data";

function buildMetadata() {

  d3.json(url).then(function(response) {

    console.log(response);

    var trace1 = {
        name: "Samples",
        labels: response.map(samples=> samples.otu_ids),
        values: response.map(samples=> samples.otu_labels),
        type: 'pie'
       };

  var data = trace1;

  var layout = {
    height: 400,
    width: 500
  };
      
 Plotly.newPlot("plot", data, layout);
 


function buildCharts() { 

  function buildPlot() {
    d3.json(url).then(function(response) {
  
      console.log(response);
      var trace = {
        type: "bubble",
        mode: "lines",
        name: "Belly Samples",
        x: response.map(samples => samples.otu_ids),
        y: response.map(samples => samples.otu_labels),
        line: {
          color: "#17BECF"
        }
      };
    
  var data2 = trace;

    Plotly.newPlot("plot", trace, layout);
  
  // @TODO: Use `d3.json` to fetch the sample data for the plots

    // @TODO: Build a Bubble Chart using the sample data

    // @TODO: Build a Pie Chart
    // HINT: You will need to use slice() to grab the top 10 sample_values,
    // otu_ids, and labels (10 each).


function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("/names").then((sampleNames) => {
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    const firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });


function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
}
}:S


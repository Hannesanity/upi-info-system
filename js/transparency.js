fetch('data/Economic Dynamism.csv')
  .then(response => response.text())
  .then(csvText => {
    Papa.parse(csvText, {
      header: true,
      complete: function(results) {
        const categories = [];
        const scores = [];
        const ranks = [];

        results.data.forEach(row => {
          categories.push(row[""]); // Empty string for the category label
          scores.push(parseFloat(row["Score"]));
          const rank = parseInt(row["Rank"].replace(/\D/g, ''));  // Remove suffix
          ranks.push(rank);
        });

        // Initialize the radar and bar charts with parsed data
        initRadarChart(categories, scores);
        initBarChart(categories, ranks);
      }
    });
  })
  .catch(error => console.error('Error fetching the CSV file:', error));

function initRadarChart(categories, scores) {
    Highcharts.chart('containerRadar', {
      chart: {
        polar: true,
        type: 'line'
      },
      title: {
        text: 'Economic Dynamism Score Radar Chart',
      },
      pane: {
        size: '80%'
      },
      xAxis: {
        categories: categories,
        tickmarkPlacement: 'on',
        lineWidth: 0
      },
      yAxis: {
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0,
        max: 2  // Adjust max to fit your data range
      },
      tooltip: {
        shared: true,
        pointFormat: '<span>{point.y:.4f}</span>'
      },
      series: [{
        name: 'Score',
        data: scores,
        pointPlacement: 'on',
        color: 'rgba(54, 162, 235, 0.8)',
        fillOpacity: 0.1
      }]
    });
  }
  
  /**
   * Function to initialize Bar Chart
   */
  function initBarChart(categories, ranks) {
    Highcharts.chart('containerBar', {
      chart: {
        type: 'bar'
      },
      title: {
        text: '2024 Ranking by Indicators'
      },
      xAxis: {
        categories: categories,
        title: {
          text: null
        },
        labels: {
          rotation: -45,  // Rotate labels for better readability
          style: {
            fontSize: '12px'
          }
        }
      },
      yAxis: {
        min: 0,
        max: 500,  
        reversed: true, 
        title: {
          text: 'Rank',
          align: 'high'
        }
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true
          }
        }
      },
      series: [{
        name: 'Rank',
        data: ranks,
        color: '#FF5733'
      }]
    });
  }


  fetch('data/Government Efficiency.csv')
  .then(response => response.text())
  .then(csvText => {
    Papa.parse(csvText, {
      header: true,
      complete: function(results) {
        const categoriesGovEff = [];
        const scoresGovEff = [];
        const ranksGovEff = [];

        // Loop through the parsed CSV data and populate the arrays
        results.data.forEach(row => {
          categoriesGovEff.push(row[""]);  // Assuming first column is the indicator name
          scoresGovEff.push(parseFloat(row["Score"]));
          const rank = parseInt(row["Rank"]);
          ranksGovEff.push(rank);
        });

        // Update the chart data
        renderGovernmentEfficiencyCharts(categoriesGovEff, scoresGovEff, ranksGovEff);
      }
    });
  })
  .catch(error => console.error('Error fetching the CSV file:', error));

function renderGovernmentEfficiencyCharts(categories, scores, ranks) {
    // Highcharts code for Radar and Bar charts with Government Efficiency data
    Highcharts.chart('containerRadarGovEff', {
        chart: {
            polar: true,
            type: 'line'
        },
        title: {
            text: 'Government Efficiency Score'
        },
        xAxis: {
            categories: categories,
            tickmarkPlacement: 'on',
            lineWidth: 0
        },
        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0
        },
        series: [{
            name: 'Government Efficiency Score',
            data: scores,
            pointPlacement: 'on'
        }]
    });

    Highcharts.chart('containerBarGovEff', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Government Efficiency Rank'
        },
        xAxis: {
            categories: categories,
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Rank',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            },
            reversed: true  // To show rank with 1 at the top
        },
        plotOptions: {
            bar: {
              dataLabels: {
                enabled: true
              }
            }
          },
        series: [{
            name: 'Government Efficiency Rank',
            data: ranks
        }]
    });
}

fetch('data/Infrastructure.csv')
  .then(response => response.text())
  .then(csvText => {
    Papa.parse(csvText, {
      header: true,
      complete: function(results) {
        const categoriesInfra = [];
        const scoresInfra = [];
        const ranksInfra = [];

        // Loop through the parsed CSV data and populate the arrays
        results.data.forEach(row => {
          categoriesInfra.push(row[""]);  // Assuming the first column is the indicator name
          scoresInfra.push(parseFloat(row["Score"]));
          const rank = parseInt(row["Rank"]);
          ranksInfra.push(rank);
        });

        // Update the chart data
        renderInfrastructureCharts(categoriesInfra, scoresInfra, ranksInfra);
      }
    });
  })
  .catch(error => console.error('Error fetching the CSV file:', error));

function renderInfrastructureCharts(categories, scores, ranks) {
    // Highcharts code for Radar and Bar charts with Infrastructure data
    Highcharts.chart('containerRadarInfra', {
        chart: {
            polar: true,
            type: 'line'
        },
        title: {
            text: 'Infrastructure Score'
        },
        xAxis: {
            categories: categories,
            tickmarkPlacement: 'on',
            lineWidth: 0
        },
        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0
        },
        series: [{
            name: 'Infrastructure Score',
            data: scores,
            pointPlacement: 'on'
        }]
    });

    Highcharts.chart('containerBarInfra', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Infrastructure Rank'
        },
        xAxis: {
            categories: categories,
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Rank',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            },
            reversed: true  // To show rank with 1 at the top
        },
        plotOptions: {
            bar: {
              dataLabels: {
                enabled: true
              }
            }
          },
        series: [{
            name: 'Infrastructure Rank',
            data: ranks
        }]
    });
}

fetch('data/Innovation.csv')
  .then(response => response.text())
  .then(csvText => {
    Papa.parse(csvText, {
      header: true,
      complete: function(results) {
        const categoriesInno = [];
        const scoresInno = [];
        const ranksInno = [];

        // Loop through the parsed CSV data and populate the arrays
        results.data.forEach(row => {
          categoriesInno.push(row[""]);  // Assuming the first column is the indicator name
          scoresInno.push(parseFloat(row["Score"]));
          const rank = parseInt(row["Rank"]);
          ranksInno.push(rank);
        });

        // Update the chart data
        renderInnovationCharts(categoriesInno, scoresInno, ranksInno);
      }
    });
  })
  .catch(error => console.error('Error fetching the CSV file:', error));

function renderInnovationCharts(categories, scores, ranks) {
    // Highcharts code for Radar and Bar charts with Infrastructure data
    Highcharts.chart('containerRadarInno', {
        chart: {
            polar: true,
            type: 'line'
        },
        title: {
            text: 'Innovation Score'
        },
        xAxis: {
            categories: categories,
            tickmarkPlacement: 'on',
            lineWidth: 0
        },
        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0
        },
        series: [{
            name: 'Innovation Score',
            data: scores,
            pointPlacement: 'on'
        }]
    });

    Highcharts.chart('containerBarInno', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Innovation Rank'
        },
        xAxis: {
            categories: categories,
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Rank',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            },
            reversed: true  // To show rank with 1 at the top
        },
        plotOptions: {
            bar: {
              dataLabels: {
                enabled: true
              }
            }
          },
        series: [{
            name: 'Innovation Rank',
            data: ranks
        }]
    });
}

fetch('data/Resiliency.csv')
  .then(response => response.text())
  .then(csvText => {
    Papa.parse(csvText, {
      header: true,
      complete: function(results) {
        const categoriesResi = [];
        const scoresResi = [];
        const ranksResi = [];

        // Loop through the parsed CSV data and populate the arrays
        results.data.forEach(row => {
          categoriesResi.push(row[""]);  // Assuming the first column is the indicator name
          scoresResi.push(parseFloat(row["Score"]));
          const rank = parseInt(row["Rank"]);
          ranksResi.push(rank);
        });

        // Update the chart data
        renderResiliencyCharts(categoriesResi, scoresResi, ranksResi);
      }
    });
  })
  .catch(error => console.error('Error fetching the CSV file:', error));
  
function renderResiliencyCharts(categories, scores, ranks) {
    // Highcharts code for Radar and Bar charts with Infrastructure data
    Highcharts.chart('containerRadarResil', {
        chart: {
            polar: true,
            type: 'line'
        },
        title: {
            text: 'Resiliency Score'
        },
        xAxis: {
            categories: categories,
            tickmarkPlacement: 'on',
            lineWidth: 0
        },
        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0
        },
        series: [{
            name: 'Resiliency Score',
            data: scores,
            pointPlacement: 'on'
        }]
    });

    Highcharts.chart('containerBarResil', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Resiliency Rank'
        },
        xAxis: {
            categories: categories,
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Rank',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            },
            reversed: true  // To show rank with 1 at the top
        },
        plotOptions: {
            bar: {
              dataLabels: {
                enabled: true
              }
            }
          },
        series: [{
            name: 'Resiliency Rank',
            data: ranks
        }]
    });
}

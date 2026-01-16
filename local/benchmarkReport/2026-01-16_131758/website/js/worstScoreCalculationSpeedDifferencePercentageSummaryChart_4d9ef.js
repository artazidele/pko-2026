
var chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_4d9ef = new Chart(document.getElementById('chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_4d9ef'), {
    type: 'bar',
    data: {
        labels: [
            'example-data-1', 'example-data-2', 'example-data-3', 'example-data-4', 'example-data-5'
        ],
        datasets: [
            {
                  label: 'Hill Climbing',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    9.321076030442319, 15.287728218165011, 11.856248997272582, 22.13420316868593, 10.643458410614924
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    32.40901213171577, 5.511902010630922, 25.605647360821433, 25.442684063373715, 16.407476102154373
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    23.841458819983423, 20.41830367460134, 25.381036419059843, 19.353836595215906, 20.316735625624197
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    20.20947931580137, 23.14536630459903, 11.824161719878068, 26.14165890027959, 18.16236267655871
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-1000 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    33.01936553387085, 9.013173099144904, 22.781966950104284, 18.654861758310034, 12.22713653873591
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-5000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 15.69216547261382, 20.359377506818547, 4.318111214662939, 4.4514196033671
                  ]
                }, 
{
                  label: 'Simulated Annealing 2-1000-10000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    10.02185215884259, 1.0168708111855789, 0, 3.075489282385834, 0
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    32.38640645015447, 0, 27.49879672709771, 6.150978564771668, 7.176487373377087
                  ]
                }, 
{
                  label: 'Late Acceptance 400',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    5.063672669730993, 9.34827825283106, 33.70768490293599, 0, 7.1194178912826365
                  ]
                }, 
{
                  label: 'Late Acceptance 600',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    19.900535001130283, 7.118095678299053, 16.380555109898925, 6.6946256601429015, 4.8937080895990865
                  ]
                }
        ]
    },
    options: {
        animation: false,
        responsive: true,
        maintainAspectRatio: false,
        resizeDelay: 100,
        spanGaps: true,
        plugins: {
            title: {
                display: true,
                text: 'Worst score calculation speed difference percentage summary (higher is better)'
            }
        },
        scales: {
            x: {
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Worst score calculation speed difference percentage'
                },
                ticks: {
                        stepSize: 1
                        
                },
                type: 'linear',
                display: true
            }
        },
watermark: {
    image: "website/img/timefold-logo-stacked-positive.svg",
    x: 15,
    y: 15,
    width: 48,
    height: 50,
    opacity: 0.1,
    alignX: "right",
    alignY: "bottom",
    alignToChartArea: true,
    position: "front",
}    },
plugins: [{ 
    id: 'customPlugin',
    beforeDraw: (chart, args, options) => {
          const ctx = chart.canvas.getContext('2d');
          ctx.save();
          ctx.globalCompositeOperation = 'destination-over';
          ctx.fillStyle = 'white';
          ctx.fillRect(0, 0, chart.canvas.width, chart.canvas.height);
          ctx.restore();
    }
}]
});

window.addEventListener('beforeprint', () => {
  chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_4d9ef.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_4d9ef.resize();
});
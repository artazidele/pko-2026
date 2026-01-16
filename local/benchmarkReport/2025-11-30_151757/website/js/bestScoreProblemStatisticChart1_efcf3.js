
var chart_bestScoreProblemStatisticChart1_efcf3 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_efcf3'), {
    type: 'line',
    data: {
        datasets: [
            {
                  label: 'Hill Climbing (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    {x: 60, y: -99255}, {x: 145, y: -99249}, {x: 154, y: -99199}, {x: 160, y: -99031}, {x: 164, y: -99027}, {x: 226, y: -99002}, {x: 1011, y: -98931}, {x: 1015, y: -98903}, {x: 1028, y: -98745}, {x: 10000, y: -98745}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 25, y: -99255}, {x: 121, y: -99092}, {x: 173, y: -99041}, {x: 229, y: -99035}, {x: 361, y: -98932}, {x: 494, y: -98774}, {x: 627, y: -98745}, {x: 10000, y: -98745}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 20, y: -99255}, {x: 97, y: -99087}, {x: 310, y: -98978}, {x: 707, y: -98820}, {x: 1085, y: -98759}, {x: 1481, y: -98745}, {x: 10000, y: -98745}
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 19, y: -99255}, {x: 96, y: -99087}, {x: 315, y: -98978}, {x: 717, y: -98820}, {x: 1095, y: -98759}, {x: 1492, y: -98745}, {x: 10000, y: -98745}
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 20, y: -99255}, {x: 7691, y: -99225}, {x: 7692, y: -99213}, {x: 8008, y: -99206}, {x: 8009, y: -99091}, {x: 9000, y: -99072}, {x: 9356, y: -98986}, {x: 9363, y: -98919}, {x: 9370, y: -98916}, {x: 9380, y: -98909}, {x: 9502, y: -98886}, {x: 9507, y: -98884}, {x: 9513, y: -98838}, {x: 9722, y: -98766}, {x: 9770, y: -98752}, {x: 9774, y: -98745}, {x: 10000, y: -98745}
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 19, y: -99255}, {x: 9963, y: -99243}, {x: 9971, y: -99165}, {x: 9987, y: -99158}, {x: 9997, y: -99125}, {x: 10000, y: -99125}
                  ]
                }, 
{
                  label: 'Simulated Annealing 2-10000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 19, y: -99255}, {x: 9986, y: -99223}, {x: 9991, y: -99167}, {x: 9999, y: -99154}, {x: 10000, y: -99154}
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 18, y: -99255}, {x: 76, y: -99249}, {x: 84, y: -99199}, {x: 88, y: -99031}, {x: 374, y: -98972}, {x: 405, y: -98970}, {x: 560, y: -98931}, {x: 562, y: -98876}, {x: 654, y: -98863}, {x: 733, y: -98862}, {x: 1325, y: -98793}, {x: 3188, y: -98785}, {x: 3997, y: -98752}, {x: 4876, y: -98745}, {x: 10000, y: -98745}
                  ]
                }, 
{
                  label: 'Late Acceptance 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 19, y: -99255}, {x: 76, y: -99249}, {x: 83, y: -99199}, {x: 87, y: -99031}, {x: 375, y: -98972}, {x: 406, y: -98970}, {x: 1087, y: -98859}, {x: 3154, y: -98831}, {x: 3441, y: -98766}, {x: 4151, y: -98759}, {x: 4159, y: -98752}, {x: 8408, y: -98745}, {x: 10000, y: -98745}
                  ]
                }, 
{
                  label: 'Late Acceptance 600',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 18, y: -99255}, {x: 84, y: -99249}, {x: 91, y: -99199}, {x: 96, y: -99031}, {x: 380, y: -98972}, {x: 413, y: -98970}, {x: 1518, y: -98952}, {x: 1548, y: -98923}, {x: 1554, y: -98853}, {x: 3487, y: -98851}, {x: 3674, y: -98835}, {x: 4363, y: -98828}, {x: 4724, y: -98808}, {x: 4767, y: -98793}, {x: 4769, y: -98786}, {x: 6334, y: -98767}, {x: 7999, y: -98752}, {x: 10000, y: -98752}
                  ]
                }
        ]
    },
    options: {
        animation: false,
        responsive: true,
        maintainAspectRatio: false,
        spanGaps: true,
        plugins: {
            title: {
                display: true,
                text: 'example-data-1 best soft score statistic'
            },
            tooltip: {
                callbacks: {
                        title: function(context) {
                            return humanizeTime(context[0].parsed.x);
                        }
                        
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Time spent'
                },
                ticks: {
                        stepSize: 100
                        ,
                        callback: function(value, index) {
                            return humanizeTime(value);
                        }
                },
                suggestedMin: 0,
                suggestedMax: 10000,
                type: 'linear',
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Best soft score'
                },
                ticks: {
                        stepSize: 1000
                        
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
  chart_bestScoreProblemStatisticChart1_efcf3.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_efcf3.resize();
});

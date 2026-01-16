
var chart_bestScoreDistributionSummaryChart1_51d03 = new Chart(document.getElementById('chart_bestScoreDistributionSummaryChart1_51d03'), {
    type: 'boxplot',
    data: {
        labels: [
            'example-data-1', 'example-data-2', 'example-data-3'
        ],
        datasets: [
                {
                    label: 'Tabu 5 500',
                        borderWidth: 1
                    ,
                    data: [
                                {
                                    min: -83108,
                                    max: -83108,
                                    q1: -83108,
                                    q3: -83108,
                                    median: -83108,
                                    mean: -83108,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -101116,
                                    max: -101116,
                                    q1: -101116,
                                    q3: -101116,
                                    median: -101116,
                                    mean: -101116,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -117523,
                                    max: -117523,
                                    q1: -117523,
                                    q3: -117523,
                                    median: -117523,
                                    mean: -117523,
                                    items: [],
                                    outliers: [],
                                }
                            
                    ]
                }, 
                {
                    label: 'Tabu 10 1000 (favorite)',
                        borderWidth: 4
,
                    data: [
                                {
                                    min: -83108,
                                    max: -83108,
                                    q1: -83108,
                                    q3: -83108,
                                    median: -83108,
                                    mean: -83108,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -100992,
                                    max: -100992,
                                    q1: -100992,
                                    q3: -100992,
                                    median: -100992,
                                    mean: -100992,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -116775,
                                    max: -116775,
                                    q1: -116775,
                                    q3: -116775,
                                    median: -116775,
                                    mean: -116775,
                                    items: [],
                                    outliers: [],
                                }
                            
                    ]
                }, 
                {
                    label: 'LAHC 400',
                        borderWidth: 1
                    ,
                    data: [
                                {
                                    min: -83108,
                                    max: -83108,
                                    q1: -83108,
                                    q3: -83108,
                                    median: -83108,
                                    mean: -83108,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -101110,
                                    max: -101110,
                                    q1: -101110,
                                    q3: -101110,
                                    median: -101110,
                                    mean: -101110,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -117741,
                                    max: -117741,
                                    q1: -117741,
                                    q3: -117741,
                                    median: -117741,
                                    mean: -117741,
                                    items: [],
                                    outliers: [],
                                }
                            
                    ]
                }
        ]
    },
    options: {
        animation: false,
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: 'Best soft score distribution summary (higher is better)'
            }
        },
        scales: {
            x: {
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Best soft score'
                },
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
  chart_bestScoreDistributionSummaryChart1_51d03.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreDistributionSummaryChart1_51d03.resize();
});
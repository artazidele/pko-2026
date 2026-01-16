
var chart_bestScoreDistributionSummaryChart1_f056b = new Chart(document.getElementById('chart_bestScoreDistributionSummaryChart1_f056b'), {
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
                                    min: -99103,
                                    max: -99103,
                                    q1: -99103,
                                    q3: -99103,
                                    median: -99103,
                                    mean: -99103,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -108367,
                                    max: -108367,
                                    q1: -108367,
                                    q3: -108367,
                                    median: -108367,
                                    mean: -108367,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -107970,
                                    max: -107970,
                                    q1: -107970,
                                    q3: -107970,
                                    median: -107970,
                                    mean: -107970,
                                    items: [],
                                    outliers: [],
                                }
                            
                    ]
                }, 
                {
                    label: 'Tabu 10 1000',
                        borderWidth: 1
                    ,
                    data: [
                                {
                                    min: -99103,
                                    max: -99103,
                                    q1: -99103,
                                    q3: -99103,
                                    median: -99103,
                                    mean: -99103,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -108171,
                                    max: -108171,
                                    q1: -108171,
                                    q3: -108171,
                                    median: -108171,
                                    mean: -108171,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -107099,
                                    max: -107099,
                                    q1: -107099,
                                    q3: -107099,
                                    median: -107099,
                                    mean: -107099,
                                    items: [],
                                    outliers: [],
                                }
                            
                    ]
                }, 
                {
                    label: 'LAHC 400 (favorite)',
                        borderWidth: 4
,
                    data: [
                                {
                                    min: -99226,
                                    max: -99226,
                                    q1: -99226,
                                    q3: -99226,
                                    median: -99226,
                                    mean: -99226,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -105469,
                                    max: -105469,
                                    q1: -105469,
                                    q3: -105469,
                                    median: -105469,
                                    mean: -105469,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -107682,
                                    max: -107682,
                                    q1: -107682,
                                    q3: -107682,
                                    median: -107682,
                                    mean: -107682,
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
  chart_bestScoreDistributionSummaryChart1_f056b.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreDistributionSummaryChart1_f056b.resize();
});
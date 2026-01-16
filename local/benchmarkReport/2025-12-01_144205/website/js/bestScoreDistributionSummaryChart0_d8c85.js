
var chart_bestScoreDistributionSummaryChart0_d8c85 = new Chart(document.getElementById('chart_bestScoreDistributionSummaryChart0_d8c85'), {
    type: 'boxplot',
    data: {
        labels: [
            'example-data-1'
        ],
        datasets: [
                {
                    label: 'Hill Climbing',
                        borderWidth: 1
                    ,
                    data: [
                                {
                                    min: -147461,
                                    max: -147461,
                                    q1: -147461,
                                    q3: -147461,
                                    median: -147461,
                                    mean: -147461,
                                    items: [],
                                    outliers: [],
                                }
                            
                    ]
                }, 
                {
                    label: 'Tabu Search 500 - 1000',
                        borderWidth: 1
                    ,
                    data: [
                                {
                                    min: -147564,
                                    max: -147564,
                                    q1: -147564,
                                    q3: -147564,
                                    median: -147564,
                                    mean: -147564,
                                    items: [],
                                    outliers: [],
                                }
                            
                    ]
                }, 
                {
                    label: 'Tabu Search 500 - 5000',
                        borderWidth: 1
                    ,
                    data: [
                                {
                                    min: -147564,
                                    max: -147564,
                                    q1: -147564,
                                    q3: -147564,
                                    median: -147564,
                                    mean: -147564,
                                    items: [],
                                    outliers: [],
                                }
                            
                    ]
                }, 
                {
                    label: 'Tabu Search 1000 - 5000',
                        borderWidth: 1
                    ,
                    data: [
                                {
                                    min: -147564,
                                    max: -147564,
                                    q1: -147564,
                                    q3: -147564,
                                    median: -147564,
                                    mean: -147564,
                                    items: [],
                                    outliers: [],
                                }
                            
                    ]
                }, 
                {
                    label: 'Simulated Annealing 0-1000',
                        borderWidth: 1
                    ,
                    data: [
                                {
                                    min: -147461,
                                    max: -147461,
                                    q1: -147461,
                                    q3: -147461,
                                    median: -147461,
                                    mean: -147461,
                                    items: [],
                                    outliers: [],
                                }
                            
                    ]
                }, 
                {
                    label: 'Simulated Annealing 1-5000',
                        borderWidth: 1
                    ,
                    data: [
                                {
                                    min: -147461,
                                    max: -147461,
                                    q1: -147461,
                                    q3: -147461,
                                    median: -147461,
                                    mean: -147461,
                                    items: [],
                                    outliers: [],
                                }
                            
                    ]
                }, 
                {
                    label: 'Simulated Annealing 2-10000',
                        borderWidth: 1
                    ,
                    data: [
                                {
                                    min: -147461,
                                    max: -147461,
                                    q1: -147461,
                                    q3: -147461,
                                    median: -147461,
                                    mean: -147461,
                                    items: [],
                                    outliers: [],
                                }
                            
                    ]
                }, 
                {
                    label: 'Late Acceptance 200',
                        borderWidth: 1
                    ,
                    data: [
                                {
                                    min: -147488,
                                    max: -147488,
                                    q1: -147488,
                                    q3: -147488,
                                    median: -147488,
                                    mean: -147488,
                                    items: [],
                                    outliers: [],
                                }
                            
                    ]
                }, 
                {
                    label: 'Late Acceptance 400',
                        borderWidth: 1
                    ,
                    data: [
                                {
                                    min: -147481,
                                    max: -147481,
                                    q1: -147481,
                                    q3: -147481,
                                    median: -147481,
                                    mean: -147481,
                                    items: [],
                                    outliers: [],
                                }
                            
                    ]
                }, 
                {
                    label: 'Late Acceptance 600',
                        borderWidth: 1
                    ,
                    data: [
                                {
                                    min: -147494,
                                    max: -147494,
                                    q1: -147494,
                                    q3: -147494,
                                    median: -147494,
                                    mean: -147494,
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
                text: 'Best hard score distribution summary (higher is better)'
            }
        },
        scales: {
            x: {
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Best hard score'
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
  chart_bestScoreDistributionSummaryChart0_d8c85.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreDistributionSummaryChart0_d8c85.resize();
});
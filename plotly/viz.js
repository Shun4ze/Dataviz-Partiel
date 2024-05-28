fetch('data.json')
    .then((response) => response.json())
    .then((data) => {
        run_visualization1(data);
        run_visualization2(data);
    });

function run_visualization1(data) {
    sortByCountryPopulation(data);
    
    const top30Countries = data.slice(0, 30);
    
    const countryNames = top30Countries.map(country => country.country);
    const countryPopulations = top30Countries.map(country => country.population);

    const axes = {
        x: countryNames,
        y: countryPopulations,
        type: 'bar',
        marker: {
            color: 'rgb(138,202,225)', 
            opacity: 0.6, 
            line: {
                color: 'rgb(18,45,107)', 
                width: 1.5 
            }
        }
    };

    const Titres_Axes = {
        title: 'Top 30 Pays par Population',
        xaxis: {
            title: 'Pays'
        },
        yaxis: {
            title: 'Population'
        }
    };

    const dataForPlot = [axes];

    Plotly.newPlot('data-viz1', dataForPlot, Titres_Axes);
}


//Avec les pays les moins peuplés

function run_visualization2(data) {
    sortByCountryPopulationAscending(data);
    
    const bottom30Countries = data.slice(0, 30);
    
    const countryNames = bottom30Countries.map(country => country.country);
    const countryPopulations = bottom30Countries.map(country => country.population);

    const axes = {
        x: countryNames,
        y: countryPopulations,
        type: 'bar',
        marker: {
            color: 'rgb(225,138,138)', 
            opacity: 0.6, 
            line: {
                color: 'rgb(107,18,18)', 
                width: 1.5 
            }
        }
    };

    const Titres_Axe = {
        title: 'Top 30 Pays les moins peuplés',
        xaxis: {
            title: 'Pays'
        },
        yaxis: {
            title: 'Population'
        }
    };

    const dataForPlot = [axes];

    Plotly.newPlot('data-viz2', dataForPlot, Titres_Axe);
}

function sortByCountryPopulation(data) {
    data.sort((a, b) => b.population - a.population);
}

function sortByCountryPopulationAscending(data) {
    data.sort((a, b) => a.population - b.population);
}

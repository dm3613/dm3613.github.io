/*
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v9',
    center: [-75.5446, 42.8270],
    zoom: 6
});

var newyork_regions = './data_from_arcmap/newyork_regions.geojson'
var cuomo_prisons = './data_from_arcmap/cuomo_prisons.geojson'

map.on('load',function(){
    // define a 'source' for your polygons dataset
    map.addSource('cuomo_prisons',{
        'type':'geojson',
        'data': cuomo_prisons
    });
    map.addlayer({
        'id': 'cuomo prisons',
        'type':'circle',
        'source':'cuomo_prisons',
        'paint':{
            'circle-color':'#349f27',
            'circle-opacity':1,
            'circle-radius':10
        }
    }) 
    map.addSource('newyork_regions',{
        'type':'geojson',
        'data': newyork_regions,
      });
      // add a new layer with your polygons
    map.addLayer({
        'id':'newyork regions',
        'type':'fill',
        'source':'newyork_regions',
        'paint':{
          'fill-color':'#ffffff',
          'fill-outline-color':'#000000',
          'fill-opacity': 1
        }
    })
  }); */

  var config = {
    style: 'mapbox://styles/dmcnamara219/cl23eta57000715t7ux26loqj',
    accessToken: 'pk.eyJ1IjoiZG1jbmFtYXJhMjE5IiwiYSI6ImNsMjNheGliZzE0OGUzam54aXNjeTYyMjIifQ.8fc7rEcK73MrUwaDAPZLsA',
    showMarkers: false,
    markerColor: '',
    theme: 'light',
    title: '',
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [
        {
            id: 'chapter-1',
            alignment: 'right',
            hidden: true,
            title: '',
            image: '',
            description: '',
            location: {
                center: [-75.5446, 42.8270],
                zoom: 1,
                pitch: 0,
                bearing: 0
            },
            //mapAnimation: 'flyTo',
            //rotateAnimation: false,
            //callback: '',
            onChapterEnter: [
                {
                    layer: 'newyork-regions',
                    opacity: 0
                    
                },
                {
                    layer: 'cuomo-prisons',
                    opacity: 0
                    
                },
                {
                    layer: 'non-cuomo-prisons',
                    opacity: 0
                    
                },
                {
                    layer: 'manufacturing-employment',
                    opacity: 0
                    
                },
                {
                    layer: 'prison-employment',
                    opacity: 0
                    
                },
                {
                    layer: 'prisoner-flows',
                    opacity: 0
                    
                },
                {
                    layer: 'prisoner-flows-nyc',
                    opacity: 0
                    
                },
                {
                    layer: 'closed-cuomo-prisons',
                    opacity: 0
                },
                {
                    layer: 'closed-non-cuomo-prisons',
                    opacity: 0
                }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-2',
            alignment: 'right',
            hidden: false,
            title: `Cuomo's Legacy`,
            image: './images/cuomo_prison_legend.png',
            description: `Though the practice would come under harsh criticism following his tenure, Mario Cuomo routinely and unambiguously promoted prison construction as a viable economic development strategy for neglected towns, cities, and regions. 
            Aiding the Governor’s agenda were budget-starved rural municipalities, many of whom welcomed the approach with open arms. For many towns and counties in New York State, home to landscapes of neglected or obsolete infrastructure, machinery, and/or housing, prisons were seen as an opportunity for economic development.`,
                location: {
                center: [-74, 42.8270],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'newyork-regions',
                    opacity: 1
                    
                },
                {
                    layer: 'cuomo-prisons',
                    opacity: 1
                    
                },
                {
                    layer: 'non-cuomo-prisons',
                    opacity: 1
                    
                },
                {
                    layer: 'manufacturing-employment',
                    opacity: 0
                    
                },
                {
                    layer: 'prison-employment',
                    opacity: 0
                    
                },
                {
                    layer: 'prisoner-flows',
                    opacity: 0
                    
                },
                {
                    layer: 'prisoner-flows-nyc',
                    opacity: 0
                    
                },
                {
                    layer: 'closed-cuomo-prisons',
                    opacity: 0
                },
                {
                    layer: 'closed-non-cuomo-prisons',
                    opacity: 0
                }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-3',
            alignment: 'right',
            hidden: false,
            title: 'Economic Development in the North Country',
            image: '',
            description: `With each of the 30 prisons built under the Cuomo administration being located in rural areas, many were concentrated in the North Country, an expansive, seven-county region of New York located north of the Adirondacks and south of the Canadian border. Historically reliant upon the mining and logging industries as 
            well as tourism before losing many of its manufacturing jobs in the 1960s and 1970s, the North County was transformed into a carceral archipelago under Mario Cuomo. By the end of his third and final term in 1994, the North County’s largest employer was the New York State Corrections Department.`,
                location: {
                    center: [-74, 44],
                    zoom: 10,
                    pitch: 0,
                    bearing: 0
            },
            mapAnimation: 'flyto',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'newyork-regions',
                    opacity: 1
                    
                },
                {
                    layer: 'cuomo-prisons',
                    opacity: 0
                    
                },
                {
                    layer: 'non-cuomo-prisons',
                    opacity: 0
                    
                },
                {
                    layer: 'manufacturing-employment',
                    opacity: 0
                    
                },
                {
                    layer: 'prison-employment',
                    opacity: 0
                    
                },
                {
                    layer: 'prisoner-flows',
                    opacity: 0
                    
                },
                {
                    layer: 'prisoner-flows-nyc',
                    opacity: 0
                    
                },
                {
                    layer: 'closed-cuomo-prisons',
                    opacity: 0
                },
                {
                    layer: 'closed-non-cuomo-prisons',
                    opacity: 0
                }
            ],
            onChapterExit: []
            
        },
        {
            id: 'chapter-4',
            alignment: 'right',
            hidden: false,
            title: 'Manufacturing Decline',
            image: './images/employment_charts.png',
            description: `During the period of 1970 to 2010, there was a significant decline in manufacturing employment across New York State,
            and during that same period of time we see a sharp increase in employment in corrections industries.`,
            location: {
                center: [-74, 42.8270],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'newyork-regions',
                    opacity: 1
                    
                },
                {
                    layer: 'cuomo-prisons',
                    opacity: 0
                    
                },
                {
                    layer: 'non-cuomo-prisons',
                    opacity: 0
                    
                },
                {
                    layer: 'manufacturing-employment',
                    opacity: 0
                    
                },
                {
                    layer: 'prison-employment',
                    opacity: 0
                    
                },
                {
                    layer: 'prisoner-flows',
                    opacity: 0
                    
                },
                {
                    layer: 'prisoner-flows-nyc',
                    opacity: 0
                    
                },
                {
                    layer: 'closed-cuomo-prisons',
                    opacity: 0
                },
                {
                    layer: 'closed-non-cuomo-prisons',
                    opacity: 0
                }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-5',
            alignment: 'right',
            hidden: false,
            title: 'Manufacturing Decline',
            image: './images/manufacturing_employment.png',
            description: 'This decline in manufacturing employment was particularly strong in urban centers, in the Hudson Valley in eastern New York, and in the North Country counties',
            location: {
                center: [-74, 42.8270],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'newyork-regions',
                    opacity: 1
                    
                },
                {
                    layer: 'cuomo-prisons',
                    opacity: 0
                    
                },
                {
                    layer: 'non-cuomo-prisons',
                    opacity: 0
                    
                },
                {
                    layer: 'manufacturing-employment',
                    opacity: 1
                    
                },
                {
                    layer: 'prison-employment',
                    opacity: 0
                    
                },
                {
                    layer: 'prisoner-flows',
                    opacity: 0
                    
                },
                {
                    layer: 'prisoner-flows-nyc',
                    opacity: 0
                    
                },
                {
                    layer: 'closed-cuomo-prisons',
                    opacity: 0
                },
                {
                    layer: 'closed-non-cuomo-prisons',
                    opacity: 0
                }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-6',
            alignment: 'right',
            hidden: false,
            title: 'Rise in Prison Employment',
            image: './images/corrections_employment.png',
            description: 'Alongside this decline in manufacturing employment, we see a rise in prison employment across the board, though most strongly in those Hudson Valley and North Country counties.s',
            location: {
                center: [-74, 42.8270],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'newyork-regions',
                    opacity: 1
                    
                },
                {
                    layer: 'cuomo-prisons',
                    opacity: 0
                    
                },
                {
                    layer: 'non-cuomo-prisons',
                    opacity: 0
                    
                },
                {
                    layer: 'manufacturing-employment',
                    opacity: 0
                    
                },
                {
                    layer: 'prison-employment',
                    opacity: 1
                    
                },
                {
                    layer: 'prisoner-flows',
                    opacity: 0
                    
                },
                {
                    layer: 'prisoner-flows-nyc',
                    opacity: 0
                    
                },
                {
                    layer: 'closed-cuomo-prisons',
                    opacity: 0
                },
                {
                    layer: 'closed-non-cuomo-prisons',
                    opacity: 0
                }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-7',
            alignment: 'right',
            hidden: false,
            title: `Cuomo's Prisons`,
            image: './images/manufacturing_employment_prisons.png',
            description: `These upstate couties along the Hudson Valley and in North Country that faced steep manufacturing declines were the 
            primary recipients of new prison development under the Cuomo administration`,
            location: {
                center: [-74, 42.8270],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'newyork-regions',
                    opacity: 1
                    
                },
                {
                    layer: 'cuomo-prisons',
                    opacity: 1
                    
                },
                {
                    layer: 'non-cuomo-prisons',
                    opacity: 1
                    
                },
                {
                    layer: 'manufacturing-employment',
                    opacity: 1
                    
                },
                {
                    layer: 'prison-employment',
                    opacity: 0
                    
                },
                {
                    layer: 'prisoner-flows',
                    opacity: 0
                    
                },
                {
                    layer: 'prisoner-flows-nyc',
                    opacity: 0
                    
                },
                {
                    layer: 'closed-cuomo-prisons',
                    opacity: 0
                },
                {
                    layer: 'closed-non-cuomo-prisons',
                    opacity: 0
                }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-8',
            alignment: 'right',
            hidden: false,
            title: `Cuomo's Prisons`,
            image: './images/corrections_employment_prisons.png',
            description: `Unsurprisingly, these counties saw the largest increases in corrections employment. So while de-industrialization especially in the manufacturing
            sector affected urban and rural economies, rural economies were the primary beneficiary of Cuomo's new prison development.`,
            location: {
                center: [-74, 42.8270],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'newyork-regions',
                    opacity: 1
                    
                },
                {
                    layer: 'cuomo-prisons',
                    opacity: 1
                    
                },
                {
                    layer: 'non-cuomo-prisons',
                    opacity: 1
                    
                },
                {
                    layer: 'manufacturing-employment',
                    opacity: 0
                    
                },
                {
                    layer: 'prison-employment',
                    opacity: 1
                    
                },
                {
                    layer: 'prisoner-flows',
                    opacity: 0
                    
                },
                {
                    layer: 'prisoner-flows-nyc',
                    opacity: 0
                    
                },
                {
                    layer: 'closed-cuomo-prisons',
                    opacity: 0
                },
                {
                    layer: 'closed-non-cuomo-prisons',
                    opacity: 0
                }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-9',
            alignment: 'left',
            hidden: false,
            title: 'Net Prisoner Flows',
            image: './images/net_prisoner_flows.png',
            description: `This all gets to where core conflict lies. Data on prisoners is extremely opaque, but thanks to activists who pushed for census reform, we can get a small glimpse into data on the counties and blocks where people were imprisoned from. 
            The 2010 census contains an initial count in New York State where imprisoned people were counted in the county they were imprisoned in, and then an adjusted count where those incarcerated were counted from their home residence. By taking the difference between these two counts we get a representation of where prisoners were incarcerated from at this moment in 2010, at the end of our data collection on manufacturing and corrections employment.
            
            These prisons have become major industrial machines in upstate new york. Besides Buffalo, which is likely offset by the fact that Eerie county had 2 new prisons developed under Mario Cuomo, the counties from which the most people were incarcerated were the counties containing the New York City Boroughs of Brooklyn Queens, Manhattan, Bronx, and cities like Albany, Binghamptom, Syracuse, and Rochester. 
            `,
            location: {
                center: [-74, 42.8270],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'newyork-regions',
                    opacity: 1
                    
                },
                {
                    layer: 'cuomo-prisons',
                    opacity: 1
                    
                },
                {
                    layer: 'non-cuomo-prisons',
                    opacity: 1
                    
                },
                {
                    layer: 'manufacturing-employment',
                    opacity: 0
                    
                },
                {
                    layer: 'prison-employment',
                    opacity: 0
                    
                },
                {
                    layer: 'prisoner-flows',
                    opacity: 1
                    
                },
                {
                    layer: 'prisoner-flows-nyc',
                    opacity: 0
                    
                },
                {
                    layer: 'closed-cuomo-prisons',
                    opacity: 0
                },
                {
                    layer: 'closed-non-cuomo-prisons',
                    opacity: 0
                }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-10',
            alignment: 'left',
            hidden: false,
            title: `Brooklyn Prisoners by Census Block`,
            image: './images/net_prisoner_flows_nyc.png',
            description: `In Brooklyn, we can see a significant number of those imprisoned were coming from clusters of blocks in predominantly black neighborhoods like Brownsville, East New York, Bedford-Stuyvesant, and Crown Heights. 
            Here we can see clearly how the war on drugs and Cuomo's prison development policy led to the extraction of black community members to upstate New York.`,
            location: {
                center: [-73.9442, 40.655],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'newyork-regions',
                    opacity: 0
                    
                },
                {
                    layer: 'cuomo-prisons',
                    opacity: 1
                    
                },
                {
                    layer: 'non-cuomo-prisons',
                    opacity: 1
                    
                },
                {
                    layer: 'manufacturing-employment',
                    opacity: 0
                    
                },
                {
                    layer: 'prison-employment',
                    opacity: 0
                    
                },
                {
                    layer: 'prisoner-flows',
                    opacity: 0
                    
                },
                {
                    layer: 'prisoner-flows-nyc',
                    opacity: 1
                    
                },
                {
                    layer: 'closed-cuomo-prisons',
                    opacity: 0
                },
                {
                    layer: 'closed-non-cuomo-prisons',
                    opacity: 0
                }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-11',
            alignment: 'left',
            hidden: false,
            title: 'Harlem and South Bronx Prisoners by Census Block',
            image: './images/net_prisoner_flows_nyc.png',
            description: `Likewise in Harlem and South Bronx, we see a small area being a significant geography of extraction for upstate prisons`,
            location: {
                center: [-73.97, 40.8],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'newyork-regions',
                    opacity: 0
                    
                },
                {
                    layer: 'cuomo-prisons',
                    opacity: 1
                    
                },
                {
                    layer: 'non-cuomo-prisons',
                    opacity: 1
                    
                },
                {
                    layer: 'manufacturing-employment',
                    opacity: 0
                    
                },
                {
                    layer: 'prison-employment',
                    opacity: 0
                    
                },
                {
                    layer: 'prisoner-flows',
                    opacity: 0
                    
                },
                {
                    layer: 'prisoner-flows-nyc',
                    opacity: 1
                    
                },
                {
                    layer: 'closed-cuomo-prisons',
                    opacity: 0
                },
                {
                    layer: 'closed-non-cuomo-prisons',
                    opacity: 0
                }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-12',
            alignment: 'right',
            hidden: false,
            title: 'Prison Closures',
            image: './images/prison_legend.png',
            description: `This conflict is now evolving in a period of decarceration. As prison populations decrease across the state, New York began the process of shutting down prisons to consolidate, some of which were the very prisons that Mario Cuomo opened during his terms as Governor. The creation of a major industry in which upstate communities view people of color from urban centers as criminals has caused a major reactionary backlash to the closure of these prisons.`,
            location: {
                center: [-74, 42.8270],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'newyork-regions',
                    opacity: 1
                    
                },
                {
                    layer: 'cuomo-prisons',
                    opacity: 0
                    
                },
                {
                    layer: 'non-cuomo-prisons',
                    opacity: 0
                    
                },
                {
                    layer: 'manufacturing-employment',
                    opacity: 0
                    
                },
                {
                    layer: 'prison-employment',
                    opacity: 0
                    
                },
                {
                    layer: 'prisoner-flows',
                    opacity: 0
                    
                },
                {
                    layer: 'prisoner-flows-nyc',
                    opacity: 0
                    
                },
                {
                    layer: 'closed-cuomo-prisons',
                    opacity: 1
                },
                {
                    layer: 'closed-non-cuomo-prisons',
                    opacity: 1
                }
            ],
            onChapterExit: []
        }
    ]
};
  
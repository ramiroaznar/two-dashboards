(function () {

    window.myapp = window.myapp || {};

    window.onload = function () {

        var myapp = window.myapp,
            username = "ramirocartodb",
            mapname = "How to create 2 CARTO dashboards",
            diJSON1 = 'https://team.cartodb.com/u/ramirocartodb/api/v3/viz/1740ac74-384e-11e6-91fe-0e31c9be1b51/viz.json',
            diJSON2 = 'https://team.carto.com/u/ramirocartodb/api/v3/viz/f4500318-69e4-11e6-b54d-0e233c30368f/viz.json';

        cartodb.deepInsights.createDashboard('#dashboard1', diJSON1, {
            no_cdn: false
        }, function (err, dashboard) {

            myapp.dashboard = dashboard1;

            myapp.map1 = dashboard.getMap();

            myapp.Cmap1 = myapp.map1.map;

            window.myapp.layers1 = myapp.map1.getLayers();

            myapp.addWidget = function (type, layer_index, options) {
                try {
                    var layer = myapp.layers1[layer_index];
                    switch (type) {
                    case 'category':
                        dashboard.createCategoryWidget(options, layer);
                        break;
                    case 'formula':
                        dashboard.createFormulaWidget(options, layer);
                        break;
                    case 'histogram':
                        dashboard.createHistogramWidget(options, layer);
                        break;
                    case 'timeseries':
                        dashboard.createTimeSeriesWidget(options, layer);
                        break;
                    }
                    myapp.widgets = dashboard.getWidgets();
                    myapp.widgetsdata = myapp.widgets.map(function (a) {
                        return a.dataviewModel
                    });
                    return 'OK';
                } catch (error) {
                    return error;
                }
            }

            myapp.addWidget('category', 1, {
              "source": {"id":'a0'},
              "title": "City",
              "column": "name",
              "aggregation": "count"
            })

            myapp.addWidget('histogram', 1, {
              "source": {"id":'a0'},
              "title": "Population Distribution",
              "column": "pop_max",
              "bins": "20"
            })

            myapp.addWidget('formula', 1, {
              "source": {"id":'a0'},
              "title": "Total Population",
              "column": "pop_max",
              "operation": "sum"
            })

        });

        cartodb.deepInsights.createDashboard('#dashboard2', diJSON2, {
            no_cdn: false
        }, function (err, dashboard) {

            myapp.dashboard = dashboard2;

            myapp.map2 = dashboard.getMap();

            myapp.Cmap2 = myapp.map2.map;

            window.myapp.layers2 = myapp.map2.getLayers();

        });
    }

})();

(function () {

    window.myapp = window.myapp || {};

    window.onload = function () {

        var myapp = window.myapp,
            username = "ramirocartodb",
            mapname = "How to create 2 CARTO dashboards",
            diJSON1 = 'https://team.carto.com/u/ramirocartodb/api/v3/viz/c90bbe09-3174-4609-ac21-ad667dd52993/viz.json',
            diJSON2 = 'https://team.carto.com/u/ramirocartodb/api/v3/viz/f4500318-69e4-11e6-b54d-0e233c30368f/viz.json';

        cartodb.deepInsights.createDashboard('#dashboard1', diJSON1, {
            no_cdn: false,
            zoom: 4,
            center: [40, 0]
        }, function (err, dashboard) {

            myapp.dashboard = dashboard1;

            myapp.map1 = dashboard.getMap();

            myapp.Cmap1 = myapp.map1.map;

            window.myapp.layers1 = myapp.map1.getLayers();

            myapp.Cmap1.on('moveend', function(e){ // WIP

                var center = myapp.Cmap1.get('center'),
                    zoom = myapp.Cmap1.getZoom();

                myapp.Cmap2.setCenter(center);
                myapp.Cmap2.setZoom(zoom);

            });


        });

        cartodb.deepInsights.createDashboard('#dashboard2', diJSON2, {
            no_cdn: false,
            zoom: 4,
            center: [40, 0]
        }, function (err, dashboard) {

            myapp.dashboard = dashboard2;

            myapp.map2 = dashboard.getMap();

            myapp.Cmap2 = myapp.map2.map;

            window.myapp.layers2 = myapp.map2.getLayers();

            myapp.Cmap2.on('moveend', function(e){ // WIP

                var center = myapp.Cmap2.get('center'),
                    zoom = myapp.Cmap2.getZoom();


                myapp.Cmap1.setCenter(center);
                myapp.Cmap1.setZoom(zoom);

            });

        });

    }

})();

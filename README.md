# How to create two CARTO dashboards

Based on [Abel's Platypus DI template](https://github.com/CartoDB/platypus) and [Carla's Propagating map movements (three maps) block](http://bl.ocks.org/iriberri/b4c7b37a9f3cb879d312)*. 

## Key points

* Because both `vizjson`s come from the Builder, it is necessary to set their dashboard zoom and center properties within the `createDashboard` function:

```javascript
zoom: 4,
center: [40, 0]
```

* In order to propagate movements between both maps, you should use a Leaflet.js method for each map:

```javasdcript
	myapp.Cmap1.on('moveend', function(e){

		var center = myapp.Cmap1.get('center'),
		    zoom = myapp.Cmap1.getZoom();

		myapp.Cmap2.setCenter(center);
		myapp.Cmap2.setZoom(zoom);

	});
```

*Mobile responsive design still WIP.

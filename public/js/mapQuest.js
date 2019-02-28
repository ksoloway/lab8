function initMap() {
	// add your code here
	L.mapquest.key = 'YU8HInnKZJorGxC5p7HBHSYex6H8nwQE';
	var map = L.mapquest.map('map',{
		center : [32.88,-117.236],
		layers : L.mapquest.tileLayer('map'),
		zoom : 12,
		zoomControl : false
	});
	L.marker([32.88,-117.236]).addTo(map);
}
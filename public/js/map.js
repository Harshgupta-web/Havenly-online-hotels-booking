

const map = new maplibregl.Map({
  container: "map",
  style: `https://api.maptiler.com/maps/streets/style.json?key=${mapApi}`,
  zoom: 8,
  center: listing.geometry.coordinates,
});

map.on("style.load", () => {
  map.setProjection({
    type: "globe", // Set projection to globe
  });
});

const marker = new maplibregl.Marker({ color: "red" })
  .setLngLat(listing.geometry.coordinates) // Marker coordinates [longitude, latitude]
    .setPopup(new maplibregl.Popup({ offset: 25 }).setHTML(`<h4>${listing.location}</h4><p>Exact Location will be Provided after booking</p>`))
  .addTo(map);

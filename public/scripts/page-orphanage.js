/* Tirando zoom, scroll do mapa */
const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}


//create map
const map = L.map('mapid',options).setView([-27.2197855,-49.649601], 15);

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//  create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58,68],
    iconAchor: [29,68],
    popupAnchor: [170,2]
})


// create and add marker
L.marker([-27.2197855,-49.649601],{icon}).addTo(map)
    .bindPopup(popup)


function selectImage(event){
    const button = event.currentTarget

    // Remover todas as classes .active
    

    // Selecionar a imagem clicada 

    // Atualizar o container de Imagem

    // Adicionar a classe .activa para o botao clicado
}
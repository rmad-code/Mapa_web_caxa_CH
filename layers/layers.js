var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_sectores_1 = new ol.format.GeoJSON();
var features_sectores_1 = format_sectores_1.readFeatures(json_sectores_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sectores_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sectores_1.addFeatures(features_sectores_1);
var lyr_sectores_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sectores_1, 
                style: style_sectores_1,
                interactive: true,
                title: '<img src="styles/legend/sectores_1.png" /> sectores'
            });
var format_Manzanas_2 = new ol.format.GeoJSON();
var features_Manzanas_2 = format_Manzanas_2.readFeatures(json_Manzanas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Manzanas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Manzanas_2.addFeatures(features_Manzanas_2);
var lyr_Manzanas_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Manzanas_2, 
                style: style_Manzanas_2,
                interactive: true,
    title: 'Manzanas<br />\
    <img src="styles/legend/Manzanas_2_0.png" /> SECTOR 1<br />\
    <img src="styles/legend/Manzanas_2_1.png" /> SECTOR 18<br />\
    <img src="styles/legend/Manzanas_2_2.png" /> SECTOR 2<br />\
    <img src="styles/legend/Manzanas_2_3.png" /> SECTOR 3<br />\
    <img src="styles/legend/Manzanas_2_4.png" /> SECTOR 4<br />\
    <img src="styles/legend/Manzanas_2_5.png" /> SECTOR 7<br />\
    <img src="styles/legend/Manzanas_2_6.png" /> SECTOR 8<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_sectores_1.setVisible(true);lyr_Manzanas_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_sectores_1,lyr_Manzanas_2];
lyr_sectores_1.set('fieldAliases', {'Cod_sector': 'Cod_sector', 'Área': 'Área', 'Perimetro': 'Perimetro', 'num_orden': 'num_orden', 'imagen': 'imagen', });
lyr_Manzanas_2.set('fieldAliases', {'Cod_Mnz': 'Cod_Mnz', 'Cod_sector': 'Cod_sector', });
lyr_sectores_1.set('fieldImages', {'Cod_sector': 'TextEdit', 'Área': 'TextEdit', 'Perimetro': 'TextEdit', 'num_orden': 'TextEdit', 'imagen': 'ExternalResource', });
lyr_Manzanas_2.set('fieldImages', {'Cod_Mnz': 'Hidden', 'Cod_sector': 'Hidden', });
lyr_sectores_1.set('fieldLabels', {'Cod_sector': 'no label', 'Área': 'header label', 'Perimetro': 'header label', 'num_orden': 'no label', 'imagen': 'no label', });
lyr_Manzanas_2.set('fieldLabels', {});
lyr_Manzanas_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
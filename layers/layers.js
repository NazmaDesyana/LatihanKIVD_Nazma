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
var format_ADMINISTRASIDESA_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_1 = format_ADMINISTRASIDESA_1.readFeatures(json_ADMINISTRASIDESA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIDESA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_1.addFeatures(features_ADMINISTRASIDESA_1);
var lyr_ADMINISTRASIDESA_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ADMINISTRASIDESA_1, 
                style: style_ADMINISTRASIDESA_1,
                popuplayertitle: "ADMINISTRASI DESA",
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIDESA_1.png" /> ADMINISTRASI DESA'
            });
var format_SARANAIBADAH_2 = new ol.format.GeoJSON();
var features_SARANAIBADAH_2 = format_SARANAIBADAH_2.readFeatures(json_SARANAIBADAH_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SARANAIBADAH_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SARANAIBADAH_2.addFeatures(features_SARANAIBADAH_2);
var lyr_SARANAIBADAH_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SARANAIBADAH_2, 
                style: style_SARANAIBADAH_2,
                popuplayertitle: "SARANA IBADAH",
                interactive: true,
                title: '<img src="styles/legend/SARANAIBADAH_2.png" /> SARANA IBADAH'
            });
var format_SUNGAI_3 = new ol.format.GeoJSON();
var features_SUNGAI_3 = format_SUNGAI_3.readFeatures(json_SUNGAI_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_3.addFeatures(features_SUNGAI_3);
var lyr_SUNGAI_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUNGAI_3, 
                style: style_SUNGAI_3,
                popuplayertitle: "SUNGAI",
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_3.png" /> SUNGAI'
            });

lyr_OSMStandard_0.setVisible(true);lyr_ADMINISTRASIDESA_1.setVisible(true);lyr_SARANAIBADAH_2.setVisible(true);lyr_SUNGAI_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ADMINISTRASIDESA_1,lyr_SARANAIBADAH_2,lyr_SUNGAI_3];
lyr_ADMINISTRASIDESA_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_SARANAIBADAH_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'FGSIBD': 'FGSIBD', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_SUNGAI_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_ADMINISTRASIDESA_1.set('fieldImages', {'KDPPUM': '', 'NAMOBJ': '', 'REMARK': '', 'KDPBPS': '', 'FCODE': '', 'LUASWH': '', 'UUPP': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'KDEBPS': '', 'KDEPUM': '', 'KDCBPS': '', 'KDCPUM': '', 'KDBBPS': '', 'KDBPUM': '', 'WADMKD': '', 'WIADKD': '', 'WADMKC': '', 'WIADKC': '', 'WADMKK': '', 'WIADKK': '', 'WADMPR': '', 'WIADPR': '', 'TIPADM': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_SARANAIBADAH_2.set('fieldImages', {'NAMOBJ': '', 'LUAS': '', 'FGSIBD': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_SUNGAI_3.set('fieldImages', {'NAMOBJ': '', 'TIPSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'STATUS': '', 'WMAX': '', 'DBTMAX': '', 'SLPRT': '', 'SHAPE_Leng': '', });
lyr_ADMINISTRASIDESA_1.set('fieldLabels', {'KDPPUM': 'inline label - visible with data', 'NAMOBJ': 'inline label - visible with data', 'REMARK': 'inline label - visible with data', 'KDPBPS': 'inline label - visible with data', 'FCODE': 'inline label - visible with data', 'LUASWH': 'inline label - visible with data', 'UUPP': 'inline label - visible with data', 'SRS_ID': 'inline label - visible with data', 'LCODE': 'inline label - visible with data', 'METADATA': 'inline label - visible with data', 'KDEBPS': 'inline label - visible with data', 'KDEPUM': 'inline label - visible with data', 'KDCBPS': 'inline label - visible with data', 'KDCPUM': 'inline label - visible with data', 'KDBBPS': 'inline label - visible with data', 'KDBPUM': 'inline label - visible with data', 'WADMKD': 'inline label - visible with data', 'WIADKD': 'inline label - visible with data', 'WADMKC': 'inline label - visible with data', 'WIADKC': 'inline label - visible with data', 'WADMKK': 'inline label - visible with data', 'WIADKK': 'inline label - visible with data', 'WADMPR': 'inline label - visible with data', 'WIADPR': 'inline label - visible with data', 'TIPADM': 'inline label - visible with data', 'SHAPE_Leng': 'inline label - visible with data', 'SHAPE_Area': 'inline label - visible with data', });
lyr_SARANAIBADAH_2.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'LUAS': 'inline label - visible with data', 'FGSIBD': 'inline label - visible with data', 'FCODE': 'inline label - visible with data', 'REMARK': 'inline label - visible with data', 'SRS_ID': 'inline label - visible with data', 'LCODE': 'inline label - visible with data', 'METADATA': 'inline label - visible with data', });
lyr_SUNGAI_3.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'TIPSNG': 'inline label - visible with data', 'KLSSNG': 'inline label - visible with data', 'FCODE': 'inline label - visible with data', 'REMARK': 'inline label - visible with data', 'SRS_ID': 'inline label - visible with data', 'LCODE': 'inline label - visible with data', 'METADATA': 'inline label - visible with data', 'NAMWS': 'inline label - visible with data', 'NAMDAS': 'inline label - visible with data', 'STATUS': 'inline label - visible with data', 'WMAX': 'inline label - visible with data', 'DBTMAX': 'inline label - visible with data', 'SLPRT': 'inline label - visible with data', 'SHAPE_Leng': 'inline label - visible with data', });
lyr_SUNGAI_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
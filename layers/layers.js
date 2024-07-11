var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_DJI_20240710123843_0012_D_smooth_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "DJI_20240710123843_0012_D_smooth",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DJI_20240710123843_0012_D_smooth_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1680585.349246, -3078324.532062, 1680938.267297, -3078126.014274]
                            })
                        });
var lyr_DJI_20240710123751_0011_D_smooth_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "DJI_20240710123751_0011_D_smooth",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DJI_20240710123751_0011_D_smooth_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1680586.114565, -3078198.939063, 1680939.029501, -3078000.423027]
                            })
                        });
var lyr_DJI_20240710123659_0010_D_smooth_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "DJI_20240710123659_0010_D_smooth",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DJI_20240710123659_0010_D_smooth_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1680586.740728, -3078073.924882, 1680939.652563, -3077875.410591]
                            })
                        });
var lyr_DJI_20240710123605_0009_D_smooth_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "DJI_20240710123605_0009_D_smooth",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DJI_20240710123605_0009_D_smooth_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1680587.663752, -3077948.213020, 1680940.572468, -3077749.700482]
                            })
                        });
var lyr_DJI_20240710123400_0008_D_smooth_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "DJI_20240710123400_0008_D_smooth",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DJI_20240710123400_0008_D_smooth_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1680887.539860, -3077951.980208, 1681240.448670, -3077753.467618]
                            })
                        });
var lyr_DJI_20240710123305_0007_D_smooth_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "DJI_20240710123305_0007_D_smooth",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DJI_20240710123305_0007_D_smooth_6.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1680885.182021, -3078080.224342, 1681238.094012, -3077881.709962]
                            })
                        });
var lyr_DJI_20240710123212_0006_D_smooth_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "DJI_20240710123212_0006_D_smooth",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DJI_20240710123212_0006_D_smooth_7.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1680882.354180, -3078207.386848, 1681235.269325, -3078008.870694]
                            })
                        });
var lyr_DJI_20240710123120_0005_D_smooth_8 = new ol.layer.Image({
                            opacity: 1,
                            title: "DJI_20240710123120_0005_D_smooth",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DJI_20240710123120_0005_D_smooth_8.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1680880.450916, -3078333.913961, 1681233.369200, -3078135.396041]
                            })
                        });
var lyr_DJI_20240710123027_0004_D_smooth_9 = new ol.layer.Image({
                            opacity: 1,
                            title: "DJI_20240710123027_0004_D_smooth",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DJI_20240710123027_0004_D_smooth_9.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1680878.519786, -3078463.476123, 1681231.441283, -3078264.956395]
                            })
                        });
var lyr_DJI_20240710122937_0003_D_smooth_10 = new ol.layer.Image({
                            opacity: 1,
                            title: "DJI_20240710122937_0003_D_smooth",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DJI_20240710122937_0003_D_smooth_10.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1680887.729882, -3078592.918384, 1681240.654591, -3078394.396850]
                            })
                        });
var lyr_DJI_20240710122929_0002_D_smooth_11 = new ol.layer.Image({
                            opacity: 1,
                            title: "DJI_20240710122929_0002_D_smooth",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DJI_20240710122929_0002_D_smooth_11.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1680887.838110, -3078592.835357, 1681240.762817, -3078394.313824]
                            })
                        });
var lyr_DJI_20240710130635_0021_D_smooth_12 = new ol.layer.Image({
                            opacity: 1,
                            title: "DJI_20240710130635_0021_D_smooth",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DJI_20240710130635_0021_D_smooth_12.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1681136.745136, -3078614.294442, 1681489.670375, -3078415.772610]
                            })
                        });
var lyr_DJI_20240710130508_0020_D_smooth_13 = new ol.layer.Image({
                            opacity: 1,
                            title: "DJI_20240710130508_0020_D_smooth",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DJI_20240710130508_0020_D_smooth_13.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1681149.270442, -3078211.202537, 1681502.185682, -3078012.686329]
                            })
                        });
var lyr_DJI_20240710130434_0019_D_smooth_14 = new ol.layer.Image({
                            opacity: 1,
                            title: "DJI_20240710130434_0019_D_smooth",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DJI_20240710130434_0019_D_smooth_14.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1681144.930472, -3078341.493516, 1681497.848944, -3078142.975490]
                            })
                        });
var lyr_DJI_20240710130403_0018_D_smooth_15 = new ol.layer.Image({
                            opacity: 1,
                            title: "DJI_20240710130403_0018_D_smooth",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DJI_20240710130403_0018_D_smooth_15.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1681140.525584, -3078470.353481, 1681493.447252, -3078271.833657]
                            })
                        });
var lyr_DJI_20240710124515_0016_D_smooth_16 = new ol.layer.Image({
                            opacity: 1,
                            title: "DJI_20240710124515_0016_D_smooth",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DJI_20240710124515_0016_D_smooth_16.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1681068.611833, -3078077.927339, 1681421.523766, -3077879.412992]
                            })
                        });
var lyr_DJI_20240710124348_0015_D_smooth_17 = new ol.layer.Image({
                            opacity: 1,
                            title: "DJI_20240710124348_0015_D_smooth",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DJI_20240710124348_0015_D_smooth_17.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1681226.931358, -3077950.679508, 1681579.840136, -3077752.166935]
                            })
                        });
var lyr_DJI_20240710124031_0014_D_smooth_18 = new ol.layer.Image({
                            opacity: 1,
                            title: "DJI_20240710124031_0014_D_smooth",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DJI_20240710124031_0014_D_smooth_18.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1680582.671337, -3078580.658041, 1680935.595742, -3078382.136678]
                            })
                        });
var lyr_DJI_20240710123936_0013_D_smooth_19 = new ol.layer.Image({
                            opacity: 1,
                            title: "DJI_20240710123936_0013_D_smooth",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DJI_20240710123936_0013_D_smooth_19.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1680584.531300, -3078454.972835, 1680937.452586, -3078256.453226]
                            })
                        });
var lyr_DJI_20240710123936_0013_D_smooth_binary_20 = new ol.layer.Image({
                            opacity: 1,
                            title: "DJI_20240710123936_0013_D_smooth_binary",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DJI_20240710123936_0013_D_smooth_binary_20.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1680584.531300, -3078454.972835, 1680937.452586, -3078256.453226]
                            })
                        });
var lyr_DJI_20240710123843_0012_D_smooth_binary_21 = new ol.layer.Image({
                            opacity: 1,
                            title: "DJI_20240710123843_0012_D_smooth_binary",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DJI_20240710123843_0012_D_smooth_binary_21.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1680585.349246, -3078324.532062, 1680938.267297, -3078126.014274]
                            })
                        });
var lyr_DJI_20240710123751_0011_D_smooth_binary_22 = new ol.layer.Image({
                            opacity: 1,
                            title: "DJI_20240710123751_0011_D_smooth_binary",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DJI_20240710123751_0011_D_smooth_binary_22.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1680586.114565, -3078198.939063, 1680939.029501, -3078000.423027]
                            })
                        });
var lyr_DJI_20240710123659_0010_D_smooth_binary_23 = new ol.layer.Image({
                            opacity: 1,
                            title: "DJI_20240710123659_0010_D_smooth_binary",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DJI_20240710123659_0010_D_smooth_binary_23.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1680586.740728, -3078073.924882, 1680939.652563, -3077875.410591]
                            })
                        });
var lyr_DJI_20240710123605_0009_D_smooth_binary_24 = new ol.layer.Image({
                            opacity: 1,
                            title: "DJI_20240710123605_0009_D_smooth_binary",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DJI_20240710123605_0009_D_smooth_binary_24.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1680587.663752, -3077948.213020, 1680940.572468, -3077749.700482]
                            })
                        });
var lyr_DJI_20240710123400_0008_D_smooth_binary_25 = new ol.layer.Image({
                            opacity: 1,
                            title: "DJI_20240710123400_0008_D_smooth_binary",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DJI_20240710123400_0008_D_smooth_binary_25.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1680887.539860, -3077951.980208, 1681240.448670, -3077753.467618]
                            })
                        });
var lyr_DJI_20240710123305_0007_D_smooth_binary_26 = new ol.layer.Image({
                            opacity: 1,
                            title: "DJI_20240710123305_0007_D_smooth_binary",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DJI_20240710123305_0007_D_smooth_binary_26.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1680885.182021, -3078080.224342, 1681238.094012, -3077881.709962]
                            })
                        });
var lyr_DJI_20240710123212_0006_D_smooth_binary_27 = new ol.layer.Image({
                            opacity: 1,
                            title: "DJI_20240710123212_0006_D_smooth_binary",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DJI_20240710123212_0006_D_smooth_binary_27.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1680882.354180, -3078207.386848, 1681235.269325, -3078008.870694]
                            })
                        });
var lyr_DJI_20240710123120_0005_D_smooth_binary_28 = new ol.layer.Image({
                            opacity: 1,
                            title: "DJI_20240710123120_0005_D_smooth_binary",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DJI_20240710123120_0005_D_smooth_binary_28.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1680880.450916, -3078333.913961, 1681233.369200, -3078135.396041]
                            })
                        });
var lyr_DJI_20240710123027_0004_D_smooth_binary_29 = new ol.layer.Image({
                            opacity: 1,
                            title: "DJI_20240710123027_0004_D_smooth_binary",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DJI_20240710123027_0004_D_smooth_binary_29.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1680878.519786, -3078463.476123, 1681231.441283, -3078264.956395]
                            })
                        });
var lyr_DJI_20240710122937_0003_D_smooth_binary_30 = new ol.layer.Image({
                            opacity: 1,
                            title: "DJI_20240710122937_0003_D_smooth_binary",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DJI_20240710122937_0003_D_smooth_binary_30.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1680887.729882, -3078592.918384, 1681240.654591, -3078394.396850]
                            })
                        });
var lyr_DJI_20240710122929_0002_D_smooth_binary_31 = new ol.layer.Image({
                            opacity: 1,
                            title: "DJI_20240710122929_0002_D_smooth_binary",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DJI_20240710122929_0002_D_smooth_binary_31.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1680887.838110, -3078592.835357, 1681240.762817, -3078394.313824]
                            })
                        });
var lyr_DJI_20240710130635_0021_D_smooth_binary_32 = new ol.layer.Image({
                            opacity: 1,
                            title: "DJI_20240710130635_0021_D_smooth_binary",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DJI_20240710130635_0021_D_smooth_binary_32.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1681136.745136, -3078614.294442, 1681489.670375, -3078415.772610]
                            })
                        });
var lyr_DJI_20240710130508_0020_D_smooth_binary_33 = new ol.layer.Image({
                            opacity: 1,
                            title: "DJI_20240710130508_0020_D_smooth_binary",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DJI_20240710130508_0020_D_smooth_binary_33.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1681149.270442, -3078211.202537, 1681502.185682, -3078012.686329]
                            })
                        });
var lyr_DJI_20240710130434_0019_D_smooth_binary_34 = new ol.layer.Image({
                            opacity: 1,
                            title: "DJI_20240710130434_0019_D_smooth_binary",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DJI_20240710130434_0019_D_smooth_binary_34.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1681144.930472, -3078341.493516, 1681497.848944, -3078142.975490]
                            })
                        });
var lyr_DJI_20240710130403_0018_D_smooth_binary_35 = new ol.layer.Image({
                            opacity: 1,
                            title: "DJI_20240710130403_0018_D_smooth_binary",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DJI_20240710130403_0018_D_smooth_binary_35.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1681140.525584, -3078470.353481, 1681493.447252, -3078271.833657]
                            })
                        });
var lyr_DJI_20240710124515_0016_D_smooth_binary_36 = new ol.layer.Image({
                            opacity: 1,
                            title: "DJI_20240710124515_0016_D_smooth_binary",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DJI_20240710124515_0016_D_smooth_binary_36.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1681068.611833, -3078077.927339, 1681421.523766, -3077879.412992]
                            })
                        });
var lyr_DJI_20240710124348_0015_D_smooth_binary_37 = new ol.layer.Image({
                            opacity: 1,
                            title: "DJI_20240710124348_0015_D_smooth_binary",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DJI_20240710124348_0015_D_smooth_binary_37.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1681226.931358, -3077950.679508, 1681579.840136, -3077752.166935]
                            })
                        });
var lyr_DJI_20240710124031_0014_D_smooth_binary_38 = new ol.layer.Image({
                            opacity: 1,
                            title: "DJI_20240710124031_0014_D_smooth_binary",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DJI_20240710124031_0014_D_smooth_binary_38.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1680582.671337, -3078580.658041, 1680935.595742, -3078382.136678]
                            })
                        });
var format_operational_plots_39 = new ol.format.GeoJSON();
var features_operational_plots_39 = format_operational_plots_39.readFeatures(json_operational_plots_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_operational_plots_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_operational_plots_39.addFeatures(features_operational_plots_39);
var lyr_operational_plots_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_operational_plots_39, 
                style: style_operational_plots_39,
                popuplayertitle: "operational_plots",
                interactive: true,
                title: '<img src="styles/legend/operational_plots_39.png" /> operational_plots'
            });
var group_Binary = new ol.layer.Group({
                                layers: [lyr_DJI_20240710123936_0013_D_smooth_binary_20,lyr_DJI_20240710123843_0012_D_smooth_binary_21,lyr_DJI_20240710123751_0011_D_smooth_binary_22,lyr_DJI_20240710123659_0010_D_smooth_binary_23,lyr_DJI_20240710123605_0009_D_smooth_binary_24,lyr_DJI_20240710123400_0008_D_smooth_binary_25,lyr_DJI_20240710123305_0007_D_smooth_binary_26,lyr_DJI_20240710123212_0006_D_smooth_binary_27,lyr_DJI_20240710123120_0005_D_smooth_binary_28,lyr_DJI_20240710123027_0004_D_smooth_binary_29,lyr_DJI_20240710122937_0003_D_smooth_binary_30,lyr_DJI_20240710122929_0002_D_smooth_binary_31,lyr_DJI_20240710130635_0021_D_smooth_binary_32,lyr_DJI_20240710130508_0020_D_smooth_binary_33,lyr_DJI_20240710130434_0019_D_smooth_binary_34,lyr_DJI_20240710130403_0018_D_smooth_binary_35,lyr_DJI_20240710124515_0016_D_smooth_binary_36,lyr_DJI_20240710124348_0015_D_smooth_binary_37,lyr_DJI_20240710124031_0014_D_smooth_binary_38,],
                                fold: "open",
                                title: "Binary"});
var group_Raw = new ol.layer.Group({
                                layers: [lyr_DJI_20240710123843_0012_D_smooth_1,lyr_DJI_20240710123751_0011_D_smooth_2,lyr_DJI_20240710123659_0010_D_smooth_3,lyr_DJI_20240710123605_0009_D_smooth_4,lyr_DJI_20240710123400_0008_D_smooth_5,lyr_DJI_20240710123305_0007_D_smooth_6,lyr_DJI_20240710123212_0006_D_smooth_7,lyr_DJI_20240710123120_0005_D_smooth_8,lyr_DJI_20240710123027_0004_D_smooth_9,lyr_DJI_20240710122937_0003_D_smooth_10,lyr_DJI_20240710122929_0002_D_smooth_11,lyr_DJI_20240710130635_0021_D_smooth_12,lyr_DJI_20240710130508_0020_D_smooth_13,lyr_DJI_20240710130434_0019_D_smooth_14,lyr_DJI_20240710130403_0018_D_smooth_15,lyr_DJI_20240710124515_0016_D_smooth_16,lyr_DJI_20240710124348_0015_D_smooth_17,lyr_DJI_20240710124031_0014_D_smooth_18,lyr_DJI_20240710123936_0013_D_smooth_19,],
                                fold: "open",
                                title: "Raw"});

lyr_OpenStreetMap_0.setVisible(true);lyr_DJI_20240710123843_0012_D_smooth_1.setVisible(true);lyr_DJI_20240710123751_0011_D_smooth_2.setVisible(true);lyr_DJI_20240710123659_0010_D_smooth_3.setVisible(true);lyr_DJI_20240710123605_0009_D_smooth_4.setVisible(true);lyr_DJI_20240710123400_0008_D_smooth_5.setVisible(true);lyr_DJI_20240710123305_0007_D_smooth_6.setVisible(true);lyr_DJI_20240710123212_0006_D_smooth_7.setVisible(true);lyr_DJI_20240710123120_0005_D_smooth_8.setVisible(true);lyr_DJI_20240710123027_0004_D_smooth_9.setVisible(true);lyr_DJI_20240710122937_0003_D_smooth_10.setVisible(true);lyr_DJI_20240710122929_0002_D_smooth_11.setVisible(true);lyr_DJI_20240710130635_0021_D_smooth_12.setVisible(true);lyr_DJI_20240710130508_0020_D_smooth_13.setVisible(true);lyr_DJI_20240710130434_0019_D_smooth_14.setVisible(true);lyr_DJI_20240710130403_0018_D_smooth_15.setVisible(true);lyr_DJI_20240710124515_0016_D_smooth_16.setVisible(true);lyr_DJI_20240710124348_0015_D_smooth_17.setVisible(true);lyr_DJI_20240710124031_0014_D_smooth_18.setVisible(true);lyr_DJI_20240710123936_0013_D_smooth_19.setVisible(true);lyr_DJI_20240710123936_0013_D_smooth_binary_20.setVisible(true);lyr_DJI_20240710123843_0012_D_smooth_binary_21.setVisible(true);lyr_DJI_20240710123751_0011_D_smooth_binary_22.setVisible(true);lyr_DJI_20240710123659_0010_D_smooth_binary_23.setVisible(true);lyr_DJI_20240710123605_0009_D_smooth_binary_24.setVisible(true);lyr_DJI_20240710123400_0008_D_smooth_binary_25.setVisible(true);lyr_DJI_20240710123305_0007_D_smooth_binary_26.setVisible(true);lyr_DJI_20240710123212_0006_D_smooth_binary_27.setVisible(true);lyr_DJI_20240710123120_0005_D_smooth_binary_28.setVisible(true);lyr_DJI_20240710123027_0004_D_smooth_binary_29.setVisible(true);lyr_DJI_20240710122937_0003_D_smooth_binary_30.setVisible(true);lyr_DJI_20240710122929_0002_D_smooth_binary_31.setVisible(true);lyr_DJI_20240710130635_0021_D_smooth_binary_32.setVisible(true);lyr_DJI_20240710130508_0020_D_smooth_binary_33.setVisible(true);lyr_DJI_20240710130434_0019_D_smooth_binary_34.setVisible(true);lyr_DJI_20240710130403_0018_D_smooth_binary_35.setVisible(true);lyr_DJI_20240710124515_0016_D_smooth_binary_36.setVisible(true);lyr_DJI_20240710124348_0015_D_smooth_binary_37.setVisible(true);lyr_DJI_20240710124031_0014_D_smooth_binary_38.setVisible(true);lyr_operational_plots_39.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,group_Raw,group_Binary,lyr_operational_plots_39];
lyr_operational_plots_39.set('fieldAliases', {'plot_id': 'plot_id', 'Area (ha)': 'Area (ha)', 'Depth': 'Depth', });
lyr_operational_plots_39.set('fieldImages', {'plot_id': 'TextEdit', 'Area (ha)': 'TextEdit', 'Depth': 'TextEdit', });
lyr_operational_plots_39.set('fieldLabels', {'plot_id': 'no label', 'Area (ha)': 'no label', 'Depth': 'no label', });
lyr_operational_plots_39.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
var APP_DATA = {
  "scenes": [
    {
      "id": "0-fachada",
      "name": "Fachada",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0.059072884274884885,
        "pitch": -0.0018379794486804713,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": 0.04320168179780026,
          "pitch": 0.18839137782115856,
          "rotation": 0,
          "target": "1-entrada"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.076528019400847,
          "pitch": -0.1857562334332865,
          "title": "Antiga Locação",
          "text": "Rua Dona Maricas, 92, Centro, Muriaé-MG"
        }
      ]
    },
    {
      "id": "1-entrada",
      "name": "Entrada",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 2.0004158349781322,
        "pitch": 0.0422735273196615,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -3.0171905004894572,
          "pitch": 0.19779964488456336,
          "rotation": 0,
          "target": "2-pia-batismal"
        },
        {
          "yaw": -1.5434372999465396,
          "pitch": 0.37341092326038705,
          "rotation": 0,
          "target": "0-fachada"
        },
        {
          "yaw": 1.4815082121557026,
          "pitch": 0.12468208757022126,
          "rotation": 0,
          "target": "10-corredor-1"
        },
        {
          "yaw": 2.4294232420613415,
          "pitch": 0.17333988987608961,
          "rotation": 0,
          "target": "20-banheiro-masc"
        },
        {
          "yaw": 2.146059515595109,
          "pitch": 0.1339384224764082,
          "rotation": 0,
          "target": "19-banheiro-fem"
        },
        {
          "yaw": 1.9890589155339828,
          "pitch": 0.10565659870515454,
          "rotation": 0,
          "target": "21-pne"
        },
        {
          "yaw": 1.3695590232433066,
          "pitch": 0.12852342227085245,
          "rotation": 0,
          "target": "13-cozinha"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-pia-batismal",
      "name": "Pia Batismal",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.42635000711022286,
          "pitch": 0.26335703803852084,
          "rotation": 0,
          "target": "1-entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-rua-lateral-1",
      "name": "Rua Lateral 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0.0005161188960673968,
        "pitch": 0.01286585614075797,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -0.6577039589263709,
          "pitch": -0.01218011499137539,
          "rotation": 0,
          "target": "0-fachada"
        },
        {
          "yaw": 0.9786435105347593,
          "pitch": 0.1148774915321713,
          "rotation": 0,
          "target": "7-sacramental-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-rua-lateral-2",
      "name": "Rua Lateral 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 2.7470225269708077,
        "pitch": -0.0225772753474196,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": 1.7841376099876847,
          "pitch": -0.053517471111401704,
          "rotation": 0,
          "target": "3-rua-lateral-1"
        },
        {
          "yaw": -1.587848720306825,
          "pitch": 0.0785174974139693,
          "rotation": 0,
          "target": "5-rua-lateral-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-rua-lateral-3",
      "name": "Rua Lateral 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 2.4508497288915017,
        "pitch": -0.009412267787858752,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": 1.5599729720068254,
          "pitch": 0.12446361044347398,
          "rotation": 0,
          "target": "4-rua-lateral-2"
        },
        {
          "yaw": 1.8176376577298177,
          "pitch": -0.055940605340248695,
          "rotation": 0,
          "target": "3-rua-lateral-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-sacramental-1",
      "name": "Sacramental 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -0.048026155399178094,
        "pitch": 0.13049654085633478,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -2.185932910843807,
          "pitch": 0.17661437029596883,
          "rotation": 0,
          "target": "10-corredor-1"
        },
        {
          "yaw": 0.02010949421042696,
          "pitch": 0.247834596114199,
          "rotation": 0,
          "target": "7-sacramental-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-sacramental-2",
      "name": "Sacramental 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -0.030829847098610585,
        "pitch": 0.07342736465683686,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -0.01566078899352874,
          "pitch": 0.10395999601779593,
          "rotation": 0,
          "target": "8-sacramental-3"
        },
        {
          "yaw": -3.12784246582455,
          "pitch": 0.17405281924025218,
          "rotation": 0,
          "target": "6-sacramental-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-sacramental-3",
      "name": "Sacramental 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.9243449745941987,
        "pitch": -0.09815609326878061,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -2.9416381334049184,
          "pitch": 0.21733279273932027,
          "rotation": 0,
          "target": "7-sacramental-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-zeladoria",
      "name": "Zeladoria",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 1.5117452452036204,
        "pitch": 0.2030459597042018,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": 1.3471605982012473,
          "pitch": 0.3694463003999271,
          "rotation": 0,
          "target": "10-corredor-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-corredor-1",
      "name": "Corredor 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.060122358119843,
        "pitch": 0.13883161274252132,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": 2.1825286658954344,
          "pitch": 0.30637266376280436,
          "rotation": 0,
          "target": "6-sacramental-1"
        },
        {
          "yaw": -0.7878052569484648,
          "pitch": 0.39973652294364115,
          "rotation": 0,
          "target": "9-zeladoria"
        },
        {
          "yaw": -1.828392595832259,
          "pitch": 0.20254325594040168,
          "rotation": 0,
          "target": "1-entrada"
        },
        {
          "yaw": 1.6051405087064197,
          "pitch": 0.22275021307617138,
          "rotation": 0,
          "target": "11-corredor-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-corredor-2",
      "name": "Corredor 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -3.011788373161382,
        "pitch": 0.09392532202536508,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -2.6775590477986846,
          "pitch": 0.20313115759230982,
          "rotation": 0,
          "target": "14-sala-03"
        },
        {
          "yaw": -3.0134305595432807,
          "pitch": 0.1290597038798893,
          "rotation": 0,
          "target": "10-corredor-1"
        },
        {
          "yaw": -1.423281971787766,
          "pitch": 0.31509762825276155,
          "rotation": 0,
          "target": "15-sala-04"
        },
        {
          "yaw": 0.13467582823477642,
          "pitch": 0.32893654544151474,
          "rotation": 0,
          "target": "12-corredor-3"
        },
        {
          "yaw": -0.2161323350353186,
          "pitch": 0.2227080436012514,
          "rotation": 0,
          "target": "16-sala-05"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-corredor-3",
      "name": "Corredor 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0.3208722604097929,
        "pitch": 0.042273527319652615,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": 0.3165875339233981,
          "pitch": 0.1850908043415842,
          "rotation": 0,
          "target": "11-corredor-2"
        },
        {
          "yaw": 0.9309738190697487,
          "pitch": 0.17984090501706262,
          "rotation": 0,
          "target": "16-sala-05"
        },
        {
          "yaw": 2.6374450589159686,
          "pitch": 0.2190955634139371,
          "rotation": 0,
          "target": "17-sala-06"
        },
        {
          "yaw": -2.770767271101281,
          "pitch": 0.22115596707817886,
          "rotation": 0,
          "target": "18-sala-07"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-cozinha",
      "name": "Cozinha",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.37744801506145,
        "pitch": 0.1514007325662341,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -2.180817760626491,
          "pitch": 0.2700725867188769,
          "rotation": 0,
          "target": "10-corredor-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-sala-03",
      "name": "Sala 03",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -1.5073359578315966,
        "pitch": 0.05306736840711501,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -2.1488972581810355,
          "pitch": 0.2609722848624525,
          "rotation": 0,
          "target": "11-corredor-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-sala-04",
      "name": "Sala 04",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 2.2135306461952293,
        "pitch": 0.13049654085633833,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": 2.017472841524608,
          "pitch": 0.26884938678197123,
          "rotation": 0,
          "target": "11-corredor-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-sala-05",
      "name": "Sala 05",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.202665193512912,
        "pitch": 0.13536178057344195,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -2.2618323253905306,
          "pitch": 0.25427692740896646,
          "rotation": 0,
          "target": "11-corredor-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-sala-06",
      "name": "Sala 06",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 1.065505200693046,
        "pitch": 0.06783815056039799,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": 0.913581481105842,
          "pitch": 0.23241647892340644,
          "rotation": 0,
          "target": "12-corredor-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-sala-07",
      "name": "Sala 07",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0.2931316439647791,
        "pitch": 0.11154632097593975,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": 0.7221763124686564,
          "pitch": 0.17030421524100703,
          "rotation": 0,
          "target": "12-corredor-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-banheiro-fem",
      "name": "Banheiro Fem",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -0.07581236441703965,
        "pitch": 0.04313644827724161,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -2.357459690950332,
          "pitch": 0.32680938657322756,
          "rotation": 0,
          "target": "1-entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-banheiro-masc",
      "name": "Banheiro Masc",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.747213004354565,
        "pitch": 0.2066047975942844,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -0.23162649290783044,
          "pitch": 0.21337112871480812,
          "rotation": 0,
          "target": "0-fachada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-pne",
      "name": "PNE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 2.0734784548516014,
        "pitch": 0.21249494605426023,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -2.6867742610397816,
          "pitch": 0.2742181537374613,
          "rotation": 0,
          "target": "1-entrada"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Muriaé (Nova Locação)",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};

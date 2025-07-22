/*
Creamos el nuevo directorio y la clase y agregamos el codigo de la interfaz IUbicacionChacra.
Esta export para que pueda ser accesible desde otros archivos
Cada propiedad (provincia; barrio; etc) de esta interfaz tiene un tipo de dato específico.
*/

//DATOS GENERALES
export interface IUbicacionChacra {
  provincia: string;
  canton: string;
  parroquia: string;
  comunidad: string;
  barrio: string;
  coordenadas: {
    latitud: string;
    longitud: string;
    altura: string;
  };
  zona: string;
  clave: string;
}
export interface ITipoTerreno {
  tipTerreno: string;
  terrenosRiego: string;
  areaTerreno: string;
  perimetroTotal?: string;
  metroSembrado?: string;
  nivelInclinacion?: string;
}
//SOCIO CULTURAL POLITICA
export interface IModeloDeObjetoOpciones {
  label: string;
  value: string;
  puntaje: number;
}
export interface IPreg224 {
  nombre: string;
  lugar: string;
  Parentesco: string;
  pertOrganz: string;
  value: string;
  puntaje: number;
}
export interface IFaseLunar {
  lunaNuevaTierna: string;
  lunaCuartoCreciente: string;
  lunaLlena: string;
  lunaMenguante: string;
}
export interface IPlantasCura {
  plantaMedic: {
    label: string;
    value: string;
    puntaje: number;
    disable: boolean;
  };
  cura: string;
}
export interface ISemillasNativ {
  label: string;
  value: string;
  puntaje: number;
  resultado: number;
  disable: boolean;
}

export interface IRespuestasOpcionales {
  label: string;
  value: string;
}
//ECOLOGICA

export interface ILotes {
  perimetro: string;
  metros: string;
}
export interface IPreg2410Producto {
  producto: {
    label: string;
    value: string;
    puntaje: number;
    disable: boolean;
  };
  area: string;
  medida: string;
  cantidad: string;
  semillaOPlantula: string;
  tiempoSiembra: string;
  tiempoCosecha: string;
  puntaje: number;
  porcentaje: number;
}

export interface IPreg2410Opcional {
  producto: string;
  area: string;
  medida: string;
  cantidad: string;
  semillaOPlantula: string;
  tiempoSiembra: string;
  tiempoCosecha: string;
  puntaje: number;
  porcentaje: number;
}
export interface IPreg2423 {
  especie: { label: string; value: string; puntaje: number };
  pequenios: number;
  adultos: number;
  cantidadEsp: number;
  porcentajeEsp: number;
  disable: boolean;
}
export interface ICual {
  cual: { label: string; value: string; puntaje: number; disable: boolean };
  cantidad: string;
  frecuencia: string;
}

export interface IOpciones {
  label: string | null;
  value: number | null;
  puntaje: number | null;
  disable?: boolean | null;
}
export interface IComercializacion {
  productos: IOpciones;
  ingresosSemanales: number;
  pieFinca: number;
  feria: number;
  canasta: number;
  autoconsumo: number;
  trueque: number;
}
export interface IProcesados {
  productos: IOpciones;
  otrosProductos: string;
  prodUtiliza: string;
  insumosFuera: string;
}
export interface IReinvierteParcela {
  productos: IOpciones;
  porcentaje: number | null;
}

export interface IConsumidoresIdentificados {
  nombreConsumidor: string;
  lugarProcedencia: string;
  productoCompra: { label: string; value: string; puntaje: number };
}

export interface IProductor {
  datosVeedor: {
    nombre: string;
    cedula: string;
    organizacionPert: string;
  };
  datosGenerales: {
    nombre: string;
    edad: string;
    cedula: string;
    fecha: string;
    instruccion: string;
    jefeHogar: string;
    numHombres: number;
    numMujeres: number;
    numHijos: number;
    telefono: string;
    correo: string;
    ubiChacra: IUbicacionChacra[];
    organizacionPert: string;
    aniosCultiv: string;
    numVeedurias: string;
    produtCertif: string;
    tiposTerrenos: ITipoTerreno[];
    totalMetrosCuadrados: number;
  };
  dimensionEcologica: {
    nombre: string;
    puntajeTotal: number;
    preg241: {
      nombre: string;
      valor: number;
      puntos: number;
      respuesta: IModeloDeObjetoOpciones;
    };
    preg242: {
      nombre: string;
      puntos: number;
      totalPeri: number;
      totalMetroSembrado: number;
      porcentajeMetrSembrados: number;
    };
    preg243: {
      nombre: string;
      puntos: number;
      respuesta: IModeloDeObjetoOpciones;
      subpreg243: {
        nombre: string;
        respuesta: IModeloDeObjetoOpciones;
      };
      subsistemasSuelo: {
        nombre: string;
      };
    };
    preg244: {
      nombre: string;
      puntos: number;
      respuesta: IModeloDeObjetoOpciones;
      subPreg244: {
        nombre: string;
        items: [
          {
            nombre: string;
            respuesta: IModeloDeObjetoOpciones;
          },
          {
            nombre: string;
            respuesta: IModeloDeObjetoOpciones;
          },
          {
            nombre: string;
            respuesta: IModeloDeObjetoOpciones;
          },
          {
            nombre: string;
            respuesta: IModeloDeObjetoOpciones;
          },
          {
            nombre: string;
            respuesta: IModeloDeObjetoOpciones;
          },
          {
            nombre: string;
            respuesta: IModeloDeObjetoOpciones;
          },
          {
            nombre: string;
            respuesta: IModeloDeObjetoOpciones;
          },
          {
            nombre: string;
            respuesta: IModeloDeObjetoOpciones;
          },
          {
            nombre: string;
            respuesta: IModeloDeObjetoOpciones;
          },
          {
            nombre: string;
            respuesta: IModeloDeObjetoOpciones;
          }
        ];
      };
    };
    preg245: {
      nombre: string;
      puntos: number;
      respuesta: IModeloDeObjetoOpciones;
      subPreg245: {
        nombre: string;
        items: [
          {
            nombre: string;
            respuesta: IModeloDeObjetoOpciones;
          },
          {
            nombre: string;
            respuesta: IModeloDeObjetoOpciones;
          },
          {
            nombre: string;
            respuesta: IModeloDeObjetoOpciones;
          }
        ];
      };
    };
    preg246: {
      nombre: string;
      puntos: number;
      items: [
        {
          nombre: string;
          respuesta: IModeloDeObjetoOpciones;
        },
        {
          nombre: string;
          respuesta: IModeloDeObjetoOpciones;
        },
        {
          nombre: string;
          respuesta: IModeloDeObjetoOpciones;
        },
        {
          nombre: string;
          respuesta: IModeloDeObjetoOpciones;
        },
        {
          nombre: string;
          respuesta: IModeloDeObjetoOpciones;
        },
        {
          nombre: string;
          respuesta: IModeloDeObjetoOpciones;
        },
        {
          nombre: string;
          respuesta: IModeloDeObjetoOpciones;
        },
        {
          nombre: string;
          respuesta: IModeloDeObjetoOpciones;
        }
      ];
      subPreg246: {
        nombre: string;
        respuesta: IModeloDeObjetoOpciones;
      };
    };
    preg247: {
      nombre: string;
      puntos: number;
      respuesta: string;
      subPreg2471: {
        nombre: string;
        cantidad: number;
        medidaDePeso: IModeloDeObjetoOpciones;
        tiempo: IModeloDeObjetoOpciones;
      };
      subPreg2472: {
        nombre: string;
        cuantoAboCompra: IModeloDeObjetoOpciones;
        medidaDePeso: IModeloDeObjetoOpciones;
      };
    };
    preg248: {
      nombre: string;
      puntos: number;
      cual: ICual[];
    };
    preg249: {
      nombre: string;
      puntos: number;
      respuesta: IModeloDeObjetoOpciones;
      subPreg249: {
        nombre: string;
        respuesta: IModeloDeObjetoOpciones;
      };
    };

    preg2410: {
      nombre: string;
      puntos: number;
      areaProductosSembrados: number;
      hortalizas: IPreg2410Producto[];
      frutas: IPreg2410Producto[];
      pastos: IPreg2410Producto[];
      cerealesYSeudocere: IPreg2410Producto[];
      plantasMedicin: IPreg2410Producto[];
      otrosOpcional: IPreg2410Opcional[];
      hortalizasTotal: number;
      frutasTotal: number;
      pastosTotal: number;
      cerealeTotal: number;
      planMedTotal: number;
      opcionalesTotal: number;
      metrosHortaliza: number;
      metrosFrutas: number;
      metrosPastos: number;
      metrosCereales: number;
      metrosPlantasMed: number;
      metrosOpcionales: number;
      totalProductos: number;
      totalPorcentaje: number;
    };
    preg2411: {
      nombre: string;
      puntos: number;
      respuesta: IModeloDeObjetoOpciones;
    };
    preg2412: {
      nombre: string;
      puntos: number;
      respuesta: IModeloDeObjetoOpciones;
    };
    preg2413: {
      nombre: string;
      puntos: number;
      respuesta: IModeloDeObjetoOpciones;
    };
    preg2414: {
      nombre: string;
      puntos: number;
      respuesta: IModeloDeObjetoOpciones;
    };

    preg2415: {
      nombre: string;
      puntos: number;
      respuesta: IModeloDeObjetoOpciones;
    };

    preg2416: {
      nombre: string;
      puntos: number;
      respuesta: IModeloDeObjetoOpciones;
      subPreg2416: {
        nombre: string;

        respuesta: IModeloDeObjetoOpciones;
      };
      subSubPreg2416: {
        nombre: string;
        respuesta: IModeloDeObjetoOpciones;
      };
    };
    preg2417: {
      nombre: string;
      puntos: number;
      respuesta: IModeloDeObjetoOpciones;
    };
    preg2418: {
      nombre: string;
      puntos: number;
      respuesta: IModeloDeObjetoOpciones;
      subPreg2418: {
        nombre: string;
        respuesta: IModeloDeObjetoOpciones;
      };
    };
    preg2419: {
      nombre: string;
      puntos: number;
      items: [
        {
          nombre: string;
          respuesta: IModeloDeObjetoOpciones;
        },
        {
          nombre: string;
          respuesta: IModeloDeObjetoOpciones;
        },
        {
          nombre: string;
          respuesta: IModeloDeObjetoOpciones;
        },
        {
          nombre: string;
          respuesta: IModeloDeObjetoOpciones;
        },
        {
          nombre: string;
          respuesta: IModeloDeObjetoOpciones;
        }
      ];
    };
    preg2420: {
      nombre: string;
      puntos: number;
      items: [
        {
          nombre: string;
          respuesta: IModeloDeObjetoOpciones;
        },
        {
          nombre: string;
          respuesta: IModeloDeObjetoOpciones;
        },
        {
          nombre: string;
          respuesta: IModeloDeObjetoOpciones;
        },
        {
          nombre: string;
          respuesta: IModeloDeObjetoOpciones;
        },
        {
          nombre: string;
          respuesta: IModeloDeObjetoOpciones;
        },
        {
          nombre: string;
          respuesta: IModeloDeObjetoOpciones;
        }
      ];
    };
    preg2421: {
      nombre: string;
      puntos: number;
      respuesta: IModeloDeObjetoOpciones;
    };
    preg2422: {
      nombre: string;
      puntos: number;
      respuesta: IModeloDeObjetoOpciones;
    };
    preg2423: {
      nombre: string;

      puntos: number;
      especieA: IPreg2423[];
      cantidadTotal: number;
    };
    preg2424: {
      nombre: string;
      puntos: number;
      rGranos: IModeloDeObjetoOpciones;
      rPastos: IModeloDeObjetoOpciones;
      rRestos: IModeloDeObjetoOpciones;
    };

    preg2425: {
      nombre: string;
      puntos: number;
      items: [
        {
          nombre: string;
          respuesta: IModeloDeObjetoOpciones;
        },
        {
          nombre: string;
          respuesta: IModeloDeObjetoOpciones;
        },
        {
          nombre: string;
          respuesta: IModeloDeObjetoOpciones;
        },
        {
          nombre: string;
          respuesta: IModeloDeObjetoOpciones;
        }
      ];
      subPreg2425: {
        nombre: string;
        respuesta: string;
      };
    };
    preg2426: {
      nombre: string;
      puntos: number;
      respuesta: IModeloDeObjetoOpciones;
    };
    preg2427: {
      nombre: string;
      puntos: number;
      respuesta: IModeloDeObjetoOpciones;
    };
    preg2428: {
      nombre: string;
      puntos: number;
      respuesta: IModeloDeObjetoOpciones;
    };
    preg2429: {
      nombre: string;
      puntos: number;
      respuesta: IModeloDeObjetoOpciones;
    };
    encabezadoPreg2430: {
      nombre: string;
      puntos: number;
      encaPreg2430: {
        nombre: string;

        respuesta: IModeloDeObjetoOpciones;
      };
      subPregEnca2430: {
        nombre: string;

        respuesta: IModeloDeObjetoOpciones;
      };
    };

    preg2430: {
      nombre: string;
      puntos: number;
      respuesta: IModeloDeObjetoOpciones;
    };
    preg2431: {
      nombre: string;
      puntos: number;
      items: [
        {
          nombre: string;
          respuesta: IModeloDeObjetoOpciones;
        },
        {
          nombre: string;
          respuesta: IModeloDeObjetoOpciones;
        }
      ];
    };
    preg2432: {
      nombre: string;
      puntos: number;
      respuesta: IModeloDeObjetoOpciones;
      subPreg2432: {
        nombre: string;
        respuesta: IModeloDeObjetoOpciones;
      };
    };
    preg2433: {
      nombre: string;
      puntos: number;
      respuesta: IModeloDeObjetoOpciones;
    };
    preg2434: {
      nombre: string;
      puntos: number;
      respuesta: IModeloDeObjetoOpciones;
    };
    preg2435: {
      nombre: string;
      puntos: number;
      respuesta: IModeloDeObjetoOpciones;
    };
    preg2436: {
      nombre: string;
      puntos: number;
      respuesta: IModeloDeObjetoOpciones;
    };
    preg2437: {
      nombre: string;
      puntos: number;
      respuesta: IModeloDeObjetoOpciones;
    };
    preg2438: {
      nombre: string;
      puntos: number;
      respuesta: IModeloDeObjetoOpciones;
    };
    preg2439: {
      nombre: string;
      puntos: number;
      respuesta: IModeloDeObjetoOpciones;
    };
    preg2440: {
      nombre: string;
      puntos: number;
      respuesta: IModeloDeObjetoOpciones;
    };
    preg2441: {
      nombre: string;
      puntos: number;
      respuesta: IModeloDeObjetoOpciones;
    };
  };
  dimensionEconomica: {
    nombre: string;
    puntajeTotal: number;
    preg251: {
      nombre: string;
      puntos: number;
      respuesta: IOpciones;
      subpreg: {
        nombre: string;
        respuesta: IOpciones;
        porque: string;
      };
    };
    preg252: {
      nombre: string;
      puntos: number;
      rubros: IComercializacion[];
    };
    preg253: {
      nombre: string;
      puntos: number;
      prodProcesados: IProcesados[];
      subpreg: {
        nombre: string;
        respuesta: IOpciones;
      };
      subpreg2: {
        nombre: string;
        respuesta: IOpciones;
      };
    };
    preg254: {
      nombre: string;
      puntos: number;
      respuesta: IOpciones;
    };
    preg255: {
      nombre: string;
      puntos: number;
      canastaFamiliar: IReinvierteParcela[];
      Insumos: IReinvierteParcela[];
    };
    preg256: {
      nombre: string;
      puntos: number;
      consumidoresIdentificados: IConsumidoresIdentificados[];
    };
  };
  dimensionSocialCulturalPolitica: {
    dimensionPolitica21: {
      nombre: string;
      puntajeTotal: number;
      preg211: {
        nombre: string;
        valor: number;
        puntos: number;
        respuesta: IModeloDeObjetoOpciones;
      };
      preg212: {
        nombre: string;
        valor: number;
        puntos: number;
        respuesta: IModeloDeObjetoOpciones;
      };
      preg213: {
        nombre: string;
        puntos: number;
        items: [
          {
            nombre: string;
            respuesta: IModeloDeObjetoOpciones;
          },
          {
            nombre: string;
            respuesta: IModeloDeObjetoOpciones;
          },
          {
            nombre: string;
            respuesta: IModeloDeObjetoOpciones;
          },
          {
            nombre: string;
            respuesta: IModeloDeObjetoOpciones;
          },
          {
            nombre: string;
            respuesta: IModeloDeObjetoOpciones;
          }
        ];
      };
      preg214: {
        nombre: string;
        puntos: number;

        items: [
          {
            nombre: string;
            respuesta: IModeloDeObjetoOpciones;
          },
          {
            nombre: string;
            respuesta: IModeloDeObjetoOpciones;
          }
        ];
      };

      preg215: {
        nombre: string;
        valor: number;
        puntos: number;
        respuesta: IModeloDeObjetoOpciones;
      };
    };
    //Dimencion política organizativa
    dimensionSocioOrganizativa22: {
      nombre: string;
      puntajeTotal: number;
      preg221: {
        nombre: string;
        puntos: number;

        items: [
          {
            nombre: string;
            respuesta: IModeloDeObjetoOpciones;
          },
          {
            nombre: string;
            respuesta: IModeloDeObjetoOpciones;
          },
          {
            nombre: string;
            respuesta: IModeloDeObjetoOpciones;
          },
          {
            nombre: string;
            respuesta: IModeloDeObjetoOpciones;
          },
          {
            nombre: string;
            respuesta: IModeloDeObjetoOpciones;
          },
          {
            nombre: string;
            respuesta: IModeloDeObjetoOpciones;
          }
        ];
      };
      preg222: {
        nombre: string;
        Puntos: number;
        valor: number;
        respuesta: IModeloDeObjetoOpciones;
        subPreg222: {
          respuesta: IModeloDeObjetoOpciones;
        };
      };

      preg223: {
        nombre: string;
        puntos: number;
        items: [
          {
            nombre: string;
            respuesta: IModeloDeObjetoOpciones;
          },
          {
            nombre: string;
            respuesta: IModeloDeObjetoOpciones;
          },
          {
            nombre: string;
            respuesta: IModeloDeObjetoOpciones;
          },
          {
            nombre: string;
            respuesta: IModeloDeObjetoOpciones;
          }
        ];
      };
      preg224: {
        puntos: number;
        incentivados: IPreg224[];
      };
      preg225: {
        nombre: string;
        puntos: number;
        items: [
          {
            nombre: string;
            respuesta: IModeloDeObjetoOpciones;
          },
          {
            nombre: string;
            respuesta: IModeloDeObjetoOpciones;
          },
          {
            nombre: string;
            respuesta: IModeloDeObjetoOpciones;
          },
          {
            nombre: string;
            respuesta: IModeloDeObjetoOpciones;
          },
          {
            nombre: string;
            respuesta: IModeloDeObjetoOpciones;
          },
          {
            nombre: string;
            respuesta: IModeloDeObjetoOpciones;
          },
          {
            nombre: string;
            respuesta: IModeloDeObjetoOpciones;
          },
          {
            nombre: string;
            respuesta: IModeloDeObjetoOpciones;
          },
          {
            nombre: string;
            respuesta: IModeloDeObjetoOpciones;
          },
          {
            nombre: string;
            respuesta: IModeloDeObjetoOpciones;
          }
        ];
      };

      preg226: {
        nombre: string;
        puntos: number;

        items: [
          {
            nombre: string;
            respuesta: IModeloDeObjetoOpciones;
          },
          {
            nombre: string;
            respuesta: IModeloDeObjetoOpciones;
          },
          {
            nombre: string;
            respuesta: IModeloDeObjetoOpciones;
          },
          {
            nombre: string;
            respuesta: IModeloDeObjetoOpciones;
          },
          {
            nombre: string;
            respuesta: IModeloDeObjetoOpciones;
          },
          {
            nombre: string;
            respuesta: IModeloDeObjetoOpciones;
          },
          {
            nombre: string;
            respuesta: IModeloDeObjetoOpciones;
          },
          {
            nombre: string;
            respuesta: IModeloDeObjetoOpciones;
          }
        ];
      };
      preg227: string;
      preg228: {
        nombre: string;
        puntos: number;
        respuesta: IModeloDeObjetoOpciones;
        subPreg228: {
          nombre: string;
          respuesta: IModeloDeObjetoOpciones;
        };
      };
    };
    //DIMENSION CULTURAL
    dimensionCultural23: {
      nombre: string;
      puntajeTotal: number;
      preg231: {
        nombre: string;
        puntos: number;
        respuesta: IModeloDeObjetoOpciones;
        subPregunta231: {
          respuesta: IModeloDeObjetoOpciones;
        };
        faseLunar: IFaseLunar[];
      };
      preg232: {
        nombre: string;
        valor: number;
        puntos: number;
        respuesta: IModeloDeObjetoOpciones;
      };
      preg233: {
        nombre: string;
        puntos: number;
        plantasC: IPlantasCura[];
      };
      preg234: {
        nombre: string;
        puntos: number;
        respuesta: ISemillasNativ[];
      };
      preg234Opcional: {
        nombre: string;
        respuesta: ISemillasNativ[];
      };

      preg235: {
        nombre: string;
        puntos: number;
        respuesta: IModeloDeObjetoOpciones;
      };
      preg236: {
        nombre: string;
        puntos: number;
        items: [
          {
            nombre: string;
            respuesta: IModeloDeObjetoOpciones;
          },
          {
            nombre: string;
            respuesta: IModeloDeObjetoOpciones;
          },
          {
            nombre: string;
            respuesta: IModeloDeObjetoOpciones;
          }
        ];
      };
    };
  };
}

export interface IProductorModel extends IProductor {
  id: string;
}

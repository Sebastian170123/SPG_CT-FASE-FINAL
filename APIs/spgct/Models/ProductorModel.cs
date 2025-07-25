using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace spgct.Models
{
    public class ProductorModel
    {
    }

    public class IUbicacionChacra
    {
        [BsonElement("provincia")]
        public string? Provincia { get; set; }
        [BsonElement("canton")]
        public string? Canton { get; set; }
        [BsonElement("parroquia")]
        public string? Parroquia { get; set; }
        [BsonElement("comunidad")]
        public string? Comunidad { get; set; }
        [BsonElement("barrio")]
        public string? Barrio { get; set; }
        [BsonElement("coordenadas")]
        public Coordenada? Coordenadas { get; set; }
        [BsonElement("zona")]
        public string? Zona { get; set; }
        [BsonElement("clave")]
        public string? Clave { get; set; }
    }
    public class Coordenada
    {
        [BsonElement("latitud")]
        public string? Latitud { get; set; }
        [BsonElement("longitud")]
        public string? Longitud { get; set; }
        [BsonElement("altura")]
        public string? Altura { get; set; }

    }

    public class ITipoTerreno
    {
        [BsonElement("tipTerreno")]
        public string? TipTerreno { get; set; }
        [BsonElement("terrenosRiego")]
        public string? TerrenosRiego { get; set; }
        [BsonElement("areaTerreno")]
        public string? AreaTerreno { get; set; }
        [BsonElement("perimetroTotal")]
        public string? PerimetroTotal { get; set; }
        [BsonElement("metroSembrado")]
        public string? MetroSembrado { get; set; }
        [BsonElement("nivelInclinacion")]
        public string? NivelInclinacion { get; set; }

    }


    public class IModeloDeObjetoOpciones
    {
        [BsonElement("label")]
        public string? Label { get; set; }
        [BsonElement("value")]
        public string? Value { get; set; }
        [BsonElement("puntaje")]
        public double Puntaje { get; set; }
        [BsonElement("disable")]
        public bool? Disable { get; set; }

    }

    public class IPreg224
    {
        [BsonElement("nombre")]
        public string? Nombre { get; set; }
        [BsonElement("lugar")]
        public string? Lugar { get; set; }
        [BsonElement("Parentesco")]
        public string? Parentesco { get; set; }
        [BsonElement("pertOrganz")]
        public string? PertOrganz { get; set; }
        [BsonElement("value")]
        public string? Value { get; set; }
        [BsonElement("puntaje")]
        public double Puntaje { get; set; }

    }

    public class IPlantasCura
    {
        //
        [BsonElement("plantaMedic")]
        public PlantaMedic? PlantaMedic { get; set; }
        [BsonElement("cura")]
        public string? Cura { get; set; }

    }

    public class PlantaMedic
    {
        [BsonElement("label")]
        public string? Label { get; set; }
        [BsonElement("value")]
        public string? Value { get; set; }
        [BsonElement("puntaje")]
        public double Puntaje { get; set; }
        [BsonElement("disable")]
        public bool Disable { get; set; }

    }

    public class ISemillasNativ
    {
        [BsonElement("label")]
        public string? Label { get; set; }
        [BsonElement("value")]
        public string? Value { get; set; }
        [BsonElement("puntaje")]
        public double Puntaje { get; set; }
        [BsonElement("resultado")]
        public int Resultado { get; set; }
        [BsonElement("disable")]
        public bool Disable { get; set; }

    }

    public class IRespuestasOpcionales
    {
        [BsonElement("label")]
        public string? Label { get; set; }
        [BsonElement("value")]
        public string? Value { get; set; }

    }

    public class ILotes
    {
        [BsonElement("perimetro")]
        public string? Perimetro { get; set; }
        [BsonElement("metros")]
        public string? Metros { get; set; }

    }

    public class IPreg2410Producto
    {
        //
        [BsonElement("producto")]
        public Producto? Producto { get; set; }
        [BsonElement("area")]
        public string? Area { get; set; }
        [BsonElement("medida")]
        public string? Medida { get; set; }
        [BsonElement("cantidad")]
        public string? Cantidad { get; set; }
        [BsonElement("semillaOPlantula")]
        public string? SemillaOPlantula { get; set; }
        [BsonElement("tiempoSiembra")]
        public string? TiempoSiembra { get; set; }
        [BsonElement("tiempoCosecha")]
        public string? TiempoCosecha { get; set; }
        [BsonElement("puntaje")]
        public double Puntaje { get; set; }
        [BsonElement("porcentaje")]
        public double Porcentaje { get; set; }

    }

    public class Producto
    {
        [BsonElement("label")]
        public string? Label { get; set; }
        [BsonElement("value")]
        public string? Value { get; set; }
        [BsonElement("puntaje")]
        public double Puntaje { get; set; }
        [BsonElement("disable")]
        public bool Disable { get; set; }

    }


    public class IPreg2410Opcional
    {
        [BsonElement("producto")]
        public string? Producto { get; set; }
        [BsonElement("area")]
        public string? Area { get; set; }
        [BsonElement("medida")]
        public string? Medida { get; set; }
        [BsonElement("cantidad")]
        public string? Cantidad { get; set; }
        [BsonElement("semillaOPlantula")]
        public string? SemillaOPlantula { get; set; }
        [BsonElement("tiempoSiembra")]
        public string? TiempoSiembra { get; set; }
        [BsonElement("tiempoCosecha")]
        public string? TiempoCosecha { get; set; }
        [BsonElement("puntaje")]
        public int Puntaje { get; set; }
        [BsonElement("porcentaje")]
        public int Porcentaje { get; set; }

    }

    public class IPreg2423
    {
        [BsonElement("especie")]
        public Especie? Especie { get; set; }
        [BsonElement("pequenios")]
        public int Pequenios { get; set; }
        [BsonElement("adultos")]
        public int Adultos { get; set; }
        [BsonElement("cantidadEsp")]
        public int CantidadEsp { get; set; }
        [BsonElement("porcentajeEsp")]
        public double PorcentajeEsp { get; set; }
        [BsonElement("disable")]
        public bool Disable { get; set; }

    }
    public class Especie
    {
        [BsonElement("label")]
        public string? Label { get; set; }
        [BsonElement("value")]
        public string? Value { get; set; }
        [BsonElement("puntaje")]
        public double Puntaje { get; set; }
        [BsonElement("disable")]
        public bool Disable { get; set; }

    }

    public class ICual
    {
        //
        [BsonElement("cual")]
        public Cuales? Cual { get; set; }
        [BsonElement("cantidad")]
        public string? Cantidad { get; set; }
        [BsonElement("frecuencia")]
        public string? Frecuencia { get; set; }

    }

    public class Cuales
    {
        [BsonElement("label")]
        public string? Label { get; set; }
        [BsonElement("value")]
        public string? Value { get; set; }
        [BsonElement("puntaje")]
        public double Puntaje { get; set; }
        [BsonElement("disable")]
        public bool Disable { get; set; }

    }
    public class IOpciones
    {
        [BsonElement("label")]
        public string? Label { get; set; }
        [BsonElement("value")]
        public int Value { get; set; }
        [BsonElement("puntaje")]
        public double? Puntaje { get; set; }
        //  
        [BsonElement("disable")]
        public bool? Disable { get; set; }

    }

    public class IComercializacion
    {
        //
        [BsonElement("productos")]
        public IOpciones? Productos { get; set; }
        [BsonElement("ingresosSemanales")]
        public int IngresosSemanales { get; set; }
        [BsonElement("pieFinca")]
        public int PieFinca { get; set; }
        [BsonElement("feria")]
        public int Feria { get; set; }
        [BsonElement("canasta")]
        public int Canasta { get; set; }
        [BsonElement("autoconsumo")]
        public int Autoconsumo { get; set; }
        [BsonElement("trueque")]
        public int Trueque { get; set; }

    }

    public class IProcesados
    {
        //
        [BsonElement("productos")]
        public IOpciones? Productos { get; set; }
        [BsonElement("otrosProductos")]
        public string? OtrosProductos { get; set; }
        [BsonElement("prodUtiliza")]
        public string? ProdUtiliza { get; set; }
        [BsonElement("insumosFuera")]
        public string? InsumosFuera { get; set; }

    }

    public class IReinvierteParcela
    {
        //
        [BsonElement("productos")]
        public IOpciones? Productos { get; set; }
        [BsonElement("porcentaje")]
        public int Porcentaje { get; set; }

    }

    public class IConsumidoresIdentificados
    {
        [BsonElement("nombreConsumidor")]
        public string? nombreConsumidor { get; set; }
        [BsonElement("lugarProcedencia")]
        public string? LugarProcedencia { get; set; }
        //
        [BsonElement("productoCompra")]
        public ProductoCompras? ProductoCompra { get; set; }

    }

    public class ProductoCompras
    {
        [BsonElement("label")]
        public string? Label { get; set; }
        [BsonElement("value")]
        public int Value { get; set; }
        [BsonElement("puntaje")]
        public double Puntaje { get; set; }

    }

    public class DatosVeedor
    {
        [BsonElement("nombre")]
        public string? Nombre { get; set; }
        [BsonElement("cedula")]
        public string? Cedula { get; set; }
        [BsonElement("organizacionPert")]
        public string? OrganizacionPert { get; set; }
    }
    public class DatosGenerales
    {
        [BsonElement("nombre")]
        public string? Nombre { get; set; }
        [BsonElement("edad")]
        public string? Edad { get; set; }
        [BsonElement("cedula")]
        public string? Cedula { get; set; }
        [BsonElement("fecha")]
        public string? Fecha { get; set; }
        [BsonElement("instruccion")]
        public string? Instruccion { get; set; }
        [BsonElement("jefeHogar")]
        public string? jefeHogar { get; set; }
        [BsonElement("numHombres")]
        public int NumHombres { get; set; }
        [BsonElement("numMujeres")]
        public int NumMujeres { get; set; }
        [BsonElement("numHijos")]
        public int NumHijos { get; set; }
        [BsonElement("telefono")]
        public string? Telefono { get; set; }
        [BsonElement("correo")]
        public string? Correo { get; set; }
        [BsonElement("ubiChacra")]
        public List<IUbicacionChacra>? UbiChacra { get; set; }
        [BsonElement("organizacionPert")]
        public string? OrganizacionPert { get; set; }
        [BsonElement("aniosCultiv")]
        public string? AniosCultiv { get; set; }
        [BsonElement("numVeedurias")]
        public string? NumVeedurias { get; set; }
        [BsonElement("produtCertif")]
        public string? ProdutCertif { get; set; }
        [BsonElement("tiposTerrenos")]
        public List<ITipoTerreno>? TiposTerrenos { get; set; }
        [BsonElement("totalMetrosCuadrados")]
        public double TotalMetrosCuadrados { get; set; }
    };

    public class Preg241
    {
        [BsonElement("nombre")]
        public string? Nombre { get; set; }
        [BsonElement("valor")]
        public double Valor { get; set; }
        [BsonElement("puntos")]
        public double Puntos { get; set; }
        [BsonElement("respuesta")]
        public IModeloDeObjetoOpciones? Respuesta { get; set; }
    }

    public class Preg242
    {
        [BsonElement("nombre")]
        public string? Nombre { get; set; }
        [BsonElement("puntos")]
        public double Puntos { get; set; }
        [BsonElement("totalPeri")]
        public double totalPeri { get; set; }
        [BsonElement("totalMetroSembrado")]
        public double TotalMetroSembrado { get; set; }
        [BsonElement("porcentajeMetrSembrados")]
        public double PorcentajeMetrSembrados { get; set; }
    }
    public class Preg243
    {
        [BsonElement("nombre")]
        public string? Nombre { get; set; }
        [BsonElement("puntos")]
        public double Puntos { get; set; }
        [BsonElement("respuesta")]
        public IModeloDeObjetoOpciones? Respuesta { get; set; }
        [BsonElement("subpreg243")]
        public SubPreg243? Subpreg243 { get; set; }
        [BsonElement("subsistemasSuelo")]
        public SubsistemasSuelo? SubsistemasSuelo { get; set; }
    }

    public class SubPreg243
    {
        [BsonElement("nombre")]
        public string? nombre { get; set; }
        [BsonElement("respuesta")]
        public IModeloDeObjetoOpciones? Respuesta { get; set; }

    }
    public class SubsistemasSuelo
    {
        [BsonElement("nombre")]
        public string? Nombre { get; set; }
    }

    public class Preg244
    {
        [BsonElement("nombre")]
        public string? Nombre { get; set; }
        [BsonElement("puntos")]
        public double Puntos { get; set; }
        [BsonElement("respuesta")]
        public IModeloDeObjetoOpciones? Respuesta { get; set; }
        [BsonElement("subPreg244")]
        public SubPreg244? subPreg244 { get; set; }
    }

    public class SubPreg244
    {
        [BsonElement("nombre")]
        public string? nombre { get; set; }
        [BsonElement("items")]
        public List<Item>? Items { get; set; }

    }

    public class Item
    {
        [BsonElement("nombre")]
        public string? Nombre { get; set; }
        [BsonElement("respuesta")]
        public IModeloDeObjetoOpciones? Respuesta { get; set; }

    }

    public class Preg245
    {
        [BsonElement("nombre")]
        public string? Nombre { get; set; }
        [BsonElement("puntos")]
        public double Puntos { get; set; }
        [BsonElement("respuesta")]
        public IModeloDeObjetoOpciones? Respuesta { get; set; }
        [BsonElement("subPreg245")]
        public SubPreg245? SubPreg245 { get; set; }

    }
    public class Preg246
    {
        [BsonElement("nombre")]
        public string? Nombre { get; set; }
        [BsonElement("puntos")]
        public double Puntos { get; set; }
        [BsonElement("items")]
        public List<Item>? Items { get; set; }
        [BsonElement("subPreg246")]
        public SubPreg246? SubPreg246 { get; set; }
    }

    public class SubPreg246
    {
        [BsonElement("nombre")]
        public string? Nombre { get; set; }
        [BsonElement("respuesta")]
        public IModeloDeObjetoOpciones? Respuesta { get; set; }

    }

    public class SubPreg245
    {
        [BsonElement("nombre")]
        public string? Nombre { get; set; }
        [BsonElement("items")]
        public List<Item>? Items { get; set; }


    }
    public class Preg247
    {
        [BsonElement("nombre")]
        public string? Nombre { get; set; }
        [BsonElement("puntos")]
        public double Puntos { get; set; }
        [BsonElement("respuesta")]
        public string? Respuesta { get; set; }
        [BsonElement("subPreg2471")]
        public SubPreg2471? SubPreg2471 { get; set; }
        [BsonElement("subPreg2472")]
        public SubPreg2472? SubPreg2472 { get; set; }
    };
    public class SubPreg2471
    {
        [BsonElement("nombre")]
        public string? Nombre { get; set; }
        [BsonElement("cantidad")]
        public int Cantidad { get; set; }
        [BsonElement("medidaDePeso")]
        public IModeloDeObjetoOpciones? MedidaDePeso { get; set; }
        [BsonElement("tiempo")]
        public IModeloDeObjetoOpciones? Tiempo { get; set; }

    }

    public class SubPreg2472
    {
        [BsonElement("nombre")]
        public string? Nombre { get; set; }
        [BsonElement("cuantoAboCompra")]
        public IModeloDeObjetoOpciones? CuantoAboCompra { get; set; }
        [BsonElement("medidaDePeso")]
        public IModeloDeObjetoOpciones? MedidaDePeso { get; set; }

    };

    public class Preg248
    {
        [BsonElement("nombre")]
        public string? Nombre { get; set; }
        [BsonElement("puntos")]
        public double Puntos { get; set; }
        [BsonElement("cual")]
        public List<ICual>? Cual { get; set; }
    }
    public class Preg249
    {
        [BsonElement("nombre")]
        public string? Nombre { get; set; }
        [BsonElement("puntos")]
        public double Puntos { get; set; }
        [BsonElement("respuesta")]
        public IModeloDeObjetoOpciones? Respuesta { get; set; }
        [BsonElement("subPreg249")]
        public SubPreg249? SubPreg249 { get; set; }
    }

    public class SubPreg249
    {
        [BsonElement("nombre")]
        public string? Nombre { get; set; }
        [BsonElement("respuesta")]
        public IModeloDeObjetoOpciones? Respuesta { get; set; }
    }

    public class Preg2410
    {
        [BsonElement("nombre")]
        public string? Nombre { get; set; }
        [BsonElement("puntos")]
        public double Puntos { get; set; }
        [BsonElement("areaProductosSembrados")]
        public double AreaProductosSembrados { get; set; }
        [BsonElement("hortalizas")]
        public List<IPreg2410Producto>? Hortalizas { get; set; }
        [BsonElement("frutas")]
        public List<IPreg2410Producto>? Frutas { get; set; }
        [BsonElement("pastos")]
        public List<IPreg2410Producto>? Pastos { get; set; }
        [BsonElement("cerealesYSeudocere")]
        public List<IPreg2410Producto>? CerealesYSeudocere { get; set; }
        [BsonElement("plantasMedicin")]
        public List<IPreg2410Producto>? PlantasMedicin { get; set; }
        [BsonElement("otrosOpcional")]
        public List<IPreg2410Opcional>? OtrosOpcional { get; set; }
        [BsonElement("hortalizasTotal")]
        public double HortalizasTotal { get; set; }
        [BsonElement("frutasTotal")]
        public double FrutasTotal { get; set; }
        [BsonElement("pastosTotal")]
        public double PastosTotal { get; set; }
        [BsonElement("cerealeTotal")]
        public double CerealeTotal { get; set; }
        [BsonElement("planMedTotal")]
        public double PlanMedTotal { get; set; }
        [BsonElement("opcionalesTotal")]
        public double OpcionalesTotal { get; set; }
        [BsonElement("metrosHortaliza")]
        public double MetrosHortaliza { get; set; }
        [BsonElement("metrosFrutas")]
        public double MetrosFrutas { get; set; }
        [BsonElement("metrosPastos")]
        public double MetrosPastos { get; set; }
        [BsonElement("metrosCereales")]
        public double MetrosCereales { get; set; }
        [BsonElement("metrosPlantasMed")]
        public double MetrosPlantasMed { get; set; }
        [BsonElement("metrosOpcionales")]
        public double MetrosOpcionales { get; set; }
        [BsonElement("totalProductos")]
        public double TotalProductos { get; set; }
        [BsonElement("totalPorcentaje")]
        public double TotalPorcentaje { get; set; }
    };
    public class PregGenerica
    {
        [BsonElement("nombre")]
        public string? Nombre { get; set; }
        [BsonElement("puntos")]
        public double Puntos { get; set; }
        [BsonElement("respuesta")]
        public IModeloDeObjetoOpciones? Respuesta { get; set; }

    }
    public class SubPregGenerica
    {
        [BsonElement("nombre")]
        public string? Nombre { get; set; }
        [BsonElement("respuesta")]
        public IModeloDeObjetoOpciones? Respuesta { get; set; }

    }

    public class Preg2416
    {
        [BsonElement("nombre")]
        public string? Nombre { get; set; }
        [BsonElement("puntos")]
        public double Puntos { get; set; }
        [BsonElement("respuesta")]
        public IModeloDeObjetoOpciones? Respuesta { get; set; }
        [BsonElement("subPreg2416")]
        public SubPregGenerica? SubPreg2416 { get; set; }
        [BsonElement("subSubPreg2416")]
        public SubPregGenerica? SubSubPreg2416 { get; set; }
    }
    public class Preg2418
    {
        [BsonElement("nombre")]
        public string? Nombre { get; set; }
        [BsonElement("puntos")]
        public double Puntos { get; set; }
        [BsonElement("respuesta")]
        public IModeloDeObjetoOpciones? Respuesta { get; set; }
        [BsonElement("subPreg2418")]
        public SubPregGenerica? SubPreg2418 { get; set; }

    }
    public class Preg2419
    {
        [BsonElement("nombre")]
        public string? Nombre { get; set; }
        [BsonElement("puntos")]
        public double Puntos { get; set; }
        [BsonElement("items")]
        public List<Item>? Items { get; set; }
    }

    //transform preg2423 to C# class 
    public class Preg2423
    {
        [BsonElement("nombre")]
        public string? Nombre { get; set; }
        [BsonElement("puntos")]
        public double Puntos { get; set; }
        [BsonElement("especieA")]
        public List<IPreg2423>? EspecieA { get; set; }
        [BsonElement("cantidadTotal")]
        public int CantidadTotal { get; set; }
    }

    public class Preg2420
    {
        [BsonElement("nombre")]
        public string? Nombre { get; set; }
        [BsonElement("puntos")]
        public double Puntos { get; set; }
        [BsonElement("items")]
        public List<Item>? Items { get; set; }
    }
    //transform preg2424 to C# class
    public class Preg2424
    {
        [BsonElement("nombre")]
        public string? Nombre { get; set; }
        [BsonElement("puntos")]
        public double Puntos { get; set; }
        [BsonElement("rGranos")]
        public IModeloDeObjetoOpciones? RGranos { get; set; }
        [BsonElement("rPastos")]
        public IModeloDeObjetoOpciones? RPastos { get; set; }
        [BsonElement("rRestos")]
        public IModeloDeObjetoOpciones? RRestos { get; set; }
    }

    public class SubPreg2425
    {
        [BsonElement("nombre")]
        public string? Nombre { get; set; }
        [BsonElement("respuesta")]
        public string? Respuesta { get; set; }
    }
    //transform preg2425 to C# class
    public class Preg2425
    {
        [BsonElement("nombre")]
        public string? Nombre { get; set; }
        [BsonElement("puntos")]
        public double Puntos { get; set; }
        [BsonElement("items")]
        public List<Item>? Items { get; set; }
        [BsonElement("subPreg2425")]
        public SubPreg2425? SubPreg2425 { get; set; }
    }




    public class EncabezadoPreg2430
    {
        [BsonElement("nombre")]
        public string? Nombre { get; set; }
        [BsonElement("puntos")]
        public double Puntos { get; set; }
        [BsonElement("encaPreg2430")]
        public SubPregGenerica? EncaPreg2430 { get; set; }
        [BsonElement("subPregEnca2430")]
        public SubPregGenerica? SubPregEnca2430 { get; set; }
    }


    public class Preg2431
    {
        [BsonElement("nombre")]
        public string? Nombre { get; set; }
        [BsonElement("puntos")]
        public double Puntos { get; set; }
        [BsonElement("items")]
        public List<Item>? Items { get; set; }
    }
    //transform preg2432 to C# class
    public class Preg2432
    {
        [BsonElement("nombre")]
        public string? Nombre { get; set; }
        [BsonElement("puntos")]
        public double Puntos { get; set; }
        [BsonElement("respuesta")]
        public IModeloDeObjetoOpciones? Respuesta { get; set; }
        [BsonElement("subPreg2432")]
        public SubPregGenerica? SubPreg2432 { get; set; }
    }


    public class DimensionEcologica
    {
        [BsonElement("nombre")]
        public string? Nombre { get; set; }
        [BsonElement("puntajeTotal")]
        public double PuntajeTotal { get; set; }
        [BsonElement("preg241")]
        public Preg241? Preg241 { get; set; }
        [BsonElement("preg242")]
        public Preg242? Preg242 { get; set; }
        [BsonElement("preg243")]
        public Preg243? Preg243 { get; set; }
        [BsonElement("preg244")]
        public Preg244? Preg244 { get; set; }
        [BsonElement("preg245")]
        public Preg245? Preg245 { get; set; }
        [BsonElement("preg246")]
        public Preg246? Preg246 { get; set; }
        [BsonElement("preg247")]
        public Preg247? Preg247 { get; set; }
        [BsonElement("preg248")]
        public Preg248? Preg248 { get; set; }
        [BsonElement("preg249")]
        public Preg249? Preg249 { get; set; }
        [BsonElement("preg2410")]
        public Preg2410? Preg2410 { get; set; }
        [BsonElement("preg2411")]
        public PregGenerica? Preg2411 { get; set; }
        [BsonElement("preg2412")]
        public PregGenerica? Preg2412 { get; set; }
        [BsonElement("preg2413")]
        public PregGenerica? Preg2413 { get; set; }
        [BsonElement("preg2414")]
        public PregGenerica? Preg2414 { get; set; }
        [BsonElement("preg2415")]
        public PregGenerica? Preg2415 { get; set; }
        [BsonElement("preg2416")]
        public Preg2416? Preg2416 { get; set; }
        [BsonElement("preg2417")]
        public PregGenerica? Preg2417 { get; set; }
        [BsonElement("preg2418")]
        public Preg2418? Preg2418 { get; set; }
        [BsonElement("preg2419")]
        public Preg2419? Preg2419 { get; set; }
        [BsonElement("preg2420")]
        public Preg2420? Preg2420 { get; set; }
        [BsonElement("preg2421")]
        public PregGenerica? Preg2421 { get; set; }
        [BsonElement("preg2422")]
        public PregGenerica? Preg2422 { get; set; }
        [BsonElement("preg2423")]
        public Preg2423? Preg2423 { get; set; }
        [BsonElement("preg2424")]
        public Preg2424? Preg2424 { get; set; }
        [BsonElement("preg2425")]
        public Preg2425? Preg2425 { get; set; }
        [BsonElement("preg2426")]
        public PregGenerica? Preg2426 { get; set; }
        [BsonElement("preg2427")]
        public PregGenerica? Preg2427 { get; set; }
        [BsonElement("preg2428")]
        public PregGenerica? Preg2428 { get; set; }
        [BsonElement("preg2429")]
        public PregGenerica? Preg2429 { get; set; }
        [BsonElement("encabezadoPreg2430")]
        public EncabezadoPreg2430? EncabezadoPreg2430 { get; set; }
        [BsonElement("preg2430")]
        public PregGenerica? Preg2430 { get; set; }
        [BsonElement("preg2431")]
        public Preg2431? Preg2431 { get; set; }
        [BsonElement("preg2432")]
        public Preg2432? Preg2432 { get; set; }
        [BsonElement("preg2433")]
        public PregGenerica? Preg2433 { get; set; }
        [BsonElement("preg2434")]
        public PregGenerica? Preg2434 { get; set; }
        [BsonElement("preg2435")]
        public PregGenerica? Preg2435 { get; set; }
        [BsonElement("preg2436")]
        public PregGenerica? Preg2436 { get; set; }
        [BsonElement("preg2437")]
        public PregGenerica? Preg2437 { get; set; }
        [BsonElement("preg2438")]
        public PregGenerica? Preg2438 { get; set; }
        [BsonElement("preg2439")]
        public PregGenerica? Preg2439 { get; set; }
        [BsonElement("preg2440")]
        public PregGenerica? Preg2440 { get; set; }
        [BsonElement("preg2441")]
        public PregGenerica? Preg2441 { get; set; }

    };


    public class Preg251
    {
        [BsonElement("nombre")]
        public string? Nombre { get; set; }
        [BsonElement("puntos")]
        public double Puntos { get; set; }
        [BsonElement("respuesta")]
        public IOpciones? Respuesta { get; set; }
        [BsonElement("subpreg")]
        public SubPreg251? Subpreg { get; set; }
    }

    public class SubPreg251
    {
        [BsonElement("nombre")]
        public string? Nombre { get; set; }
        [BsonElement("respuesta")]
        public IOpciones? Respuesta { get; set; }
        [BsonElement("porque")]
        public string? Porque { get; set; }
    }

    //transform preg252 to C# class
    public class Preg252
    {
        [BsonElement("nombre")]
        public string? Nombre { get; set; }
        [BsonElement("puntos")]
        public double Puntos { get; set; }
        [BsonElement("rubros")]
        public List<IComercializacion>? Rubros { get; set; }
    }

    public class Preg253
    {
        [BsonElement("nombre")]
        public string? Nombre { get; set; }
        [BsonElement("puntos")]
        public double Puntos { get; set; }
        [BsonElement("prodProcesados")]
        public List<IProcesados>? ProdProcesados { get; set; }
        [BsonElement("subpreg")]
        public SubPregs253? Subpreg { get; set; }
        [BsonElement("subpreg2")]
        public SubPregs253? Subpreg2 { get; set; }
    }

    public class SubPregs253
    {
        [BsonElement("nombre")]
        public string? Nombre { get; set; }
        [BsonElement("respuesta")]
        public IOpciones? Respuesta { get; set; }
    }

    //transform preg254 to C# class
    public class Preg254
    {
        [BsonElement("nombre")]
        public string? Nombre { get; set; }
        [BsonElement("puntos")]
        public double Puntos { get; set; }
        [BsonElement("respuesta")]
        public IOpciones? Respuesta { get; set; }
    }

    //transform preg255 to C# class
    public class Preg255
    {
        [BsonElement("nombre")]
        public string? Nombre { get; set; }
        [BsonElement("puntos")]
        public double Puntos { get; set; }
        [BsonElement("canastaFamiliar")]
        public List<IReinvierteParcela>? CanastaFamiliar { get; set; }
        [BsonElement("Insumos")]
        public List<IReinvierteParcela>? Insumos { get; set; }
    }

    //transform preg256 to C# class
    public class Preg256
    {
        [BsonElement("nombre")]
        public string? Nombre { get; set; }
        [BsonElement("puntos")]
        public double Puntos { get; set; }
        [BsonElement("consumidoresIdentificados")]
        public List<IConsumidoresIdentificados>? ConsumidoresIdentificados { get; set; }
    }



    public class DimensionEconomica
    {
        [BsonElement("nombre")]
        public string? Nombre { get; set; }
        [BsonElement("puntajeTotal")]
        public double PuntajeTotal { get; set; }
        [BsonElement("preg251")]
        public Preg251? Preg251 { get; set; }
        [BsonElement("preg252")]
        public Preg252? Preg252 { get; set; }
        [BsonElement("preg253")]
        public Preg253? Preg253 { get; set; }
        [BsonElement("preg254")]
        public Preg254? Preg254 { get; set; }
        [BsonElement("preg255")]
        public Preg255? Preg255 { get; set; }
        [BsonElement("preg256")]
        public Preg256? Preg256 { get; set; }
    };
    //transform preg211 to C# class
    public class Preg211
    {
        [BsonElement("nombre")]
        public string? Nombre { get; set; }
        [BsonElement("valor")]
        public double Valor { get; set; }
        [BsonElement("puntos")]
        public double Puntos { get; set; }
        [BsonElement("respuesta")]
        public IModeloDeObjetoOpciones? Respuesta { get; set; }
    }

    //transform preg212 to C# class
    public class Preg212
    {
        [BsonElement("nombre")]
        public string? Nombre { get; set; }
        [BsonElement("valor")]
        public double Valor { get; set; }
        [BsonElement("puntos")]
        public double Puntos { get; set; }
        [BsonElement("respuesta")]
        public IModeloDeObjetoOpciones? Respuesta { get; set; }
    }

    //transform preg213 to C# class
    public class Preg213
    {
        [BsonElement("nombre")]
        public string? Nombre { get; set; }
        [BsonElement("puntos")]
        public double Puntos { get; set; }
        [BsonElement("items")]
        public List<Item>? Items { get; set; }
    }

    //transform preg214 to C# class
    public class Preg214
    {
        [BsonElement("nombre")]
        public string? Nombre { get; set; }
        [BsonElement("puntos")]
        public double Puntos { get; set; }
        [BsonElement("items")]
        public List<Item>? Items { get; set; }
    }
    //transform preg215 to C# class
    public class Preg215
    {
        [BsonElement("nombre")]
        public string? Nombre { get; set; }
        [BsonElement("valor")]
        public double Valor { get; set; }
        [BsonElement("puntos")]
        public double Puntos { get; set; }
        [BsonElement("respuesta")]
        public IModeloDeObjetoOpciones? Respuesta { get; set; }
    }

    public class DimensionPolitica21
    {
        [BsonElement("nombre")]
        public string? Nombre { get; set; }
        [BsonElement("puntajeTotal")]
        public double PuntajeTotal { get; set; }
        [BsonElement("preg211")]
        public Preg211? Preg211 { get; set; }
        [BsonElement("preg212")]
        public Preg212? Preg212 { get; set; }
        [BsonElement("preg213")]
        public Preg213? Preg213 { get; set; }
        [BsonElement("preg214")]
        public Preg214? Preg214 { get; set; }
        [BsonElement("preg215")]
        public Preg215? Preg215 { get; set; }

    };


    public class Preg221
    {
        [BsonElement("nombre")]
        public string? Nombre { get; set; }
        [BsonElement("puntos")]
        public double Puntos { get; set; }
        [BsonElement("items")]
        public List<Item>? Items { get; set; }

    };

    //transform preg222 to C# class
    public class Preg222
    {
        [BsonElement("nombre")]
        public string? Nombre { get; set; }
        [BsonElement("Puntos")]
        public double Puntos { get; set; }
        [BsonElement("valor")]
        public double Valor { get; set; }
        [BsonElement("respuesta")]
        public IModeloDeObjetoOpciones? Respuesta { get; set; }
        [BsonElement("subPreg222")]
        public SubPreg222? SubPreg222 { get; set; }
    }

    public class SubPreg222
    {
        [BsonElement("respuesta")]
        public IModeloDeObjetoOpciones? Respuesta { get; set; }
    }

    public class Preg223
    {
        [BsonElement("nombre")]
        public string? Nombre { get; set; }
        [BsonElement("puntos")]
        public double Puntos { get; set; }
        [BsonElement("items")]
        public List<Item>? Items { get; set; }
    };

    //transform preg224 to C# class
    public class Preg224
    {
        [BsonElement("nombre")]
        public string? Nombre { get; set; }
        [BsonElement("puntos")]
        public double Puntos { get; set; }
        [BsonElement("incentivados")]
        public List<IPreg224>? Incentivados { get; set; }
    }

    //transform preg225 to C# class
    public class Preg225
    {
        [BsonElement("nombre")]
        public string? Nombre { get; set; }
        [BsonElement("puntos")]
        public double Puntos { get; set; }
        [BsonElement("items")]
        public List<Item>? Items { get; set; }
    }
    //transform preg226 to C# class
    public class Preg226
    {
        [BsonElement("nombre")]
        public string? Nombre { get; set; }
        [BsonElement("puntos")]
        public double Puntos { get; set; }
        [BsonElement("items")]
        public List<Item>? Items { get; set; }
    }

    //transform preg228 to C# class
    public class Preg228
    {
        [BsonElement("nombre")]
        public string? Nombre { get; set; }
        [BsonElement("puntos")]
        public double Puntos { get; set; }
        [BsonElement("respuesta")]
        public IModeloDeObjetoOpciones? Respuesta { get; set; }
        [BsonElement("subPreg228")]
        public SubPreg228? SubPreg228 { get; set; }
    }
    public class SubPreg228
    {
        [BsonElement("nombre")]
        public string? Nombre { get; set; }
        [BsonElement("respuesta")]
        public IModeloDeObjetoOpciones? Respuesta { get; set; }
    }

    public class DimensionSocioOrganizativa22
    {
        [BsonElement("nombre")]
        public string? Nombre { get; set; }
        [BsonElement("puntajeTotal")]
        public double PuntajeTotal { get; set; }
        [BsonElement("preg221")]
        public Preg221? Preg221 { get; set; }
        [BsonElement("preg222")]
        public Preg222? Preg222 { get; set; }
        [BsonElement("preg223")]
        public Preg223? Preg223 { get; set; }
        [BsonElement("preg224")]
        public Preg224? Preg224 { get; set; }
        [BsonElement("preg225")]
        public Preg225? Preg225 { get; set; }
        [BsonElement("preg226")]
        public Preg226? Preg226 { get; set; }
        [BsonElement("preg227")]
        public string? Preg227 { get; set; }
        [BsonElement("preg228")]
        public Preg228? Preg228 { get; set; }


    };

    //transform preg231 to C# class
    public class Preg231
    {
        [BsonElement("nombre")]
        public string? Nombre { get; set; }
        [BsonElement("puntos")]
        public double Puntos { get; set; }
        [BsonElement("respuesta")]
        public IModeloDeObjetoOpciones? Respuesta { get; set; }
        [BsonElement("subPregunta231")]
        public SubPregunta231? SubPregunta231 { get; set; }
        [BsonElement("faseLunar")]
        public List<IFaseLunar>? FaseLunar { get; set; }
    }

    public class SubPregunta231
    {
        [BsonElement("respuesta")]
        public IModeloDeObjetoOpciones? Respuesta { get; set; }
    }

    public class IFaseLunar
    {
        [BsonElement("lunaNuevaTierna")]
        public string? LunaNuevaTierna { get; set; }
        [BsonElement("lunaCuartoCreciente")]
        public string? LunaCuartoCreciente { get; set; }
        [BsonElement("lunaLlena")]
        public string? LunaLlena { get; set; }
        [BsonElement("lunaMenguante")]
        public string? LunaMenguante { get; set; }

    }
    //transform preg232 to C# class
    public class Preg232
    {
        [BsonElement("nombre")]
        public string? Nombre { get; set; }
        [BsonElement("valor")]
        public double Valor { get; set; }
        [BsonElement("puntos")]
        public double Puntos { get; set; }
        [BsonElement("respuesta")]
        public IModeloDeObjetoOpciones? Respuesta { get; set; }
    }
    //transform preg233 to C# class
    public class Preg233
    {
        [BsonElement("nombre")]
        public string? Nombre { get; set; }
        [BsonElement("puntos")]
        public double Puntos { get; set; }
        [BsonElement("plantasC")]
        public List<IPlantasCura>? PlantasC { get; set; }
    }

    //transform preg234 to C# class
    public class Preg234
    {
        [BsonElement("nombre")]
        public string? Nombre { get; set; }
        [BsonElement("puntos")]
        public double Puntos { get; set; }
        [BsonElement("respuesta")]
        public List<ISemillasNativ>? Respuesta { get; set; }
    }
    //transform preg234Opcional to C# class
    public class Preg234Opcional
    {
        [BsonElement("nombre")]
        public string? Nombre { get; set; }
        [BsonElement("respuesta")]
        public List<ISemillasNativ>? Respuesta { get; set; }
    }
    //transform preg235 to C# class
    public class Preg235
    {
        [BsonElement("nombre")]
        public string? Nombre { get; set; }
        [BsonElement("puntos")]
        public double Puntos { get; set; }
        [BsonElement("respuesta")]
        public IModeloDeObjetoOpciones? Respuesta { get; set; }
    }
    //transform preg236 to C# class
    public class Preg236
    {
        [BsonElement("nombre")]
        public string? Nombre { get; set; }
        [BsonElement("puntos")]
        public double Puntos { get; set; }
        [BsonElement("items")]
        public List<Item>? Items { get; set; }
    }
    public class DimensionCultural23
    {
        [BsonElement("nombre")]
        public string? Nombre { get; set; }
        [BsonElement("puntajeTotal")]
        public double PuntajeTotal { get; set; }
        [BsonElement("preg231")]
        public Preg231? Preg231 { get; set; }
        [BsonElement("preg232")]
        public Preg232? Preg232 { get; set; }
        [BsonElement("preg233")]
        public Preg233? Preg233 { get; set; }
        [BsonElement("preg234")]
        public Preg234? Preg234 { get; set; }
        [BsonElement("preg234Opcional")]
        public Preg234Opcional? Preg234Opcional { get; set; }
        [BsonElement("preg235")]
        public Preg235? Preg235 { get; set; }
        [BsonElement("preg236")]
        public Preg236? Preg236 { get; set; }
    };

    public class DimensionSocialCulturalPolitica
    {
        [BsonElement("dimensionPolitica21")]
        public DimensionPolitica21? dimensionPolitica21 { get; set; }
        [BsonElement("dimensionSocioOrganizativa22")]
        public DimensionSocioOrganizativa22? DimensionSocioOrganizativa22 { get; set; }
        [BsonElement("dimensionCultural23")]
        public DimensionCultural23? DimensionCultural23 { get; set; }



    };
    public class Productor

    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        [BsonElement("datosVeedor")]
        public DatosVeedor? DatosVeedor { get; set; }
        [BsonElement("datosGenerales")]
        public DatosGenerales? DatosGenerales { get; set; }
        [BsonElement("dimensionEcologica")]
        public DimensionEcologica? DimensionEcologica { get; set; }
        [BsonElement("dimensionEconomica")]
        public DimensionEconomica? DimensionEconomica { get; set; }
        [BsonElement("dimensionSocialCulturalPolitica")]
        public DimensionSocialCulturalPolitica? DimensionSocialCulturalPolitica { get; set; }

    }

}

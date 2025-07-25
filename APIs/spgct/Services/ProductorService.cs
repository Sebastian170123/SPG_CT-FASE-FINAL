using MongoDB.Driver;
using spgct.Models;

namespace spgct.Services
{
    public class ProductorService
    {
        private IMongoCollection<Productor> _productores;
        public ProductorService(ISpgctSettings settings)
        {

            var cliente = new MongoClient(settings.Server);
            var database = cliente.GetDatabase(settings.Database);
            _productores = database.GetCollection<Productor>(settings.Collection);
        }
        public async Task<List<Productor>> GetProductores()
        {
            return await _productores.Find(d => true).ToListAsync();
        }

        public async Task<Productor> CreateProductor(Productor productor)
        {
            var productorExiste = await _productores.Find(p => p.DatosGenerales.Cedula == productor.DatosGenerales.Cedula).ToListAsync();
            if (productorExiste.Count > 0)
            {
                throw new Exception("El Productor ya existe");
            }
            else
            {
                await _productores.InsertOneAsync(productor);
                return productor;
            }
        }

        public async Task<Productor> GetProductor(string id)
        {
            var filter = Builders<Productor>.Filter.Eq(p => p.Id, id);
            var productorCursor = await _productores.FindAsync(filter);
            return await productorCursor.FirstOrDefaultAsync();
        }

        public async Task<Boolean> UpdateProductor(string id, Productor productor)
        {
            await _productores.ReplaceOneAsync(p => p.Id == id, productor);
            return true;
        }

        public async Task<Boolean> DeleteProductor(string id)
        {
            await _productores.DeleteOneAsync(productor => productor.Id == id);

            return true;
        }
    }
}

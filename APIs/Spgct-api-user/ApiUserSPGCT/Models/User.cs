using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace ApiUserSPGCT.Models
{
    public class User
    {
        [BsonId]
        public required ObjectId id { get; set; }
        public required string name { get; set; }
        public required string lastName { get; set; }
        public required string cedula { get; set; }
        public required string Email { get; set; }
        public required string password { get; set; }
    }
}

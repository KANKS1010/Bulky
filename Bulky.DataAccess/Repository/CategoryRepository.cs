using AnimeLister.DataAccess.Data;
using AnimeLister.DataAccess.Repository.IRepository;
using AnimeLister.Models;
using System.Linq.Expressions;

namespace AnimeLister.DataAccess.Repository
{
    public class CategoryRepository : Repository<Category>, ICategoryRepository 
    {
        private ApplicationDbContext _db;
        public CategoryRepository(ApplicationDbContext db) : base(db)
        {
            _db = db; 
        }
        public void Update(Category obj)
        {
            _db.Categories.Update(obj);
        }
    }
}

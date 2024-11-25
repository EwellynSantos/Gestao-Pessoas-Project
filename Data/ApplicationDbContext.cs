using CludeProject.Models;
using Microsoft.EntityFrameworkCore;

namespace CludeProject.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<ProfissionalModel> Profissionals { get; set; }
        public DbSet<EspecialidadeModel> Especialidades { get; set; }
    }
}

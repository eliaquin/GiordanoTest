using System.Data.Entity;
using Microsoft.AspNet.Identity.EntityFramework;

namespace GiordanoTest.Models
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext()
            : base("DefaultConnection", throwIfV1Schema: false)
        {
        }

        public virtual DbSet<Amigo> Amigos { get; set; }

        public static ApplicationDbContext Create()
        {
            return new ApplicationDbContext();
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Amigo>()
                .ToTable("Amigos")
                .Property(x => x.Nombre)
                .IsRequired()
                .HasMaxLength(100);
            base.OnModelCreating(modelBuilder);
        }
    }
}
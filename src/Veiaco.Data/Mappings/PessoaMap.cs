using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Veiaco.Core.Models;

namespace Veiaco.Data.Mappings
{
    public class PessoaMap : IEntityTypeConfiguration<Pessoa>
    {
        public void Configure(EntityTypeBuilder<Pessoa> builder)
        {
            builder.Property(p => p.Nome)
                .HasColumnType("varchar(80)")
                .HasMaxLength(80)
                .IsRequired();

            builder.Property(p => p.Email)
                .HasColumnType("varchar(60)")
                .HasMaxLength(60)
                .IsRequired();
        }
    }
}
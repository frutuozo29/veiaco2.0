using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Veiaco.Core.Models;

namespace Veiaco.Data.Mappings
{
    public class FornecedorMap : IEntityTypeConfiguration<Fornecedor>
    {
        public void Configure(EntityTypeBuilder<Fornecedor> builder)
        {
            builder.Property(f => f.RazaoSocial)
                .HasColumnType("varchar(80)")
                .HasMaxLength(80)
                .IsRequired();

            builder.Property(f => f.Email)
                .HasColumnType("varchar(60)")
                .HasMaxLength(60)
                .IsRequired();

            builder.Property(f => f.Telefone)
                .HasColumnType("varchar(11)")
                .HasMaxLength(11)
                .IsRequired();

            builder.Property(f => f.Celular)
                .HasColumnType("varchar(11)")
                .HasMaxLength(11);
        }
    }
}
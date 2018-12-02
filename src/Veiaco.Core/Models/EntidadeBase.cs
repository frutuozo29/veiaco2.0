using System;

namespace Veiaco.Core.Models
{
    public class EntidadeBase
    {
        public long Id { get; set; }
        public DateTime DataCadastro { get; set; }

        public EntidadeBase()
        {
            DataCadastro = new DateTime().Date;
        }
    }
}
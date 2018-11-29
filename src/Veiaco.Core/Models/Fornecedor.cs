namespace Veiaco.Core.Models
{
    public class Fornecedor : EntidadeBase
    {
        public string RazaoSocial { get; set; }
        public string Email { get; set; }

        public string Telefone { get; set; }

        public string Celular { get; set; }

        public Fornecedor()
        {
        }
    }
}
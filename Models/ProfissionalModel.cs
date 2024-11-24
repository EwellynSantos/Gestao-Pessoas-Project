using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CludeProject.Models
{
    public class ProfissionalModel
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string NumeroDocumento { get; set; }
        public int EspecialidadeId { get; set; }

        [ForeignKey("EspecialidadeId")]
        public EspecialidadeModel Especialidade { get; set; }

    }
}

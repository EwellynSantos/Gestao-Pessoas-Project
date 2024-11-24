namespace CludeProject.Models
{
    public class EspecialidadeModel
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string TipoDocumento { get; set; }

        public ICollection<ProfissionalModel> Profissionais { get; set; }
    }
}

using CludeProject.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace CludeProject.Controllers
{
    public class EspecialidadeController : Controller
    {
        private readonly ApplicationDbContext _context;

        public EspecialidadeController(ApplicationDbContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            try
            {
                var especialidades = _context.Especialidades.ToList();
                ViewBag.Especialidades = especialidades;

                ViewData["Especialidade"] = especialidades;

                return View();
            }
            catch
            {
                ViewBag.ErrorMessage = "Ocorreu um erro ao carregar as especialidades";
                return View(new List<EspecialidadeModel>());
            }
        }
    }
}

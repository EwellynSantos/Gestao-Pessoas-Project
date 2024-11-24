using CludeProject.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace CludeProject.Controllers
{
    public class ProfissionalController : Controller
    {
        private readonly ApplicationDbContext _context;

        public ProfissionalController(ApplicationDbContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            var profissionais = _context.Profissionals
                .Include(p => p.Especialidade)
                .ToList();

            if (profissionais == null || !profissionais.Any())
            {
                ViewBag.Message = "Nenhum profissional encontrado.";
            }

            return View(profissionais);
        }

        //public IActionResult Index()
        //{
        //    var tasks = _context.Profissionals.ToList();
        //    return View(tasks);
        //}

        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Create(ProfissionalModel task)
        {
            if (ModelState.IsValid)
            {
                _context.Profissionals.Add(task);
                _context.SaveChanges();
                return RedirectToAction(nameof(Index));
            }
            return View(task);
        }
    }
}

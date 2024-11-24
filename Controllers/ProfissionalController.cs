using CludeProject.Models;
using Microsoft.AspNetCore.Mvc;
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
            return View();
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

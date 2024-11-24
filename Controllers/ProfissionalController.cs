using CludeProject.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


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
            try
            {
                var profissionais = _context.Profissionals
                    .Include(p => p.Especialidade)
                    .ToList();

                ViewData["Profissionais"] = profissionais;

                return View();

            } 
            catch (Exception ex)
            {
                ViewBag.ErrorMessage = "Ocorreu um erro ao carregar os profissionais.";
                return View(new List<ProfissionalModel>());
            }
            
        }

        [HttpPost]
        public IActionResult Create(ProfissionalModel profissional)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    _context.Profissionals.Add(profissional);
                    _context.SaveChanges();
                    return RedirectToAction("Index");
                }
                catch (Exception ex)
                {
                    ViewBag.ErrorMessage = "Ocorreu um erro ao criar o profissional: " + ex.Message;
                    return View(profissional);
                }                  
            }
            return View(profissional);
        }

        public IActionResult Edit(int id)
        {
            var profissional = _context.Profissionals
                .Include(p => p.Especialidade)
                .FirstOrDefault(p => p.Id == id);

            if (profissional == null)
            {
                return NotFound(); 
            }

            return View(profissional);
        }


        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Edit(int id, ProfissionalModel profissional)
        {
            if (id != profissional.Id)
            {
                return BadRequest();  
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(profissional);
                    _context.SaveChanges();
                    return RedirectToAction("Index");

                } 
                catch (Exception ex)
                {
                    ViewBag.ErrorMessage = "Ocorreu um erro ao editar o profissional: " + ex.Message;
                    return View(profissional);
                }
            }

            return View(profissional);
        }

        public IActionResult Delete(int id) 
        {
            var profissional = _context.Profissionals
                .FirstOrDefault(p => p.Id == id);

            if (profissional == null)
            {
                return NotFound();
            }

            return View(profissional);
        }

        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public IActionResult DeleteConfirmed(int id)
        {
            var profissional = _context.Profissionals
                .FirstOrDefault(p => p.Id == id);

            if (profissional == null)
            {
                return NotFound();
            }

            try
            {
                _context.Profissionals.Remove(profissional);
                _context.SaveChanges();
                return RedirectToAction("Index");
            }
            catch (Exception ex)
            {
                ViewBag.ErrorMessage = "Ocorreu um erro ao excluir o profissional: " + ex.Message;
                return View(profissional);
            }
        }


    }
}

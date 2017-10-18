using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using GiordanoTest.Models;

namespace GiordanoTest.Controllers
{
    [RoutePrefix("api/data")]
    public class DataController : ApiController
    {
        private readonly ApplicationDbContext _db = new ApplicationDbContext();

        [HttpPost]
        [Route("guardaramigo")]
        public bool GuardarAmigo([FromBody] Amigo amigo)
        {
            _db.Amigos.Add(amigo);
            var registro = _db.SaveChanges();
            return registro > 0;
        }
    }
}

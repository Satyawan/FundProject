using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using FundAPI.Models;

namespace FundAPI.Controllers
{
    public class FundsController : ApiController
    {
        // GET api/values
        public IEnumerable<Funds> Get()
        {
            //TODO
            return new Funds[] { };
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }
    }

   
}

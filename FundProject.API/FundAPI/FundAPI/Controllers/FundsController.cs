using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using FundAPI.Models;

namespace FundAPI.Controllers
{
    [EnableCors("http://localhost:3000", "*", "*")]
    public class FundsController : ApiController
    {
        // GET api/values
        public IEnumerable<Funds> Get()
        {
            //TODO - This has to come from Database. This is for test purspose only.
            return new Funds[]
            {
                new Funds()
                {
                    Fundname= "T. Rowe Price Retirement 2045 Fund",
                    Ticket = "RRTRX",
                    Morningstar = "Target-Date",
                    Monthly = "6.56%",
                    Trimontly =  "0.00",
                    Yearly = "-3.58%",
                    Fiveyearly = "7.10%",
                    Inception = "3.95%"
                },
                new Funds()
                {
                    Fundname= "T. Rowe Price Retirement 2045 Fund",
                    Ticket = "RRTRX",
                    Morningstar = "Target-Date",
                    Monthly = "6.56%",
                    Trimontly =  "0.00",
                    Yearly = "-3.58%",
                    Fiveyearly = "7.10%",
                    Inception = "3.95%"
                },
                new Funds()
                {
                    Fundname= "T. Rowe Price Retirement 2045 Fund",
                    Ticket = "RRTRX",
                    Morningstar = "Target-Date",
                    Monthly = "6.56%",
                    Trimontly =  "0.00",
                    Yearly = "-3.58%",
                    Fiveyearly = "7.10%",
                    Inception = "3.95%"
                },
                new Funds()
                {
                     Fundname= "T. Rowe Price Retirement 2045 Fund",
                    Ticket = "RRTRX",
                    Morningstar = "Target-Date",
                    Monthly = "6.56%",
                    Trimontly =  "0.00",
                    Yearly = "-3.58%",
                    Fiveyearly = "7.10%",
                    Inception = "3.95%"
                },
            };
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }
    }

   
}

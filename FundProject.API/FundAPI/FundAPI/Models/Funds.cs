using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FundAPI.Models
{
    public class Funds
    {
       public string Fundname    {  get;set;}
       public string Ticket      {  get;set;}
       public string Morningstar {  get;set;}
       public string Monthly     {  get;set;}
       public string Trimontly   {  get;set;}
       public string Yearly      {  get;set;}
       public string Fiveyearly  {  get;set;}
       public string Inception {  get;set;}
    }
}
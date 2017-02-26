import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const funds = [
  {
            "fundname":"T. Rowe Price Retirement 2045 Fund",
            "ticket": "RRTRX",
            "morningstar":"Target-Date",
            "monthly":"6.56%",
            "trimontly":"0.00",
            "yearly":"-3.58%",
            "fiveyearly":"7.10%",
            "inception":"3.95%"
        },
        {
            "fundname":"T. Rowe Price Retirement 2050 Fund",
            "ticket": "RRTFX",
            "morningstar":"Target-Date",
            "monthly":"6.66%",
            "trimontly":"0.00",
            "yearly":"-3.55%",
            "fiveyearly":"7.15%",
            "inception":"4.77%"
        },
         {
            "fundname":"T. Rowe Price Retirement 2045 Fund",
            "ticket": "RRTRX",
            "morningstar":"Target-Date",
            "monthly":"6.56%",
            "trimontly":"0.00",
            "yearly":"-3.58%",
            "fiveyearly":"7.10%",
            "inception":"3.95%"
        },
        {
            "fundname":"T. Rowe Price Retirement 2050 Fund",
            "ticket": "RRTFX",
            "morningstar":"Target-Date",
            "monthly":"6.66%",
            "trimontly":"0.00",
            "yearly":"-3.55%",
            "fiveyearly":"7.15%",
            "inception":"4.77%"
        },
         {
            "fundname":"T. Rowe Price Retirement 2045 Fund",
            "ticket": "RRTRX",
            "morningstar":"Target-Date",
            "monthly":"6.56%",
            "trimontly":"0.00",
            "yearly":"-3.58%",
            "fiveyearly":"7.10%",
            "inception":"3.95%"
        },
        {
            "fundname":"T. Rowe Price Retirement 2050 Fund",
            "ticket": "RRTFX",
            "morningstar":"Target-Date",
            "monthly":"6.66%",
            "trimontly":"0.00",
            "yearly":"-3.55%",
            "fiveyearly":"7.15%",
            "inception":"4.77%"
        },
         {
            "fundname":"T. Rowe Price Retirement 2045 Fund",
            "ticket": "RRTRX",
            "morningstar":"Target-Date",
            "monthly":"6.56%",
            "trimontly":"0.00",
            "yearly":"-3.58%",
            "fiveyearly":"7.10%",
            "inception":"3.95%"
        },
        {
            "fundname":"T. Rowe Price Retirement 2050 Fund",
            "ticket": "RRTFX",
            "morningstar":"Target-Date",
            "monthly":"6.66%",
            "trimontly":"0.00",
            "yearly":"-3.55%",
            "fiveyearly":"7.15%",
            "inception":"4.77%"
        },
         {
            "fundname":"T. Rowe Price Retirement 2045 Fund",
            "ticket": "RRTRX",
            "morningstar":"Target-Date",
            "monthly":"6.56%",
            "trimontly":"0.00",
            "yearly":"-3.58%",
            "fiveyearly":"7.10%",
            "inception":"3.95%"
        },
        {
            "fundname":"T. Rowe Price Retirement 2050 Fund",
            "ticket": "RRTFX",
            "morningstar":"Target-Date",
            "monthly":"6.66%",
            "trimontly":"0.00",
            "yearly":"-3.55%",
            "fiveyearly":"7.15%",
            "inception":"4.77%"
        },
         {
            "fundname":"T. Rowe Price Retirement 2045 Fund",
            "ticket": "RRTRX",
            "morningstar":"Target-Date",
            "monthly":"6.56%",
            "trimontly":"0.00",
            "yearly":"-3.58%",
            "fiveyearly":"7.10%",
            "inception":"3.95%"
        },
        {
            "fundname":"T. Rowe Price Retirement 2050 Fund",
            "ticket": "RRTFX",
            "morningstar":"Target-Date",
            "monthly":"6.66%",
            "trimontly":"0.00",
            "yearly":"-3.55%",
            "fiveyearly":"7.15%",
            "inception":"4.77%"
        }
];

class FundsApi {
  static getAllFunds() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], funds));
      }, delay);
    });
  }

  static getFundsBySearch(search) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], funds));
      }, delay);
    });
  }

  
}

export default FundsApi;
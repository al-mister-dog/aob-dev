// __tests__/index.test.jsx

import { render, screen } from "@testing-library/react";
import CpiPriceWeight from "../../src/components/desktop/articles/inflation/cpi/cpi-price-weight";
import "@testing-library/jest-dom";

export let inflationRate = 1.89;

export let cpiData = [
  { category: "Food & non-alcoholic beverages", weight: 8.9, change: 1.4 },
  { category: "Alcohol & tobacco", weight: 3.5, change: 1.7 },
  { category: "Clothing & footwear", weight: 5.9, change: 1.4 },
  { category: "Housing & household services", weight: 32.8, change: 2.2 },
  { category: "Furniture & household goods", weight: 4.9, change: 1.8 },
  { category: "Health", weight: 2.0, change: 0.8 },
  { category: "Transport", weight: 10.7, change: 2.5 },
  { category: "Communication", weight: 1.9, change: 1.9 },
  { category: "Recreation & culture", weight: 11.2, change: 1.8 },
  { category: "Education", weight: 3.0, change: 1.5 },
  { category: "Restaurants & hotels", weight: 6.9, change: 1.9 },
  { category: "Miscellaneous goods & services", weight: 8.3, change: 1.4 },
];

export let inflationByYear = [
  { year: 1999, rate: 1.753, change: -0.07 },
  { year: 2000, rate: 1.183, change: -0.57 },
  { year: 2001, rate: 1.5323, change: 0.35 },
  { year: 2002, rate: 1.5204, change: -0.01 },
  { year: 2003, rate: 1.3765, change: -0.14 },
  { year: 2004, rate: 1.3904, change: 0.01 },
  { year: 2005, rate: 2.0891, change: 0.7 },
  { year: 2006, rate: 2.4557, change: 0.37 },
  { year: 2007, rate: 2.3866, change: -0.07 },
  { year: 2008, rate: 3.5214, change: 1.13 },
  { year: 2009, rate: 1.9617, change: -1.56 },
  { year: 2010, rate: 2.4927, change: 0.53 },
  { year: 2011, rate: 3.8561, change: 1.36 },
  { year: 2012, rate: 2.5732, change: -1.28 },
  { year: 2013, rate: 2.2917, change: -0.28 },
  { year: 2014, rate: 1.4511, change: -0.84 },
  { year: 2015, rate: 0.368, change: -1.08 },
  { year: 2016, rate: 1.0084, change: 0.64 },
  { year: 2017, rate: 2.5578, change: 1.55 },
  { year: 2018, rate: 2.2928, change: -0.27 },
  { year: 2019, rate: 1.7381, change: -0.55 },
  { year: 2020, rate: 0.9895, change: -0.75 },
];

describe("rendering component", () => {
  test("asd", () => {
    function setNewCpi(v: any) {
      return;
    }
    // render(
    //   <CpiPriceWeight setNewCpi={setNewCpi} cpiData={cpiData} width="52vh" />
    // );
    // screen.debug();
  });
});

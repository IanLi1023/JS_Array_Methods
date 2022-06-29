const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for(let i = 0; i < companies.length; i++) {
//     console.log(companies[i])
// }

// forEach
// companies.forEach(company => console.log(company))

// filter

// get 21 and older
// const canDrink = ages.filter(age => age >= 21)
// console.log(canDrink)

// filter retail companies
// const retailCompanies = companies.filter(company => company.category === 'Retail')
// console.log(retailCompanies)

// filter retail companies between 1980 and 1990
// const eightiesCompanies = companies.filter(company => company.start >= 1980 && company.start < 1990)
// console.log(eightiesCompanies)

// filter companies that lasted 10 years
// const tenYearCompanies = companies.filter(company => (company.end - company.start >= 10))
// console.log(tenYearCompanies)

// map
// create array of company names
// const companyNames = companies.map(company => company.name)
// console.log(companyNames)

// create array of company names and date started/ended
// const companyExists = companies.map(company => `${company.name} : ${company.start} - ${company.end}`)
// console.log(companyExists)

// ages array and square root each value
// const ageSquareRoot = ages
//     .map(age => Math.sqrt(age))
//     .map(age => age * 10);

// console.log(ageSquareRoot);

// sort
// sorted companies by start years
// const sortedCompanies = companies.sort((a,b) => a.start - b.start);
// console.log(sortedCompanies)

// sort ages
// const sortedAges = ages.sort((a, b) => a - b);
// console.log(sortedAges);

// reduce
// ages added together
// const agesAdded = ages.reduce((a, b) => a + b , 0);
// console.log(agesAdded)

// get total years of all companies
// const totalCompanyYears = companies.reduce((total, company) => total + company.end - company.start, 0);
// console.log(totalCompanyYears)

// combined methods
const combined = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a,b) => a - b)
    .reduce((total, age) => total + age, 0)
console.log(combined)
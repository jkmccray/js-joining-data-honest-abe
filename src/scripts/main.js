import API from "./data.js";
import components from "./component.js";

// API.getPoliticianData().then(data => console.log(data))
// API.getPacData().then(data => console.log(data))
// API.getCorporationData().then(data => console.log(data))
// API.getLegislativeBillData().then(data => console.log(data))
// API.getBillsSponsoredByPoliticians().then(data => console.log(data))

// components.createPoliticianNameAndBillsComponent("Politician Name Here")

API.getPoliticianData().then((politiciansArr) => {
  politiciansArr.forEach(politicianObj => {
    console.log(politicianObj.name)
    components.createPoliticianNameAndBillsComponent(politicianObj.name)
  })
})
  .then(() => {
    API.getLegislativeBillData()
      .then((billsArr) => {
        billsArr.forEach(bill => {
          const interest = bill.commercialInterest.interestName
          components.createBillComponent(bill, interest)
        });
      })
  })
  .then(() => {
    API.getCorporationData()
    .then((data) => {
      console.log(data)
    })
  })


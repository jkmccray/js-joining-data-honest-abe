import API from "./data.js";
import components from "./component.js";

API.getPoliticianData()
  .then((politiciansArr) => {
    politiciansArr.forEach(politicianObj => {
      const politicianId = politicianObj.id
      components.createPoliticianNameAndBillsComponent(politicianObj)
      API.getBillsSponsoredByPoliticians(politicianId)
        .then((billsArr) => {
          billsArr.forEach(billObj => {
            const billId = billObj.legislativeBillId
            API.getLegislativeBillData(billId)
              .then(bill => {
                console.log(politicianObj.name, bill)
                const billObject = bill[0]
                components.createBillComponent(billObject, politicianId)
              })
          })
        })
      API.getPacDonationsToPoliticiansData(politicianId)
        .then(donationsArr => {
          donationsArr.forEach(donation => {
            console.log(politicianObj.name, donation.pac.name)
          })
        })
    })
  })

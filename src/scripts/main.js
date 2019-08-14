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
                const billObject = bill[0]
                components.createBillComponent(billObject, politicianId)
              })
          })
        })
      API.getPacDonationsToPoliticiansData(politicianId)
        .then(donationsArr => {
          donationsArr.forEach(donationObj => {
            const pacObj = donationObj.pac
            components.createFunderComponent(pacObj.name, politicianId)
            API.getCorporateDonationsToPacsData(pacObj.id)
            .then(donationArray => {
              const corpName = donationArray[0].corporation.name
              components.createInfluencerComponent(corpName, politicianId)
            })
          })
        })
    })
  })

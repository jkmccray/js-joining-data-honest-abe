// Use fetch to get all of the related data to build a card for each politician. It should list the bills they have sponsored, and any companies that have contributed to a PAC that has a shared interest for each bill.

const API = {
  getPoliticianData() {
    return fetch("http://localhost:8088/politicians?_embed=billsSponsoredByPoliticians")
      .then(data => data.json())
  },
  getBillsSponsoredByPoliticians(politicianId) {
    return fetch(`http://localhost:8088/billsSponsoredByPoliticians?politicianId=${politicianId}&_expand=legislativeBill&_expand=politician`)
      .then(data => data.json())
  },
  getLegislativeBillData(billId) {
    return fetch(`http://localhost:8088/legislativeBills?id=${billId}&_expand=commercialInterest`)
      .then(data => data.json())
  },
  getPacDonationsToPoliticiansData(politicianId) {
    return fetch(`http://localhost:8088/pacDonationsToPoliticians?politicianId=${politicianId}&_expand=pac`)
      .then(data => data.json())
  },
  getCorporateDonationsToPacsData(pacId) {
    return fetch(`http://localhost:8088/corporateDonationsToPacs?pacId=${pacId}&_expand=corporation`)
      .then(data => data.json())
  }
}

export default API
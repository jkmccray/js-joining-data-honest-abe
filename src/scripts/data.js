// Use fetch to get all of the related data to build a card for each politician. It should list the bills they have sponsored, and any companies that have contributed to a PAC that has a shared interest for each bill.

const API = {
  getPoliticianData() {
    return fetch("http://localhost:8088/politicians?_embed=pacDonationsToPoliticians&_embed=billsSponsoredByPoliticians&_embed=")
    .then(data => data.json())
  },
  getPacData() {
    return fetch("http://localhost:8088/pacs?_embed=corporateDonationsToPacs")
    .then(data => data.json())
  },
  getCorporationData() {
    return fetch("http://localhost:8088/corporations?_embed=commercialInterestsOfCorporations")
    .then(data => data.json())
  },
  getLegislativeBillData() {
    return fetch("http://localhost:8088/legislativeBills?_expand=commercialInterest")
    .then(data => data.json())
  },
  getBillsSponsoredByPoliticians() {
    return fetch("http://localhost:8088/billsSponsoredByPoliticians?_expand=legislativeBill&_expand=politician")
    .then(data => data.json())
  }
}

export default API
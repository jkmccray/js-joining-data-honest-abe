const API = {
  getPoliticianData() {
    return fetch("http://localhost:8088/politicians?_embed=pacDonationsToPoliticians")
  }
}
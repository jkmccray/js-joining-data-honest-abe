import elFactory from "./factory.js";

const components = {
  createPoliticianNameAndBillsComponent(politician) {
    const container = document.querySelector("#container")
    const politicianArticle = elFactory("article", {classList: ["politician"]})
    const politicianNameHeader = elFactory("header", {classList: ["politician"]})
    const politicianName = elFactory("h1", {}, politician)
    const politicianBills = elFactory("section", {classList: ["politician__bills"]})
    const politicianBillsHeader = elFactory("h3", {},"Sponsored Bills")
    const politicianBillsDiv = elFactory("div", {id: "billsDiv"})
    const politicianInfluencers = elFactory("section", {classList: ["politician__influencers"]})
    const politicianInfluencersHeader = elFactory("h3", {}, "Related PACs")
    const politicianInfluencersUl = elFactory("h3", {id: "influlencersUl"})
    container.appendChild(politicianArticle)
    politicianArticle.appendChild(politicianNameHeader)
    politicianNameHeader.appendChild(politicianName)
    politicianArticle.appendChild(politicianBills)
    politicianBills.appendChild(politicianBillsHeader)
    politicianBills.appendChild(politicianBillsDiv)
    politicianArticle.appendChild(politicianInfluencers)
    politicianInfluencers.appendChild(politicianInfluencersHeader)
    politicianInfluencers.appendChild(politicianInfluencersUl)
  },
  createBillComponent(billObj, interestN) {
    const billsSection = document.querySelector("#billsDiv")
    const billName = elFactory("h4", {}, billObj.billName)
    const billDescription = elFactory("p", {}, "Purpose: " + billObj.description)
    const billInterestHeader = elFactory("h5", {}, "Associated Interest:")
    const interestUl = elFactory("ul", {id: "billInterestUl"})
    const interestLi = elFactory("li", {}, interestN)
    billsSection.appendChild(billName)
    billsSection.appendChild(billDescription)
    billsSection.appendChild(billInterestHeader)
    billsSection.appendChild(interestUl)
    interestUl.appendChild(interestLi)
  },
  createInfluencerComponent(influencerName) {
    const influencersUl = document.querySelector("#influlencersUl")
    const influencerLi = elFactory("li", {}, influencerName)
    influencersUl.appendChild(influencerLi)
  }
}

export default components
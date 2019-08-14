import elFactory from "./factory.js";

const components = {
  createPoliticianNameAndBillsComponent(politicianObj) {
    const container = document.querySelector("#container")
    const politicianArticle = elFactory("article", {classList: ["politician"]})
    const politicianNameHeader = elFactory("header", {classList: ["politician"]})
    const politicianName = elFactory("h1", {}, politicianObj.name)
    const politicianBills = elFactory("section", {classList: ["politician__bills"]})
    const politicianBillsHeader = elFactory("h3", {},"Sponsored Bills")
    const politicianBillsDiv = elFactory("div", {id: `billsDiv--${politicianObj.id}`})
    const politicianFunders = elFactory("section", {classList: ["politician__funders"]})
    const politicianFundersHeader = elFactory("h3", {}, "Related PACs")
    const politicianFundersUl = elFactory("h3", {id: `fundersUl--${politicianObj.id}`})
    const politicianInfluencers = elFactory("section", {classList: ["politician__influencers"]})
    const politicianInfluencersHeader = elFactory("h3", {}, "Influencing Corporations")
    const politicianInfluencersUl = elFactory("h3", {id: "influencersUl"})
    container.appendChild(politicianArticle)
    politicianArticle.appendChild(politicianNameHeader)
    politicianNameHeader.appendChild(politicianName)
    politicianArticle.appendChild(politicianBills)
    politicianBills.appendChild(politicianBillsHeader)
    politicianBills.appendChild(politicianBillsDiv)
    politicianArticle.appendChild(politicianFunders)
    politicianFunders.appendChild(politicianFundersHeader)
    politicianFunders.appendChild(politicianFundersUl)
    politicianArticle.appendChild(politicianInfluencers)
    politicianInfluencers.appendChild(politicianInfluencersHeader)
    politicianInfluencers.appendChild(politicianInfluencersUl)
  },
  createBillComponent(billObj, politicianId) {
    const billsSection = document.querySelector(`#billsDiv--${politicianId}`)
    const billName = elFactory("h4", {}, billObj.billName)
    const billDescription = elFactory("p", {}, "Purpose: " + billObj.description)
    const billInterestHeader = elFactory("h5", {}, "Associated Interest:")
    const interestUl = elFactory("ul", {id: "billInterestUl"})
    const interestLi = elFactory("li", {}, billObj.commercialInterest.interestName)
    billsSection.appendChild(billName)
    billsSection.appendChild(billDescription)
    billsSection.appendChild(billInterestHeader)
    billsSection.appendChild(interestUl)
    interestUl.appendChild(interestLi)
  },
  createFunderComponent(influencerName) {
    const fundersUl = document.querySelector("#fundersUl")
    const funderLi = elFactory("li", {}, funderName)
    fundersUl.appendChild(funderLi)
  },
  createInfluencerComponent(influencerName) {
    const influencersUl = document.querySelector("#influencersUl")
    const influencerLi = elFactory("li", {}, influencerName)
    influencersUl.appendChild(influencerLi)
  }
}

export default components
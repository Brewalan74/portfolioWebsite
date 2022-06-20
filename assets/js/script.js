// Toggle Mixed Messages
// Variable to keep the button
const btnMixedMessages = document.querySelector(".buttonMixedMessages");
// I use the button variable to put an event on the button
btnMixedMessages.addEventListener(
  "click",
  (toggleMixedMessages = (e) => {
    // Variable to keep the links
    let linksMixedMessages = document.querySelector(".linksMixedMessages");
    // Variable to keep the description text
    let textMixedMessages = document.querySelector(".describeMixedMessages");

    // If the links display are none, then I change some stuff...
    if (window.getComputedStyle(linksMixedMessages, null).getPropertyValue("display") === "none") {
      linksMixedMessages.style.display = "block";
      linksMixedMessages.style.position = "relative";
      textMixedMessages.style.display = "none";
      textMixedMessages.style.position = "absolute";
      btnMixedMessages.innerHTML = "The description!";
    //   ... otherwise I change other stuff...
    } else {
      linksMixedMessages.style.display = "none";
      linksMixedMessages.style.position = "absolute";
      textMixedMessages.style.display = "block";
      textMixedMessages.style.position = "relative";
      btnMixedMessages.innerHTML = "The links!";
    }
  })
);

// Toggle Fotomatic
const btnFotomatic = document.querySelector(".buttonFotomatic");
btnFotomatic.addEventListener(
  "click",
  (toggleFotomatic = (e) => {
    let linksFotomatic = document.querySelector(".linksFotomatic");
    let textFotomatic = document.querySelector(".describeFotomatic");

    if (window.getComputedStyle(linksFotomatic, null).getPropertyValue("display") === "none") {
      linksFotomatic.style.display = "block";
      linksFotomatic.style.position = "relative";
      textFotomatic.style.display = "none";
      textFotomatic.style.position = "absolute";
      btnFotomatic.innerHTML = "The description!";
    } else {
      linksFotomatic.style.display = "none";
      linksFotomatic.style.position = "absolute";
      textFotomatic.style.display = "block";
      textFotomatic.style.position = "relative";
      btnFotomatic.innerHTML = "The links!";
    }
  })
);

// Toggle Tea Cozy
const btnTeaCozy = document.querySelector(".buttonTeaCozy");
btnTeaCozy.addEventListener(
  "click",
  (toggleTeaCozy = (e) => {
    let linksTeaCozy = document.querySelector(".linksTeaCozy");
    let textTeaCozy = document.querySelector(".describeTeaCozy");

    if (window.getComputedStyle(linksTeaCozy, null).getPropertyValue("display") === "none") {
      linksTeaCozy.style.display = "block";
      linksTeaCozy.style.position = "relative";
      textTeaCozy.style.display = "none";
      textTeaCozy.style.position = "absolute";
      btnTeaCozy.innerHTML = "The description!";
    } else {
      linksTeaCozy.style.display = "none";
      linksTeaCozy.style.position = "absolute";
      textTeaCozy.style.display = "block";
      textTeaCozy.style.position = "relative";
      btnTeaCozy.innerHTML = "The links!";
    }
  })
);

// Toggle Website Project System
const btnWebsiteProjectSystem = document.querySelector(".buttonWebsiteProjectSystem");
btnWebsiteProjectSystem.addEventListener(
  "click",
  (toggleTeaCozy = (e) => {
    let linksWebsiteProjectSystem = document.querySelector(".linksWebsiteProjectSystem");
    let textWebsiteProjectSystem = document.querySelector(".describeWebsiteProjectSystem");

    if (window.getComputedStyle(linksWebsiteProjectSystem, null).getPropertyValue("display") === "none") {
      linksWebsiteProjectSystem.style.display = "block";
      linksWebsiteProjectSystem.style.position = "relative";
      textWebsiteProjectSystem.style.display = "none";
      textWebsiteProjectSystem.style.position = "absolute";
      btnWebsiteProjectSystem.innerHTML = "The description!";
    } else {
      linksWebsiteProjectSystem.style.display = "none";
      linksWebsiteProjectSystem.style.position = "absolute";
      textWebsiteProjectSystem.style.display = "block";
      textWebsiteProjectSystem.style.position = "relative";
      btnWebsiteProjectSystem.innerHTML = "The links!";
    }
  })
);

// Toggle Intro Section Dropdown Nav
const btnIntroSectionDropdownNav = document.querySelector(".buttonIntroSectionDropdown");
btnIntroSectionDropdownNav.addEventListener(
  "click",
  (toggleIntroSectionDropdown = (e) => {
    let linksIntroSectionDropdown = document.querySelector(".linksIntroSectionDropdown");
    let describeIntroSectionDropdown = document.querySelector(".describeIntroSectionDropdown");

    if (window.getComputedStyle(linksIntroSectionDropdown, null).getPropertyValue("display") === "none") {
      linksIntroSectionDropdown.style.display = "block";
      linksIntroSectionDropdown.style.position = "relative";
      describeIntroSectionDropdown.style.display = "none";
      describeIntroSectionDropdown.style.position = "absolute";
      btnIntroSectionDropdownNav.innerHTML = "The description!";
    } else {
      linksIntroSectionDropdown.style.display = "none";
      linksIntroSectionDropdown.style.position = "absolute";
      describeIntroSectionDropdown.style.display = "block";
      describeIntroSectionDropdown.style.position = "relative";
      btnIntroSectionDropdownNav.innerHTML = "The links!";
    }
  })
);

// Toggle SWAPI
const btnSWAPI = document.querySelector(".buttonSWAPI");
btnSWAPI.addEventListener(
  "click",
  (toggleWPMysite = (e) => {
    let linksSWAPI = document.querySelector(".linksSWAPI");
    let describeSWAPI = document.querySelector(".describeSWAPI");

    if (window.getComputedStyle(linksSWAPI, null).getPropertyValue("display") === "none") {
      linksSWAPI.style.display = "block";
      linksSWAPI.style.position = "relative";
      describeSWAPI.style.display = "none";
      describeSWAPI.style.position = "absolute";
      btnSWAPI.innerHTML = "The description!";
    } else {
      linksSWAPI.style.display = "none";
      linksSWAPI.style.position = "absolute";
      describeSWAPI.style.display = "block";
      describeSWAPI.style.position = "relative";
      btnSWAPI.innerHTML = "The links!";
    }
  })
);

// Toggle WP Mysite
const btnWPMysite = document.querySelector(".buttonWPMysite");
btnWPMysite.addEventListener(
  "click",
  (toggleWPMysite = (e) => {
    let linksWPMysite = document.querySelector(".linksWPMysite");
    let describeWPMysite = document.querySelector(".describeWPMysite");

    if (window.getComputedStyle(linksWPMysite, null).getPropertyValue("display") === "none") {
      linksWPMysite.style.display = "block";
      linksWPMysite.style.position = "relative";
      describeWPMysite.style.display = "none";
      describeWPMysite.style.position = "absolute";
      btnWPMysite.innerHTML = "The description!";
    } else {
      linksWPMysite.style.display = "none";
      linksWPMysite.style.position = "absolute";
      describeWPMysite.style.display = "block";
      describeWPMysite.style.position = "relative";
      btnWPMysite.innerHTML = "The links!";
    }
  })
);

// Toggle Sunny Agency Landing
const btnSunnyAgency = document.querySelector(".buttonSunnyAgency");
btnSunnyAgency.addEventListener(
  "click",
  (toggleSunnyAgencyLanding = (e) => {
    let linksSunnyAgency = document.querySelector(".linksSunnyAgency");
    let describeSunnyAgency = document.querySelector(".describeSunnyAgency");

    if (window.getComputedStyle(linksSunnyAgency, null).getPropertyValue("display") === "none") {
      linksSunnyAgency.style.display = "block";
      linksSunnyAgency.style.position = "relative";
      describeSunnyAgency.style.display = "none";
      describeSunnyAgency.style.position = "absolute";
      btnSunnyAgency.innerHTML = "The description!";
    } else {
      linksSunnyAgency.style.display = "none";
      linksSunnyAgency.style.position = "absolute";
      describeSunnyAgency.style.display = "block";
      describeSunnyAgency.style.position = "relative";
      btnSunnyAgency.innerHTML = "The links!";
    }
  })
);

// Toggle NFT Preview Card
const btnNFTPreviewCard = document.querySelector(".buttonNFTPreviewCard");
btnNFTPreviewCard.addEventListener(
  "click",
  (toggleNFTPreviewCard = (e) => {
    let linksNFTPreviewCard = document.querySelector(".linksNFTPreviewCard");
    let describeNFTPreviewCard = document.querySelector(".describeNFTPreviewCard");

    if (window.getComputedStyle(linksNFTPreviewCard, null).getPropertyValue("display") === "none") {
      linksNFTPreviewCard.style.display = "block";
      linksNFTPreviewCard.style.position = "relative";
      describeNFTPreviewCard.style.display = "none";
      describeNFTPreviewCard.style.position = "absolute";
      btnNFTPreviewCard.innerHTML = "The description!";
    } else {
      linksNFTPreviewCard.style.display = "none";
      linksNFTPreviewCard.style.position = "absolute";
      describeNFTPreviewCard.style.display = "block";
      describeNFTPreviewCard.style.position = "relative";
      btnNFTPreviewCard.innerHTML = "The links!";
    }
  })
);

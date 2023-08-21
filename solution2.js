/*WAP to get the Social Links, Email & Contacts details of a website on user input.
Input:
https://ful.io
Output:
Social links -
https://www.facebook.com/fulioTech/
https://www.linkedin.com/company/ful-io/
Email/ssupport@ful.io
Contact:
+1 343 303 6668  */




const axios = require("axios");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

async function fetchWebsiteContent(url) {
  const response = await axios.get(url);
  return response.data;
}

function extractSocialLinks(dom) {
  const socialLinks = [];

  const socialLinkElements = dom.window.document.querySelectorAll("a[href*='facebook.com'], a[href*='linkedin.com']");
  socialLinkElements.forEach(linkElement => {
    socialLinks.push(linkElement.href);
  });

  return socialLinks;
}

function extractEmailAddresses(dom) {
  const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})/g;
  const emailMatches = dom.serialize().match(emailRegex) || [];
  return emailMatches;
}

function extractContactDetails(dom) {
  const contactRegex = /(\+\d{1,3}\s?\d{1,5}\s?\d{3}\s?\d{4,6})/g;
  const contactMatches = dom.serialize().match(contactRegex) || [];
  return contactMatches;
}

async function getWebsiteDetails(url) {
  try {
    const htmlContent = await fetchWebsiteContent(url);
    const dom = new JSDOM(htmlContent);

    const socialLinks = extractSocialLinks(dom);
    const emailAddresses = extractEmailAddresses(dom);
    const contactDetails = extractContactDetails(dom);

    console.log("Social Links:");
    socialLinks.forEach(link => console.log(link));
    console.log("Email Addresses:");
    emailAddresses.forEach(email => console.log(email));
    console.log("Contact:");
    contactDetails.forEach(contact => console.log(contact.trim()));
  } catch (error) {
    console.error("Error:", error);
  }
}

const websiteURL = "https://ful.io";
getWebsiteDetails(websiteURL);

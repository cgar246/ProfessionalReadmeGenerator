// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license){
    return `
    <p><img src="https://img.shields.io/badge/license-${license}-blue"></p>
    `
  }else{
    return '';
  }}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license == "mit"){
    return `[MIT license](https://opensource.org/licenses/MIT)`;
      }else if(license == "apache"){
        return 'https://www.apache.org/licenses/LICENSE-2.0';
      } else if(license == "gpl"){
        return 'https://www.gnu.org/licenses/gpl-3.0.en.html';
      } else {
        return "";
      }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license){
    return `## License 
    ${license}`;
  }else{
    return '';
  }
    
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseSection = renderLicenseSection(data.license);
  let licenseLink = renderLicenseLink(data.license);
  let badge = renderLicenseBadge(data.license);
  return `# ${data.name} README \n
${badge}
## Table of Contents 
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributions](#contributions)
* [Test](#tests)
* [Questions](#questions)
## Description 
${data.name} v${data.version}\n
${data.description}\n
Link: ${data.link}\n
## Installation \n
${data.installation}
## Usage \n
${data.usage}
${licenseSection}
${licenseLink}
## Contributions \n
${data.contribution}
## Tests \n
${data.test}
## Questions \n
For general inquiry regarding ${data.name} v${data.version}, please contact us via the following channels: \n
- ${data.username} - [@github](https://github.com/${data.username}/)
- [Email](mailto:${data.email})
`;
}

module.exports = generateMarkdown;

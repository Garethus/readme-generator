// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  let badge;

  switch (license) {
    case "Apache License 2.0":
      badge = { name: "Apache+2.0", color: "green" };
      break;
    case "GNU General Public License v3.0":
      badge = { name: "GNU+GPLv3", color: "red" };
      break;
    case "MIT License":
      badge = { name: "MIT", color: "brightgreen" };
      break;
    case "Boost Software License 1.0":
      badge = { name: "Boost+Software+1.0", color: "yellowgreen" };
      break;
    case "GNU Affero General Public License v3.0":
      badge = { name: "GNU+AGPLv3", color: "orange" };
      break;
    case "GNU Lesser General Public License v3.0":
      badge = { name: "GNU+LGPLv3", color: "blue" };
      break;
    case "Mozilla Public License 2.0":
      badge = { name: "Mozilla+2.0", color: "yellow" };
      break;
    case "The Unlicense":
      badge = { name: "The+Unlicense", color: "blueviolet" };
      break;
    default:
      badge = "";
  }
  return `https://img.shields.io/static/v1?label=license&message=${badge.name}&color=${badge.color})`;
}
// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  let path;

  switch (license) {
    case "Apache License 2.0":
      path = "apache-2.0";
      break;
    case "GNU General Public License v3.0":
      path = "gpl-3.0";
      break;
    case "MIT License":
      path = "mit";
      break;
    case "Boost Software License 1.0":
      path = "bsl-1.0";
      break;
    case "GNU Affero General Public License v3.0":
      path = "agpl-3.0";
      break;
    case "GNU Lesser General Public License v3.0":
      path = "lgpl-3.0";
      break;
    case "Mozilla Public License 2.0":
      path = "mpl-2.0";
      break;
    case "The Unlicense":
      path = "unlicense";
      break;
    default:
      badge = "";
  }

  return `https://choosealicense.com/licenses/${path}/`;
}

// Function that returns the license section of README
function renderLicenseSection(license) {
  let licenseUrl = renderLicenseLink(license)
  return `This project is licensed under the ${license} - see the [License](${licenseUrl}) page.`
}

// Function to generate markdown for README
function generateMarkdown(data) {
  let licenseBadge = renderLicenseBadge(data.license)
  let licenseSection = renderLicenseSection(data.license)
  return (`# ${data.title}
    \n![License](${licenseBadge}     
    \n${data.description}
    \n## Table of Contents
    \n* [Installation](#Installation)
    \n* [Usage](#Usage)
    \n* [License](#License)
    \n* [Contributing](#Contributing)
    \n* [Tests](#Tests)
    \n* [Questions](#Questions)
    \n## Installation
    \n${data.installation}
    \n## Usage
    \n${data.usage}
    \n## License
    \n${licenseSection}
    \n## Contributing
    \n${data.contributing}
    \n## Tests
    \n${data.tests}
    \n## Questions
    \nIf you have any questions about the project please contact me through my [GitHub](https://github.com/${data.username}) or email me at ${data.email}
  `)
};

module.exports = generateMarkdown;

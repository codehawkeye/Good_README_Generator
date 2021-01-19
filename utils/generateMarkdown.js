// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  # Readme Generator
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
​
## Description
​
This project allows users to generate readme files for their application. It uses Node.js
​
## Table of Contents 
​
* [Installation](#installation)
​
* [Usage](#usage)
​
* [License](#license)
​
* [Contributing](#contributing)
​
* [Tests](#tests)
​
* [Questions](#questions)
​
## Installation
​
To install necessary dependencies, run the following command:
​
```
// npm i
```
​
## Usage
​${data.usage}
use git clone to pull down the repo 
​
## License
​​${data.license}
This project is licensed under the MIT license.
  
## Contributing
​​${data.contribution}
users cannot contribute to this repo
​
## Tests
​​${data.test}
To run tests, run the following command:
​
```
// npm test
```
​
## Questions
​
If you have any questions about the repo, open an issue or contact me directly at elit.mikecarter@gmail.com. You can find more of my work at [Mike Carter](https://github.com/codehawkeye).

  
`;
}

module.exports = generateMarkdown;

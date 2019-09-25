const contentfulExport = require('contentful-export') // core library that runs the export
const contentfulConfig = require('./contentfulConfig') // your Contentful configuration

// contentfulExport documentation can be found at https://github.com/contentful/contentful-export
contentfulExport(contentfulConfig)
  .then(result => {
    console.log('Your space data:', result)
  })
  .catch(err => {
    console.log('Oh no! Some errors occurred!', err)
  })

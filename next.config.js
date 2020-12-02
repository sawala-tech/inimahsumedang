const path = require('path')

module.exports = {
   images: {
      domains: ['inimahsumedang.s3.ap-southeast-1.amazonaws.com']
   },
   sassOptions: {
      includePaths: [path.join(__dirname, 'styles')]
   }
}

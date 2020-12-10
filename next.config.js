const path = require('path')

const withOptimizedImages = require('next-optimized-images')

module.exports = withOptimizedImages({
   env: {
      API_URL: 'https://ims.ieu.shi'
   },
   /* config for next-optimized-images */
   images: {
      domains: ['inimahsumedang.s3.ap-southeast-1.amazonaws.com']
   },
   sassOptions: {
      includePaths: [path.join(__dirname, 'styles')]
   }
})

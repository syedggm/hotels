import { createClient } from "contentful";

export default createClient({
  space: process.env.REACT_APP_API_SPACE,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
});

// const contentful = require('contentful')

// const client = contentful.createClient({
//   space: 'inpwempzhan5',
//   accessToken: 'Zslq1ieMTfM9315p3NoXndGeZ3U3MG6L_hj__l8uK3c'
// })

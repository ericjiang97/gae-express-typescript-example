const { Datastore } = require("@google-cloud/datastore");
const datastore = new Datastore({
  projectId: process.env.PROJECT_ID,
  keyFilename: process.env.KEY_FILENAME
});

module.exports = { datastore };

const admin = require("firebase-admin");
//const { getAnalytics } = require("firebase/analytics");

admin.initializeApp();
//const analytics = getAnalytics(admin);

const db = admin.firestore();
const rtdb = admin.database();
module.exports = {
  db,
  rtdb,
  admin
};

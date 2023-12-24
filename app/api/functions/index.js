// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
// eslint-disable-next-line @typescript-eslint/no-var-requires
const functions = require("firebase-functions");

// eslint-disable-next-line @typescript-eslint/no-var-requires
const cors = require("cors")({
  origin: true,
});

// The Firebase Admin SDK to access the Firebase Realtime Database.
// eslint-disable-next-line @typescript-eslint/no-var-requires
const admin = require("firebase-admin");
admin.initializeApp();

// Take the text parameter passed to this HTTP endpoint and insert it into the
// Realtime Database under the path /messages/:pushId/original
exports.addMessage = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    // Grab the text parameter.
    const original = req.body;
    console.info("original", original);
    console.info("request is :", req.body);
    // Push the new message into the Realtime Database using the Firebase Admin SDK.
    const snapshot = await admin.database().ref("/messages").push({ repo: original });
    // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
    res.redirect(303, snapshot.ref.toString());
  });
});

exports.createUser = functions.https.onRequest(async (req, res) => {
  const email = req.query.email;
  const password = req.query.password;

  admin
    .auth()
    .createUser({
      email: email,
      password: password,
    })
    .then((userRecord) => {
      // See the UserRecord reference doc for the contents of userRecord.
      console.log("Successfully created new user:", userRecord.uid);
      res.send("Successfully created new user: " + userRecord.uid);
    })
    .catch((error) => {
      console.error("Error creating new user:", error);
      res.status(500).send("Error creating new user: " + error);
    });
});

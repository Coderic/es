const express = require('express');
const functions = require("firebase-functions");
const { setGlobalOptions } = require("firebase-functions/v2");
const { onRequest, onCall } = require("firebase-functions/v2/https");
const { onDocumentWritten, onDocumentCreated } = require("firebase-functions/v2/firestore");
const { onMessagePublished } = require("firebase-functions/v2/pubsub");
const { getFirestore } = require("firebase-admin/firestore");

const { defineSecret } = require('firebase-functions/params');
const { Octokit } = require("@octokit/rest");
const acceptLanguage = require('accept-language');

const githubToken = defineSecret('GITHUB_TOKEN');
const cloudflareToken = defineSecret('CLOUDFLARE_TOKEN');
const cloudflareZoneId = defineSecret('CLOUDFLARE_ZONE_ID');

setGlobalOptions({ maxInstances: 4 });

const app = express();
/*
const onCallFn = require("./cloud/on-call");
const onCreateFn = require("./cloud/on-create");
const onWriteFn = require("./cloud/on-write");
const onUpdateFn = require("./cloud/on-update");
const pubSubFn = require("./cloud/pub-sub");
*/
exports.invitee = onRequest(
  { secrets: [githubToken] },
  async (req, res) => {
    acceptLanguage.languages(['en', 'es']);
    let lang = acceptLanguage.get(req.get('Accept-Language'));

    const octokit = new Octokit({ auth: githubToken.value() });
    let invitee_id = req.body.data;
    try {
      //console.dir(req);

      const { data, } = await octokit.rest.orgs.createInvitation({
        invitee_id: invitee_id,
        org: 'CodericLatam',
        team_ids: [9194674],
      });
      res.json(data);
    }
    catch (error) {
      console.dir(error.response);
      res.json(error.response);
    }
  }
);

exports.dns = onRequest(
  {
    secrets: [cloudflareToken, cloudflareZoneId],
    cors: [/firebase\.com$/, "coderic.org", "localhost:4200"]
  },
  async (req, res) => {
    var cf = require('cloudflare')({
      token: cloudflareToken.value()
    });

    var { result } = await cf.dnsRecords.browse(cloudflareZoneId.value());
    res.json(result);
  }
);

//exports.backend = onRequest(app);
const { Webhooks, createNodeMiddleware } = require("@octokit/webhooks");
const webhooks = new Webhooks({
  secret: "mysecret",
});

webhooks.onAny(({ id, name, payload }) => {
  console.log(name, "event received");
});

exports.webhooks = onRequest(createNodeMiddleware(webhooks, { path: '/' }));
/*
exports.addmessage = onRequest(async (req, res) => {
  // Grab the text parameter.
  const original = req.query.text;
  // Push the new message into Firestore using the Firebase Admin SDK.
  const writeResult = await getFirestore()
    .collection("messages")
    .add({ original: original });
  // Send back a message that we've successfully written the message
  res.json({ result: `Message with ID: ${writeResult.id} added.` });
});

exports.upper = functions.https.onCall(async data => {
  try {
    console.dir(data);

    return data.coolMsg;
  } catch (error) {
    console.log(error);
    throw new functions.https.HttpsError(
      "invalid-argument",
      error.message,
      error
    );
  }
}
);
/*
exports.makeuppercase = onDocumentCreated("/messages/{documentId}", (event) => {
  const original = event.data.data().original;
  logger.log("Uppercasing", event.params.documentId, original);
  const uppercase = original.toUpperCase();
  return event.data.ref.set({uppercase}, {merge: true});
});

exports.resendVerificationEmail = functions.https.onCall(
  onCallFn.resendVerificationEmailHandler
);

exports.sendPasswordUpdateEmail = functions.https.onCall(
  onCallFn.sendPasswordUpdateEmailHandler
);
//+++++++++++++++++++++onCreate Functions+++++++++++++++++++++++++++++++
exports.sendVerificationEmail = functions.auth
  .user()
  .onCreate(onCreateFn.sendVerificationEmailHandler);

exports.createOrganization = functions.firestore
  .document("cl_org_general/{org_handle}")
  .onCreate(onCreateFn.createOrganizationHandler);

//++++++++++++++++++++onWrite Functions+++++++++++++++++++++++++++++++
exports.registerUserHandle = functions.firestore
  .document("cl_user/{uid}")
  .onWrite(onWriteFn.registerUserHandleHandler);

//++++++++++++++++++++onUpdate Functions++++++++++++++++++++++++++++++
exports.updateOrgUser = functions.firestore
  .document("cl_org_general/{org_handle}/cl_org_users/users")
  .onUpdate(onUpdateFn.addOrgUserHandler);
/*
//++++++++++++++++++++Pub/Sub Functions++++++++++++++++++++++++++++++
exports.deleteTutorialSteps = functions.pubsub
  .schedule("every 7 days")
  .onRun(pubSubFn.deleteTutorialStepsHandler);
exports.members = onMessagePublished("members", (event) => {

});
*/

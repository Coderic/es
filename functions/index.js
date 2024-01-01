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

const githubToken = defineSecret('TOKEN_GH');

setGlobalOptions({ maxInstances: 4 });

exports.invitee = onRequest(
  { secrets: [githubToken] },
  async (req, res) => {
    const octokit = new Octokit({ auth: githubToken.value() });
    let invitee_id = req.body.data;
    try {
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
const { Webhooks, createNodeMiddleware } = require("@octokit/webhooks");
const webhooks = new Webhooks({
  secret: "mysecret",
});

webhooks.onAny(({ id, name, payload }) => {
  console.log(name, "event received");
});

exports.webhooks = onRequest(createNodeMiddleware(webhooks, { path: '/' }));

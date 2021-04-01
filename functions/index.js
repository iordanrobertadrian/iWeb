const functions = require('firebase-functions');
var admin = require('firebase-admin');
admin.initializeApp();

exports.sendMailContactForm = functions.firestore
    .document('CereriOferta/{Id}')
    .onCreate(async (snap, context) => {
      await admin
        .firestore()
        .collection("mail")
        .add({
            to: "support@iweb-solution.ro",
            message: {
            subject: "Cerere oferta noua !",
            html: `
            Descriere ${snap.data().description}<br>
            Email ${snap.data().email}<br>
            Nume ${snap.data().name}<br>
            Telefon ${snap.data().phone}<br>
            `},
        })
        .then(() => console.log("Queued email for delivery!"));
    });
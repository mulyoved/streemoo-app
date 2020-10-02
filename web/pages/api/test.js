import * as admin from "firebase-admin";
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
serviceAccount.private_key = serviceAccount.private_key.replace(/<new-line>/g, "\n");

if (admin.apps.length === 0) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://streemoo.firebaseio.com",
  });
}

export default (req, res) => {
  const matchRef = admin.firestore().collection("sample");
  matchRef
    .doc("NvilKZmrFVIEwtgadTOt")
    .get()
    .then((answer) => {
      console.log(`muly:test:testFB`, { answer: answer.data() });

      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ name: answer.data() }));
    })
    .catch((err) => {
      res.statusCode = 400;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ message: err.message }));
    });
};

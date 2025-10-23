const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();
const auth = admin.auth();
const db = admin.firestore();

// Cloud Function to create a new user
exports.createUser = functions.https.onCall(async (data, context) => {
  try {
    // Create the user in Firebase Authentication
    const userRecord = await auth.createUser({
      email: data.email,
      password: data.password,
      displayName: data.name,
    });

    // Save extra details in Firestore
    await db.collection("users").doc(userRecord.uid).set({
      name: data.name,
      email: data.email,
      role: data.role || "student",
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    return { success: true, uid: userRecord.uid };
  } catch (error) {
    console.error("Error creating user:", error);
    return { success: false, error: error.message };
  }
});

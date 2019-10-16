/**
 * Adds the provided JSON object to the Firebase Storage
 * 
 * @param score  * pstsm from users score they have received
 */
function updateDatabase(score) {
    const userId = firebase.auth().currentUser.uid;
    var userScore = {score};
    firebase.database().ref('users/' + userId).child("score").update(userScore);
    
}

/**
 * Get's a JSON snapshot the current users data from the Firebase Storage
 * 
 * @returns A promise that will resolve with a snapshot
 */
function getCurrentUserData() {
    var promise = new Promise(function (resolve, reject) {

        const userId = firebase.auth().currentUser.uid;

        firebase.database().ref('users/' + userId).once('value').then(function (snapshot) {
            if (snapshot === undefined) {
                reject()
            }
            else {
                resolve(snapshot);
            }
        });

    })

    return promise;
}
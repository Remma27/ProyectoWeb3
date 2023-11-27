// JavaScript Document
var db = firebase.firestore();

// Get references to form inputs
const commentInput = document.querySelector('#commentInput');
const btnAddComment = document.querySelector('#btnAddComment');

let currentProjectId = 'defaultProjectId';

// Function to show comments for the currently selected project
function showComments(projectId) {
    const commentsList = document.querySelector('#commentsList');

    // Clear the current comments
    commentsList.innerHTML = '';

    // Get and display comments for the project
    db.collection("projectComments").doc(projectId).collection("comments")
        .get()
        .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                // Create and append a list item for each comment
                const commentItem = document.createElement('li');
                commentItem.textContent = doc.data().text;
                commentsList.appendChild(commentItem);
            });
        })
        .catch(function (error) {
            console.error("Error getting comments: ", error);
        });
}

// Function to add a comment to the currently selected project
function addComment(projectId) {
    const commentText = commentInput.value.trim();

    if (commentText !== '') {
        // Add the comment to the Firestore collection
        db.collection("projectComments").doc(projectId).collection("comments").add({
            text: commentText,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
            .then(function () {
                // Clear the comment input
                commentInput.value = '';

                // Refresh the comments list for the current project
                showComments(projectId);
            })
            .catch(function (error) {
                console.error("Error adding comment: ", error);
            });
    }
}

// Add click event listener to the Add Comment button
btnAddComment.addEventListener('click', function () {
    addComment(currentProjectId);
});

// Event listener to change the current project
document.getElementById('projectDropdown').addEventListener('change', function (event) {
    currentProjectId = event.target.value;

    showComments(currentProjectId);
});

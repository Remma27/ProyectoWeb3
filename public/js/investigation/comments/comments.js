function showComments(projectId) {
    var commentsList = document.getElementById('commentsList');
    commentsList.innerHTML = ''; // Clear list before showing new comments

    // Get comments on a specific project
    firebase.firestore().collection('comments').where('projectId', '==', projectId).get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            var commentItem = document.createElement('li');
            commentItem.textContent = doc.data().text;
            commentsList.appendChild(commentItem);
        });
    }).catch(function(error) {
        console.error('Error getting comments:', error);
    });
}

function addComment(projectId) {
    var commentInput = document.getElementById('commentInput');
    var commentText = commentInput.value.trim();

    if (commentText !== '') {
        // Save the comment in firebase
        firebase.firestore().collection('comments').add({
            projectId: projectId,
            text: commentText
        }).then(function() {
            // Clear the input field after adding the comment
            commentInput.value = '';
            // Show the new comments
            showComments(projectId);
        }).catch(function(error) {
            console.error('Error adding comment:', error);
        });
    }
}

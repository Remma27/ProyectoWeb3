var researchProjectsRef = firebase.firestore().collection("researchProjects");

// Get reference to the container where projects will be displayed
var projectsContainer = document.querySelector('#projectsContainer');

// Get reference to the input field and filter button
var areaFilterInput = document.getElementById('areaFilter');
var btnFilter = document.getElementById('btnFilter');

function showProjectsByAreaFilter(areaFilter) {
    projectsContainer.innerHTML = '';

    // Get and display filtered projects
    researchProjectsRef.where("areaOfInterest", ">=", areaFilter)
                       .where("areaOfInterest", "<=", areaFilter + '\uf8ff')
                       .get()
                       .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // Create HTML elements to display project information
            var projectDiv = document.createElement('div');
            projectDiv.classList.add('project');

            var projectTitle = document.createElement('h3');
            projectTitle.textContent = doc.data().researchTitle;

            var projectAreaOfInterest = document.createElement('div');
            projectAreaOfInterest.innerHTML = '<strong>Area of interest:</strong> ' + doc.data().areaOfInterest;

            var projectDescription = document.createElement('div');
            projectDescription.innerHTML = '<strong>Topic description:</strong> ' + doc.data().topicDescription;

            var projectPdfUrl = document.createElement('a');
            projectPdfUrl.href = doc.data().pdfUrl;
            projectPdfUrl.innerHTML = '<strong>Click to view the PDF file</strong>';

            var projectConclusions = document.createElement('div');
            projectConclusions.innerHTML = '<strong>Conclusions:</strong> ' + doc.data().conclusions;

            var projectFinalRecommendations = document.createElement('div');
            projectFinalRecommendations.innerHTML = '<strong>Final recommendations:</strong> ' + doc.data().finalRecommendations;

            // Add elements to the container
            projectDiv.appendChild(projectTitle);
            projectDiv.appendChild(projectAreaOfInterest);
            projectDiv.appendChild(projectDescription);
            projectDiv.appendChild(projectPdfUrl);
            projectDiv.appendChild(projectConclusions);
            projectDiv.appendChild(projectFinalRecommendations);

            // Include the comments section from comments.js
            /*var commentsSection = document.createElement('div');
            commentsSection.classList.add('comments-section');
            commentsSection.innerHTML = `
                <ul id="commentsList${doc.id}"></ul>
                <input type="text" id="commentInput${doc.id}" placeholder="Add a comment">
                <button onclick="addComment('${doc.id}')">Add Comment</button>
            `;
            projectDiv.appendChild(commentsSection);*/

            // Add the project to the main container
            projectsContainer.appendChild(projectDiv);

            // Load existing comments for the project
            //showComments(doc.id);
        });
    }).catch(function(error) {
        console.error("Error getting projects: ", error);
    });
}

// Add click event to the filter button
btnFilter.addEventListener('click', function() {
    var areaFilterValue = areaFilterInput.value.trim();
    if (areaFilterValue !== '') {
        showProjectsByAreaFilter(areaFilterValue);
    } else {
        // If the field is empty, show all projects
        showProjectsByAreaFilter('');
    }
});

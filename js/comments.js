function loadComments() {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((data) => displayComments(data));
}
function displayComments(comments) {
  //get the container
  const commentsContainer = document.getElementById("comments-container");
  for (const comment of comments) {
    const commentsDiv = document.createElement("div");
    commentsDiv.innerHTML = `
        <h3>Body: ${comment.body}</h3>
        <h4>Email: ${comment.email}</h4>
        <h2>Writer: ${comment.name}</h2>
        `;
    commentsContainer.appendChild(commentsDiv);
  }
}
loadComments();

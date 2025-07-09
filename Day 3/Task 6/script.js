//Task Six

function renderPosts(posts) {
    const container = document.getElementById("postsContainer");
    container.innerHTML = posts.map(post => `
        <div class="post-card">
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        </div>
    `).join("");
}

function fetchPostsThen(num) {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=" + num)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error status: ${response.status}`);
            }
            return response.json();
        })
        .then(renderPosts)
        .catch(err => {
            console.error("Fetch error:", err);
            alert("Failed to load posts: " + err.message);
        });
}

async function fetchPostsAsync(num) {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=" + num);
        if (!response.ok) {
            throw new Error(`HTTP error status: ${response.status}`);
        }
        renderPosts(await response.json());
    } catch (err) {
        console.error("Fetch error:", err);
        alert("Failed to load posts: " + err.message);
    }
}
fetchPostsThen(a);
//fetchPostsAsync(2);

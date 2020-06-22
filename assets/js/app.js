const postsContainer = document.querySelector('#posts-container')

let page = 1

const getPosts = async () => {
    const response = await fetch(`http://127.0.0.1:4000/site/api-post.json?_limit=3&_page=${page}`)
    return response.json()
}

const addPostsIntoDOM = async() => {
    const posts = await getPosts()
    const postsTemplate = posts.map(( {title, url, content}) => `
        <div class="post">
            <div class="number">${title}</div>
            <div class="post-info">
                <h2 class="post-title"> ${url} </h2>
                <p class="post-body"> ${content} </p>
            </div>
        </div>
    `).join('')

    postsContainer.innerHTML += postsTemplate
}

addPostsIntoDOM()


/* O vídeo acaba em 22:48 -- */
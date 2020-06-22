const postsContainer = document.querySelector('#posts-container')

let page = 1

const getPosts = async () => {
    const response = await fetch(`/site/api-post.json?_limit=3&_page=${page}`)
    return response.json()
}

const addPostsIntoDOM = async() => {
    const posts = await getPosts()
    const postsTemplate = posts.map(({number, title, url, description}) => `
        <h2> <a href=${url}> ${title} </a> </h2>
        <p>${description}</p>
    `).join('')

    postsContainer.innerHTML += postsTemplate
}

addPostsIntoDOM()


/* O vídeo acaba em 22:48 -- */
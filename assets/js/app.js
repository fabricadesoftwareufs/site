const postsContainer = document.querySelector('#posts-container')

let page = 1

const getPosts = async () => {
    const response = await fetch(`https://fabricadesoftwareufs.github.io/site/api-post.json?_limit=3&_page=${page}`)
    return response.json()
}

const addPostsIntoDOM = async() => {
    const posts = await getPosts()
    const postsTemplate = posts.map(({number, title}) => `
        <h2>${number}</h2>
        <h2>${title}</h2>
    `).join('')

    postsContainer.innerHTML += postsTemplate
}

addPostsIntoDOM()

/* O vídeo acaba em 22:48 -- */
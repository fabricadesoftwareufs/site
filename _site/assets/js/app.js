const postsContainer = document.querySelector('#posts-container')
const loaderContainer = document.querySelector('.loader')

let page = 1

const getPosts = async () => {
    const response = await fetch(`/site/api-post.json?_limit=1&_page=${page}`)
    return response.json()
}

const addPostsIntoDOM = async() => {
    const posts = await getPosts()
    const postsTemplate = posts.map(({number, title, url, description}) => `
        <h2> <a href=${url}> ${title} </a> </h2>
        <h1>${description}</h1>
        <h1 class="button special"> <a href=${url}> LEIA MAIS </a><h1>
    `).join('')

    postsContainer.innerHTML += postsTemplate
}

addPostsIntoDOM()

const getNextPosts = () => {
    page++
    addPostsIntoDOM()
}


const removeLoader = () => {
    setTimeout(() => {
        loaderContainer.classList.remove('show')
        getNextPosts()
    }, 1000)
}

const showLoader = () => {
    loaderContainer.classList.add('show')
    removeLoader()
}

window.addEventListener('scroll', () => {
    const { clientHeight, scrollHeight, scrollTop } = document.documentElement
    const isPageBottomAlmostReached = scrollTop + clientHeight >= scrollHeight - 10

    if (isPageBottomAlmostReached){
        showLoader()
    }
})
/* O vídeo acaba em 22:48 -- */
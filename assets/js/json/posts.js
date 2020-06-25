const postsContainer = document.querySelector('#posts-container')
const loaderContainer = document.querySelector('.loader')
const filterInput = document.querySelector('#filter')

let page = 1

const getPosts = async () => {
    const response = await fetch(`/site/json/posts.json?_limit=3&_page=${page}`)
    return response.json()
}

const addPostsIntoDOM = async() => {
    const posts = await getPosts()
    const postsTemplate = posts.map(({ title, url, description}) => `
        <div class="post">
            <h2 class="post-title"> <a href=${url}> ${title} </a> </h2>
            <h1 class="post-description"> ${description}</h1>
            <h1 class="button special"> <a href=${url}> LEIA MAIS </a><h1>
        </div>
    `).join('')

    postsContainer.innerHTML += postsTemplate
}

addPostsIntoDOM()

const getNextPosts = () => {
    setTimeout(() => {
        page++
        addPostsIntoDOM()
    }, 300)
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

filterInput.addEventListener('input', event => {
    const inputValue = event.target.value.toLowerCase()
    const posts = document.querySelectorAll('.post')

    posts.forEach(post => {
        const postTitle = post.querySelector('.post-title').textContent.toLowerCase()
        const postDescription = post.querySelector('.post-description').textContent.toLowerCase()

        if (postTitle.includes(inputValue) || postDescription.includes(inputValue)){
            post.style.display = 'block'
            return
        }
        post.style.display = 'none'
    })
})


/* O vídeo acaba em 22:48 -- */
function filterCategory(category){
    const posts = document.querySelectorAll('.post');
    posts.forEach(post => {
        if(post.classList.contains(category)){
            post.style.display = "flex";
        } else {
            post.style.display = "none";
        }
    });
}
function postData() {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            reslove("Post is here ")
        }, 2000);
    })
}
function commentData() {
     return new Promise((reslove, reject) => {
        setTimeout(() => {
            reslove("Comment is here ")
        }, 4000);
    })
}


async function fetchData() {
    try {
        console.log("fetching the post");
        
        let [post, comment] = await Promise.all([postData(), commentData()])
        console.log("fetching done");
        console.log(post)
        console.log(comment);
        
        
        
    } catch (error) {
        console.warn(error);
        
    }
}


fetchData()
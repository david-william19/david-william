export async function getPosts() {
    const response = await fetch('https://dev.to/api/articles?username=davidwilliam_')

    return response.json();
}

export async function getTags() {
    const response = await fetch('https://dev.to/api/tags')

    return response.json();
}
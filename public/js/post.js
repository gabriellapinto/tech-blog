const newPostFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();

    if (title && content) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Post Creation Failed')
        }
    }
};

const postId = window.location.toString().split('/')
[
    window.location.toString().split('/').length - 1
];

const updatePostFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#post-title-update').value.trim();
    const content = document.querySelector('#post-content-update').value.trim();

    if (title && content) {
        const response = await fetch(`/api/posts/${postId}`, {
            method: 'PUT',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Post Update Failed')
        }
    }
};

document.querySelector('#new-post-form').addEventListener('submit', newPostFormHandler);

const updatePostButton = document.querySelector('#update-post');
if (updatePostButton) {
    updatePostButton.addEventListener('click', updatePostFormHandler);
}
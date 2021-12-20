const del_img = document.querySelector('#delete-img-btn')
if (del_img) {
    del_img.addEventListener('click', function (e) {
        e.target.closest('#delete-img-btn').remove()
        document.querySelector('#edit-img').remove()
        document.querySelector('#teaser_image').classList.remove('hidden')
    });
}
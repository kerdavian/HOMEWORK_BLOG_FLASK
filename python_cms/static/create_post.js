

document.querySelector('#createPost').addEventListener('click', function(e){
  // if the text area has no text in it, we'll alert the user
  const data = CKEDITOR.instances.body.getData();
  if (!data) {
    alert( 'Article content is required.' );
    e.preventDefault();
  }
});

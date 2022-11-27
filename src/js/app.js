window.addEventListener('DOMContentLoaded', () => {
  // This block will be executed once the page is loaded and ready
  function updateTitle() {
    setTimeout(() => {
      document.title = 'One new message';
      console.log('works');
    }, 3000);
  }
  updateTitle();

  const button = document.querySelector('.button');
  button.addEventListener('click', () => {
    alert('💣');
  });
});

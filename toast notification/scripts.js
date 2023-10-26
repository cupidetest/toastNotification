console.log('hello');
const showToastButton = document.getElementById('button');

showToastButton.addEventListener('click', () => {
  showToast('This is a toast notification!');
});

function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerText = message;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000); // Display the toast for 3 seconds
}

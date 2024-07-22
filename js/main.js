

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById('floating');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll'); 
    else scrollUp.classList.remove('show-scroll');
    document.getElementById('floating-toggle').classList.remove("active");
}
window.addEventListener('scroll', scrollUp)

/*=============== SHOW & HIDE MENU ===============*/
const toggleButton = document.getElementById('floating-toggle')

const activeMenu = () => {
    toggleButton.classList.toggle('active')
}


toggleButton.addEventListener('click', activeMenu)




  
  // Call the updateBodyClass function to set the initial body class
  updateBodyClass();
  
  // Set up an interval to update the body class every minute (in milliseconds)
  setInterval(updateBodyClass, 60 * 1000);
  




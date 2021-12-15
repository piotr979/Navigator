
const sidebarChapters = document.getElementById('sidebar-chapters');
const navigatorContent = document.getElementById('navigator-content');
const chaptersCollection = document.getElementsByClassName('navigator-chapter');
console.log(chaptersCollection);


for (let chapter of chaptersCollection) {

    /*
    * creates following structure
    * <a>1 DIV + 1 DIV</a> (both divs flex)
    */


    const anchor = document.createElement('a');
    const label = document.createTextNode(chapter.innerHTML);
  
    anchor.appendChild(label);
    anchor.setAttribute('href', '#' + chapter.id);
    anchor.classList.add('sidebar-chapter__link');
    sidebarChapters.appendChild(anchor);

}
// SMOOTH SCROLLING 
// https://stackoverflow.com/a/7717572/1496972
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

 //create Node
    
    
 // add Node to navigator
 // 

/* Generate links from chapters */

/* check if screen resizes, than check/uncheck input
*  if screen size < 80em sidebar is hidden
*  if bigger (desktop) than show sidebar
*  it's based on:
*  https://stackoverflow.com/a/46438472/1496972 
*/
window.addEventListener('resize', function() {
    if (window.matchMedia('(max-width: 80em)').matches) {
        document.getElementById('navigator-check').checked = false;
    } else {
        document.getElementById('navigator-check').checked = true;
    }
}, true);

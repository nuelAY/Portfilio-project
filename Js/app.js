const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const selectButtons = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

//PAGE TRANSITION

//Button Click Active class
selectButtons.forEach(selectctButton => {
    selectctButton.addEventListener('click', () => {
        removeActive();
        selectctButton.classList.add('active-btn');
    });
});
function removeActive(){
    selectButtons.forEach((selectctButton) => {
        selectctButton.classList.remove('active-btn');
    });
}

//sectons active class
allSections.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if(id){
        //remove selected
        sectBtns.forEach((btn) => {
            btn.classList.remove('active');
        });
        e.target.classList.add('active');

        //hide other sections
        sections.forEach((section) => {
            section.classList.remove('active');
        });

        const element = document.getElementById(id); 
        element.classList.add('active');
    }
});

//Toggle Theme
 const themeBtn = document.querySelector('.theme-btn');
 themeBtn.addEventListener('click', () =>{
    let element = document.body;
    element.classList.toggle('light-mode');
 });
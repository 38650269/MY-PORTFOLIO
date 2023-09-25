/*const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections= document.querySelectorAll('.main-content');


function PageTransitions(){
    //Button click active class
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function () {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        });
    }
    //sections active class
    allSections.addEventListener('click', (e) => {
       //console.log e.target ;
        const id = e.target.dataset.id;
        if (id){
            //remove selected from the other btns
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active');
            })
            e.target.classList.add('active');

            //hide other sections
            sections.forEach ((section) =>{
                section.classList.remove('active');
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    });

    //Toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click',() =>{
        let element = document.body;
        element.classList.toggle ('light-mode')
    });
}

PageTransitions();*/ 



const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allsections = document.querySelector('.main-content');

function PageTransitions() {
  // Button click active class
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener('click', function () {
      let currentBtn = document.querySelectorAll('.active-btn');
      currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
      this.className += ' active-btn';
    });
  }

  // Sections active class
  allsections.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if (id) {
      // Remove 'active' from the other buttons
      sectBtns.forEach((btn) => {
        btn.classList.remove('active');
      });
      e.target.classList.add('active');

      // Hide other sections
      sections.forEach((section) => {
        section.classList.remove('active');
      });

      const element = document.getElementById(id);
      element.classList.add('active');
    }
  });

  // Toggle theme
  const themeBtn = document.querySelector('.theme-btn');
  themeBtn.addEventListener('click', () => {
    let element = document.body;
    element.classList.toggle('light-mode');
  });
}

PageTransitions();

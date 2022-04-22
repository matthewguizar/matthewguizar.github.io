console.log('connected')

const about = document.querySelector('#about')
const skills = document.querySelector('#skills')
const projects = document.querySelector('#projects')
const contact = document.querySelector('#contact')
const section = document.querySelector('.section')
const sectionDisplay = document.querySelector('#display')
const contactBtn = document.querySelector('#home-contact-btn')



const getAboutPage =  (e) =>{
    e.preventDefault()
    section.innerHTML= `<h1>About Me</h1>`
    sectionDisplay.innerHTML= `<p> I am a huge fan of creating and playing whether its on a computer, console, or guitar. 
    Some of the best times are spent with friends and family so I like playing some couch co-op games or watching movies with them.
    What I look for in life is balance and love to find humor in everything.</p> `
    section.appendChild(sectionDisplay)

}

const girlsWantSkills = (e) =>{
    e.preventDefault()
    section.innerHTML= `<h1> Skills And Experience</h1>`
    sectionDisplay.innerHTML = `<p> I create successful responsive websites that are easy to use. I've worked
    with HTML, CSS, JS, building small web apps
    I also have full-stack developer experience with express, cors, node.js</p>`
    section.appendChild(sectionDisplay)
}

const getProjects = (e) =>{
    e.preventDefault()
    section.innerHTML= `<h1>Projects</h1>
    <br>`
    sectionDisplay.innerHTML = `<h3 id='title'> Wheres that from </h3> 
    <p id='desc'> This is a small web app that uses movie quotes to let user guess a movie quote
    generate random quotes with a title, and searching a movie title to get a quote. I used HTML, CSS,
    JavaScript, Axios, Express, and Node.js to build it. Here are some links
    <a href="https://www.youtube.com/watch?v=warVX9BzM8k"  target=”_blank”>demo</a>
    <a href="https://github.com/matthewguizar/WheresThatFrom"  target=”_blank”>code</a>
    <a href="https://wheresthatfrom.herokuapp.com/"  target=”_blank”>link</a>.</p>`
    section.appendChild(sectionDisplay)
}

const contactPage = (e) =>{
    e.preventDefault()
    section.innerHTML= `<h1>Just can't get enough?</h1>`
    sectionDisplay.innerHTML = `If you want to get into contact with me regarding work or just want to say what's up. Either way the best way to
    contact me is to send me an email <a href="mailto:msg.gmath@gmail.com">here</a>. Thanks for checking out my page.
    <img>`
    section.appendChild(sectionDisplay)

  
 
}

about.addEventListener('click', getAboutPage)
skills.addEventListener('click', girlsWantSkills)
projects.addEventListener('click', getProjects)
contact.addEventListener('click', contactPage)
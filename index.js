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
    sectionDisplay.innerHTML= `<p> I am currently 26 years old and enjoy learning and having new experiences. 
    I would describe my personality as laid back, and someone who enjoys to have a good laugh. I take pride in my work
    and love to bring others up. Some of my hobbies including playing guitar, singing, and skateboarding. I go to my hobbies
    as a break to unwind, because I tend to push myself until I complete my goals. </p> `
    section.appendChild(sectionDisplay)

}

const girlsWantSkills = (e) =>{
    e.preventDefault()
    section.innerHTML= `<h1> Skills And Experience</h1>`
    sectionDisplay.innerHTML = `<p> I create successful responsive websites that are easy to use. I also have experience building apps in Java using frameworks like Spring and Hibernate,
    but have dipped my toes in other backend languages as Python and C#. I am mainly self-taught but had help with a short 
    coding bootcamp. You may see my repositories in my github</p>`
    section.appendChild(sectionDisplay)
}

const getProjects = (e) =>{
    e.preventDefault()
    section.innerHTML= `<h1>Projects</h1>`
    sectionDisplay.innerHTML = `<h4 id='title'> Wheres that from </h4> 
    <p id='desc'> A web app that uses movie quotes to let user guess a movie quote
    generate random quotes with a title, and searching a movie title to get a quote. I used HTML, CSS,
    JavaScript, Axios, Express, and Node.js to build it. Here are some links
    <a href="https://www.youtube.com/watch?v=warVX9BzM8k"  target=”_blank”>demo</a>
    <a href="https://github.com/matthewguizar/WheresThatFrom"  target=”_blank”>code</a>
    
    <h4 id ='title'> On my list</h4>
    <p id='desc'> A web app that lets users see Top Rated movies and add their to their list of favorites
    and was build using Java, Spring, Hibernate, Javascript, Bootstrap, HTML, Heroku, Postgres, and Maven.
    <a href="https://github.com/matthewguizar/watchlist" target="_blank">code</a>
    <span>These are projects I created during my bootcamp. Updated projects and what I have been learning since I graduated
    can be found in my github profile.</span> `
    section.appendChild(sectionDisplay)
}

const contactPage = (e) =>{
    e.preventDefault()
    section.innerHTML= `<h1>Just can't get enough?</h1>`
    sectionDisplay.innerHTML = `If you want to get into contact with me regarding work or just want to say what's up. Either way the best way to
    contact me is to send me an email <a href="mailto:matthewrguizar@gmail.com">here</a>. Thanks for checking out my page.
    <img>`
    section.appendChild(sectionDisplay)

  
 
}

about.addEventListener('click', getAboutPage)
skills.addEventListener('click', girlsWantSkills)
projects.addEventListener('click', getProjects)
contact.addEventListener('click', contactPage)
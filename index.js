console.log('connected')

const about = document.querySelector('#about')
const skills = document.querySelector('#skills')
const projects = document.querySelector('#projects')
const contact = document.querySelector('#contact')
const section = document.querySelector('#section')
const sectionDisplay = document.querySelector('#display')




about.addEventListener('click', (e) =>{
    e.preventDefault()
    sectionDisplay.innerHTML= `<h1>About Me</h1>
    <text>I am a huge fan of creating and playing whether its on a computer, console, or guitar. 
    Some of the best times are spent with friends and family so I like playing some couch co-op games or watching movies with them.
    What I look for in life is balance and love to find humor in everything. </text> `
    section.appendChild(sectionDisplay)
})

skills.addEventListener('click', (e) =>{
    e.preventDefault()
    sectionDisplay.innerHTML= `<h1> Skills And Experience</h1>
    <br>
    <p>I create successful responsive websites that are easy to use. I've worked
    with HTML, CSS, JS, building small web apps
    <br>
    <br>
    I also have full-stack developer experience with express, cors, node.js</p>`
    section.appendChild(sectionDisplay)

})

projects.addEventListener('click', (e) =>{
    e.preventDefault()
    sectionDisplay.innerHTML= `<h1>Projects</h1>
    <br>
    <text> this is where the projects appear. </text> `
    section.appendChild(sectionDisplay)

})

contact.addEventListener('click', (e) =>{
    e.preventDefault()
    sectionDisplay.innerHTML= `<h1>Say Hi</h1>
    <text> contact me here. </text> `
    section.appendChild(sectionDisplay)

})
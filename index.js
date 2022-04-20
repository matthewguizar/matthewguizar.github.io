console.log('connected')

const about = document.querySelector('#about')
const skills = document.querySelector('#skills')
const projects = document.querySelector('#projects')
const contact = document.querySelector('#contact')
const section = document.querySelector('#section')
const sectionDisplay = document.querySelector('#display')




about.addEventListener('click', (e) =>{
    e.preventDefault()
    sectionDisplay.innerHTML= `<text>I am a huge fan of making music whether it's on a computer or a guitar. 
    Another hobby of mine is playing video games. I rather play with some friends so any game that has online
    or couch co-op games. What I look for in life is balance and love to find humor in everything. </text> `
    section.appendChild(sectionDisplay)
})

skills.addEventListener('click', (e) =>{
    e.preventDefault()
    sectionDisplay.innerHTML= `<text> girls only want guys with good skills. </text> `
    section.appendChild(sectionDisplay)

})

projects.addEventListener('click', (e) =>{
    e.preventDefault()
    sectionDisplay.innerHTML= `<text> this is where the projects appear. </text> `
    section.appendChild(sectionDisplay)

})

contact.addEventListener('click', (e) =>{
    e.preventDefault()
    sectionDisplay.innerHTML= `<text> contact me here. </text> `
    section.appendChild(sectionDisplay)

})
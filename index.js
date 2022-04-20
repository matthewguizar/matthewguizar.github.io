console.log('connected')

const about = document.querySelector('#about')
const skills = document.querySelector('#skills')
const projects = document.querySelector('#projects')
const contact = document.querySelector('#contact')
const section = document.querySelector('.section')
const sectionDisplay = document.querySelector('#display')




about.addEventListener('click', (e) =>{
    e.preventDefault()
    section.innerHTML= `<h1>About Me</h1>`
    sectionDisplay.innerHTML= `<p> I am a huge fan of creating and playing whether its on a computer, console, or guitar. 
    Some of the best times are spent with friends and family so I like playing some couch co-op games or watching movies with them.
    What I look for in life is balance and love to find humor in everything.</p> `
    section.appendChild(sectionDisplay)
  
})

skills.addEventListener('click', (e) =>{
    e.preventDefault()
    section.innerHTML= `<h1> Skills And Experience</h1>`
    sectionDisplay.innerHTML = `<p> I create successful responsive websites that are easy to use. I've worked
    with HTML, CSS, JS, building small web apps
    I also have full-stack developer experience with express, cors, node.js</p>`
    section.appendChild(sectionDisplay)

})

projects.addEventListener('click', (e) =>{
    e.preventDefault()
    section.innerHTML= `<h1>Projects</h1>
    <br>`
    sectionDisplay.innerHTML = `<p> this is where the projects appear. </p> `
    section.appendChild(sectionDisplay)

})

contact.addEventListener('click', (e) =>{
    e.preventDefault()
    section.innerHTML= `<h1></h1>`
    sectionDisplay.innerHTML = `<form action=”https://matthewguizar.github.io/index.html”


    method=”POST”
    
    
    enctype=”multipart/form-data”
    
    
    name=”EmailForm”>
    
    
    Name:<br>
    
    
    <input type=”text” size=”19″ name=”ContactName”><br><br>
    
    
    Message:<br> <textarea name=”ContactCommentt” rows=”6″ cols=”20″>
    </textarea><br><br> 

    <button type='submit'>submit</button>`
    section.appendChild(sectionDisplay)

})
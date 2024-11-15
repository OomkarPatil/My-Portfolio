/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact__message')

const sendEmail = (e)=>{
    e.preventDefault()
    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_ifbwium','template_68dg2rw','#contact-form','ssuLjzfv33pCml1Uv')

    .then(()=>{
        // Show sent message
        contactMessage.textContent = 'Message sent successfully ✅'

         // Remove message after five seconds
         setTimeout(()=>{
            contactMessage.textContent =''
         }, 5000)

         // Clear input fields
         contactForm.reset()
    }, ()=>{
        // Show error message
        contactMessage.textContent = 'Message not sent (service error) ❌'
    })
}
contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 

const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__list a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)


/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration: 2500,
    delay: 100,
    //reset: true,   //animation repeat
})

sr.reveal(`.perfil, .contact__form`)
sr.reveal(`.info`, {origin:'left',delay: 170})
sr.reveal(`.skills`, {origin:'top',delay: 450})
sr.reveal(`.about`, {origin:'right',delay: 50})
sr.reveal(`.projects__card, .services__card, .experience__card`,{interval: 200})
sr.reveal(`.skills__items, .about__social`,{interval:650})

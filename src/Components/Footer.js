import React from 'react'
import './css/footer.css'
function Footer() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('hide')
      }
      else {
        entry.target.classList.remove('hide')
      }
    })
  })
  const line = document.querySelectorAll('.footer-draw-line-top')
  line.forEach((el) => observer.observe(el))
  return (
    <div className='footer scroll' data-section-name={"s-five"}>
      <div className="footer-draw-line-top" id='footer-draw-line-top'>
      </div>
      <div className='footer-text-div'>
        <p className='footer-contact'>
          Contact Us
        </p>
        <h1 className='footer-email'>
          hackaventus@support.com
        </h1>
      </div>
      <div className="footer-draw-line-bottom">
      </div>
    </div>
  )
}

export default Footer
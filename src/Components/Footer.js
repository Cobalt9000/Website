import React, { useEffect, useRef } from 'react'
import './css/footer.css'

function Footer() {
  
  const lineRef = useRef(null)

  useEffect(() => {  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
        }
        else {
          entry.target.classList.remove('show')
        }
      })
    })
    
      const line = document.querySelectorAll('.footer-draw-line-top')
      line.forEach((el) => observer.observe(el))
      const ll = document.querySelectorAll('.footer-draw-line-bottom')
      ll.forEach((el) => observer.observe(el))

  }, [lineRef])
  return (
    <div className='footer' data-section-name={"s-five"} ref={lineRef}>
      <div className="footer-draw-line-top" id='footer-draw-line-top'>
      </div>
      <div className='footer-text-div'>
        <p className='footer-contact'>
          Contact Us
        </p>
        <h1 className='footer-email'>
          one@hackaventus.com
        </h1>
      </div>
      <div className="footer-draw-line-bottom">
      </div>
    </div>
  )
}

export default Footer
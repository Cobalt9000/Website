import React from 'react'

function FAQ() {
  return (
    <>
      <section className="w-full max-w-3xl m-auto h-screen text-gray-100 scroll" data-section-name={"s-three"}>
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
          <p className="mt-4 mb-text-gray-300"></p>
          <div className="space-y-4">
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none">What is the mode of this hackathon?</summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-300">Aventus is planned in hybrid mode, anyone can attend this hackathon at Dayananda Sagar College of Engineering.</p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none">Who can attend this hackathon?</summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-300">Aventus is open to all undergraduate and high school students around the world. There is no prerequisite for the participants. We hope to keep the hackathon beginner-friendly so that everyone can learn something from this hackathon.</p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none">I am a first time hacker and this looks too intimidating for me</summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-300">We understand that participating in hackathons for the first time can be very intimidating. But worry not! We have arranged awesome beginner-friendly workshops throughout the course of the event that will help you get started with hackathons and hacking in general. Head over to our discord server in case of any doubts. We have a team of mentors who will calmly guide you through the entire process.</p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none">My doubt is not listed here</summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-300">If you have any more questions, feel free to reach out to us at hackaventus@support.com and we will try to respond as quickly as we can.</p>
            </details>
          </div>
        </div>
      </section>
    </>
  )
}

export default FAQ
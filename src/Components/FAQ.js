import React from 'react'

function FAQ() {
  return (
    <>
      <section className="faq w-full max-w-3xl m-auto text-gray-100" data-section-name={"s-three"} id={"FAQ"}>
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="text-2xl font-semibold sm:text-4xl pb-5">Frequently   Asked   Questions</h2>
          <p className="mt-4 mb-text-gray-300"></p>
          <div className="space-y-4">
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none">Who  is  eligible  to  participate  in  Aventus?</summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-300">Aventus Hackathon is open to all college students. Team sizes can range from 2 to 4 members.</p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none">Is this an online or offline hackathon?</summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-300">Aventus Hackathon is an offline event, taking place at Dayananda Sagar College of Engineering.</p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none">How do I register for the hackathon?</summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-300">You can register your team through the Devfolio platform. Please follow the instructions provided on the event website.</p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none">What is the registration fee for Aventus Hackathon?</summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-300">There is no registration fee for participating in Aventus Hackathon.</p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none">Are there any specific technology requirements for the hackathon?</summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-300">We have four main tracks - GEN AI, Cyber Intelligence, Web 3.0, and AR & VR. You can choose to build a project using any technology within these tracks. You are required to carry all sorts of hardware/software requirements to acheive your project goals.</p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none">Will meals and refreshments be provided during the event?</summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-300">Yes, meals and refreshments will be provided for all participants throughout the duration of the hackathon.</p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none">Can we form teams with members from different colleges?</summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-300">Yes, you can form teams with members from different colleges as long as all members are college students.</p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none">Are there any prizes for the winning teams?</summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-300">Yes, the prize money is already mentioned on the website. There may be additional perks too!</p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none">What should we bring to the hackathon?</summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-300">Please bring your college ID, a laptop, charger, any required hardware or devices for your project, and any personal items you may need during the 24-hour event.</p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none">Can we submit pre-existing projects?</summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-300">No, all projects must be built from scratch during the 24-hour hackathon. You can, however, brainstorm ideas and plan your project before the event.</p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none">I'm from a different city. Do you provide accomodation?</summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-300">No, we do not provide accomodation for participants. All travel expenses as well as accomodation near the venue must be handled by the participant. During the 24 hr period of the hackathon however, we will provide all facilities required for a comfortable event.</p>
            </details>
          </div>
        </div>
      </section>
    </>
  )
}

export default FAQ
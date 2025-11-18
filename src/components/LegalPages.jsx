import React from 'react'

export function Privacy(){
  return (
    <div className="min-h-screen bg-black text-white pt-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold">Privacy Policy</h1>
        <p className="mt-4 text-gray-300">We respect your privacy. We only collect the information needed to deliver our services and never sell your data. Data is stored securely and you can request deletion anytime.</p>
        <ul className="mt-6 space-y-2 text-gray-300 list-disc list-inside">
          <li>What we collect: contact details, project info, analytics</li>
          <li>How we use it: to onboard, deliver services, and improve experience</li>
          <li>Security: encryption in transit, restricted access</li>
          <li>Contact: hello@contentcraftmedia.in</li>
        </ul>
      </div>
    </div>
  )
}

export function Terms(){
  return (
    <div className="min-h-screen bg-black text-white pt-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold">Terms & Conditions</h1>
        <p className="mt-4 text-gray-300">By engaging with our services, you agree to our scope, payment and IP terms. All deliverables remain property of Content Craft Media until invoices are settled.</p>
        <ul className="mt-6 space-y-2 text-gray-300 list-disc list-inside">
          <li>Billing cycles monthly unless specified</li>
          <li>Revisions and timelines mutually agreed</li>
          <li>NDA available on request</li>
        </ul>
      </div>
    </div>
  )
}

export function Story(){
  return (
    <div className="min-h-screen bg-black text-white pt-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold">Our Story</h1>
        <p className="mt-4 text-gray-300">Built in India, scaling globally. We are a team of strategists, creators and technologists obsessed with results. We partner with brands that want momentum.</p>
      </div>
    </div>
  )
}

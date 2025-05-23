import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}


      {/* Main Content */}
      <main className="px-8 py-16 relative">
        {/* Decorative elements - keeping other elements except the green one */}
        <div className="absolute left-0 top-40 w-40 h-2 bg-[#ff55e8] transform -rotate-12 opacity-80 hidden md:block z-0"></div>
        <div className="absolute right-20 bottom-40 w-32 h-32 rounded-full bg-[#ffcc00] opacity-80 hidden md:block z-0"></div>
        <div className="absolute right-60 top-80 w-4 h-40 bg-[#38bdf8] opacity-80 hidden md:block z-0"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl font-bold mb-10 leading-tight">
            Curran Advani<br />User Agreement
          </h1>
          
          <p className="text-xl mb-3 text-gray-300">
            EFFECTIVE DATE: MAY 22, 2025
          </p>
          
          <p className="mb-8 text-lg text-gray-300">
            PROVIDING MESSAGING SERVICES ON BEHALF OF ANDERSON CHRISTIE AT SANTA CRUZ, CA
          </p>
          
          <div className="space-y-10 my-16">
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Agreement Overview
              </h2>
              
              <p className="mb-6 text-gray-300">
                This User Agreement (the "Agreement") is a legal agreement between you and CURRAN ADVANI, who provides services on behalf of Anderson Christie at Santa Cruz, CA. It governs your use of the 
                messaging services (the "Service") provided through Anderson Christie. By using the Service, you consent to terms of this Agreement and to the terms of
                the Privacy Policy posted on our website.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Accessing the Service
              </h2>
              
              <p className="mb-6 text-gray-300">
                The Service is made available to you only for your private use, or if you are signing up on behalf of your company, for the use of your
                company. You acknowledge that the messaging services provided are offered through Anderson Christie at Santa Cruz, CA and are subject to applicable regulations. You are solely responsible for any activity that occurs under your user name, including all compliance with
                applicable laws and regulations.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#ff55e8]">
                SMS/Text Messaging Consent
              </h2>
              
              <p className="mb-6 text-gray-300">
                By submitting the Tally.so form linked to this page, you expressly consent to receive text messages from Curran Advani, on behalf of Anderson Christie at Santa Cruz, CA. Message frequency may vary, and these messages will include information regarding your inquiry, follow-up information, and related services. After you submit the form, we will reach out to you via the phone number you provided. You understand that these messages will be sent using automated technology.
              </p>
              
              <p className="mb-6 text-gray-300">
                You are not required to provide consent to receive text messages as a condition of purchasing any property, goods, or services. Message and data rates may apply. You can opt out of receiving text messages at any time by replying "STOP" to any message you receive from us, or by contacting us directly. For help, reply "HELP" to any message you receive.
              </p>
              
              <p className="mb-6 text-gray-300">
                By providing your consent, you confirm that you are the subscriber to the provided phone number or are authorized to provide consent on behalf of the subscriber. This consent applies to any renewal, extension, or modification of your relationship with us.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Communications
              </h2>
              
              <p className="mb-6 text-gray-300">
                When you use our messaging services or send communications to us, you are communicating with us electronically. You consent to receive
                communications from us electronically. We will communicate with you by text message, e-mail, through our platform,
                or by posting notices on our website. These communications are provided on behalf of Anderson Christie at Santa Cruz, CA and are subject to their policies as well.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Data & Privacy
              </h2>
              
              <p className="mb-6 text-gray-300">
                Your data will not be sold or shared with third parties for marketing purposes. In using the Service, you acknowledge that we, Anderson Christie at Santa Cruz, CA, and/or our third party partners are authorized to copy and store such data for backup
                purposes and to access same to extent necessary for support purposes. You agree to comply with all data privacy and other laws with
                regard to the data we store for you. Any information collected may be shared with Anderson Christie as required by law or regulation.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Payment Terms
              </h2>
              
              <p className="mb-6 text-gray-300">
                By providing a payment method, you are expressly agreeing that we are authorized to charge you for your subscription and any applicable taxes. Payments are processed on behalf of Anderson Christie at Santa Cruz, CA for the services provided. If your payment method fails or your account is past due, we reserve the right to suspend your access to the Service.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Brokerage Relationship
              </h2>
              
              <p className="mb-6 text-gray-300">
                You understand and acknowledge that the messaging services provided by Curran Advani are offered on behalf of Anderson Christie at Santa Cruz, CA. All communications and services are subject to oversight by Anderson Christie and applicable regulatory requirements. Anderson Christie may have access to communications and data as required for compliance purposes.
              </p>
            </section>
            
            <section className="border-t border-gray-700 pt-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#ff55e8]">
                Your Rights & Opt-Out
              </h2>
              
              <p className="mb-6 text-gray-300">
                You always maintain the right to opt out of receiving messages from us at any time. If at any point you wish to stop receiving messages, simply reply "STOP" to any text message you receive from us, or contact us directly. Your opt-out request will be processed within 10 business days. Please note that opting out of messaging may impact our ability to provide certain services to you.
              </p>
              
              <p className="mb-6 text-gray-300">
                If you have any questions about this messaging consent or our services, please contact us at advanicurran@gmail.com.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

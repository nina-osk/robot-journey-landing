
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';

const FAQs = [
  {
    question: 'What prerequisites are needed for these courses?',
    answer: 'Basic programming knowledge is recommended but not required. We start with fundamentals and gradually progress to advanced concepts. For ROS, some familiarity with Python or C++ would be beneficial.'
  },
  {
    question: 'Do I need access to robotics hardware for the courses?',
    answer: "No, our courses use advanced simulation software that accurately replicates robot behavior. You'll gain practical experience without needing physical hardware, though we do offer optional in-person workshops periodically."
  },
  {
    question: 'Are the certifications industry-recognized?',
    answer: 'Yes, our certifications are recognized by major companies in the automation industry. Many of our graduates have successfully transitioned into robotics roles at leading manufacturing companies.'
  },
  {
    question: 'What is the refund policy?',
    answer: "We offer a 14-day money-back guarantee. If you're not satisfied with the course, you can request a full refund within the first two weeks of enrollment."
  }
];

const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');
  const [message, setMessage] = useState('');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log({ name, email, course, message });
    // Reset form
    setName('');
    setEmail('');
    setCourse('');
    setMessage('');
    // Show success message
    alert('Thanks for your interest! We will contact you shortly.');
  };

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <section id="enroll" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in-up">
              <span className="inline-block bg-robotics-blue/10 text-robotics-blue text-sm font-medium px-4 py-1.5 rounded-full mb-4">
                Get Started Today
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-robotics-dark mb-6">
                Ready to Advance Your Career?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form below to enroll in one of our robotics courses or to request more information.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-robotics-blue/50 focus:border-robotics-blue"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-robotics-blue/50 focus:border-robotics-blue"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">
                    Interested Course
                  </label>
                  <select
                    id="course"
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-robotics-blue/50 focus:border-robotics-blue"
                    required
                  >
                    <option value="">Select a course</option>
                    <option value="ur">Universal Robots (UR)</option>
                    <option value="kuka">KUKA Robot Programming</option>
                    <option value="ros">Robot Operating System (ROS)</option>
                    <option value="bundle">Complete Bundle</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-robotics-blue/50 focus:border-robotics-blue"
                    placeholder="Any questions or special requirements?"
                    rows={4}
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-robotics-blue hover:bg-robotics-blue/90 text-white py-3 rounded-md"
                >
                  Submit Enrollment Request
                </Button>
              </form>
            </div>
            
            {/* FAQs */}
            <div className="animate-fade-in-up delay-300">
              <span className="inline-block bg-robotics-blue/10 text-robotics-blue text-sm font-medium px-4 py-1.5 rounded-full mb-4">
                Frequently Asked Questions
              </span>
              <h2 className="text-3xl font-bold text-robotics-dark mb-6">
                Common Questions
              </h2>
              <div className="space-y-4">
                {FAQs.map((faq, index) => (
                  <div 
                    key={index} 
                    className="glass-card rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-6 py-4 flex justify-between items-center text-left"
                    >
                      <span className="font-medium text-robotics-dark">{faq.question}</span>
                      {expandedFAQ === index ? (
                        <ChevronUp className="h-5 w-5 text-robotics-blue" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      )}
                    </button>
                    {expandedFAQ === index && (
                      <div className="px-6 pb-4 text-gray-600">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="mt-10 p-6 rounded-xl border border-robotics-blue/20 bg-robotics-blue/5">
                <h3 className="text-xl font-semibold text-robotics-dark mb-4">
                  Our Guarantee
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-robotics-blue shrink-0 mr-3 mt-0.5" />
                    <span className="text-gray-700">14-day money-back guarantee</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-robotics-blue shrink-0 mr-3 mt-0.5" />
                    <span className="text-gray-700">Lifetime access to course materials</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-robotics-blue shrink-0 mr-3 mt-0.5" />
                    <span className="text-gray-700">Certificate upon successful completion</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-robotics-blue shrink-0 mr-3 mt-0.5" />
                    <span className="text-gray-700">Dedicated support during your learning journey</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

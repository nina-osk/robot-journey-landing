
import { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Michael Johnson',
    role: 'Automation Engineer',
    company: 'Tesla',
    content: 'The UR robotics course was incredibly comprehensive. The hands-on exercises helped me build confidence in programming collaborative robots. Now I use these skills daily in my automation role.',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
  },
  {
    name: 'Sarah Chen',
    role: 'Manufacturing Specialist',
    company: 'Boeing',
    content: 'Learning KUKA robot programming through this platform was one of the best career decisions I've made. The curriculum is well-structured and the instructors are knowledgeable and supportive.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5,
  },
  {
    name: 'David Rodriguez',
    role: 'Robotics Developer',
    company: 'Boston Dynamics',
    content: 'The ROS course provided me with the exact skills needed to transition into a robotics role. The project-based approach gave me confidence to tackle complex robotics challenges.',
    avatar: 'https://randomuser.me/api/portraits/men/62.jpg',
    rating: 5,
  },
];

const TestimonialSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <section 
      id="testimonials" 
      className="py-24 bg-white overflow-hidden"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-robotics-blue/10 text-robotics-blue text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            Success Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-robotics-dark mb-4">
            What Our Students Say
          </h2>
          <p className="text-lg text-gray-600">
            Hear from professionals who transformed their careers with our industrial robotics training.
          </p>
        </div>

        <div className={`slide-in-section ${isVisible ? 'visible' : ''}`}>
          <div className="relative">
            <div className="flex overflow-hidden max-w-5xl mx-auto">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index} 
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="glass-card rounded-2xl p-8 md:p-10">
                      <div className="flex mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <p className="text-lg text-gray-700 mb-8 italic">
                        "{testimonial.content}"
                      </p>
                      <div className="flex items-center">
                        <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.name} 
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-robotics-dark">{testimonial.name}</h4>
                          <p className="text-sm text-gray-600">
                            {testimonial.role}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${
                    currentIndex === index 
                      ? 'bg-robotics-blue w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

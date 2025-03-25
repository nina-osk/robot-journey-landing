
import { useEffect, useRef, useState } from 'react';
import { 
  Award, 
  Code2, 
  Users, 
  BookOpen, 
  GraduationCap, 
  FileSpreadsheet 
} from 'lucide-react';

const features = [
  {
    icon: <BookOpen className="h-10 w-10" />,
    title: 'Comprehensive Curriculum',
    description: 'Structured learning path covering theoretical concepts and practical applications of robotics programming.',
  },
  {
    icon: <Code2 className="h-10 w-10" />,
    title: 'Hands-on Exercises',
    description: 'Interactive programming exercises with real-world scenarios to build practical skills.',
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: 'Expert Instructors',
    description: 'Learn from industry professionals with years of experience in industrial robotics implementation.',
  },
  {
    icon: <FileSpreadsheet className="h-10 w-10" />,
    title: 'Project-Based Learning',
    description: 'Complete industry-relevant projects to build a strong portfolio for your job applications.',
  },
  {
    icon: <GraduationCap className="h-10 w-10" />,
    title: 'Certification',
    description: 'Earn industry-recognized certification upon course completion to validate your skills.',
  },
  {
    icon: <Award className="h-10 w-10" />,
    title: 'Career Support',
    description: 'Resume review, interview preparation, and job placement assistance from our career services team.',
  },
];

const FeatureSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleFeatures, setVisibleFeatures] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Stagger the animations
          const interval = setInterval(() => {
            setVisibleFeatures((prev) => {
              const next = [...prev, prev.length];
              if (next.length === features.length) clearInterval(interval);
              return next;
            });
          }, 200);
          
          return () => clearInterval(interval);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="features" 
      className="py-24 bg-gray-50"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block bg-robotics-blue/10 text-robotics-blue text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            Program Benefits
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-robotics-dark mb-4">
            Why Choose Our Robotics Courses
          </h2>
          <p className="text-lg text-gray-600">
            Our comprehensive curriculum and innovative teaching methods ensure you gain practical 
            skills valued by employers in the automation industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`transition-all duration-700 delay-${index * 100} transform ${
                visibleFeatures.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
            >
              <div className="glass-card rounded-2xl p-8 h-full">
                <div className="w-16 h-16 rounded-2xl bg-robotics-blue/10 flex items-center justify-center mb-6 text-robotics-blue">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-robotics-dark mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;

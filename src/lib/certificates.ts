export interface Certificate {
  title: string;
  image: string;
  category: "technical" | "education";
  issuer: string;
  logo: string;
}

export const certificates: Certificate[] = [
  {
    title: "Python Essentials 2",
    image: "/assets/images/cert/Python-essentials-2.png",
    category: "technical",
    issuer: "Cisco",
    logo: "/assets/images/cisco.png",
  },
    {
    title: "Python Essentials 1",
    image: "/assets/images/cert/Python-essentials-1.png",
    category: "technical",
    issuer: "Cisco",
    logo: "/assets/images/cisco.png",
  },
  {
    title: "IT Customer Support Basics",
    image: "/assets/images/cert/IT-customer-support-basics.png",
    category: "technical",
    issuer: "Cisco",
    logo: "/assets/images/cisco.png",
  },
  {
    title: "JavaScript Essentials 2",
    image: "/assets/images/cert/Javascript-essentials-2.png",
    category: "technical",
    issuer: "Cisco",
    logo: "/assets/images/cisco.png",
  },
  {
    title: "JavaScript Essentials 1",
    image: "/assets/images/cert/Javascript-essentials-1.png",
    category: "technical",
    issuer: "Cisco",
    logo: "/assets/images/cisco.png",
  },
  {
    title: "Ethical Hacking",
    image: "/assets/images/cert/Ethical Hacking.jpg",
    category: "technical",
    issuer: "DICT",
    logo: "/assets/images/DICT.png",
  },
  {
    title: "Graphic Design Essentials",
    image: "/assets/images/cert/graphic-design-essentials.jpg",
    category: "technical",
    issuer: "Canva",
    logo: "/assets/images/canva.png",
  },
  {
    title: "Marketing with Canva",
    image: "/assets/images/cert/marketing-with-canva.jpg",
    category: "technical",
    issuer: "Canva",
    logo: "/assets/images/canva.png",
  },
  {
    title: "Machine Learning",
    image: "/assets/images/cert/Machine-learning.jpg",
    category: "technical",
    issuer: "DICT",
    logo: "/assets/images/DICT.png",
  },
  {
    title: "Project Management",
    image: "/assets/images/cert/Project Management.jpg",
    category: "technical",
    issuer: "DICT",
    logo: "/assets/images/DICT.png",
  },
  {
    title: "Python Data Structures",
    image: "/assets/images/cert/Python Data Structures.jpg",
    category: "technical",
    issuer: "SoloLearn",
    logo: "/assets/images/sololearn.png",
  },
  {
    title: "Python Core",
    image: "/assets/images/cert/Python Core.jpg",
    category: "technical",
    issuer: "SoloLearn",
    logo: "/assets/images/sololearn.png",
  },
  {
    title: "OJT Certificate",
    image: "/assets/images/cert/OJT-cert.png",
    category: "education",
    issuer: "CISC",
    logo: "/assets/images/CISC.png",
  },
  {
    title: "Multimedia Technologies",
    image: "/assets/images/cert/Multimedia Technologies.jpg",
    category: "education",
    issuer: "CISC",
    logo: "/assets/images/CISC.png",
  },
];

import { useRef } from "react";
import { motion } from "framer-motion";
import {
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaEnvelope,
    FaArrowDown,
    FaPhone,
    FaMapMarkerAlt,
    FaDownload,
    FaExternalLinkAlt,
} from "react-icons/fa";
import {
    FaReact,
    FaNodeJs,
    FaDatabase,
    FaServer,
    FaCode,
    FaJava,
    FaPython,
} from "react-icons/fa";
import {
    SiMongodb,
    SiExpress,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiCplusplus,
    SiMysql,
    SiGit,
} from "react-icons/si";

// Base64 encoded placeholder image
const placeholderImage =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iIzAwN0JGRiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjQyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9Im1pZGRsZSIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZmlsbD0id2hpdGUiPlByb2ZpbGUgSW1hZ2U8L3RleHQ+PC9zdmc+";

// Create different colored placeholder images for projects
const createPlaceholderImage = (title, color) => {
    const encodedTitle = encodeURIComponent(title);
    return `data:image/svg+xml;base64,${btoa(
        `<svg width="400" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="200" fill="${color}"/><text x="50%" y="50%" font-size="24" text-anchor="middle" alignment-baseline="middle" font-family="Arial, sans-serif" fill="white">${encodedTitle}</text></svg>`
    )}`;
};

const Home = () => {
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToSection = (ref) => {
        // Use the anchor elements for better scrolling
        const sectionId = ref === aboutRef ? "about" : 
                          ref === projectsRef ? "projects" : 
                          ref === contactRef ? "contact" : "";
        
        if (sectionId) {
            const anchorElement = document.getElementById(`${sectionId}-anchor`);
            if (anchorElement) {
                anchorElement.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.3,
                duration: 0.5,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    };

    // Skills data with icons
    const skills = [
        {
            name: "JavaScript",
            icon: <SiJavascript className="h-8 w-8" />,
            level: 90,
        },
        { name: "React.js", icon: <FaReact className="h-8 w-8" />, level: 85 },
        { name: "Node.js", icon: <FaNodeJs className="h-8 w-8" />, level: 85 },
        {
            name: "Express.js",
            icon: <SiExpress className="h-8 w-8" />,
            level: 85,
        },
        { name: "MongoDB", icon: <SiMongodb className="h-8 w-8" />, level: 85 },
        { name: "HTML", icon: <SiHtml5 className="h-8 w-8" />, level: 95 },
        { name: "CSS", icon: <SiCss3 className="h-8 w-8" />, level: 90 },
        { name: "C/C++", icon: <SiCplusplus className="h-8 w-8" />, level: 80 },
        { name: "Java", icon: <FaJava className="h-8 w-8" />, level: 85 },
        { name: "Python", icon: <FaPython className="h-8 w-8" />, level: 80 },
        { name: "MySQL", icon: <SiMysql className="h-8 w-8" />, level: 85 },
        { name: "Git/GitHub", icon: <SiGit className="h-8 w-8" />, level: 90 },
    ];

    // Education data
    const education = [
        {
            degree: "Bachelor of Technology in Computer Science",
            institution: "MVGR College of Engineering",
            duration: "2022 - 2026",
            description: "CGPA: 8.58, Vizianagaram, Andhra Pradesh",
        },
        {
            degree: "Intermediate (MPC)",
            institution: "Sri Chaitanya Junior College",
            duration: "2020 - 2022",
            description: "Percentage: 96%, Visakhapatnam, Andhra Pradesh",
        },
        {
            degree: "Secondary School Education",
            institution: "Sri Chaitanya School",
            duration: "2019 - 2020",
            description: "Percentage: 99%, Visakhapatnam, Andhra Pradesh",
        },
    ];

    // Project data with placeholder images
    const projects = [
        {
            id: 1,
            title: "Gen-AI Legal Assistant",
            description:
                "Developed a web-based AI-powered legal assistant during a 24-hour hackathon at Anurag University to assist users in understanding legal documents, performing document analysis, and resolving legal queries efficiently.",
            image: "/images/legalassistant.png",
            technologies: ["ReactJS", "FastAPI", "MongoDB", "OCR"],
            github: "https://github.com/KarthikeyaTadiparti/Gen-AI-Legal-Assistant",
            demo: null,
        },
        {
            id: 2,
            title: "Perfect Resume",
            description:
                "Built a resume builder website that allows users to easily create and download professional resumes in PDF format. Integrated LinkedIn data scraping via RapidAPI, allowing users to auto-fill resume details from their LinkedIn profile.",
            image: "/images/perfectresume.png",
            technologies: ["MongoDB", "Express", "React", "Node.js"],
            github: null,
            demo: "https://perfect-resume-sable.vercel.app/",
        },
        {
            id: 3,
            title: "Easy Bookings",
            description:
                "Developed a rental property listing platform where users can list properties, book stays, leave reviews, and interact with hosts. Implemented role-based access control and built a responsive UI using EJS and Bootstrap.",
            image: "/images/easybookings.png",
            technologies: [
                "Express",
                "MongoDB",
                "JavaScript",
                "EJS",
                "Bootstrap",
            ],
            github: "https://github.com/KarthikeyaTadiparti/Easy-Bookings",
            demo: null,
        },
    ];

    return (
        <>
            {/* Hero Section */}
            <section
                id="home"
                className="min-h-screen flex items-center justify-center bg-lightBg dark:bg-darkBg text-gray-900 dark:text-white pb-16 px-4 sm:px-6 lg:px-8"
            >
                <motion.div
                    className="container mx-auto grid md:grid-cols-2 gap-12 items-start max-w-6xl"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div
                        className="order-2 md:order-1"
                        variants={itemVariants}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Hi, I'm{" "}
                            <span className="text-primary dark:text-primary">
                                Karthikeya Tadiparti
                            </span>
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">
                            Full Stack Developer | MERN Specialist
                        </h2>
                        <p className="text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-300">
                            Passionate Web Developer with expertise in
                            full-stack development, specializing in the MERN
                            stack and scalable web applications.
                        </p>

                        <div className="flex space-x-4 mb-8">
                            <a
                                href="https://github.com/KarthikeyaTadiparti"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-secondary dark:text-gray-300 hover:text-primary dark:hover:text-primary text-2xl"
                                aria-label="GitHub"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/karthikeya10/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-secondary dark:text-gray-300 hover:text-primary dark:hover:text-primary text-2xl"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href="mailto:kartikeyatadiparti@gmail.com"
                                className="text-secondary dark:text-gray-300 hover:text-primary dark:hover:text-primary text-2xl"
                                aria-label="Email"
                            >
                                <FaEnvelope />
                            </a>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <motion.button
                                onClick={() => scrollToSection(projectsRef)}
                                className="px-6 py-3 bg-primary text-white rounded-md shadow-md hover:shadow-lg transition duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View My Work
                            </motion.button>
                            <motion.button
                                onClick={() => scrollToSection(contactRef)}
                                className="px-6 py-3 bg-secondary text-white rounded-md shadow-md hover:shadow-lg transition duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Contact Me
                            </motion.button>
                        </div>
                    </motion.div>

                    <motion.div
                        className="order-1 md:order-2 flex justify-center"
                        variants={itemVariants}
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-xl">
                            <img
                                src="/images/karthikeya2.jpg"
                                alt="Karthikeya Tadiparti"
                                className="w-full h-full object-cover scale-[1.6] object-[70%_5%] rounded-full"
                            />
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <button
                        onClick={() => scrollToSection(aboutRef)}
                        className="text-primary dark:text-primary text-3xl"
                        aria-label="Scroll down"
                    >
                        <FaArrowDown />
                    </button>
                </motion.div>
            </section>

            {/* About Section */}
            <section
                ref={aboutRef}
                id="about"
                className="pb-8 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-darkBg"
            >
                <div id="about-anchor" className="absolute -mt-16 pt-16"></div>
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        className="mb-16 pt-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <motion.h2
                            className="text-4xl font-bold mb-8 text-center"
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            About{" "}
                            <span className="text-primary dark:text-primary">
                                Me
                            </span>
                        </motion.h2>

                        <motion.div
                            className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-12"
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <p className="mb-4 text-justify">
                                Hi, I'm Karthikeya Tadiparti, a passionate web
                                developer and a third-year B.Tech student in
                                Computer Science and Engineering at MVGR College
                                of Engineering. With a strong foundation in
                                full-stack development, I specialize in
                                React.js, Node.js, Express, and MongoDB to build
                                scalable and efficient web applications.Strong
                                problem-solving skills with experience in data
                                structures and algorithms, driven by a passion
                                for solving real-world challenges.
                            </p>
                            <p className="mb-4 text-justify">
                                Enthusiastic about hackathons and AI-driven
                                innovations, with a keen interest in leveraging
                                technology to create meaningful impact and build
                                efficient solutions.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Education Section */}
                    <motion.div
                        className="mb-16"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <motion.h3
                            className="text-3xl font-bold mb-8 text-center"
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            Education
                        </motion.h3>

                        <div className="max-w-3xl mx-auto">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    className="mb-8 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md"
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                    viewport={{ once: true }}
                                >
                                    <h4 className="text-xl font-bold text-primary dark:text-primary">
                                        {edu.degree}
                                    </h4>
                                    <p className="text-lg font-medium mb-2">
                                        {edu.institution}
                                    </p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                        {edu.duration}
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        {edu.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Skills Section */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="mb-16"
                    >
                        <motion.h3
                            className="text-3xl font-bold mb-8 text-center"
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            Technical Skills
                        </motion.h3>

                        <motion.div
                            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md flex flex-col items-center"
                                    whileHover={{
                                        y: -5,
                                        transition: { duration: 0.2 },
                                    }}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        duration: 0.3,
                                        delay: index * 0.05,
                                    }}
                                    viewport={{ once: true }}
                                >
                                    <div className="text-primary dark:text-primary mb-2">
                                        {skill.icon}
                                    </div>
                                    <h4 className="text-lg font-semibold">
                                        {skill.name}
                                    </h4>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Projects Section */}
            <section
                ref={projectsRef}
                id="projects"
                className="py-16 px-4 sm:px-6 lg:px-8 bg-light-bg dark:bg-darkBg"
            >
                <div id="projects-anchor" className="absolute -mt-28 pt-28"></div>
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <motion.h2
                            className="text-4xl font-bold mb-4 text-center"
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            My{" "}
                            <span className="text-primary dark:text-primary">
                                Projects
                            </span>
                        </motion.h2>

                        <motion.p
                            className="text-xl text-gray-700 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto"
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            Here are some of my recent projects. Each project
                            demonstrates various technical skills and
                            problem-solving abilities.
                        </motion.p>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            {projects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
                                    initial={{ y: 30, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                    viewport={{ once: true }}
                                    whileHover={{
                                        y: -10,
                                        transition: { duration: 0.3 },
                                    }}
                                >
                                    <div className="relative h-40 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-auto object-contain object-center scale-101"
                                        />
                                    </div>

                                    <div className="p-6">
                                        <h3 className="text-xl font-bold mb-3 text-primary dark:text-primary">
                                            {project.title}
                                        </h3>

                                        <p className="text-gray-700 dark:text-gray-300 mb-4 text-justify">
                                            {project.description}
                                        </p>

                                        <div className="mb-4">
                                            <div className="flex flex-wrap gap-2">
                                                {project.technologies.map(
                                                    (tech, index) => (
                                                        <span
                                                            key={index}
                                                            className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full"
                                                        >
                                                            {tech}
                                                        </span>
                                                    )
                                                )}
                                            </div>
                                        </div>

                                        <div className="flex space-x-4 mt-4">
                                            {project.github && (
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center text-secondary dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                                                    aria-label={`GitHub repository for ${project.title}`}
                                                >
                                                    <FaGithub className="mr-2" />{" "}
                                                    Code
                                                </a>
                                            )}
                                            {project.demo && (
                                                <a
                                                    href={project.demo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center text-secondary dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                                                    aria-label={`Live demo for ${project.title}`}
                                                >
                                                    <FaExternalLinkAlt className="mr-2" />{" "}
                                                    Demo
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section
                ref={contactRef}
                id="contact"
                className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-darkBg"
            >
                <div id="contact-anchor" className="absolute -mt-28 pt-28"></div>
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <motion.h2
                            className="text-4xl font-bold mb-4 text-center"
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            Contact{" "}
                            <span className="text-primary dark:text-primary">
                                Me
                            </span>
                        </motion.h2>

                        <motion.p
                            className="text-xl text-gray-700 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto"
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            Feel free to reach out to me for any inquiries or
                            collaboration opportunities.
                        </motion.p>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Contact Form */}
                            <motion.div
                                initial={{ x: -30, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <div className="bg-white dark:bg-gray-700 rounded-lg p-8 shadow-lg">
                                    <h3 className="text-2xl font-bold mb-6">
                                        Send a Message
                                    </h3>

                                    <form>
                                        <div className="mb-4">
                                            <label
                                                htmlFor="name"
                                                className="block text-sm font-medium mb-2"
                                            >
                                                Your Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary bg-white dark:bg-gray-600 border-gray-300 dark:border-gray-500"
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <label
                                                htmlFor="email"
                                                className="block text-sm font-medium mb-2"
                                            >
                                                Your Email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary bg-white dark:bg-gray-600 border-gray-300 dark:border-gray-500"
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <label
                                                htmlFor="subject"
                                                className="block text-sm font-medium mb-2"
                                            >
                                                Subject
                                            </label>
                                            <input
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                required
                                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary bg-white dark:bg-gray-600 border-gray-300 dark:border-gray-500"
                                            />
                                        </div>

                                        <div className="mb-6">
                                            <label
                                                htmlFor="message"
                                                className="block text-sm font-medium mb-2"
                                            >
                                                Your Message
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                required
                                                rows="5"
                                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary bg-white dark:bg-gray-600 border-gray-300 dark:border-gray-500"
                                            ></textarea>
                                        </div>

                                        <motion.button
                                            type="submit"
                                            className="w-full py-3 px-6 bg-primary text-white font-medium rounded-md shadow-md hover:shadow-lg"
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            Send Message
                                        </motion.button>
                                    </form>
                                </div>
                            </motion.div>

                            {/* Contact Information */}
                            <motion.div
                                initial={{ x: 30, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                <div className="bg-white dark:bg-gray-700 rounded-lg p-8 shadow-lg">
                                    <h3 className="text-2xl font-bold mb-6">
                                        Contact Information
                                    </h3>

                                    <div className="space-y-6">
                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 mt-1">
                                                <FaEnvelope className="h-6 w-6 text-primary dark:text-primary" />
                                            </div>
                                            <div className="ml-4">
                                                <h4 className="text-lg font-medium">
                                                    Email
                                                </h4>
                                                <p className="text-gray-700 dark:text-gray-300">
                                                    <a
                                                        href="mailto:kartikeyatadiparti@gmail.com"
                                                        className="hover:text-primary dark:hover:text-primary"
                                                    >
                                                        kartikeyatadiparti@gmail.com
                                                    </a>
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 mt-1">
                                                <FaPhone className="h-6 w-6 text-primary dark:text-primary" />
                                            </div>
                                            <div className="ml-4">
                                                <h4 className="text-lg font-medium">
                                                    Phone
                                                </h4>
                                                <p className="text-gray-700 dark:text-gray-300">
                                                    <a
                                                        href="tel:+918919305582"
                                                        className="hover:text-primary dark:hover:text-primary"
                                                    >
                                                        +91 8919305582
                                                    </a>
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 mt-1">
                                                <FaMapMarkerAlt className="h-6 w-6 text-primary dark:text-primary" />
                                            </div>
                                            <div className="ml-4">
                                                <h4 className="text-lg font-medium">
                                                    Location
                                                </h4>
                                                <p className="text-gray-700 dark:text-gray-300">
                                                    Vizianagaram, Andhra Pradesh
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-8">
                                        <h4 className="text-lg font-medium mb-4">
                                            Connect With Me
                                        </h4>

                                        <div className="flex space-x-4">
                                            <a
                                                href="https://github.com/KarthikeyaTadiparti"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary text-2xl"
                                                aria-label="GitHub"
                                            >
                                                <FaGithub />
                                            </a>
                                            <a
                                                href="https://www.linkedin.com/in/karthikeya10/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary text-2xl"
                                                aria-label="LinkedIn"
                                            >
                                                <FaLinkedin />
                                            </a>
                                        </div>
                                    </div>

                                    <div className="mt-8">
                                        <h4 className="text-lg font-medium mb-4">
                                            Download Resume
                                        </h4>

                                        <motion.a
                                            href="/resume/KarthikeyaTadiparti_CV.pdf"
                                            download
                                            className="inline-flex items-center px-6 py-3 bg-secondary text-white hover:bg-primary dark:hover:bg-primary rounded-md shadow-sm transition duration-300"
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <FaDownload className="mr-2" />{" "}
                                            Download CV
                                        </motion.a>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Home;

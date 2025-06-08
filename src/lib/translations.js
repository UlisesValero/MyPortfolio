import ContactSection from "../components/pages/Contact";
import Footer from "../components/pages/Footer";

export const translations = {
    en: {
        heroCategories: [
            { target: "projects", category: "My projects" },
            { target: "contact", category: "Work with me" },
            { target: "hero", category: "Blog" },
            { target: "https://linktr.ee/Ulisesvalero", category: "Stay Connected" }
        ],
        welcomeSection: {
            clockInfo1: "Currently",
            clockInfo2: " in Argentina",
            contactButton: "Contact me✍🏻",
            welcome1: "Hi,",
            welcome2: "I'm",
            welcome3: "Front-end developer"
        },
        deployedPanel: {
            about: "My projects",
            contact: "Work with me",
            blog: "Blog",
            linktree: "Stay connected"
        },
        projectTitle: {
            projectTitle: "My projects"
        },
        experience: [
            {
                image: "/assets/CarouselBartolome.png",
                number: "01",
                briefDescription: "Landing page",
                name: "Bartolome Podesta",
                description: "Landing page developed for a company specializing in the sale of medical supplies. The site offers intuitive navigation through a product categorization system and includes a direct contact form to streamline communication with clients.",
                stack: "ReactJS, Tailwind v.04, Framer-Motion",
                status: "Online",
                id: 1,
                link: "https://bartolome-podesta.vercel.app/"
            },
            {
                image: "/assets/CarouselKiddu.png",
                number: "02",
                briefDescription: "E-Commerce",
                name: "TheKidd-U",
                description: "E-commerce project developed as part of the React course at CoderHouse. It represents a personal business idea focused on selling smash burgers. The site includes a shopping cart system and dynamic product filtering, integrated with Firebase for real-time data management.",
                stack: "ReactJS, Tailwind v.04, FireBase",
                status: "Online",
                id: 2,
                link: "https://react-js-coder-entrega.vercel.app/"
            },
            {
                image: "/assets/CarouselNails.png",
                number: "03",
                briefDescription: "Landing page",
                name: "Benegan Nails",
                description: "Landing page for a beauty-focused business. The site showcases the services of a salon specializing in eyebrow design, eyelash styling, and nail art. It features a contact system to simplify appointment booking and customer communication.",
                stack: "HTML5, CSS3 & Javascript",
                status: "Offline",
                id: 3,
                link: "https://ulisesvalero.github.io/Benegan-Nails/"
            },
            {
                image: "/assets/CarouselCv.png",
                number: "04",
                briefDescription: "CV",
                name: "Resume",
                description: "An updated version of my 2025 Curriculum Vitae, featuring detailed information about my work experience, academic background, and technical skills. Designed to present my professional profile in a clear and structured format.",
                stack: "Astro",
                status: "Online",
                id: 4,
                link: "https://cv-main-r6hxmmpyb-ulises-valeros-projects.vercel.app/"
            },
            // {
            //     image: "",
            //     number: "05",
            //     name: "TEB",
            //     description: "Updated Curriculum Vitae",
            //     stack: "Astro",
            //     status: "Online",
            //     id: 4
            // }

        ],

        cards: [
            {
                title: "Websites",
                text: "Modern and responsive websites tailored to your needs",
                icon: "AppWindow"
            },
            {
                title: "Web Apps",
                text: "Interactive web applications with powerful functionality",
                icon: "ChevronsLeftRight"
            },
            {
                title: "APIs",
                text: "Scalable and secure APIs for seamless integration",
                icon: "Database"
            },
            {
                title: "Service level",
                text: "High service standards to ensure satisfaction and reliability",
                icon: "UserPen"
            }
        ],

        contactSection: {
            title: "Work with me",
            buttonText: "Send"
        },

        form: {
            name: "Name",
            email: "Email",
            phone: "Phone",
            text: "Message"
        },
        blog: {
            title: "Beyond the code",
            text: "In addition to my passion for web development, I have other hobbies that I enjoy and that are a big part of who I am. Like any true geek, video games play an important role in my daily life — both as a form of entertainment and a source of creative inspiration. I also enjoy playing football: I'm always ready for a match, and I'm actually pretty good at it. But if there's something that truly relaxes and entertains me, it's cooking. Even though I don’t have a formal degree, many would say I cook better than some professionals. In this section, you'll get a glimpse of my life beyond code, as I share the things I’m passionate about in my free time."
        },
        footer: {
            portfolio: "My Portfolio",
            subTitle: "Building my future, one line of code at a time",
            linksTitle: "Quick Links",
            rightsText: "All rights reserved.",
            stayConnected: "Contact me"
        }
    },
    es: {
        heroCategories: [
            { target: "project", category: "Mis proyectos" },
            { target: "contact", category: "Trabaja conmigo" },
            { target: "hero", category: "Blog" },
            { target: "https://linktr.ee/Ulisesvalero", category: "Donde encontrarme" }

        ],
        welcomeSection: {
            clockInfo1: "Actualmente",
            clockInfo2: "hs  en Argentina",
            contactButton: "Contactame✍🏻",
            welcome1: "Hola,",
            welcome2: "Soy",
            welcome3: "Desarrollador front-end"
        },
        deployedPanel: {
            workWithMe: "Trabaja conmigo",
            blog: "Blog",
            stayConnected: "Donde encontrarme"
        },
        projectTitle: {
            projectTitle: "Mis proyectos"
        },
        experience: [

            {
                image: "/assets/CarouselBartolome.png",
                number: "01",
                briefDescription: "Landing page",
                name: "Bartolome Podesta",
                description: "Landing page diseñada para una empresa dedicada a la comercialización de insumos médicos. El sitio permite una navegación intuitiva gracias a un sistema de categorización de productos y un formulario de contacto directo, facilitando la comunicación entre los clientes y la empresa.",
                stack: "ReactJS, Tailwind v.04, Framer-Motion",
                status: "Activo",
                id: 1,
                link: "https://bartolome-podesta.vercel.app/"
            },
            {
                image: "/assets/CarouselKiddu.png",
                number: "02",
                briefDescription: "E-Commerce",
                name: "TheKidd-U",
                description: "E-commerce desarrollado como proyecto del curso de React en CoderHouse. Representa una propuesta de negocio personal enfocada en la venta de smash burgers. Incluye un sistema de carrito de compras y filtros dinámicos de productos, con integración a Firebase como base de datos en tiempo real.",
                stack: "ReactJS, Tailwind v.04, FireBase",
                status: "Activo",
                id: 2,
                link: "https://react-js-coder-entrega.vercel.app/"
            },
            {
                image: "/assets/CarouselNails.png",
                number: "03",
                briefDescription: "Landing page",
                name: "Benegan Nails",
                description: "Landing page para un emprendimiento del rubro de la belleza. El sitio presenta los servicios de un salón especializado en el diseño de cejas, pestañas y uñas. Incorpora un sistema de contacto para facilitar la reserva de turnos y la atención al cliente.",
                stack: "HTML5, CSS3 & Javascript",
                status: "Inactivo",
                id: 3,
                link: "https://ulisesvalero.github.io/Benegan-Nails/"
            },
            {
                image: "/assets/CarouselCv.png",
                number: "04",
                briefDescription: "CV",
                name: "Curriculum",
                description: "Versión actualizada de mi Currículum Vitae 2025, donde se detalla mi experiencia laboral, formación académica y habilidades técnicas. Es un recurso profesional pensado para mostrar mi perfil de manera clara y estructurada.",
                stack: "Astro",
                status: "Activo",
                id: 4,
                link: "https://cv-main-r6hxmmpyb-ulises-valeros-projects.vercel.app/"
            }
        ],
        cards: [
            {
                title: "Sitios web",
                text: "Sitios web modernos y responsivos, hechos a tu medida",
                icon: "AppWindow"
            },
            {
                title: "Aplicaciones web",
                text: "Aplicaciones web interactivas con gran funcionalidad",
                icon: "ChevronsLeftRight"
            },
            {
                title: "APIs",
                text: "APIs escalables y seguras para una integración fluida",
                icon: "Database"
            },
            {
                title: "Nivel de servicio",
                text: "Altos estándares de servicio para garantizar satisfacción y confiabilidad",
                icon: "UserPen"
            }
        ],
        contactSection: {
            title: "Trabaja conmigo",
            buttonText: "Enviar"
        },
        form: {
            name: "Nombre",
            email: "Correo electrónico",
            phone: "Teléfono",
            text: "Mensaje"
        },
        blog: {
            title: "Detrás del código",
            text: "Además de mi pasión por el desarrollo web, tengo otros hobbies que disfruto y que forman parte de quién soy. Como buen friki, los videojuegos ocupan un lugar importante en mi día a día, tanto como forma de entretenimiento como fuente de inspiración creativa. También disfruto de jugar al fútbol: siempre estoy listo para un picadito y no se me da para nada mal. Pero si hay algo que realmente me relaja y me divierte es cocinar. Aunque no tengo un título que lo avale, muchos podrían decir que cocino mejor que algunos profesionales. En esta sección vas a encontrar una forma de mostrarte mi vida más allá del código, compartiendo lo que me apasiona en mi tiempo libre."
        },
        footer: {
            portfolio: "Mi Portfolio",
            subTitle: "Escribiendo mi futuro, linea por linea",
            linksTitle: "Accesos Rapidos",
            rightsText: "Derechos reservados",
            stayConnected: "Conectemos"
        }


    }
}




/* seccion hobbies
ESPAÑOL ESPAÑA
Además de mi pasión por el desarrollo web, tengo otros hobbies que disfruto y que forman parte de quién soy. 
Como buen friki, los videojuegos ocupan un lugar importante en mi día a día, tanto como forma de entretenimiento como 
fuente de inspiración creativa. También disfruto de jugar al fútbol: siempre estoy listo para un picadito y no se me da para nada mal.
Pero si hay algo que realmente me relaja y me divierte es cocinar. 
Aunque no tengo un título que lo avale, muchos podrían decir que cocino mejor que algunos profesionales. 
En esta sección vas a encontrar una forma de mostrarte mi vida más allá del código, compartiendo lo que me apasiona en mi tiempo libre.

INGLES

In addition to my passion for web development, I have other hobbies that I enjoy and that are a big part of who I am.
Like any true geek, video games play an important role in my daily life — both as a form of entertainment and a source of creative inspiration.
I also enjoy playing football: I'm always ready for a match, and I'm actually pretty good at it.
But if there's something that truly relaxes and entertains me, it's cooking.
Even though I don’t have a formal degree, many would say I cook better than some professionals.
In this section, you'll get a glimpse of my life beyond code, as I share the things I’m passionate about in my free time.
*/
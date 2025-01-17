import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const api = axios.create({
    baseURL: 'https://fakeapi.local', // URL fictícia
  });

const mock = new MockAdapter(api);

mock.onGet('/portfolioCards').reply(200, {
    portfolio: [
        {
            title: "Project Mananger", 
            body: "With around 18 months of experience as a Project Manager, I led multidisciplinary teams made up of 4 to 12 members, managing up to three projects simultaneously and achieving significant results. Among the projects successfully completed are the implementation of a school CRM, the development of an internal platform for issuing, consulting and editing invoices, in addition to the restructuring of a medical insurance system, among others. My trajectory is marked by process optimization, cost reduction and strategic deliveries aligned with business objectives, with emphasis on my strong organizational and team leadership skills.",
            button:"See my projects",
            link:"",
            functionId: "projectMananger",
            image: "/assets/pm.webp"
        },
        {
            title: "FrontEnd Developer", 
            body: "As a Front-End Developer, I have contributed significantly to the creation and optimization of responsive, intuitive and visually attractive interfaces in several projects. My experience ranges from implementing dynamic web applications to improving UI/UX designs, always aligned with the best market practices. Additionally, I collaborated closely with cross-functional teams to deliver high-quality digital products, translating complex requirements into efficient solutions. I stand out for my ability to conduct dailies in a clear and productive way, in addition to actively supporting other team members, promoting an environment of collaboration and growth. My role also includes active leadership, encouraging agile practices and ensuring alignment between the team and the project objectives.",
            button:"See my projects",
            link:"",
            functionId: "frontEnd",
            image: "/assets/front.png"
        }
    ], 
  });


  mock.onGet('/frontProjects').reply(200, {
    frontEnd: [
        {
            title: 'Advice System - Matricula',
            body: "Construction and implementation of various solutions within the school system system such as online enrollment, timetable, control of indicators, academic and pedagogical management, school and administrative KPI'S, etc. The main tools used were: JS, TypeScript, ReactJs, NextJs, Material-UI and StyledComponents.",
            button: 'See the Employer',
            link: 'https://www.advicesystem.com.br/home',
            image:  "/assets/advice.png"
        },
        {
            title: '+Você by Wiz',
            body: "I coordinated and actively worked on integration, development and internal communication. We developed a new platform that optimized processes for commercial management, customer registration, monitoring of commissions and KPI'S. The main tools used were: JS, ReactJs, NextJs, Material-UI and StyledComponents.",
            button: 'See the Employer',
            link: 'https://wizmaisvoce.com.br/',
            image: "/assets/wiz.png"
        },
        {
            title: 'Coodesh',
            body: 'With the main tools used being JS, Next JS, ReactJs and NodeJS, I participated in all construction and implementation of the pages as well as maintenance and bug fixes.',
            button: 'See the Page',
            link: 'https://coodesh.com/',
            image: "/assets/coodesh.png"
        },
        {
            title: 'Prorise',
            body: 'Built and managed the landing page construction team, technologies used were: ReactJS, NextJS, TypeScript, JS and StyledComponents',
            button: 'See the Page',
            link: 'https://www.prorise.net.br/',
            image: "/assets/pr.png"
        },
        {
            title: 'GitHub',
            body: "Although outdated, here you can see a little of everything I did as a student. I'm currently refactoring and applying new best practices to make it more attractive.",
            button: 'GitHub Profile',
            link: 'https://github.com/RodrigoNeoEx',
            image: "/assets/git.png"
        },
    ]
  })

  mock.onGet('/pmProjects').reply(200, {
    projectMananger: [
        {
            title: 'Advice System - Matricula',
            body: "Conducted strategic meetings with directors and different areas, ensuring alignment and complete monitoring in pipeline management. Led the architecture of a school CRM, expanding the product portfolio from a single item to a wide range of solutions. This strategy consolidated my company as the main candidate for new projects, strengthening its position in the market and expanding its business opportunities. Project executed with a team of 12 developers.",
            button: 'See the Employer',
            link: 'https://www.advicesystem.com.br/home',
            image: "/assets/advice.png"
        },
        {
            title: 'Advice System - Folha',
            body: "I carried out complete monitoring of the project (end-to-end), monitoring tasks, team productivity and integration into the platform. We lead the modernization of a legacy system, transforming your database into a modern and efficient solution, aligned with customer needs and expectations. Project executed with a team of 6 developers.",
            button: 'See the Employer',
            link: 'https://www.advicesystem.com.br/home',
            image: "/assets/advice.png"
        },
        {
            title: 'PRORISE / Cast Group',
            body: "I directly contributed to ProRise's business expansion through the strategic capture of new projects and the efficient allocation of talent. I worked on forming teams for future projects, aligning skills with customer needs and ensuring the operational success and sustainable growth of the organization.",
            button: 'See the Employer',
            link: 'https://www.prorise.net.br/',
            image: "/assets/pr.png"
        },
        {
            title: 'Wiz Saúde',
            body: 'I coordinated and actively worked on integration, development and internal communication. We developed a new platform that optimized processes and managed developers and high-impact tasks. As a highlight, I eliminated an accumulated backlog of a year in just three months, enabling the creation of contractual amendments and expanding the scope of the project, generating significant value for the organization. Project executed with a team of 2 developers.',
            button: 'See the Employer',
            link: 'https://wizmaisvoce.com.br/',
            image: "/assets/wiz.png"
        },
        {
            title: 'QualityWay',
            body: "I started my activities here as a developer and little by little I implemented agile methodologies that resulted in a 70% reduction in the backlog and the optimization of the team structure, generating a reduction in costs and a significant increase in operational efficiency. I integrated internal and outsourced teams, using Azure as a central management platform, which promoted a more aligned, collaborative and productive workflow. Project executed with a team of 16 developers.",
            button: 'See the Employer',
            link: 'https://qualityway.com.br/',
            image: "/assets/quality.png"
        },
    ]
  })

  export default api;
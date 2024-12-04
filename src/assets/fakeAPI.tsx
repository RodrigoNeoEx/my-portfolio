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
            body: "In a short time as a Project Manager, I successfully initiated and completed various projects, including the implementation of a CRM, the development of a partnerships platform, and the restructuring of an educational CRM. This experience has equipped me to lead multidisciplinary teams, optimize processes, reduce costs, and ensure strategic deliveries aligned with business goals",
            button:"See my projects",
            link:"",
            functionId: "projectMananger"
        },
        {
            title: "FrontEnd Developer", 
            body: "As a Front-End Developer, I have successfully contributed to the creation and optimization of responsive, user-friendly interfaces for diverse projects. My experience includes implementing dynamic web applications, enhancing UI/UX designs, and collaborating with cross-functional teams to deliver high-quality digital products. This has equipped me with a strong ability to translate complex requirements into efficient and visually appealing solutions.",
            button:"See my projects",
            link:"",
            functionId: "frontEnd"
        }
    ], 
  });


  mock.onGet('/frontProjects').reply(200, {
    frontEnd: [
        {
            title: 'Advice System',
            body: "Construction and implementation of various solutions within the school system system such as online enrollment, timetable, control of indicators, academic and pedagogical management, school and administrative KPI'S, etc. The main tools used were: JS, TypeScript, ReactJs, NextJs, Material-UI and StyledComponents.",
            button: 'See the Employer',
            link: 'https://www.advicesystem.com.br/home',
        },
        {
            title: '+Você by Wiz',
            body: "I coordinated and actively worked on integration, development and internal communication. We developed a new platform that optimized processes for commercial management, customer registration, monitoring of commissions and KPI'S. The main tools used were: JS, ReactJs, NextJs, Material-UI and StyledComponents.",
            button: 'See the Employer',
            link: 'https://wizmaisvoce.com.br/',
        },
        {
            title: 'Coodesh',
            body: 'With the main tools used being JS, Next JS, ReactJs and NodeJS, I participated in all construction and implementation of the pages as well as maintenance and bug fixes.',
            button: 'See the Page',
            link: 'https://coodesh.com/',
        },
        {
            title: 'Prorise',
            body: 'Built and managed the landing page construction team, technologies used were: ReactJS, NextJS, TypeScript, JS and StyledComponents',
            button: 'See the Page',
            link: 'https://www.prorise.net.br/',
        },
        {
            title: 'GitHub',
            body: "Although outdated, here you can see a little of everything I did as a student. I'm currently refactoring and applying new best practices to make it more attractive.",
            button: 'GitHub Profile',
            link: 'https://github.com/RodrigoNeoEx',
        },
    ]
  })

  mock.onGet('/pmProjects').reply(200, {
    projectMananger: [
        {
            title: 'Advice System',
            body: "Conducted strategic meetings with directors and different areas, ensuring alignment and complete monitoring in pipeline management. Led the architecture of a school CRM, expanding the product portfolio from a single item to a wide range of solutions. This strategy consolidated the company as the main candidate for new projects, strengthening its position in the market and expanding its business opportunities.",
            button: 'See the Employer',
            link: 'https://www.advicesystem.com.br/home',
        },
        {
            title: 'Advice System',
            body: "I carried out complete monitoring of the project (end-to-end), monitoring tasks, team productivity and integration into the platform. We lead the modernization of a legacy system, transforming your database into a modern and efficient solution, aligned with customer needs and expectations.",
            button: 'See the Employer',
            link: 'https://www.advicesystem.com.br/home',
        },
        {
            title: 'PRORISE / Cast Group',
            body: "I directly contributed to ProRise's business expansion through the strategic capture of new projects and the efficient allocation of talent. I worked on forming teams for future projects, aligning skills with customer needs and ensuring the operational success and sustainable growth of the organization.",
            button: 'See the Employer',
            link: 'https://coodesh.com/',
        },
        {
            title: 'Wiz Saúde',
            body: 'I coordinated and actively worked on integration, development and internal communication. We developed a new platform that optimized processes and managed developers and high-impact tasks. As a highlight, I eliminated an accumulated backlog of a year in just three months, enabling the creation of contractual amendments and expanding the scope of the project, generating significant value for the organization.',
            button: 'See the Employer',
            link: 'https://wizmaisvoce.com.br/',
        },
        {
            title: 'QualityWay',
            body: "I started my activities here as a developer and little by little I implemented agile methodologies that resulted in a 70% reduction in the backlog and the optimization of the team structure, generating a reduction in costs and a significant increase in operational efficiency. I integrated internal and outsourced teams, using Azure as a central management platform, which promoted a more aligned, collaborative and productive workflow.",
            button: 'See the Employer',
            link: 'https://qualityway.com.br/',
        },
    ]
  })

  export default api;
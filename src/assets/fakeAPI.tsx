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
            link:""
        },
        {
            title: "FrontEnd Developer", 
            body: "As a Front-End Developer, I have successfully contributed to the creation and optimization of responsive, user-friendly interfaces for diverse projects. My experience includes implementing dynamic web applications, enhancing UI/UX designs, and collaborating with cross-functional teams to deliver high-quality digital products. This has equipped me with a strong ability to translate complex requirements into efficient and visually appealing solutions.",
            button:"See my projects",
            link:""
        }
    ], 
  });


  mock.onGet('/frontProjects').reply(200, {
    frontEnd: [
        {
            title: 'Coodesh',
            body: 'With the main tools used being JS, Next JS, ReactJs and NodeJS, I participated in all construction and implementation of the pages as well as maintenance and bug fixes.',
            button: 'See the Page',
            link: 'https://coodesh.com/',
        },
        {
            title: 'https://www.prorise.net.br/',
            body: 'Built and managed the landing page construction team, technologies used were: ReactJS, NextJS, TypeScript, JS and StyledComponents',
            button: 'See the Page',
            link: 'https://www.prorise.net.br/',
        },
        {
            title: 'https://www.advicesystem.com.br/',
            body: "Construction and implementation of various solutions within the school system system such as online enrollment, timetable, control of indicators, academic and pedagogical management, school and administrative KPI'S, etc. The main tools used were: JS, TypeScript, ReactJs, NextJs, Material-UI and StyledComponents.",
            button: 'See the Employer',
            link: 'https://www.advicesystem.com.br/home',
        },
        {
            title: 'GitHub',
            body: "Although outdated, here you can see a little of everything I did as a student. I'm currently refactoring and applying new best practices to make it more attractive.",
            button: 'GitHub Profile',
            link: 'https://github.com/RodrigoNeoEx',
        },
    ]
  })

  export default api;
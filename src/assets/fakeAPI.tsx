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
            button:"See my projects"
        },
        {
            title: "FrontEnd Developer", 
            body: "As a Front-End Developer, I have successfully contributed to the creation and optimization of responsive, user-friendly interfaces for diverse projects. My experience includes implementing dynamic web applications, enhancing UI/UX designs, and collaborating with cross-functional teams to deliver high-quality digital products. This has equipped me with a strong ability to translate complex requirements into efficient and visually appealing solutions.",
            button:"See my projects"
        }
    ], 
  });

  export default api;
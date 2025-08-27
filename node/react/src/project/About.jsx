import React from 'react';

function About() {
  return (
    <div className="m-2 p-2" style={{ backgroundColor: '#f8edeb' }}>
      <h2 className="text-center">About</h2>
      
      <p className="m-2 m-md-4 p-3 p-md-5 text-sm-start text-md-center"style={{ backgroundColor: '#fec89a' }} >
        Hello! I’m currently learning front-end development, and this mini project is part of my journey into building modern web applications using React. 
        The project is a simple, single-page application that includes a home page with a product list, as well as separate pages for About, Login — all built using React and styled with React-Bootstrap.
        <br /><br />
        The purpose of this project was to help me understand how React works in a real-world layout, especially how routing and component-based design come together to create a smooth user experience. 
        I used React Router to create navigation between the pages, which allowed me to see how different views can be loaded dynamically without reloading the entire page. 
        <br /><br />
                The product list page showcases static sample items styled in a clean, responsive layout using Bootstrap’s grid system. 
        For the Login page, I implemented a basic form using useState to manage input, with simple alert-based feedback on submission. 
        The About  page is added to practice routing and layout consistency across multiple sections of the app.
        <br /><br />
        Styling was done using a combination of Bootstrap utility classes and some custom CSS to adjust spacing, background colors, shadows, and responsive design. 
        This helped me gain a better understanding of how to work with prebuilt UI frameworks while still being able to customize the look and feel of a page.
        <br /><br />
        Overall, this project was a great learning experience. It helped me become more comfortable with React components, routing, form handling, and responsive design principles. 
        I'm excited to keep learning, improving, and eventually building more dynamic, data-driven applications.
      </p>
    </div>
  );
}

export default About;

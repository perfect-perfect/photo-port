import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery'
import ContactForm from './components/Contact';
// import './App.css';

function App() {
    // create a state that will render the page based on which menu item the user selects from the nav bar
    //  - we set the initial value of 'contactSelected' to 'false'
    //  - this is to prevent the contact form from showing when a user initally naveigates to the homepage
    const [contactSelected, setContactSelected] = useState(false);

    const [categories] = useState([
        {
            name: "commercial",
            description: "Photos of grocery stores, food trucks, and other commercial projects",
        },
        {
            name: "portraits",
            description: "Portraits of people in my life"
        },
        {
            name: "food",
            description: "Delicious delicacies"
        },
        {
            name: "landscape",
            description: "Fields, farmhouses, waterfalls, and the beauty of nature"
        }
    ]);

    const [currentCategory, setCurrentCategory] = useState(categories[0]);

    return (
        <div>
			<Nav
                categories={categories}
                setCurrentCategory={setCurrentCategory}
                currentCategory={currentCategory}
                contactSelected={contactSelected}
                setContactSelected={setContactSelected}
            ></Nav>
            <main>
                {!contactSelected ? (
                    <>
                        <Gallery currentCategory={currentCategory}></Gallery>
                        <About></About>
                    </>
                ) 
                : 
                (
                    <ContactForm></ContactForm>
                )}
            </main>
        </div>
    );
}

export default App;

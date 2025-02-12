// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });




import Greeting from "./Greeting"
import {render,screen, waitFor} from '@testing-library/react';
import userEvent from "@testing-library/user-event";



describe("Greeting Component", ()=>{
    test('component test of hello world',()=>
        {
            //Arranging the data
            render(<Greeting/>);
        
            //Action 
        
        
        
            //Assert- result of the test
            const helloElement = screen.getByText('hello welcome to the testing');        
            expect(helloElement).toBeInTheDocument();
        });

        test('renders the text has not changed before the button click ',()=>
        {
            render(<Greeting/>)
             


            const changedElement = screen.getByText('the text has not changed',{exact : false});
            expect(changedElement).toBeInTheDocument(); 
        });

        test('renders the text has changed if the button is clicked',async()=>
        {
            //Arrange
            render(<Greeting/>);
            
            //Action
            const buttonElement = screen.getByRole('button');
            userEvent.click(buttonElement);

            //Assert
            await waitFor(()=>{
                const outputElement = screen.getByText('the text is changed');
                expect(outputElement).toBeInTheDocument();
            });
           
        });

        test("not rendering the text has not changed once the button is clicked",async ()=>{
            //Arrange
            render(<Greeting/>);

            //Action
            const buttonElement = screen.getByRole('button');
            userEvent.click(buttonElement);

            //Assert
            await waitFor(()=>{
                const disappearingElement = screen.queryByText('the text has not changed');
                expect(disappearingElement).toBeNull();
            });
            

        })

    
});

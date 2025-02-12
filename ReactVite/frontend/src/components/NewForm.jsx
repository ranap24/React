import styles from './NewForm.module.css';
import {Form} from 'react-router-dom';

function FormPage()
{
    // function handleSubmit(event)
    // {
    //     event.preventDefault();
    //     const fd = new FormData(event.target);
    //     const interests = fd.getAll('interests');
    //     console.log(interests);
    //     const form = Object.fromEntries(fd.entries());
    //     form.interests = interests
    //     console.log(form);


    // }
    console.log("execution form");
    return (
        <div>
            <Form method = 'POST'className={styles.form}>
                <div className="add">
                <label htmlFor="name">Name</label>
                <input
                 type = 'text'
                 id = 'name'
                 name = 'name'
                 required
                />
                </div>
                <div className="add">
                <label htmlFor="email">Email</label>
                <input
                 type = 'email'
                 id = 'email'
                 name = 'email'
                 required
                />
                </div>
                <div className="add">
                <label htmlFor="phone">Phone Number:</label>
                <input
                 type = 'text'
                 id = 'phone'
                 name="phone"
                 required
                />
                </div>
                <div>
                    <label htmlFor='Gender'>Gender</label>
                    <input type='radio' id='Gender' name='Gender' value= "male"/>male
                    <input type='radio' id='Gender' name = 'Gender' value="female" />female
                </div>
                <div className={styles.checkbox}>
                    <label htmlFor='interests'>Interests:</label>
                    <div>
                    <input type='checkbox'id='interests' name='interests' value="sports"/> sports
                    <input type='checkbox'id='interests' name='interests' value="music"/> music
                    <input type='checkbox' id='interests' name='interests' value="exploration"/> exploration
                    <input type='checkbox' id='interests' name='interests' value="learning"/> learning
                </div>
                    
                </div>
                <div className="add">
                 <button type="submit">submit</button>
                </div>

            </Form>
        </div>
    );
}

export default FormPage;
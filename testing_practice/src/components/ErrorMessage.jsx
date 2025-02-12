const ErrorMessage = ({message = "something went wrong"}) => {

    return (
        <div data-testid = 'message_container'>
            {message}
        </div>
    );
}

export default ErrorMessage;
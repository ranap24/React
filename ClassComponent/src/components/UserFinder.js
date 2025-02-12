import { Fragment,Component} from 'react';
import ErrorBoundary from './ErrorBoundary.js';

import Users from './Users';
import classes from './UserFinder.module.css';

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];



// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState('');
// }

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

 


  class UserFinder extends Component {

    constructor()
{
    super();
    this.state = {
        filteredUsers : DUMMY_USERS,
        searchTerm: ''
    };
}


   componentDidMount()
   {
    this.setState({filteredUsers:DUMMY_USERS});
   }

    componentDidUpdate(prevprops,prevstate)
    {
        if(prevstate.searchTerm !== this.state.searchTerm)
        {
        this.setState({
            filteredUsers:DUMMY_USERS.filter((user) => user.name.includes(this.state.searchTerm))

          });
        }

    }

    searchChangeHandler (event){
        this.setState({searchTerm : event.target.value});
      }

    render()
  {
    return (
        <Fragment>
          <div className={classes.finder}>
            <input type='search' onChange={this.searchChangeHandler.bind(this)} />
          </div>
          <ErrorBoundary><Users users={this.state.filteredUsers} /></ErrorBoundary>
        </Fragment>
      );
  }
  }

 


export default UserFinder;
import { Link } from 'react-router-dom';
import './Profile.css'
import Header from './Header';
const Profile=()=>{
    return(
        <div>
            <Header></Header>
        <div className='innerbox'>
        <h6 className='h6'>your profile is <Link to="/update"> not complete </Link></h6>
    </div>
    </div>
    )
}

export default Profile;
import React, {Component} from 'react';
import {storage} from '../firebase';
import "./UpdateProfile.css"
import Header from './Header';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: '',
    }
    this.handleChange = this
      .handleChange
      .bind(this);
      this.handleUpload = this.handleUpload.bind(this);
  }
  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({image}));
    }
  }
  handleUpload = () => {
      const {image} = this.state;
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on('state_changed', 
      (snapshot) => {
        // progrss function ....
      }, 
      (error) => {
           // error function ....
        console.log(error);
      }, 
    () => {
        // complete function ....
        storage.ref('images').child(image.name).getDownloadURL().then(url => {
            console.log(url);
            this.setState({url});
        })
    });
  }
  render() {
    const style = {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    };
    return (
      <div>
        <Header></Header>
      <div className="innerbox">
      <div>
      <img src={this.state.url || "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"} alt="Avatar" className="avatar" />
      </div>
      <input type="file" onChange={this.handleChange}/>
      <button onClick={this.handleUpload}>Upload</button>
      </div>
      </div>
    )
  }
}

export default Profile;
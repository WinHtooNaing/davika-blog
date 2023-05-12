import Sidebar from '../../components/sidebar/Sidebar';
import './settings.css';
const Settings = () => {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form  className="settingsForm">
                    <label >Profile Picture</label>
                    <div className="settingsPP">
                        <img src="https://th.bing.com/th/id/OIP.CkvSkE0ywAXMo5xBQnvn_QHaJR?pid=ImgDet&w=206&h=258&c=7" alt="" />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon far fa-user-circle"></i>
                        </label>
                        <input type='file' id='fileInput' style={{display : "none"}}/>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder='Safak' />
                    <label>Email</label>
                    <input type="email" placeholder='Safak@gmail.com' />
                    <label>Password</label>
                    <input type="password" />
                    <button className="settingsSubmit">Update</button>
                    
                </form>
            </div>
            <Sidebar />
        </div>
    )
}



export default Settings;
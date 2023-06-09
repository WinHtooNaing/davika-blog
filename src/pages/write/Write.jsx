import './write.css';
const Write = () => {
    return (
        <div className="write">
            <img src="https://i.pinimg.com/originals/40/20/78/402078db15be4fd9001cc0f0d41b91e6.jpg" alt="" className='writeImg'/>
            <form  className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id='fileInput' style={{display : "none"}}/>
                    <input type="text" placeholder='Title' className='writeInput' autoFocus={true}/>
                </div>
                <div className="writeFormGroup">
                    <textarea 
                    placeholder='Tell your story...'
                    type='text'
                    className='writeInput writeText'></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}



export default Write;
import './post.css'
const Post = () => {
    return (
        <div className="post">
            <img 
                className='postImg'
            src="https://ilarge.lisimg.com/image/21255722/740full-davika-hoorne.jpg" alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                Lorem ipsum dolor sit amet 
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDec">
            Davika Hoorne (Thai: ดาวิกา โฮร์เน่), known as Mai (Thai: ใหม่), is a Thai actress, model and singer, who made her acting debut in 2010 - Ngao Kammathep series as a lead. She rose to fame with a film: Heart Attack aka "Freelance" opposite Sunny Suwanmethanon. Her other notable works are Suddenly Twenty, My Ambulance and Pee Mak alongside Mario Maurer, and Astrophile alongside Vachirawit Chivaaree.[1] She has won multiple awards for her work, including Best Actress at the "Bangkok Critics Assembly Awards", Best Actress for two consecutive years at the "Thai Film Director Awards" and Best Actress at the 25th "Subannahongsa Awards" for her movie “Freelance".[2][3][4][5][6] In 2023, she has won Best Global Teleplay Leading Actress in "36th Global Arts and Television Huading Awards"
            </p>
        </div>
    )
}


export default Post;
import './singlePost.css'
const SinglePost = () => {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="https://th.bing.com/th/id/OIP.4PuNi6AbPlEXbhORXrjGVwHaE8?pid=ImgDet&w=1080&h=720&rs=1" 
                alt="" 
                    className='singlePostImg'
                />
                <h1 className="singlePostTitle">
                About Davika Hoorne
                <div className="singlePostEdit">
                    <i className='singlePostIcon far fa-edit'></i>        
                    <i className='singlePostIcon far fa-trash-alt'></i>        
                </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author: <b>Wikipedia</b>
                    </span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">
                Davika Hoorne (Thai: ดาวิกา โฮร์เน่), known as Mai (Thai: ใหม่), is a Thai actress, model and singer, who made her acting debut in 2010 - Ngao Kammathep series as a lead. She rose to fame with a film: Heart Attack aka "Freelance" opposite Sunny Suwanmethanon. Her other notable works are Suddenly Twenty, My Ambulance and Pee Mak alongside Mario Maurer, and Astrophile alongside Vachirawit Chivaaree.[1] She has won multiple awards for her work, including Best Actress at the "Bangkok Critics Assembly Awards", Best Actress for two consecutive years at the "Thai Film Director Awards" and Best Actress at the 25th "Subannahongsa Awards" for her movie “Freelance".[2][3][4][5][6] In 2023, she has won Best Global Teleplay Leading Actress in "36th Global Arts and Television Huading Awards"
                Davika was born to a Belgian father and a Thai mother in Bangkok.[8] Her mother nicknamed her "Mai" after singer Mai Charoenpura.[9] Her parents divorced when she was 10 years old, and then was raised by her mother and aunt.[10][11][12]

In 2014, Davika bought a house, post her father's retirement, for him and his new family to live in Thailand.[13][14][15]

Davika obtained her high school degree from Kevalee International School in Bangkok and is currently completing a Bachelor's degree in Communication Arts at Rangsit University's International Programme.
In 2010, Davika started as a model before making her acting debut as a female lead role in the television series Ngao Kammathep, and rose to fame with the films Heart Attack[17] aka 'Freelance', is a movie made by top indie director Nawapol Thamrongrattanarit for GTH, which won eight Golden Swans at the Subannahongsa Award.[18] In 2013, she consolidated her stardom with her role as “Mae Nak” in Pee Mak Phra Khanong, a highly successful movie that garnered more than 1 billion baht in revenue. Pee Mak was a box-office hit in many Asian and Australian cities.


                </p>
            </div>
        </div>
    )
}



export default SinglePost;
import { FaFacebook, FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";


const SocialIcons = () => {
    return (
        <>
            <div>
                <a href="https://www.facebook.com/profile.php?id=100013453905671&rdid=SyfJOYE4Te1h5FBs&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19xG5vB5Yw%2F#" target="blank"><FaFacebook /></a>
                <a href="https://www.instagram.com/distribuidoralm27/" target="blank"><FaInstagram /></a>
                <a href="https://wa.me/5491153045062" target="blank"><FaWhatsapp /></a>
            </div>


            <style jsx>{`
                div{
                    display:flex;
                    
                }
                a{
                    background-color: #021F3F;
                    color: rgb(237, 50, 58);                
                    height: 40px;
                    width: 40px;   
                    font-size: 1.8rem;
                    border-radius:50%;
                    border: solid lightgray 1px;
                    display:flex;
                    justify-content:center;
                    align-items: center;
                    cursor:pointer;
                    margin:10px;
                    transition: background-color 0.3s ease;
                }
                a:hover {
                    background-color: rgb(237, 50, 58)  ;
                    color: #021F3F;
                }
                a:active {
                    height: 37px !important;
                    width: 37px !important;
                    font-size: 0.7rem !important;
                    transition: 0.3s !important;
                }
                 

            
            `}</style>
        </>
    )
}

export default SocialIcons
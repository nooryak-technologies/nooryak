import React from 'react'
import "./socialmedia.scss"

export default function SocialMedia() {

    const socials = [
        { name: "instagram", icon: "fa-instagram", link: "https://www.instagram.com/nooryak_technologies/" },
        { name: "facebook", icon: "fa-facebook-f", link: "https://www.facebook.com/nooryaktech" },
        { name: "linkedin", icon: "fa-linkedin-in", link: "https://www.linkedin.com/company/nooryak-tech/" },
        { name: "x", icon: "fa-x-twitter", link: "https://x.com/nooryaktech" },
        { name: "youtube", icon: "fa-youtube", link: "https://www.youtube.com/@nooryaktechnologies" },
    ];
    return (
        <div>   <div className="social-wrapper">
            {socials.map((item, index) => (
                <a
                    key={index}
                    href={item.link}
                    className={`icon ${item.name}`}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.name}
                >
                    <i className={`fab ${item.icon}`}></i>
                </a>
            ))}
        </div></div>
    )
}

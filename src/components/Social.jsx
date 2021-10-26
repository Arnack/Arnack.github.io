import React from "react";

const SocialShare = [
  {
    iconName: "facebook",
    link: "https://www.facebook.com/gregory.orloff.5",
  },
  { iconName: "vk", link: "https://vk.com/gri.goriy" },
  {
    iconName: "instagram",
    link: "https://www.instagram.com/utrom.go",
  },
  { iconName: "linkedin", link: "https://www.linkedin.com/in/grigoriy-orlov/" },
  {
    iconName: "github",
    link: "https://www.github.com/arnack",
  },
];
const Social = () => {
  return (
    <>
      <ul className="social">
        {SocialShare.map((val, i) => (
          <li key={i}>
            <a href={`${val.link}`} target="_blank" rel="noreferrer">
              <img
                className="svg"
                src={`/assets/img/svg/social/${val.iconName}.svg`}
                alt="social"
              ></img>
            </a>
          </li>
        ))}
      </ul>
      {/* END SOCIAL */}
    </>
  );
};

export default Social;

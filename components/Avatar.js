const Avatar = ({ url, className }) => {
  return <img loading="lazy" className={`rounded-full w-10 transform cursor-pointer transition duration-150 hover:scale-110 ${className}`} src={url} alt="profile pic" />;
};

export default Avatar;
import { BsGithub, BsLinkedin, BsFacebook, BsInstagram } from "react-icons/bs";
import { useUser } from "@auth0/nextjs-auth0/client";
const Footer = () => {
  const { user } = useUser();

  return (
    <footer
      className={
        user
          ? "border rounded shadow-2xl container mx-auto w-full px-24 mt-12"
          : "border rounded shadow-2xl container mx-auto w-4/6 px-24 mt-12"
      }
    >
      <p className="text-center">Connect and follow me on social media</p>
      <div className="flex justify-center gap-12 w-4/6 mt-10 mb-4 mx-auto">
        <a
          className="hover:scale-125 ease-in-out duration-150"
          href="https://www.facebook.com/tudorasebastian.0796"
          target="_blank"
        >
          <BsFacebook color="blue" size={35} />
        </a>
        <a
          className="hover:scale-125 ease-in-out duration-150"
          href="https://www.instagram.com/sebastiantudora/"
          target="_blank"
        >
          <BsInstagram color="purple" size={35} />
        </a>
        <a
          className="hover:scale-125 ease-in-out duration-150"
          href="https://www.linkedin.com/in/tudora-sebastian-1091a3224/"
          target="_blank"
        >
          <BsLinkedin color="blue" size={35} />
        </a>
        <a
          className="hover:scale-125 ease-in-out duration-150"
          href="https://github.com/tudrsebastian"
          target="_blank"
        >
          <BsGithub size={35} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

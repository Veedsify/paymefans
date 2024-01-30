    import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <img src="/images/profilecover.png" alt="" />

      <div className=" relative flex border w-full  md:px-10 px-4">
        <img
          src="/images/profilecover.png"
          alt=""
          className="w-20 h-20 object-cover -top-10 absolute rounded-full border-2 border-primary-dark-pink  "
        />
        <div className="ml-auto border block">
          <Link to="/">
            <p>Follow</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;

import Image from "next/image";

const UserIntro = ({ profile }: { profile: any }) => {
  return (
    <div data-aos="fade-up" className="grid lg:grid-cols-5 lg:px-20 gap-10">
      <div className="lg:col-span-2">
        <div className="relative">
          <Image
            src={profile.userPhoto}
            alt={profile.name}
            width={600}
            height={300}
            className="shadow-lg shadow-violet-950 rounded-lg"
          />
        </div>
      </div>
      <div className="lg:col-span-3">
        <h2 className="font-semibold text-violet-200 text-3xl mb-2">
          {profile.name}
        </h2>
        <p className="font-semibold text-gray-300 mb-5">
          ({profile.designation})
        </p>
        <p className=" leading-6 whitespace-pre-wrap font-medium text-gray-400 text-justify">
          {profile.description}
        </p>
      </div>
    </div>
  );
};

export default UserIntro;

import Image from "next/image";

const Hero = () => {
  return (
    <div className="h-96 w-full relative">
      <Image
        priority
        layout="fill" // required
        objectFit="cover" // change to suit your needs
        src="https://cdn.pixabay.com/photo/2016/08/14/16/53/internet-1593378_1280.jpg"
      />
    </div>
  );
};

export default Hero;

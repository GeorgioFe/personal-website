import Image from "next/image";

export default function Profile() {
  return (
    <div className="flex justify-center">
      <Image
        src="/profile_picture.jpeg"
        alt="Profile photo"
        width={192}
        height={192}
        className="rounded-xl object-cover"
      />
    </div>
  );
}
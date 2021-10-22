import { useRouter } from "next/router";

export const Toolbar = () => {
  const router = useRouter();

  return (
    <div className="flex w-full justify-center h-20">
      <div className="m-8 cursor-pointer" onClick={() => router.push("/")}>
        Home
      </div>
      <div
        className="m-8 cursor-pointer"
        onClick={() => router.push("/feed/1")}
      >
        Feed
      </div>
      <div className="m-8 cursor-pointer" onClick={() => router.push("/eom")}>
        EOM
      </div>
      <div
        className="m-8 cursor-pointer"
        onClick={() => window.open("https://github.com/hunzalaqamar", "_blank")}
      >
        Github
      </div>
    </div>
  );
};

export default Toolbar;

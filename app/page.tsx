import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { DiGithubBadge } from "react-icons/di";
import { SiBloglovin } from "react-icons/si";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col lg:flex-row items-center bg-[#1E1919] h-full">
        <div className="p-10 flex flex-col bg-[#2B2929] text-white space-y-5">
          <h1 className="text-5xl font-bold">
            드롭박스에 오신 것을 환영합니다. <br />
            유저의 비즈니스 요구 사항 모든 것을 저장합니다.
          </h1>

          <p className="pb-20">Dropbox</p>
          <Link
            href="/dashboard"
            className="flex cursor-pointer bg-blue-500 p-5 w-fit"
          >
            파일 저장하기
            <ArrowRight className="ml-10" />
          </Link>
        </div>

        <div className="bg-[#1E1919] h-full p-10">
          <video autoPlay loop muted className="rounded-lg">
            <source
              src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/overview/lp-header-graphite200-1920x1080.mp4"
              type="video/mp4"
            />
            Your broser does not support the video tag.
          </video>
        </div>
      </div>
      <p className="text-center font-bold text-xl pt-5">DropBox</p>
      <p className="text-center font-light p-2">
        자유롭게 파일을 저장할 수 있도록 만들었습니다. 많은 이용 바랍니다^^
      </p>
      <p className="text-center font-light pb-2">
        문제시 <span className="text-green-500">dlfwnd5532@gmail.com</span>{" "}
        메일로 부탁드립니다.
      </p>

      <p className="flex justify-center text-center font-light">
        © 프론트엔드 개발자 — 오일중
        <Link
          href="https://github.com/happy8131/DropBox"
          className="mr-1 ml-5 flex items-center"
          target="_blank"
        >
          <DiGithubBadge
            size={"1.5rem"}
            style={{ margin: "0px 0px 0px 0px" }}
          />
        </Link>
        |
        <Link
          href="https://happy8131.tistory.com/"
          target="_blank"
          className="ml-2 flex items-center"
        >
          <SiBloglovin size={"1.3rem"} style={{ margin: "0px 0px 0px 0px" }} />
        </Link>
      </p>
    </main>
  );
}

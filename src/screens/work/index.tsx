import Titlebold from "@/components/Title/titlebold";
import Image from "next/image";

const WorkScreen = () => {
  return (
    <section className="h-full mb-[160px]">
      <div className="containers flex flex-col items-center justify-center mt-8">
        <Titlebold
          title="Our Work"
          className="text-transparent mt-6 bg-clip-text bg-grad-text-2"
          p="Under construction !"
        />
        <div className="relative mt-24 w-[800px] h-[600px]">
          <Image src="/images/maintenance/maintenance.gif" layout="fill" />
        </div>
      </div>
    </section>
  );
};

export default WorkScreen;

import Image from "next/image";
import ButtonAnalytics from "./buttonAnalytics";

export default function Analytics() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <Image
          className="mx-auto my-4"
          src="/assets/analytics.jpg"
          alt="Analytics"
          width={500}
          height={100}
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
            numquam, culpa animi aut ea fugiat repudiandae! Veritatis, nobis
            quis reiciendis labore natus atque esse, error placeat nostrum
            assumenda blanditiis laboriosam.
          </p>
          <ButtonAnalytics>Get Started</ButtonAnalytics>
        </div>
      </div>
    </div>
  );
}

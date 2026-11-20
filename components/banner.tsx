import { Banner as BannerType } from "@/types";

interface BannerProps {
  data: BannerType;
}

const Banner: React.FC<BannerProps> = ({ data }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        className="rounded-xl relative aspect-[16/9] sm:aspect-[2/1] md:aspect-[2.4/1] overflow-hidden bg-cover bg-center bg-neutral-200"
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
      >
        <div className="h-full w-full flex flex-col justify-center items-center text-center px-4">
          <p className="font-bold text-white text-xl sm:text-3xl md:text-5xl lg:text-6xl max-w-xs sm:max-w-xl tracking-tight">
            {data?.label}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;

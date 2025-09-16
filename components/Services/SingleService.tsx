import { Service } from "@/types/service";

const SingleService = ({ service }: { service: Service }) => {
  const { icon, title, paragraph, price, duration } = service;
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          {icon}
        </div>
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
        {(price || duration) && (
          <div className="mt-4 flex flex-wrap gap-2">
            {price && (
              <span className="inline-block rounded-full bg-primary bg-opacity-10 px-3 py-1 text-sm font-medium text-primary">
                {price}
              </span>
            )}
            {duration && (
              <span className="inline-block rounded-full bg-secondary bg-opacity-10 px-3 py-1 text-sm font-medium text-secondary">
                {duration}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleService;
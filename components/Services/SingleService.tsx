import { Service } from "@/types/service";

const SingleService = ({ service }: { service: Service }) => {
  const { icon, title, paragraph, price, duration, delivery } = service;
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary mx-auto">
          {icon}
        </div>
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl text-center">
          {title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color text-center mb-6">
          {paragraph}
        </p>
        <div className="flex flex-col gap-3 items-center">
          {price && (
            <span className="inline-block rounded-full bg-primary bg-opacity-10 px-4 py-2 text-lg font-semibold text-primary">
              {price}
            </span>
          )}
          {duration && (
            <span className="inline-block rounded-full bg-secondary bg-opacity-10 px-4 py-2 text-sm font-medium text-secondary">
              Duration: {duration}
            </span>
          )}
          {delivery && (
            <span className="inline-block rounded-full bg-green-500 bg-opacity-10 px-4 py-2 text-sm font-medium text-green-600">
              {delivery}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleService;
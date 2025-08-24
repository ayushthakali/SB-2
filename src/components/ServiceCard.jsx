function ServiceCard({ title, imageUrl, description, onlyImage }) {
  return (
    <div className="bg-white h-full shadow-md hover:shadow-2xl transition-shadow duration-300 rounded-2xl overflow-hidden grid gap-4 md:grid-cols-8 ">
      {imageUrl ? (
        <figure
          className={`col-span-3 md:col-span-3 w-full flex items-center justify-center ${
            onlyImage ? "md:col-span-8 rounded-lg" : ""
          }`}
        >
          <img
            src={imageUrl}
            alt={`${title} image`}
            className="h-56 md:h-full object-stretch rounded-l-lg"
          />
        </figure>
      ) : (
        ""
      )}

      {!onlyImage && (
        <div
          className={`col-span-5 md:col-span-5 py-8 px-8  flex flex-col justify-center ${
            imageUrl ? "" : "md:col-span-8 px-8 "
          }`}
        >
          <h2 className="text-2xl md:text-3xl font-bold  uppercase tracking-wide text-gray-800 mb-4">
            {title}
          </h2>
          <div className="text-sm md:text-base text-gray-700 leading-normal">
            {description}
          </div>
        </div>
      )}
    </div>
  );
}

export default ServiceCard;

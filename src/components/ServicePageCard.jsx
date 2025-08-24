function ServiceCard({ title, imageUrl, description }) {
  return (
    <div className="card card-side bg-white shadow-xl rounded-4xl cursor-pointer transition-transform hover:scale-105 ease-in duration-400 ">
      <figure className="flex-shrink-0">
        <img
          src={imageUrl}
          alt={`${title} image`}
          className="w-32 h-32 md:w-48 md:h-44 object-cover"
        />
      </figure>
      <div className="card-body text-gray-700 ">
        <h2 className="card-title tracking-light font-semibold text-xl ">{title}</h2>
        <p className="font-light tracking-wide text-justify text-base">{description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;

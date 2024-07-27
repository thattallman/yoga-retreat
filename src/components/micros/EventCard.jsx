const EventCard = ({ image, title, description, date, duration,location,price }) => {
  const convertDate = (dateFormat, duration) => {
    const date = new Date(dateFormat * 1000);
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    return `${month} ${day} - ${
      day + duration > 30 ? "next month" : day + duration
    } , ${year}`;
  };

  return (
    <div className="w-full min-h-[360px] bg-[#E0D9CF] rounded-lg flex  flex-col gap-2 p-4">
      <img
        src={image}
        alt="image"
        className="w-[200px] h-[150px] object-cover rounded-[20px]"
      />
      <h1 className="font-[600] text-[18px]">{title}</h1>
      <p className="text-[14px]">{description}</p>
      <h1 className="text-[14px]">Date: {convertDate(date, duration)}</h1>
      <h1 className="text-[14px]">Location: {location}</h1>
      <h1 className="text-[14px]">Price: ${price}</h1>
    </div>
  );
};

export default EventCard;

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const formatDate = (dates) => {
  if (dates) {
    const checkIn = dates?.checkIn?.split("-");
    const checkOut = dates?.checkOut?.split("-");
    if (checkIn[0] === checkOut[0]) {
      return `${checkIn[2]}, ${months[checkIn[1] - 1]} - ${checkOut[2]}, ${
        months[checkOut[1] - 1]
      } ${checkIn[0]}`;
    }
    if (checkIn[0] < checkOut[0]) {
      return `${checkIn[2]}, ${months[checkIn[1] - 1]} ${checkIn[0]} - ${
        checkOut[2]
      }, ${months[checkOut[1] - 1]} ${checkOut[0]}`;
    }
  }
};

export const calculatePrice = (dates) => {
  const days = Math.ceil(
    (new Date(dates?.checkOut) - new Date(dates?.checkIn)) / 1000 / 60 / 60 / 24
  );
  const price = days * dates?.price;
  const cleaningFee = Math.ceil(price*0.22)
  const airbnbFee = Math.ceil(price*0.11)
  
  const taxes = Math.ceil(price*0.09)
  const totalPrice = Math.ceil(price+cleaningFee+airbnbFee+taxes)
  return {price, cleaningFee, airbnbFee,taxes,totalPrice,days};
};


export const avеrageRate = (rate)=>{
  
  const rating =rate.reduce((acc, curr)=>{
    acc+=curr.rating
   
    return acc
   },0 )
  
return rating/rate.length
}
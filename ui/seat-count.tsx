import { useState, useEffect } from "react";

export function SeatCount({ workshopKey }: { workshopKey: string }) {
  const [seatCount, setSeatCount] = useState({ seats: 20, taken: 0 });
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://workshop-registration.herokuapp.com/api/seats")
      .then((res) => res.json())
      .then((data) => {
        setSeatCount(data[workshopKey]);
      })
      .finally(() => setLoading(false));
  }, []);

  if (isLoading) return <>...</>;

  if (!seatCount) return <>xx</>;

  return <>{seatCount.seats - seatCount.taken}</>;
}

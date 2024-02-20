import Calendar from "@/components/Calendar";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Course",
  description:
    "Course",
};

const Calendar2 = () => {
  return (
    <DefaultLayout>
      <Calendar />
    </DefaultLayout>
  );
};

export default Calendar2;

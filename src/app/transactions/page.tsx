import Calendar from "@/components/Calendar";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Course",
  description:
    "Course",
};

const Transactions = () => {
  return (
    <DefaultLayout>
      <Calendar />
    </DefaultLayout>
  );
};

export default Transactions;

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableOne from "@/components/Tables/TableOne";
import TableThree from "@/components/Tables/TableThree";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Live Class",
  description:
    "This is Live Class page",
};

const TablesPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Tables" />

      <div className="flex flex-col gap-10">
        <TableOne />
        <TableThree />
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;

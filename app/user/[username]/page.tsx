import CardList from "@/components/CardList";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";

function SingleUserpage() {
  return (
    <div className="">
      <div className="mb-5">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">user</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Rayyan</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="mt-6 flex flex-col md:flex-row gap-8">
        {/* LEFT COLUMN */}
        <div className="w-full md:w-1/3 flex flex-col space-y-6">
          <div className="bg-primary-foreground p-4 rounded-lg">Badge</div>
          <div className="bg-primary-foreground p-4 rounded-lg">Info</div>
          <div className="bg-primary-foreground p-4 rounded-lg">
            {/* <CardList title="latestTransactions" /> */}
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="w-full md:w-2/3 flex flex-col space-y-6">
          <div className="bg-primary-foreground p-4 rounded-lg">usercard</div>
          <div className="bg-primary-foreground p-4 rounded-lg">chart</div>
        </div>
      </div>
    </div>
  );
}

export default SingleUserpage;

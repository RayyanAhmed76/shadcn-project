import CardList from "@/components/CardList";
import Edituser from "@/components/edituser";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";

import { BadgeCheck, BadgeIcon, Candy, Citrus, Shield } from "lucide-react";
import React from "react";

function SingleUserpage() {
  return (
    <div className="container mx-auto px-4">
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

      <div className="flex flex-col md:flex-row md:items-start mt-6 gap-8">
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-6 w-full md:w-1/3 ">
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="text-lg font-medium mb-4">User Badge</h1>
            <div className="flex gap-4 mt-4">
              <HoverCard>
                <HoverCardTrigger>
                  <BadgeCheck
                    size={36}
                    className="text-lg bg-blue-500/30 border-1 border-blue-500/50 rounded-full p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-medium mb-2 text-md">Verified user</h1>
                  <p className="text sm text-muted-foreground">
                    This is user is verified from admin.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Shield
                    size={36}
                    className="text-lg bg-green-500/30 border-1 border-green-500/50 rounded-full p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-medium mb-2 text-md">Admin</h1>
                  <p className="text sm text-muted-foreground">
                    Admin users have access to all features and can manage
                    users.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Candy
                    size={36}
                    className="text-lg bg-red-500/30 border-1 border-red-500/50 rounded-full p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-medium mb-2 text-md">Awareded</h1>
                  <p className="text sm text-muted-foreground">
                    This user has been awarded for their contributions.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Citrus
                    size={36}
                    className="text-lg bg-purple-500/30 border-1 border-purple-500/50 rounded-full p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-medium mb-2 text-md">Popular</h1>
                  <p className="text sm text-muted-foreground">
                    This user has been popular in the community.
                  </p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
          <div className="bg-primary-foreground p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <h1 className="text-lg font-medium mb-4">User information</h1>
              <Button type="submit">
                <Sheet>
                  <SheetTrigger className="cursor-pointer">
                    Edit button
                  </SheetTrigger>
                  <Edituser />
                </Sheet>
              </Button>
            </div>
            <div className="space-y-4 mt-4">
              <div className="flex flex-col gap-2 mb-8">
                <p className="text-muted-foreground text-md font-medium">
                  Profile completion
                </p>
                <Progress value={70} />
              </div>

              <div className="flex gap-2 items-center">
                <span className="font-medium">Username: </span>
                <span>Rayyan</span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="font-medium">Email: </span>
                <span>Rayyanahmedrak@gmail.com</span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="font-medium">Phone: </span>
                <span>+92 33445566</span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="font-medium">Location: </span>
                <span>Karachi,Pakistan</span>
              </div>
            </div>
          </div>
          <div className="bg-primary-foreground p-4 rounded-lg mb-5">
            <CardList title="latestTransactions" />
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-6 w-full md:w-2/3">
          <div className="bg-primary-foreground p-4 rounded-lg">User Card</div>
          <div className="bg-primary-foreground p-4 rounded-lg">Chart</div>
        </div>
      </div>
    </div>
  );
}

export default SingleUserpage;

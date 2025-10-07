"use client";
import React, { useState } from "react";
import { ScrollArea } from "./ui/scroll-area";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { Calendar1Icon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "./ui/calendar";

function Todolist() {
  const [date, setdate] = useState<Date | undefined>(new Date());
  const [open, setopen] = useState(false);
  return (
    <div>
      <h1 className="font-medium text-lg mb-6">Todo List</h1>
      <h1 className="font-md text-md mb-5">
        <Popover open={open} onOpenChange={setopen}>
          <PopoverTrigger asChild>
            <Button className="w-full">
              <Calendar1Icon />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-0 w-auto">
            <Calendar
              mode="single"
              selected={date}
              onSelect={(date) => {
                setdate(date);
                setopen(false);
              }}
            />
          </PopoverContent>
        </Popover>
      </h1>
      <ScrollArea className="max-h-[500px] overflow-y-auto mb-2">
        <div className="flex flex-col gap-4">
          <Card className="p-4 mb-3">
            <div className="flex-row items-center gap-4 ">
              <Checkbox id="item1" className="mr-3" />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nemo
                provident assumenda.
              </label>
            </div>
          </Card>
          <Card className="mb-3 p-4">
            <div className="flex-row items-center gap-4">
              <Checkbox id="item1" className="mr-3" />
              <label className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nemo
                provident assumenda.
              </label>
            </div>
          </Card>
          <Card className="mb-3 p-4">
            <div className="flex-row items-center gap-4">
              <Checkbox id="item1" className="mr-3" />
              <label className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nemo
                provident assumenda.
              </label>
            </div>
          </Card>
          <Card className="mb-3 p-4">
            <div className="flex-row items-center gap-4">
              <Checkbox id="item1" className="mr-3" />
              <label className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nemo
                provident assumenda.
              </label>
            </div>
          </Card>
          <Card className="mb-3 p-4">
            <div className="flex-row items-center gap-4">
              <Checkbox id="item1" className="mr-3" />
              <label className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nemo
                provident assumenda.
              </label>
            </div>
          </Card>
          <Card className="mb-3 p-4">
            <div className="flex-row items-center gap-4">
              <Checkbox id="item1" className="mr-3" />
              <label className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nemo
                provident assumenda.
              </label>
            </div>
          </Card>
          <Card className="mb-3 p-4">
            <div className="flex-row items-center gap-4">
              <Checkbox id="item1" className="mr-3" />
              <label className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nemo
                provident assumenda.
              </label>
            </div>
          </Card>
          <Card className="mb-3 p-4">
            <div className="flex-row items-center gap-4">
              <Checkbox id="item1" className="mr-3" />
              <label className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nemo
                provident assumenda.
              </label>
            </div>
          </Card>
          <Card className="mb-3 p-4">
            <div className="flex-row items-center gap-4">
              <Checkbox id="item1" className="mr-3" />
              <label className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nemo
                provident assumenda.
              </label>
            </div>
          </Card>
        </div>
      </ScrollArea>
    </div>
  );
}

export default Todolist;

import React from "react";
import { ScrollArea } from "./ui/scroll-area";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";

function Todolist() {
  return (
    <div>
      <h1 className="font-md text-md mb-5">Calender</h1>
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

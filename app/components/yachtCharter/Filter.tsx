import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function Filters() {
  return (
    <div className="border p-6 rounded-lg shadow-md w-full max-w-sm bg-[#F6F6F6] border-dotted border-primary ">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>

      {/* Destination */}
      <div className="mb-4 flex flex-col justify-between gap-2">
        <label className="austin text-lg font-medium">Destination*</label>
        <Select>
          <SelectTrigger className="w-full bg-white border-none outline-none py-3 focus:ring-2 focus:ring-primary">
            <SelectValue placeholder="Please choose" />
          </SelectTrigger>
          <SelectContent className="bg-[#F6F6F6] border-primary">
            <SelectItem value="greece">Greece</SelectItem>
            <SelectItem value="italy">Italy</SelectItem>
            <SelectItem value="spain">Spain</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Type of Yacht */}
      <div className="mb-4 flex flex-col justify-between gap-2">
        <label className="austin text-lg font-medium">Type of Yacht*</label>
        <Select>
          <SelectTrigger className="w-full bg-white border-none outline-none py-3 focus:ring-2 focus:ring-primary">
            <SelectValue placeholder="Please choose" />
          </SelectTrigger>
          <SelectContent className="bg-[#F6F6F6] border-primary">
            <SelectItem value="motor">Motor Yacht</SelectItem>
            <SelectItem value="sailing">Sailing Yacht</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Length (M) */}
      <div className="mb-4 flex flex-col gap-2 ">
        <label className="austin text-lg font-medium">Length (M)</label>
        <Slider
          defaultValue={[24, 99]}
          min={10}
          max={150}
          step={1}
          className="my-3 bg-white "
        />
        <div className="flex justify-between items-center gap-2 mb-2 ">
          <Input
            placeholder="24"
            className="w-full bg-white border-none outline-none py-3 focus:ring-2 focus:ring-primary"
          />
          <span className="text-sm">—</span>
          <Input
            placeholder="99"
            className="w-full bg-white border-none outline-none py-3 focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      {/* Number of Guests */}
      <div className="mb-4 flex flex-col justify-between gap-2">
        <label className="austin text-lg font-medium">Number of Guests*</label>
        <Select>
          <SelectTrigger className="w-full bg-white border-none outline-none py-3 focus:ring-2 focus:ring-primary">
            <SelectValue placeholder="Any" />
          </SelectTrigger>
          <SelectContent className="bg-[#F6F6F6] border-primary">
            <SelectItem value="2">2</SelectItem>
            <SelectItem value="4">4</SelectItem>
            <SelectItem value="6">6</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Charter Rate (€) */}
      <div className="mb-4 flex flex-col gap-2 ">
        <label className="block text-sm font-medium">Charter Rate (€)</label>
        <Slider
          defaultValue={[28000, 1400000]}
          min={10000}
          max={2000000}
          step={1000}
          className="my-2"
        />
        <div className="flex justify-between items-center gap-2">
          <Input
            placeholder="28,000"
            className="w-full bg-white border-none outline-none py-3 focus:ring-2 focus:ring-primary"
          />
          <span className="text-sm">—</span>
          <Input
            placeholder="1,400,000"
            className="w-full bg-white border-none outline-none py-3 focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      {/* Search Button */}
      <Button className="w-full mt-4 text-white py-6 flex items-center justify-center">
        <Search className="w-6 h-8 mr-2" /> Search
      </Button>
    </div>
  );
}

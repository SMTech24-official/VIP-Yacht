import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { HiMagnifyingGlass } from "react-icons/hi2";

export default function YachtSearch() {
  return (
    <div className="flex gap-4 p-4 rounded-lg text-white">
      {["Destination", "Type of Yacht", "Yacht Length", "Number of Guests"].map(
        (label, index) => (
          <Select key={index}>
            <SelectTrigger className="w-52 h-[80px] bg-[#566984] text-white py-4  rounded-lg">
              <SelectValue
                className="text-white placeholder:text-gray-100"
                placeholder={label}
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Option 1</SelectItem>
              <SelectItem value="option2">Option 2</SelectItem>
              <SelectItem value="option3">Option 3</SelectItem>
            </SelectContent>
          </Select>
        )
      )}
      <button className="bg-teal-500 text-white px-6 py-2 rounded-lg flex items-center gap-2">
        <HiMagnifyingGlass className="text-white" /> SEARCH
      </button>
    </div>
  );
}

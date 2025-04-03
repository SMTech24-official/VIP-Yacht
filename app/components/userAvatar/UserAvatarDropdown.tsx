// src/components/UserAvatarDropdown.tsx
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { logout } from "@/redux/feature/authSlice";

export function UserAvatarDropdown() {
  const { user, isAuthenticated } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          {/* Placeholder for user avatar */}
          <UserCircle className="text-3xl" />
          {/* Show username if available */}
          {isAuthenticated && <span className="sr-only">{user?.name}</span>}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {/* User Name */}
        <DropdownMenuItem className="cursor-default">
          <div className="flex items-center gap-2">
            <UserCircle className="h-4 w-4" />
            <span>{user?.name || "Guest"}</span>
          </div>
        </DropdownMenuItem>
        {/* Logout Button */}
        <DropdownMenuItem onClick={() => dispatch(logout())}>
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

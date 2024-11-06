
import { Moon3D } from "@/components/moon";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { getCurrentlyPlaying } from "@/services/spotify";

export default async function Page() {
    return (
        <div className="pt-[150px]">
            <Moon3D />
        </div>
    );
}
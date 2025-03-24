import { Brand } from "../ui/header/brand";
import { HeaderTop } from "../ui/header/headerTop";
import { List } from "../ui/header/list";
import User from "../ui/header/user";

export default function Header() {
  return (
    <div className="px-4">
      <HeaderTop />
      <div className="flex  max-w-[1400px] mx-auto justify-between items-center">
        <Brand />
        <List />
        <User />
      </div>
    </div>
  );
}

import NextImage from "@/components/NextImage";

export default function PlayerArmor({
  armor,
  hasHelmet,
}: {
  armor: number;
  hasHelmet: boolean;
}) {
  return (
    <div className="flex h-6 w-6 shrink-0 list-none items-center justify-center rounded-md bg-black/10 text-center dark:bg-white/5">
      {armor > 0 && (
        <NextImage
          src={`/assets/icons/${hasHelmet ? "armor-helmet" : "armor"}.svg`}
          width={20}
          height={20}
          className="h-5 w-5 brightness-[0.25] dark:brightness-100"
          alt={`${armor}`}
        />
      )}
    </div>
  );
}

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import Link, { LinkProps } from "next/link";

const linkCardVariants = cva("group block rounded-2xl border p-6", {
  variants: {
    variant: {
      default: "",
      destructive: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type Props = Omit<React.ComponentProps<"a">, keyof LinkProps> &
  LinkProps &
  VariantProps<typeof linkCardVariants>;

const LinkCard = ({ className, variant, children, ...props }: Props) => {
  return (
    <Link className={cn(linkCardVariants({ variant, className }))} {...props}>
      {children}
    </Link>
  );
};

export default LinkCard;

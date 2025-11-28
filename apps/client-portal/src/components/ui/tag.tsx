import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import styles from "./tag.module.css";

type TagTone = "default" | "info" | "success" | "warning" | "error";

interface TagProps {
  tone?: TagTone;
  className?: string;
}

export function Tag({ tone = "default", className, children }: PropsWithChildren<TagProps>) {
  return <span className={cn(styles.tag, styles[tone], className)}>{children}</span>;
}



import { ReactNode } from "react";
import {
  SheetBackdrop,
  SheetPanel,
  SheetHeader,
  SheetTitle,
  SheetClose,
  SheetBody,
} from "./MobileSheet.styles";

type MobileSheetProps = {
  title: string;
  onClose: () => void;
  children: ReactNode;
};

// Full-screen bottom sheet that slides up. Tap the backdrop or × to close.
export default function MobileSheet({ title, onClose, children }: MobileSheetProps) {
  return (
    <SheetBackdrop
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <SheetPanel
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 32 }}
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
      >
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetClose onClick={onClose} aria-label="Close">
            ×
          </SheetClose>
        </SheetHeader>
        <SheetBody>{children}</SheetBody>
      </SheetPanel>
    </SheetBackdrop>
  );
}

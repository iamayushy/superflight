import { X } from "lucide-react";
import { useEffect, type PropsWithChildren } from "react";

interface IModalProps extends PropsWithChildren {
  open: boolean;
  onClose: () => void;
  title?: string;
  className?: string;
}

function Modal({ onClose, open = true, title, className, children }: IModalProps) {
  useEffect(() => {
  const handleEsc = (e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
  };

  if (open) {
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
  }

  return () => {
    document.removeEventListener("keydown", handleEsc);
    document.body.style.overflow = "auto";
  };
}, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm flex items-center justify-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`w-96 bg-white rounded-lg shadow-lg z-50 ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {title && (
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <h3 className="text-lg font-medium">{title}</h3>
            <X
              className="cursor-pointer"
              size={20}
              onClick={onClose}
            />
          </div>
        )}
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Modal;

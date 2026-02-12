import * as React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variantStyles = {
      default:
        "bg-red-500 text-white hover:bg-red-600 focus-visible:ring-red-500",
      outline:
        "border border-gray-300 bg-transparent hover:bg-gray-100 focus-visible:ring-gray-500",
    };

    return (
      <button
        className={`${baseStyles} ${variantStyles[variant]} ${className || ""} py-2 px-4`}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };

import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon, EyeOpenIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

interface ModalProps {
  children: React.ReactNode;
  title: string;
  technologies: string[];
  demo?(): void;
  code?(): void;
  description: string;
}

export function Modal({
  children,
  title,
  technologies,
  description,
  demo,
  code,
}: ModalProps) {
  const hasDemoOrCode = demo || code;
  const hasDemo = demo;
  const hasCode = code;

  return (
    <Dialog.Root>
      <Dialog.Trigger>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-80 data-[state=open]:animate-overlay-show" />
        <Dialog.Content className="fixed inset-0 flex justify-center flex-row items-center data-[state=open]:animate-content-show">
          <div className="font-merriWeather w-full max-w-xl  flex rounded-md bg-WhiteBackground p-[24px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none gap-12 ">
            <div className="w-full space-y-4">
              <div className="flex justify-between">
                <Dialog.DialogTitle asChild>
                  <h1 className="font-extrabold text-xl">{title}</h1>
                </Dialog.DialogTitle>
                <Dialog.DialogClose>
                  <Cross2Icon className="h-6 w-6" />
                </Dialog.DialogClose>
              </div>
              <div className="text-gray-950">{description}</div>
              <h2 className="font-semibold text-lg">Built with</h2>
              <div className="flex flex-wrap gap-2">
                {technologies?.map((language) => (
                  <span
                    key={language}
                    className="px-3 py-1 border border-black rounded-md"
                  >
                    {language}
                  </span>
                ))}
              </div>

              {hasDemoOrCode && (
                <div className="flex gap-4">
                  {hasCode && (
                    <div
                      className="p-3 flex gap-2 bg-black justify-between items-center text-white rounded-md hover:bg-WhiteBackground hover:text-black cursor-pointer"
                      onClick={code}
                    >
                      <GitHubLogoIcon />
                      <p>Code</p>
                    </div>
                  )}

                  {hasDemo && (
                    <div
                      className="p-3 flex gap-2 bg-black justify-between items-center text-white rounded-md hover:bg-WhiteBackground hover:text-black cursor-pointer"
                      onClick={demo}
                    >
                      <EyeOpenIcon />
                      <p>Demo</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

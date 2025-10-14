import { IconButton } from "./ui";
import { cn } from "./ui/utils.ts";
import { Lucide, Simple } from "./icons";

// TODO : update stacks
const stacks = [
  {
    name: "HTML",
    category: "HTML5",
    icon: Simple.IconHTML,
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },{
    name: "CSS",
    category: "CSS3",
    icon: Simple.IconCSS,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },{
    name: "Javascript",
    category: "Frontend",
    icon: Simple.IconJavascript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "Typescript",
    category: "Frontend",
    icon: Simple.IconTypescript,
    url: "https://www.typescriptlang.org",
  },
  {
    name: "Angular",
    category: "Framework",
    icon: Simple.IconAngular,
    url: "https://angular.dev",
  },
  {
    name: "Go",
    category: "Backend",
    icon: Simple.IconGolang,
    url: "https://go.dev",
  },
  {
    name: "Tauri",
    category: "Framework",
    icon: Simple.IconTauri,
    url: "https://arc.net",
  },
  {
    name: "Trello",
    category: "Planning",
    icon: Simple.IconTrello,
    url: "https://trello.com",
  },
];

export default () => {
  return (
    <div>
      <h2 className="font-medium text-xl mb-3">Stacks</h2>
      <ul className="grid grid-cols-2 gap-3 p-1">
        {stacks.map((stack) => {
          return (
            <li
              key={stack.name}
              className={cn(
                "group",
                "flex items-center justify-between px-4 py-3",
                "bg-neutral-2 hover:bg-neutral-3",
                "outline-none border border-neutral-4 hover:border-neutral-6 rounded-3xl",
                "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-7 focus-visible:ring-offset-neutral-1"
              )}
            >
              <div className="flex flex-row items-stretch gap-5 pl-2">
                <div className="flex items-center justify-center">
                  <stack.icon
                    size={24}
                    className="transition duration-300 group-hover:-translate-y-1 text-neutral-10 group-hover:text-neutral-11"
                  />
                </div>

                <div>
                  <h3 className="transition duration-300 group-hover:translate-x-1 text-neutral-12 text-sm">{stack.name}</h3>
                  <div className="transition duration-300 group-hover:translate-x-px text-neutral-10 group-hover:text-neutral-11 text-xs">
                    {stack.category}
                  </div>
                </div>
              </div>

              <IconButton as="a" role="button" href={stack.url} className="group/icon" target="_blank" aria-label="Open">
                <Lucide.IconExternalLink
                  aria-label="Open"
                  className="transition text-neutral-10 group-hover:text-primary-11 group-focus-visible/icon:text-primary-11"
                />
              </IconButton>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

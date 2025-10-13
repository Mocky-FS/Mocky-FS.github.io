// TODO : update about

import { Avatar, Button } from "./ui";
import { Lucide, Simple } from "./icons";

export default () => {
  return (
    <div className="flex flex-col items-start gap-6 lg:gap-8 px-3 lg:px-6 py-4">
      <div className="flex flex-row items-center gap-4">
        <Avatar src="/favicon.svg" alt="profile-picture">
          <Lucide.IconUser className="size-2/3" />
        </Avatar>

        <div className="flex flex-col items-start gap-2">
          <h1 className="font-medium text-lg lg:text-xl">Arnaud</h1>
          <h2 className="font-medium text-2xl lg:text-3xl">Web Developer</h2>
        </div>
      </div>

      <div>
      Passionate web developer working with Angular, TypeScript, Go, and PostgreSQL to build 
      modern full-stack applications. Always learning and eager to turn my technical skills 
      into real-world projects and tackle new challenges.
      </div>

      <div className="flex self-stretch justify-end">
        <Button as="a" href="https://github.com/Mocky-FS" target="_blank" aria-label="GitHub">
          <Simple.IconGitHub />
          GitHub
        </Button>
      </div>
    </div>
  );
};
